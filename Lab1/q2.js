//Program: Create a simple calculator using functions and variables in java script. The user can input two numbers, and the calculator can add, subtract, multiply, or divide the numbers.
//Task: Declare variables for the operands and the operation, and handle division by zero.
var a=0;
var b=0;
var operation="";
function add() 
{
    var result=a+b;
    return result;
}
function subtract() {
    var result = a-b;
    return result;
}
function multiply() {
    var result =a*b;
    return result;
}
function divide() {
    if (b===0) 
    {
        console.log("division by zero");
        return;
    }
    var result=a/b;
    return result;
}
let x=document.getElementById(data);
let y=document.getElementById(data2);
function calculator() 
{
    a= parseFloat(x);
    b= parseFloat(y);
    operation=prompt("Enter the operation");
    switch (operation) 
    {
        case "+":
            console.log("add:" + add());
            break;
        case "-":
            console.log("sub:" + subtract());
            break;
        case "*":
            console.log("mul:" + multiply());
            break;
        case "/":
            console.log("div:" + divide());
            break;
        default:
            console.log("enter valid operator");
    }
}
calculator();