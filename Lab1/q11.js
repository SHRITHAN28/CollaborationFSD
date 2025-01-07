/*Create a class Animal with a method speak() that logs a generic message. 
Then, create a subclass Dog that extends Animal and overrides the speak() 
method to log "Woof!". Instantiate both classes and call their speak() 
method. */
class Animal {
    speak() {
        return "Generic animal sound.";
    }
}

class Dog extends Animal {
    speak() {
        return "Woof!";
    }
}

const genericAnimal = new Animal();
const dog = new Dog();

console.log(genericAnimal.speak());
console.log(dog.speak());