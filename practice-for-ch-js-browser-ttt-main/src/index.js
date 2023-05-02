import View from "./ttt-view.js";
window.View = View;
import Game from "../ttt_node/game.js";
window.Game = Game;

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const ng = new Game ();
  const game = new View (ng, document.getElementsByClassName("ttt")[0]);

});

document.addEventListener('click', () => {
});