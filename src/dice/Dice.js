class Dice {
  constructor(numSides) {
    this._numSides = numSides;
  }

  rollOnce() {
    return 1 + Math.floor(Math.random() * this._numSides);
  }

  roll(numRolls) {
    return [ ...Array(numRolls).keys() ].map(_ => this.rollOnce());
  }

  set numSides(numSides) {
    this._numSides = numSides;
  }

  get numSides() {
    return this._numSides;
  }
}

module.exports = Dice;
