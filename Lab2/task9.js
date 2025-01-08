/*You have an array numbers:
const numbers = [1, 2, 3, 4, 5]
Use array destructuring to extract the last element of the array and store it in a
variable called lastElement. */

const numbers = [1, 2, 3, 4, 5];
const [ele] = numbers.slice(-1);
console.log(ele); //5