class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getData() {
    console.log("name : " + this.name + " age : " + this.age);
  }
}

let p = new Person("amit", 20);
p.getData();

export {};
