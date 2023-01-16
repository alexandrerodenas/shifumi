import { getShapeIndex, Shape } from "./shape";

export function compareShapes(aShape: Shape, anotherShape: Shape) : number {
  const indexOfFirstShape = getShapeIndex(aShape);
  const indexOfSecondShape = getShapeIndex(anotherShape);
  const diff = indexOfSecondShape - indexOfFirstShape;
  if(diff === 2){
    return -1;
  }
  else if(diff === -2){
    return 1;
  } else {
    return diff;
  }

}
