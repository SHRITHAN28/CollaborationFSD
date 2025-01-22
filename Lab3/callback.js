//Write a function greet that takes a name and a callback function.The function should return a greeting message by calling the callback with
//the message.
function greet(name, callback) {
    const message = `Hello,${name}`;
    callback(message);
}
function displayGreeting(greeting) {
    console.log(greeting);
}
greet("maya", displayGreeting); //Hello,maya