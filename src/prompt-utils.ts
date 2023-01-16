const prompt = require("prompt-sync")({sigint:true});

export function promptSentence(sentence: string): string {
  return prompt(sentence);
}
