function startGame() {
    // starting game
    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScores(80, playerName);
    postScores(-5, playerName);
}

function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementId: string): string | undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}

function postScores(score: number, playerName: string = 'MultiMath Player'): void {

    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }

    const scoreElement: HTMLElement = <HTMLElement>document.querySelector('#postedScores');
    scoreElement.innerHTML = `${score} - ${playerName}`;

    logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
    console.log(err);
}