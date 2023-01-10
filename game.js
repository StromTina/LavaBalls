import { Ball, FireBall } from './ball.js';
import { Position } from './entity.js';
import { restartButton } from './main.js';
import { Player } from './player.js';

class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.entities = [
            new Player(new Position(canvas.width / 2, canvas.height / 1.1)),
        ];
        this.player = this.entities[0];
        this.deltaTime = 0;
    }

    start() {
        tick();
    }

    showTime() {
        this.context.fillStyle = 'rgb(93, 105, 168)';
        this.context.font = '48px serif';
        this.context.textAlign = 'center';
        this.context.fillText(seconds, this.canvas.width / 1.07, this.canvas.height / 1.07);
    }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

export const gameText = document.querySelector('h1');
export const gameOver = document.querySelector('h2');
export const textMessage = document.querySelector('h3');

export const game = new Game(canvas, context);

export let seconds = 0;


let tickCount = 0;
let lastTime = Date.now();

function tick() {
    let currentTime = Date.now();
    game.deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    tickCount++;
    
    let lavaBall = new Ball(new Position(Math.random() * (canvas.width - 30) + 15, 0));
    let fireBall = new FireBall(new Position(Math.random() * (canvas.width - 30) + 15, 0));

    context.fillStyle = 'black';
    context.fillRect(0, 0, game.canvas.width, game.canvas.height);

    game.showTime();

    for (let i = 0; i < game.entities.length; i++) {
        let entity = game.entities[i];

        entity.tick(game);
        entity.draw(game);         
    }

    if (tickCount % 120 === 0) {
        seconds++
    }

    if (tickCount % 80 === 0) {
        game.entities.push(lavaBall);
    }

    if (tickCount % 220 === 0) {
        game.entities.push(fireBall);
    }
    

    requestAnimationFrame(tick);

}

tick();

export function restartGame() {
    game.canvas.style.display = 'block';
    gameText.style.display = 'block';
    seconds = 0;
    gameOver.style.display = 'none';
    textMessage.style.display = 'none';
    restartButton.style.display = 'none';
    game.entities.length = 1; 
}