export default class Controller {
    constructor(game, view) {
        this.game = game;
        this.view = view;
        this.intervalID = null;
        this.isPlaying = false;

        document.addEventListener('keydown', this.handleKeyDown.bind(this));
        document.addEventListener('keyup', this.handleKeyUp.bind(this));

        this.view.renderStartScreen();
    }

    update() {
        this.game.movePieceDown();
        this.updateView();
    }

    play() {
        this.isPlaying = true;
        this.startTimer();
        this.updateView();
    }

    pause() {
        this.isPlaying = false;
        this.stopTimer();
        this.updateView();
    }

    reset() {
        this.game.reset();
        this.play();
    }

    updateView() {
        const state = this.game.getState();

        if (state.isGameOver) {
            this.view.renderEndScreen(state);
        } else if (!this.isPlaying) {
            this.view.renderPauseScreen();
        } else {
            this.view.renderMainScreen(state);
        }
    }

    startTimer() {
        const speed = 1000 - this.game.getState().level * 100;

        if (!this.intervalID) {
            this.intervalID = setInterval(() => {
                this.update();
            }, speed > 0 ? speed : 100);
        }

    }

    stopTimer() {
        if (this.intervalID) {
            clearInterval(this.intervalID);
            this.intervalID = null;
        }
    }

    handleKeyDown(event) {
        const state = this.game.getState();

        switch(event.keyCode){
            case 13: // ENTER
                if (state.isGameOver) {
                    this.reset();
                } else if (this.isPlaying) {
                    this.pause();
                } else {
                    this.play();
                }
                break;
            case 37: // LEFT Arrow
                this.game.movePieceLeft();
                this.updateView();
                break;
            case 38: // UP Arrow
                this.game.rotatePiece();
                this.updateView();
                break;
            case 39: // RIGHT Arrow
                this.game.movePieceRight();
                this.updateView();
                break;
            case 40: // DOWN Arrow
                this.stopTimer();
                this.game.movePieceDown();
                this.updateView();
                break;
            case 32: // DOWN Space
                this.game.dropPiece();
                this.updateView();
                break;
        }
    }

    handleKeyUp(event) {
        switch(event.keyCode) {
            case 40: // DOWN Arrow
            this.startTimer();  
            break;
        }

    }
}