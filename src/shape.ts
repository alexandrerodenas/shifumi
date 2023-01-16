const shapes = ["cissor", "paper", "rock"] as const;
export type Shape = (typeof shapes)[number];
export const isValidShape = (x: any): x is Shape => shapes.includes(x);
export const getShapeIndex = (x: any): number => shapes.indexOf(x);
