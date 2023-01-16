import { Score } from "./score";

describe("Score", () => {
  test(`Given a new score,
    when getting player one score,
    then it is zero`, () => {
    const score = new Score();

    const playerOneScore = score.getPlayerOneScore();

    expect(playerOneScore).toEqual(0);
  });

  test(`Given a new score,
      when getting player two score,
      then it is zero`, () => {
    const score = new Score();

    const playerTwoScore = score.getPlayerTwoScore();

    expect(playerTwoScore).toEqual(0);
  });

  test(`Given a new score,
        when incrementing player one score,
        then its score is incremented by one`, () => {
    const score = new Score();
    const playerOneScoreBefore = score.getPlayerOneScore();

    score.incrementPlayerOneScore();

    expect(score.getPlayerOneScore()).toEqual(playerOneScoreBefore + 1);
  });

  test(`Given a new score,
        when incrementing player two score,
        then its score is incremented by one`, () => {
    const score = new Score();
    const playerTwoScoreBefore = score.getPlayerTwoScore();

    score.incrementPlayerTwoScore();

    expect(score.getPlayerTwoScore()).toEqual(playerTwoScoreBefore + 1);
  });

});
