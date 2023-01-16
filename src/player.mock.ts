import { Player } from "./player";

export class PlayerMock implements Player {
  play = jest.fn();
}
