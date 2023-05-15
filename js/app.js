function startGame() {
    let playerName = getInputValue('playername');
    logPlayer(playerName);
    postScores(80, playerName);
    postScores(-5, playerName);
}
function logPlayer(name = 'MultiMath Player') {
    console.log(`New game starting for player: ${name}`);
}
function getInputValue(elementId) {
    const inputElement = document.getElementById(elementId);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScores(score, playerName = 'MultiMath Player') {
    let logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    const scoreElement = document.querySelector('#postedScores');
    scoreElement.innerHTML = `${score} - ${playerName}`;
    logger(`Score: ${score}`);
}
document.getElementById('startGame').addEventListener('click', startGame);
const logMessage = (message) => console.log(message);
function logError(err) {
    console.log(err);
}
//# sourceMappingURL=app.js.map