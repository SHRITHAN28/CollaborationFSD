/*What is the difference between the prototype and __proto__ in JavaScript? 
Write an example to demonstrate their usage. */
function Example() {}
Example.prototype.greet = function () {
    return "Hello from prototype!";
};
const instance = new Example();
console.log(instance.__proto__ === Example.prototype); // true
console.log(instance.greet()); // "Hello from prototype!"