import {Bot} from "./bot";

describe("Bot", () => {

  test(`Given a bot,
    when playing once,
    then a shape is choosen between "paper", "cissor" and "rock"`, () => {
      const aBot = new Bot();
      const shape = aBot.play();

      expect(["cissor", "paper", "rock"].includes(shape));
    });

    test(`Given a bot,
    when playing a great amount of times,
    and doing it twice,
    then choosen set of shapes are not the same (randomness)`, () => {
        const aBot = new Bot();
        const aGreatAmountOfTime = 10000;
        const shapesForFirstSet: string[] = [];
        const shapesForSecondSet: string[] = [];

        for(let i = 0; i < aGreatAmountOfTime; i++){
          shapesForFirstSet.push(aBot.play());
        }
        for(let i = 0; i < aGreatAmountOfTime; i++){
          shapesForSecondSet.push(aBot.play());
        }

        const shapesAlwaysIdentical = shapesForFirstSet.every((shape, index) => shapesForSecondSet[index] === shape);
        expect(shapesAlwaysIdentical).toBeFalsy();
      });
});
