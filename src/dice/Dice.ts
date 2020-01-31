export default class Dice {
  private numSides: number;

  constructor(numSides: number) {
    this.numSides = numSides;
  }

  rollOnce() {
    return 1 + Math.floor(Math.random() * this.numSides);
  }

  roll(numRolls) {
    return [ ...Array(numRolls).keys() ].map(_ => this.rollOnce());
  }

  public setNumSides(numSides: number) {
    this.numSides = numSides;
  }

  public getNumSides(): number {
    return this.numSides;
  }
}

module.exports = Dice;
