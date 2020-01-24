Dice = require('./Dice');

class FakeDice extends Dice {
  constructor(sides) {
    super(sides);
    this._sides = sides;
  }

  hello() {
    return super.rollOnce();
  }
}

module.exports = FakeDice;
