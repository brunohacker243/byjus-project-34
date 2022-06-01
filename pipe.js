class Pipe {
    constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    show() {
        fill("lime");
        rect(this.x,this.y,this.w,this.h);
    }

    update() {
        this.x = this.x - 5;
    }

    collide(b) {
        if(b.body.position.x > this.x && b.body.position.x < this.x + this.w && b.body.position.y > this.y && b.body.position.y < this.y + this.h) {
            gameState = "END";
            Game.showGameOver();
        }
    }
}