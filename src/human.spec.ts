import { Human } from "./human";
import * as promptUtils from "./prompt-utils";

jest.mock("./prompt-utils");

describe("Human", () => {
  test(`Given a human,
    when playing cissor,
    then this shape is played`, () =>  {
      const aHuman = new Human();
      mockUserInput("cissor");
      const choosenShape = aHuman.play();

      expect(choosenShape).toEqual("cissor");
    });

  test(`Given a human,
    when playing paper,
    then this shape is played`, () =>  {
      const aHuman = new Human();
      mockUserInput("paper");
      const choosenShape = aHuman.play();

      expect(choosenShape).toEqual("paper");
    });

    test(`Given a human,
      when playing rock,
      then this shape is played`, () =>  {
        const aHuman = new Human();
        mockUserInput("rock");
        const choosenShape = aHuman.play();

        expect(choosenShape).toEqual("rock");
      });

      test(`Given a human,
        when playing a non valid shape,
        then an error is thrown`, () =>  {
          const aHuman = new Human();
          mockUserInput("whatever");
          
          expect(() => aHuman.play()).toThrowError("Invalid input");
        });


      function mockUserInput(input: string): void {
        jest.spyOn(promptUtils, "promptSentence").mockReturnValueOnce(input);
      }
});
