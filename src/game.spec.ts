import {Game} from './game';
import {Player} from "./player";
import { PlayerMock } from './player.mock';
import { Shape } from './shape';

describe("Game", () => {

  const firstPlayer = new PlayerMock();
  const secondPlayer = new PlayerMock();

  test(`Given a fresh new game,
    when getting score,
    then score is zero-zero`, () => {
      const aGame = new Game(firstPlayer, secondPlayer);

      const score = aGame.printScore();

      expect(score).toEqual(`0-0`);
    });

  test(`Given a game,
    when first player plays a winning shape against second player,
    then first player gains one point`, () => {
      const aGame = new Game(firstPlayer, secondPlayer);
      mockPlayersShapes("cissor", "paper");

      aGame.playRound();
      const score = aGame.printScore();

      expect(score).toEqual(`1-0`);
  });

  test(`Given a game,
    when second player plays a winning shape against second player,
    then second player gains one point`, () => {
      const aGame = new Game(firstPlayer, secondPlayer);
      mockPlayersShapes("rock", "paper");

      aGame.playRound();
      const score = aGame.printScore();

      expect(score).toEqual(`0-1`);
  });

  test(`Given a game and a given score that have not been reached by players,
    when checking if this score is reached,
    then returns false`, () => {
      const aGame = new Game(firstPlayer, secondPlayer);

      expect(aGame.doesPlayerHasScoreOf(3)).toBeFalsy();
  });

  test(`Given a game and a given score that have been reached by players,
    when checking if this score is reached,
    then returns true`, () => {
      const aGame = new Game(firstPlayer, secondPlayer);
      mockPlayersShapes("rock", "paper");

      aGame.playRound();
      aGame.playRound();
      aGame.playRound();

      expect(aGame.doesPlayerHasScoreOf(3)).toBeTruthy();
  });


  function mockPlayersShapes(aShape: Shape, anotherShape: Shape): void {
    firstPlayer.play.mockReturnValue(aShape);
    secondPlayer.play.mockReturnValue(anotherShape);
  }

});
