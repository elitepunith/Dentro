/* 
   DENTRO 2.0 - Production Core
   Features: LocalStorage, Audio Engine, Game Loop
*/

// --- CONFIGURATION ---
const STORAGE_KEY = 'dentro_save_v2';

// --- STATE MANAGEMENT ---
let gameState = {
    settings: { language: 'javascript', difficulty: 'easy', plantType: 'sakura', plantStages: [] },
    stats: { streak: 0, maxStreak: 0, health: 100, currentQIndex: 0, score: 0 },
    quizData: [], 
    isGameOver: false,
    soundEnabled: true
};

// --- AUDIO ENGINE (No external files needed) ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (!gameState.soundEnabled) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'correct') {
        // Happy high-pitched 'ding'
        osc.type = 'sine';
        osc.frequency.setValueAtTime(500, now);
        osc.frequency.exponentialRampToValueAtTime(1000, now + 0.1);
        gainNode.gain.setValueAtTime(0.1, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
    } 
    else if (type === 'wrong') {
        // Low dissonant 'buzz'
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(100, now + 0.3);
        gainNode.gain.setValueAtTime(0.1, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    }
    else if (type === 'click') {
        // Soft UI click
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, now);
        gainNode.gain.setValueAtTime(0.05, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
    }
    else if (type === 'win') {
        // Victory Arpeggio
        playNote(523.25, now);       // C
        playNote(659.25, now + 0.1); // E
        playNote(783.99, now + 0.2); // G
        playNote(1046.50, now + 0.3); // High C
    }
}

function playNote(freq, time) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.1, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.3);
    osc.start(time);
    osc.stop(time + 0.3);
}

// --- DOM CACHE ---
const screens = { welcome: document.getElementById('welcome-screen'), game: document.getElementById('game-screen'), result: document.getElementById('result-screen') };
const plantEmoji = document.getElementById('main-plant');
const growthFill = document.getElementById('growth-fill');
const motivationalText = document.getElementById('motivational-text');

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    checkSaveFile();
    setupEvents();
});

function setupEvents() {
    // UI Interactions
    document.querySelectorAll('button').forEach(b => {
        b.addEventListener('mousedown', () => playSound('click'));
    });

    // Settings
    document.getElementById('language-select').addEventListener('change', (e) => gameState.settings.language = e.target.value);
    
    const diffBtns = document.querySelectorAll('#difficulty-toggles button');
    diffBtns.forEach(btn => btn.addEventListener('click', () => {
        diffBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        gameState.settings.difficulty = btn.dataset.value;
    }));

    const plantBtns = document.querySelectorAll('.plant-btn');
    plantBtns.forEach(btn => btn.addEventListener('click', () => {
        plantBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        gameState.settings.plantType = btn.dataset.type;
        gameState.settings.plantStages = JSON.parse(btn.dataset.stages);
    }));

    // Actions
    document.getElementById('start-btn').addEventListener('click', () => startGame(false));
    document.getElementById('continue-btn').addEventListener('click', () => startGame(true));
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('hint-btn').addEventListener('click', showHint);
    document.getElementById('quit-btn').addEventListener('click', saveAndQuit);
    document.getElementById('sound-btn').addEventListener('click', toggleSound);
    document.getElementById('restart-btn').addEventListener('click', () => { localStorage.removeItem(STORAGE_KEY); location.reload(); });
    document.getElementById('clear-save-btn').addEventListener('click', () => { localStorage.removeItem(STORAGE_KEY); location.reload(); });
}

// --- SAVE SYSTEM ---
function checkSaveFile() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        document.getElementById('continue-area').classList.remove('hidden');
        const parsed = JSON.parse(saved);
        // Update the "Continue" button text with details
        document.getElementById('save-info').textContent = 
            `Streak: ${parsed.stats.streak} • ${parsed.settings.language.toUpperCase()}`;
    }
}

function saveGame() {
    if(!gameState.isGameOver) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
    }
}

function saveAndQuit() {
    saveGame();
    alert("Game Saved! See you soon.");
    location.reload();
}

// --- GAME LOGIC ---

function startGame(isLoad) {
    if (isLoad) {
        // Load Data
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
        gameState = saved;
    } else {
        // New Game: Fetch Data
        const rawQ = getQuestions(gameState.settings.language, gameState.settings.difficulty);
        // Create a large pool of questions (approx 50 by duplication for demo purposes, or fetch API)
        let pool = [];
        for(let i=0; i<5; i++) pool = pool.concat(rawQ); // Multiply logic to simulate size
        gameState.quizData = pool.sort(() => Math.random() - 0.5); // Shuffle
        
        // Reset Stats
        gameState.stats.streak = 0;
        gameState.stats.health = 100;
        gameState.stats.currentQIndex = 0;
        gameState.stats.score = 0;
        gameState.isGameOver = false;
    }

    // Update UI Headers
    document.getElementById('lang-badge').textContent = gameState.settings.language.toUpperCase();
    document.getElementById('diff-badge').textContent = gameState.settings.difficulty.toUpperCase();

    updatePlantVisuals();
    updateStatsUI();

    screens.welcome.classList.remove('active');
    screens.game.classList.add('active');

    renderQuestion();
}

function renderQuestion() {
    const currentQ = gameState.quizData[gameState.stats.currentQIndex];
    const totalQ = gameState.quizData.length;

    document.getElementById('q-number').textContent = `Question ${gameState.stats.currentQIndex + 1}`;
    document.getElementById('q-remaining').textContent = `Total: ${totalQ}`;
    document.getElementById('question-text').textContent = currentQ.q;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    document.getElementById('feedback-area').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('hint-btn').classList.remove('hidden');

    currentQ.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, btnElement) {
    if (gameState.isGameOver) return;
    const currentQ = gameState.quizData[gameState.stats.currentQIndex];
    const isCorrect = selectedIndex === currentQ.correct;
    
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);

    if (isCorrect) {
        playSound('correct');
        btnElement.classList.add('correct');
        gameState.stats.streak++;
        gameState.stats.score++;
        if(gameState.stats.streak > gameState.stats.maxStreak) gameState.stats.maxStreak = gameState.stats.streak;
        
        showFeedback(true, currentQ.explanation);
        motivationalText.textContent = "Photosynthesis! ☀️";
        plantEmoji.classList.add('pop');
        setTimeout(() => plantEmoji.classList.remove('pop'), 300);
    } else {
        playSound('wrong');
        btnElement.classList.add('wrong');
        const allBtns = document.querySelectorAll('.option-btn');
        allBtns[currentQ.correct].classList.add('correct'); // Show right answer

        gameState.stats.streak = 0;
        gameState.stats.health -= 20;
        
        showFeedback(false, currentQ.explanation);
        motivationalText.textContent = "It's getting dark... 🌧️";
        plantEmoji.classList.add('wilt');
    }

    updateStatsUI();
    updatePlantVisuals();
    saveGame(); // Auto-save after every answer

    if (gameState.stats.health <= 0) {
        setTimeout(() => endGame(false), 1500);
    } else {
        document.getElementById('next-btn').classList.remove('hidden');
        document.getElementById('hint-btn').classList.add('hidden');
    }
}

function showFeedback(isSuccess, text) {
    const fb = document.getElementById('feedback-area');
    const msg = document.getElementById('feedback-msg');
    const detail = document.getElementById('feedback-detail');

    fb.classList.remove('hidden');
    msg.textContent = isSuccess ? "✅ Correct!" : "❌ Incorrect";
    msg.style.color = isSuccess ? "var(--primary-dark)" : "var(--danger)";
    detail.textContent = text;
}

function nextQuestion() {
    gameState.stats.currentQIndex++;
    if (gameState.stats.currentQIndex >= gameState.quizData.length) {
        endGame(true);
    } else {
        plantEmoji.classList.remove('wilt'); // Reset visuals
        renderQuestion();
        saveGame();
    }
}

function showHint() {
    const currentQ = gameState.quizData[gameState.stats.currentQIndex];
    alert(`💡 Hint: ${currentQ.hint}`);
    gameState.stats.streak = 0; // Penalty
    updateStatsUI();
}

function updateStatsUI() {
    document.getElementById('score-streak').textContent = gameState.stats.streak;
    document.getElementById('score-health').textContent = gameState.stats.health + '%';
    const healthEl = document.getElementById('score-health');
    healthEl.style.color = gameState.stats.health > 50 ? 'var(--text-dark)' : 'var(--danger)';
}

function updatePlantVisuals() {
    const totalQs = 50; // Or dynamic length
    const current = gameState.stats.currentQIndex;
    const stages = gameState.settings.plantStages;
    
    // Calculate stage based on percentage completed
    const percent = Math.min(100, (current / totalQs) * 100);
    growthFill.style.width = `${percent}%`;

    const stageIndex = Math.floor((percent / 100) * (stages.length - 1));
    
    if (gameState.stats.health > 0) {
        plantEmoji.textContent = stages[stageIndex] || stages[stages.length-1];
        plantEmoji.style.filter = "grayscale(0)";
    } else {
        plantEmoji.textContent = "🥀";
        plantEmoji.style.filter = "grayscale(1)";
    }
}

function endGame(isWin) {
    gameState.isGameOver = true;
    if(isWin) playSound('win');
    else playSound('wrong');

    localStorage.removeItem(STORAGE_KEY); // Clear save on finish
    
    screens.game.classList.remove('active');
    screens.result.classList.add('active');

    document.getElementById('result-title').textContent = isWin ? "Garden Bloomed! 🎉" : "Wilted Away 🥀";
    document.getElementById('final-correct').textContent = gameState.stats.score;
    document.getElementById('final-streak').textContent = gameState.stats.maxStreak;
    document.getElementById('result-plant').textContent = isWin ? gameState.settings.plantStages[5] : "🥀";
}

function toggleSound() {
    gameState.soundEnabled = !gameState.soundEnabled;
    document.getElementById('sound-btn').style.opacity = gameState.soundEnabled ? "1" : "0.5";
}