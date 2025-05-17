class MyClass {
  public method1: string;
  private variable: number;

  constructor() {
    this.method1 = "Hello from MyClass";
    this.variable = 42;
  }
}

const instance = new MyClass();
console.log(instance.method1); // Output: Hello from MyClass
console.log(instance.variable); // Output: 42
