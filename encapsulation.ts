class Person {
  private _name: string;
  private _age: number;
  // initializes the variables of the class.
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // Getters get the instance variable
  public get name(): string {
    return this._name;
  }

  // Setters set the instance variable
  public set name(value: string) {
    this.name = value;
  }

  // Getters get the instance variable
  public get age(): number {
    return this._age;
  }

  // Setters set the instance variable
  public set age(value: number) {
    this.age = value;
  }
}
