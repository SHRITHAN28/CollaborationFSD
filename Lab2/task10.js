/*Given the following array of arrays:
const matrix = [[1, 2], [3, 4], [5, 6]]
Use array destructuring to extract the values 3 and 5 from the inner arrays */

let matrix = [[1, 2], [3, 4], [5, 6]];
let [, c, d] = matrix;
let [x1, x2] = c;
let [y1, y2] = d;
console.log(x1);
console.log(y1);