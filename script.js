/* 
   DENTRO - Main Logic Script
   Written by a human for humans.
*/

// --- State Management ---
// Keeping all game variables in one place makes it easier to debug.
const gameState = {
    settings: {
        language: 'javascript',
        difficulty: 'easy',
        plantType: 'sakura',
        plantStages: [] 
    },
    stats: {
        streak: 0,
        maxStreak: 0,
        health: 100,
        currentQuestionIndex: 0,
        score: 0
    },
    quizData: [], // Will hold the list of questions for the current round
    isGameOver: false
};

// --- DOM Elements Cache ---
const screens = {
    welcome: document.getElementById('welcome-screen'),
    game: document.getElementById('game-screen'),
    result: document.getElementById('result-screen')
};

// Plant Display Elements
const plantEmoji = document.getElementById('main-plant');
const growthFill = document.getElementById('growth-fill');
const motivationalText = document.getElementById('motivational-text');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

function setupEventListeners() {
    // 1. Language Selection
    document.getElementById('language-select').addEventListener('change', (e) => {
        gameState.settings.language = e.target.value;
    });

    // 2. Difficulty Toggles
    const diffBtns = document.querySelectorAll('#difficulty-toggles button');
    diffBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // UI Update
            diffBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // State Update
            gameState.settings.difficulty = btn.dataset.value;
        });
    });

    // 3. Plant Selection
    const plantBtns = document.querySelectorAll('.plant-btn');
    plantBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            plantBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            gameState.settings.plantType = btn.dataset.type;
            gameState.settings.plantStages = JSON.parse(btn.dataset.stages);
        });
    });

    // 4. Game Controls
    document.getElementById('start-btn').addEventListener('click', startGame);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('hint-btn').addEventListener('click', showHint);
    document.getElementById('quit-btn').addEventListener('click', () => location.reload()); // Simple reset
    document.getElementById('restart-btn').addEventListener('click', () => location.reload());
}

// --- Game Logic ---

function startGame() {
    // 1. Fetch questions based on settings
    const rawQuestions = getQuestions(gameState.settings.language, gameState.settings.difficulty);
    // Duplicate questions if we don't have enough to make a full game feel fun
    gameState.quizData = [...rawQuestions, ...rawQuestions].slice(0, 10); // Cap at 10 Qs

    // 2. Reset Stats
    gameState.stats.streak = 0;
    gameState.stats.health = 100;
    gameState.stats.currentQuestionIndex = 0;
    gameState.stats.score = 0;
    gameState.isGameOver = false;

    // 3. Update UI Headers
    document.getElementById('lang-badge').textContent = gameState.settings.language.toUpperCase();
    document.getElementById('diff-badge').textContent = gameState.settings.difficulty.toUpperCase();
    
    // 4. Initial Plant Render (Seed stage)
    updatePlantVisuals();

    // 5. Switch Screens
    screens.welcome.classList.remove('active');
    screens.game.classList.add('active');

    // 6. Load First Question
    renderQuestion();
}

function renderQuestion() {
    const currentQ = gameState.quizData[gameState.stats.currentQuestionIndex];
    const totalQ = gameState.quizData.length;

    // Update Text
    document.getElementById('q-number').textContent = `Question ${gameState.stats.currentQuestionIndex + 1}`;
    document.getElementById('q-remaining').textContent = `${totalQ - gameState.stats.currentQuestionIndex} left`;
    document.getElementById('question-text').textContent = currentQ.q;

    // Clear previous options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // Reset buttons area
    document.getElementById('feedback-area').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('hint-btn').classList.remove('hidden');

    // Create Option Buttons
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

    const currentQ = gameState.quizData[gameState.stats.currentQuestionIndex];
    const isCorrect = selectedIndex === currentQ.correct;
    const allBtns = document.querySelectorAll('.option-btn');

    // Disable all buttons so user can't click twice
    allBtns.forEach(b => b.disabled = true);

    if (isCorrect) {
        // --- CORRECT LOGIC ---
        btnElement.classList.add('correct');
        gameState.stats.streak++;
        if(gameState.stats.streak > gameState.stats.maxStreak) gameState.stats.maxStreak = gameState.stats.streak;
        gameState.stats.score++;
        
        showFeedback(true, "Great job! " + currentQ.explanation);
        motivationalText.textContent = "Your plant is loving this! ☀️";
    } else {
        // --- WRONG LOGIC ---
        btnElement.classList.add('wrong');
        // Highlight the correct one so they learn
        allBtns[currentQ.correct].classList.add('correct');

        gameState.stats.streak = 0;
        gameState.stats.health -= 20; // Lose 20% health per wrong answer
        
        showFeedback(false, "Oops! " + currentQ.explanation);
        motivationalText.textContent = "Oh no! Your plant is wilting... 🌧️";
        
        // Visual shake effect
        plantEmoji.classList.add('shake');
        setTimeout(() => plantEmoji.classList.remove('shake'), 500);
    }

    updateStatsUI();
    updatePlantVisuals();
    
    // Check for Game Over (Health 0)
    if (gameState.stats.health <= 0) {
        setTimeout(() => endGame(false), 1500);
        return;
    }

    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('hint-btn').classList.add('hidden');
}

function showFeedback(isSuccess, text) {
    const fb = document.getElementById('feedback-area');
    const msg = document.getElementById('feedback-msg');
    const detail = document.getElementById('feedback-detail');

    fb.classList.remove('hidden');
    msg.textContent = isSuccess ? "✅ Correct!" : "❌ Incorrect";
    msg.style.color = isSuccess ? "var(--primary)" : "var(--danger)";
    detail.textContent = text;
}

function nextQuestion() {
    gameState.stats.currentQuestionIndex++;
    
    // Check if we ran out of questions
    if (gameState.stats.currentQuestionIndex >= gameState.quizData.length) {
        endGame(true);
    } else {
        renderQuestion();
    }
}

function showHint() {
    const currentQ = gameState.quizData[gameState.stats.currentQuestionIndex];
    alert("💡 Hint: " + currentQ.hint);
    // Being a strict game, using a hint breaks your streak!
    gameState.stats.streak = 0;
    updateStatsUI();
}

function updateStatsUI() {
    document.getElementById('score-streak').textContent = gameState.stats.streak;
    document.getElementById('score-health').textContent = gameState.stats.health + '%';
    
    // Color code health
    const healthEl = document.getElementById('score-health');
    if(gameState.stats.health > 50) healthEl.style.color = "var(--primary)";
    else if(gameState.stats.health > 20) healthEl.style.color = "var(--accent)";
    else healthEl.style.color = "var(--danger)";
}

function updatePlantVisuals() {
    const totalQs = gameState.quizData.length;
    const current = gameState.stats.currentQuestionIndex;
    const stages = gameState.settings.plantStages;
    
    // Calculate progress (0% to 100%)
    // We add 1 to current only if they got it right, but for simple visualization,
    // let's base growth on how far they are in the quiz.
    const percent = Math.min(100, ((current) / totalQs) * 100);
    
    growthFill.style.width = `${percent}%`;

    // Calculate Stage Index based on percentage
    // e.g., if 6 stages, and we are at 50%, we should be at stage 3
    const stageIndex = Math.floor((percent / 100) * (stages.length - 1));
    
    // Update Emoji
    if (gameState.stats.health > 0) {
        plantEmoji.textContent = stages[stageIndex];
        plantEmoji.style.filter = "grayscale(0)";
    } else {
        plantEmoji.textContent = "🥀"; // Dead flower
        plantEmoji.style.filter = "grayscale(1)";
    }
}

function endGame(isWin) {
    gameState.isGameOver = true;
    screens.game.classList.remove('active');
    screens.result.classList.add('active');

    const title = document.getElementById('result-title');
    const msg = document.getElementById('result-msg');
    const plant = document.getElementById('result-plant');

    document.getElementById('final-correct').textContent = gameState.stats.score + "/" + gameState.quizData.length;
    document.getElementById('final-streak').textContent = gameState.stats.maxStreak;

    if (isWin) {
        title.textContent = "You Bloomed! 🎉";
        msg.textContent = "You successfully grew your plant through the power of code!";
        // Show the final stage of the selected plant
        const stages = gameState.settings.plantStages;
        plant.textContent = stages[stages.length - 1]; 
    } else {
        title.textContent = "Plant Wilted 💀";
        msg.textContent = "You ran out of health. Review your notes and try again!";
        plant.textContent = "🥀";
    }
}