import { Entity } from './entity.js'
import { seconds, gameOver, textMessage, gameText } from './game.js';
import { restartButton } from './main.js';



export class Ball extends Entity {
    constructor(position) {
        super(position);

        this.radius = 20;
    }

    draw(game) {
        game.context.beginPath();
        game.context.fillStyle = 'red'
        game.context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        game.context.fill();
        game.context.closePath();
    }

    tick(game) {
        this.position.y++;

        if (this.isColliding(game)) {
            gameOver.style.display = 'block';
            textMessage.style.display = 'block';
            gameOver.textContent = 'GAME OVER';
            textMessage.textContent = 'You lasted ' + seconds + ' seconds';
            restartButton.style.display = 'block';
            gameText.style.display = 'none';
            game.canvas.style.display = 'none';
            game.entities.length = 1; 
        }
    }

    isColliding(game) {
        let cdx = Math.abs(this.position.x - game.player.position.x);
        let cdy = Math.abs(this.position.y - game.player.position.y);

        if (cdx > (game.player.width / 2 + this.radius)) { return false; }
        if (cdy > (game.player.height / 2 + this.radius)) { return false; }

        if (cdx <= game.player.width / 2) { return true; }
        if (cdy <= game.player.height / 2) { return true; }

        let distSquared = ((cdx - game.player.width / 2) ** 2) + ((cdy - game.player.height / 2) ** 2);
        return distSquared <= this.radius ** 2;
    }

}

export class FireBall extends Ball {
    constructor(position) {
        super(position);

        this.radius = 40;
    }

    tick(game) {
        this.position.y++;

        if (this.isColliding(game)) {
            gameOver.style.display = 'block';
            textMessage.style.display = 'block';
            gameOver.textContent = 'GAME OVER';
            textMessage.textContent = 'You lasted ' + seconds + ' seconds';
            restartButton.style.display = 'block';
            gameText.style.display = 'none';
            game.canvas.style.display = 'none';
            game.entities.length = 1; 
        }
    }

    draw(game) {
        game.context.beginPath();
        game.context.fillStyle = 'darkred'
        game.context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        game.context.fill();
        game.context.closePath();
    }

    isColliding(game) {
        let cdx = Math.abs(this.position.x - game.player.position.x);
        let cdy = Math.abs(this.position.y - game.player.position.y);

        if (cdx > (game.player.width / 2 + this.radius)) { return false; }
        if (cdy > (game.player.height / 2 + this.radius)) { return false; }

        if (cdx <= game.player.width / 2) { return true; }
        if (cdy <= game.player.height / 2) { return true; }

        let distSquared = ((cdx - game.player.width / 2) ** 2) + ((cdy - game.player.height / 2) ** 2);
        return distSquared <= this.radius ** 2;
    }

}



/*
export class SuperBall extends Ball {
    constructor(position) {
        super(position);

        this.radius = 30;
    }

    tick(game) {
        this.position.y++;

        if (this.isColliding(game)) {
            textMessage.textContent = '👑 received!';
        }
    }


    draw(game) {
        game.context.beginPath();
        game.context.fillStyle = 'lightgreen'
        game.context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        game.context.fill();
        game.context.closePath();
    }

    isColliding(game) {
        let cdx = Math.abs(this.position.x - game.player.position.x);
        let cdy = Math.abs(this.position.y - game.player.position.y);

        if (cdx > (game.player.width / 2 + this.radius)) { return false; }
        if (cdy > (game.player.height / 2 + this.radius)) { return false; }

        if (cdx <= game.player.width / 2) { return true; }
        if (cdy <= game.player.height / 2) { return true; }

        let distSquared = ((cdx - game.player.width / 2) ** 2) + ((cdy - game.player.height / 2) ** 2);
        return distSquared <= this.radius ** 2;
    }

}*/

