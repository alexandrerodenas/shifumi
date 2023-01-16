export class Score {

  private playerOneScore = 0;
  private playerTwoScore = 0;

  public incrementPlayerOneScore(): void {
    this.playerOneScore++;
  }

  public incrementPlayerTwoScore(): void {
    this.playerTwoScore++;
  }

  public getPlayerOneScore(): number {
    return this.playerOneScore;
  }

  public getPlayerTwoScore(): number {
    return this.playerTwoScore;
  }
}
