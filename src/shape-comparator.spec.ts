import { Shape } from "./shape";
import { compareShapes } from "./shape-comparator";

describe("Shape comparator", () => {

  test.each([
      ["cissor", "paper", 1],
      ["paper", "paper", 0],
      ["paper", "cissor", -1],
      ["paper", "rock", 1],
      ["rock", "paper", -1],
      ["rock", "rock", 0],
      ["rock", "cissor", 1],
      ["cissor", "rock", -1],
      ["cissor", "cissor", 0]
  ])(`Given a shape being %p and another being %p,
    when comparing them together,
    then it returns %p`, (aShape: string, anotherShape: string, anExpectedResult: number): void => {
      expect(
        compareShapes(aShape as Shape, anotherShape as Shape)
      ).toEqual(anExpectedResult);
    });
});
