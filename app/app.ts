import { Game } from "./game";
import { Player } from "./player";
import * as Helpers from "./utility";

let newGame: Game;

document.getElementById('startGame')!.addEventListener('click', () => {
    const player: Player = new Player();
    player.name = Helpers.getValue('playername');

    const problemCount: number = Number(Helpers.getValue('problemCount'));
    const factor: number = Number(Helpers.getValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
})