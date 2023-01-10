import { Entity } from './entity.js';

export class Player extends Entity {
    constructor(position) {
        super(position);

        this.width = 150;
        this.height = 50; 
        this.left = false;
        this.right = false;
    }
 
    tick(game) {
        if (this.left) {
            this.position.x -= 300 * game.deltaTime;
        } else if (this.right) {
            this.position.x += 300 * game.deltaTime;
        }

        if (this.position.x < this.width / 2) {
            this.position.x = this.width / 2;
        } else if (this.position.x > game.canvas.width - (this.width / 2)) {
            this.position.x = game.canvas.width - (this.width / 2);
        }
    }
    

    draw(game) {
        game.context.fillStyle = 'rgb(93, 105, 168)';
        game.context.fillRect(this.position.x - this.width / 2, this.position.y - this.height / 2, this.width, this.height);
    }
}
