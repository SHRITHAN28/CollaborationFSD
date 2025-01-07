/*Create a Person constructor function that accepts name and age parameters 
and adds them as properties to the object. Then, create a Student constructor 
function that inherits from Person and adds a graded property. 
Write a method describe in Person that returns a string like: 
"Name: John, Age: 30" 
And a method study in Student that returns: 
"John is studying for grade A."  */
function Person(name, age) 
{
    this.name = name;
    this.age = age;
    this.describe = function () 
    {
        return `Name: ${this.name}, Age: ${this.age}`;
    };
}
function Student(name, age, grade) 
{
    Person.call(this, name, age);
    this.grade = grade;
    this.study = function () {
        return `${this.name} is studying for grade ${this.grade}.`;
    };
}
const student = new Student("John", 20, "A");
console.log(student.describe());
console.log(student.study());