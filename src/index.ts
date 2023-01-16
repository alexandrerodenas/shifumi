import { Bot } from "./bot";
import { Game } from "./game";
import { Human } from "./human";

const game = new Game(
  new Bot(),
  new Human()
);

console.log("Best of three! Let's go!");

while(!game.doesPlayerHasScoreOf(3)){
  game.playRound();
  console.log(
    game.printScore()
  );
}
