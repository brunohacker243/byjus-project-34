class Game {
    static showGameOver() {
        
    }
    static showGameTitle() {
        imageMode(CENTER);
        image(this.titleImg,400,200,600,200);

    }

    static loadStuff(titleImg) {
        this.titleImg = titleImg;
    }
}