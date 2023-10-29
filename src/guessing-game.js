class GuessingGame {
    constructor() {
      this.minRange = 0;
      this.maxRange = 0;
    }

    setRange(min, max) {
      this.minRange = min;
      this.maxRange = max;
    }

    guess() {
      return Math.floor((this.minRange + this.maxRange) / 2);
    }

    lower() {
      this.maxRange = this.guess();
    }

    greater() {
      this.minRange = this.guess() + 1;
    }
  }

module.exports = GuessingGame;
