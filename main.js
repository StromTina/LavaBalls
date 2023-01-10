import { game, restartGame } from './game.js'
import { handleKeyDown, handleKeyUp } from './event.js';

export const restartButton = document.querySelector('#restart-button');

restartButton.addEventListener('click', restartGame);

window.addEventListener('keypress', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);



game.start();