import { Player } from "./player";
import { Score } from "./score";
import { compareShapes } from "./shape-comparator";

export class Game {

  private readonly score = new Score();

  constructor(
    private readonly firstPlayer: Player,
    private readonly secondPlayer: Player
  ) { }

  public playRound(): void {
    const playerOneShape = this.firstPlayer.play();
    const playerTwoShape = this.secondPlayer.play();

    console.log(`Player one has picked: ${playerOneShape}`);
    console.log(`Player two has picked: ${playerTwoShape}`);

    const shapeComparison = compareShapes(
      playerOneShape,
      playerTwoShape
    );
    if (shapeComparison === 1) {
      this.score.incrementPlayerOneScore();
    } else if (shapeComparison === -1) {
      this.score.incrementPlayerTwoScore();
    }
  }

  public doesPlayerHasScoreOf(score: number): boolean {
    return this.score.getPlayerOneScore() === score || this.score.getPlayerTwoScore() === score;
  }

  public printScore(): string {
    return `${this.score.getPlayerOneScore()}-${this.score.getPlayerTwoScore()}`;
  }
}
