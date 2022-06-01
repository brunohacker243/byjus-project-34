class PipeKill {
    constructor(x,y,w,h,img,b) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.birdX = b.body.position.x;
        this.birdY = b.body.position.y;
        this.bullets = [];
    }
    show() {
        fill("green");
        push();
        translate(this.x,this.y);
        scale(4,4);
        imageMode(CENTER);
        image(this.img,0,0,this.width,this.height);
        pop();
        for(let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].show();
            this.bullets[i].update();
        }
    }

    position() {
        this.x = this.birdX + 20;
        this.y = this.birdY + 20;
    }

    update(b) {
        this.birdX = b.body.position.x;
        this.birdY = b.body.position.y;
    }

    shoot() {
        let bullet = new Bullet(this.x,this.y,10,5);
        this.bullets.push(bullet);
    }
}