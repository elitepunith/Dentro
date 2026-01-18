/* DENTRO LOGIC - FINAL */

const STORAGE_KEY = 'dentro_v4_save';
let AUDIO = null;

// --- STATE ---
let state = {
    config: { lang: 'javascript', diff: 'easy', plant: 'sakura', stages: [] },
    stats: { streak: 0, health: 100, qIndex: 0, score: 0 },
    quiz: [], 
    gameOver: false,
    sound: true,
    darkMode: false
};

// --- AUDIO ---
function initAudio() {
    if (!AUDIO) AUDIO = new (window.AudioContext || window.webkitAudioContext)();
    if (AUDIO.state === 'suspended') AUDIO.resume();
}

function sfx(type) {
    if (!state.sound || !AUDIO) return;
    const t = AUDIO.currentTime;
    const osc = AUDIO.createOscillator();
    const gain = AUDIO.createGain();
    osc.connect(gain); gain.connect(AUDIO.destination);

    if (type === 'pop') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, t);
        osc.frequency.exponentialRampToValueAtTime(100, t + 0.15);
        gain.gain.setValueAtTime(0.1, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.1);
        osc.start(t); osc.stop(t + 0.15);
    } 
    else if (type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1200, t);
        gain.gain.setValueAtTime(0.05, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);
        osc.start(t); osc.stop(t + 0.03);
    }
    else if (type === 'err') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, t);
        osc.frequency.linearRampToValueAtTime(50, t + 0.2);
        gain.gain.setValueAtTime(0.2, t);
        gain.gain.linearRampToValueAtTime(0.01, t + 0.2);
        osc.start(t); osc.stop(t + 0.2);
    }
    else if (type === 'win') {
        const note = (f, d) => {
            const o = AUDIO.createOscillator(); const g = AUDIO.createGain();
            o.connect(g); g.connect(AUDIO.destination);
            o.frequency.value = f;
            g.gain.setValueAtTime(0.1, t + d);
            g.gain.exponentialRampToValueAtTime(0.001, t + d + 0.4);
            o.start(t + d); o.stop(t + d + 0.4);
        };
        note(523.25, 0); note(659.25, 0.1); note(783.99, 0.2); note(1046.50, 0.4);
    }
}

// --- UTILS ---
const $ = (id) => document.getElementById(id);
const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    loadSave();
    bindEvents();
    applyTheme(); 
});

function bindEvents() {
    document.body.addEventListener('click', initAudio, { once: true });
    
    // Theme
    document.querySelectorAll('.theme-toggle').forEach(btn => btn.onclick = toggleTheme);

    // Inputs
    $('lang-select').onchange = (e) => state.config.lang = e.target.value;
    
    document.querySelectorAll('.seg-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.config.diff = btn.dataset.val;
            sfx('click');
        };
    });

    document.querySelectorAll('.tile-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.tile-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.config.plant = btn.dataset.type;
            state.config.stages = JSON.parse(btn.dataset.stages);
            sfx('click');
        };
    });

    // Buttons
    $('start-btn').onclick = () => initGame(false);
    $('resume-btn').onclick = () => initGame(true);
    $('next-btn').onclick = nextLevel;
    $('hint-btn').onclick = showHint;
    $('quit-btn').onclick = saveAndExit;
    $('sound-btn').onclick = toggleMute;
    $('restart-btn').onclick = () => { localStorage.removeItem(STORAGE_KEY); location.reload(); };
    $('clear-btn').onclick = () => { localStorage.removeItem(STORAGE_KEY); location.reload(); };
}

// --- THEME ---
function toggleTheme() {
    state.darkMode = !state.darkMode;
    applyTheme();
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved) {
        const parsed = JSON.parse(saved);
        parsed.darkMode = state.darkMode;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    }
}

function applyTheme() {
    if(state.darkMode) {
        document.body.classList.add('dark-mode');
        document.querySelectorAll('.theme-toggle').forEach(b => b.innerText = '☀️');
    } else {
        document.body.classList.remove('dark-mode');
        document.querySelectorAll('.theme-toggle').forEach(b => b.innerText = '🌙');
    }
}

// --- GAME LOGIC ---
function initGame(isResume) {
    initAudio(); 
    sfx('click');

    if(isResume) {
        state = JSON.parse(localStorage.getItem(STORAGE_KEY));
        applyTheme();
    } else {
        const raw = getQuestions(state.config.lang, state.config.diff);
        state.quiz = shuffle([...raw]); 
        const activePlant = document.querySelector('.tile-btn.active');
        state.config.stages = JSON.parse(activePlant.dataset.stages);
        const currentTheme = state.darkMode;
        state.stats = { streak: 0, health: 100, qIndex: 0, score: 0 };
        state.darkMode = currentTheme;
    }

    $('badge-lang').innerText = state.config.lang.toUpperCase();
    $('badge-diff').innerText = state.config.diff.toUpperCase();
    
    renderUI();
    $('welcome-screen').classList.remove('active');
    $('game-screen').classList.add('active');
    renderQuestion();
}

function renderQuestion() {
    const q = state.quiz[state.stats.qIndex];
    const total = state.quiz.length;

    $('q-num').innerText = `Q${state.stats.qIndex + 1}`;
    $('q-total').innerText = `/ ${total}`;
    $('q-text').innerHTML = q.q;

    $('options-list').innerHTML = '';
    $('feedback-box').classList.add('hidden');
    $('next-btn').classList.add('hidden');
    $('hint-btn').classList.remove('hidden');

    let optionsMap = q.opts.map(opt => ({ txt: opt, isCorrect: opt === q.a }));
    optionsMap = shuffle(optionsMap);

    optionsMap.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerHTML = opt.txt;
        btn.onclick = () => checkAnswer(btn, opt.isCorrect, q);
        $('options-list').appendChild(btn);
    });
}

function checkAnswer(btn, isCorrect, q) {
    if(state.gameOver) return;
    document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);

    if(isCorrect) {
        sfx('pop');
        btn.classList.add('correct');
        state.stats.streak++;
        state.stats.score++;
        $('fb-icon').innerText = "✅";
        $('fb-title').innerText = "Correct!";
        $('fb-title').style.color = "var(--primary-dark)";
        $('plant-actor').classList.add('bounce');
        setTimeout(() => $('plant-actor').classList.remove('bounce'), 400);
    } else {
        sfx('err');
        btn.classList.add('wrong');
        Array.from(document.querySelectorAll('.opt-btn')).find(b => b.innerText.includes(q.a)).classList.add('correct');
        state.stats.streak = 0;
        state.stats.health -= 20;
        $('fb-icon').innerText = "⚠️";
        $('fb-title').innerText = "Incorrect";
        $('fb-title').style.color = "var(--danger)";
        $('plant-actor').classList.add('wilt');
    }

    $('fb-desc').innerHTML = q.e; 
    $('feedback-box').classList.remove('hidden');
    renderUI();
    saveGame();

    if(state.stats.health <= 0) setTimeout(() => endGame(false), 1500);
    else $('next-btn').classList.remove('hidden');
}

function nextLevel() {
    state.stats.qIndex++;
    if(state.stats.qIndex >= state.quiz.length) endGame(true);
    else {
        $('plant-actor').classList.remove('wilt'); 
        sfx('click');
        renderQuestion();
        renderUI();
    }
}

function renderUI() {
    $('disp-streak').innerText = state.stats.streak;
    $('disp-health').innerText = state.stats.health + '%';
    const progress = (state.stats.qIndex / state.quiz.length) * 100;
    $('progress-bar').style.width = `${progress}%`;
    const stages = state.config.stages;
    const stageIndex = Math.floor((progress/100) * (stages.length-1));
    
    if(state.stats.health > 0) {
        $('plant-actor').innerText = stages[stageIndex] || stages[stages.length-1];
        $('plant-actor').style.filter = "none";
    } else {
        $('plant-actor').innerText = "🥀";
        $('plant-actor').style.filter = "grayscale(1)";
    }
}

function showHint() {
    const q = state.quiz[state.stats.qIndex];
    alert(`Hint: ${q.h}`);
    state.stats.streak = 0;
    renderUI();
}

function endGame(win) {
    state.gameOver = true;
    sfx(win ? 'win' : 'err');
    localStorage.removeItem(STORAGE_KEY);
    $('game-screen').classList.remove('active');
    $('result-screen').classList.add('active');
    $('result-title').innerText = win ? "Level Complete!" : "Game Over";
    $('result-icon').innerText = win ? "🏆" : "🥀";
    $('result-sub').innerText = win ? "You are a master gardener." : "Try again to save your plant.";
    $('end-score').innerText = `${state.stats.score} / ${state.quiz.length}`;
    $('end-streak').innerText = state.stats.streak;
}

function loadSave() {
    const data = localStorage.getItem(STORAGE_KEY);
    if(data) {
        // Show Resume Button
        $('resume-btn').classList.remove('hidden');
        
        const parsed = JSON.parse(data);
        state.darkMode = parsed.darkMode; 
    }
}

function saveGame() {
    if(!state.gameOver) localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function saveAndExit() { saveGame(); location.reload(); }
function toggleMute() {
    state.sound = !state.sound;
    $('sound-btn').style.opacity = state.sound ? 1 : 0.5;
}