//Using Object Literals
const person = {
  name: "John",
  age: 30,
  isMarried: false,
};
console.log(person); // { name: "John", age: 30, isMarried: false }

//Using the Object Constructor
javascript;
const obj = new Object();
obj.key = "value";
console.log(obj); // { key: "value" }

//Using a Class
class Animal {
  constructor(type, sound) {
    this.type = type;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}
const dog = new Animal("Dog", "Bark");
dog.makeSound(); // "Bark"

//Using a Factory Function
function createCar(make, model) {
  return {
    make,
    model,
    drive() {
      console.log("Vroom!");
    },
  };
}
const car = createCar("Tesla", "Model S");
car.drive(); // "Vroom!"
