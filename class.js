/*A class in JavaScript is a blueprint for creating objects. It encapsulates data and functions into
 a single entity and supports object-oriented 
programming principles like inheritance, encapsulation, and polymorphism.*/

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person1 = new Person("Alice", 25);
  person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.

  



  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter() {
      return this.radius * 2;
    }
  
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  }
  
  const circle = new Circle(10);
  console.log(circle.diameter); // Output: 20
  circle.diameter = 30;
  console.log(circle.radius); // Output: 15

  



  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    sound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    sound() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog("Buddy");
  dog.sound(); // Output: Buddy barks.
  