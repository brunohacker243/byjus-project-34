class Bullet {
    constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    show() {
        ellipseMode(RADIUS);
        ellipse(this.x,this.y,this.w,this.h);
    }
    update() {
        this.x = this.x + 5;
    }
}