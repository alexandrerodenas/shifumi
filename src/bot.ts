import {Player} from "./player";
import { Shape } from "./shape";

export class Bot implements Player {

  public play(): Shape {
    const randomShapeNumber = this.getNumberBetween(0, 2);
    switch(randomShapeNumber) {
      case 0:
        return "cissor";
      case 1:
        return "paper";
      case 2:
        return "rock";
      default:
        throw new Error("Unsupported case");
    }
  }

  private getNumberBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
