/*Given the following array:
const colors = [‘red’, ‘green’, ‘blue’, ‘yellow’]
Use array destructuring to extract the first and second elements of the array into
individual variables.
Use array destructuring to extract the second and fourth elements of the array into
individual variables.
 */

const colors = ['red', 'green', 'blue', 'yellow'];
const [a, b] = colors;
console.log(`First color: ${a}`);
console.log(`Second color: ${b}`);
const [, c, , d] = colors;
console.log(`Second color: ${c}`);
console.log(`Fourth color: ${d}`); 
