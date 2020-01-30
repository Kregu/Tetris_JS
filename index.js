import Game from "./src/game.js";
import View from "./src/view.js";

const root = document.querySelector('#root');

const game = new Game();
const view = new View(root, 320, 640, 20, 10);

window.game = game;
window.view = view;

document.addEventListener('keydown', event => {
    switch(event.keyCode){
        case 37: // LEFT Arrow
            game.movePieceLeft();
            view.render(game.getState());
            break;
        case 38: // UP Arrow
            game.rotatePiece();
            view.render(game.getState());
            break;
        case 39: // RIGHT Arrow
            game.movePieceRight();
            view.render(game.getState());
            break;
        case 40: // DOWN Arrow
            game.movePieceDown();
            view.render(game.getState());
            break;
    }
});
