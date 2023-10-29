class GuessingGame {
    constructor() {
      this.min = null;
      this.max = null;
      this.currentGuess = null;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
        if (this.min >= this.max) {
          this.currentGuess = this.min;
        } else {
          this.currentGuess = Math.round((this.min + this.max) / 2);
        }
        return this.currentGuess;
      }
    lower() {
      // Обновляем верхнюю границу так, чтобы она была строго меньше текущего предполагаемого числа
      this.max = this.currentGuess - 1;
    }

    greater() {
      // Обновляем нижнюю границу так, чтобы она была строго больше текущего предполагаемого числа
      this.min = this.currentGuess + 1;
    }
  }


  module.exports = GuessingGame;
