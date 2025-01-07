//Program: Create a Person object with properties like name, age, and a method greet() that prints a greeting message. in Java script
//Task: Add a new property isAdult() to check if the person is an adult (age 18+).
//Solution: We will add a new property isAdult() to the Person object and use it to
//check if the person is an adult.
class Person 
{
    constructor(name, age) 
    {
        this.name = name;
        this.age = age;
    }
    greet() 
    {
        console.log(`Hello,${this.name}`);
    }
    isAdult() 
    {
        return this.age >= 18;
    }
}
let person = new Person("John Doe", 25);
console.log(person.isAdult());
person.greet();
