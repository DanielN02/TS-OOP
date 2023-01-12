// Use the abstract keyword for abstraction
abstract class Character {
  public name: string;
  public age: number;
  public job: string;

  constructor(name: string, age: number, job: string) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  //Lets the info below become available to the user
  public abstract dailytask(): string;
}

class Hero extends Character {
  constructor(name: string, age: number, job: string) {
    super(name, age, job);
  }

  public dailytask(): string {
    return `Yoooo my name is ${this.name} and I am a ${this.job}`;
  }
}
