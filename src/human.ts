import { Player } from "./player";
import { promptSentence } from "./prompt-utils";
import { isValidShape, Shape } from "./shape";


export class Human implements Player {

  play(): Shape {
    const choosenShape = promptSentence("Choose a shape (paper|cissor|rock): ");

    if(isValidShape(choosenShape)){
      return choosenShape;
    }
    throw new Error("Invalid input");
  }

}
