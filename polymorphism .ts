class Athlete {
  sport: string = "basketball";

  print() {
    console.log(`I am a ${this.sport} professional`);
  }
}

class Messi extends Athlete {
  sport: string = "soccer";

  print() {
    console.log(`I am a ${this.sport} professional`);
  }
}

// The name property and the print method exist in different forms in each class.
