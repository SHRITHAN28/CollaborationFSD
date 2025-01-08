/*How can you swap two variables using array destructuring? Write an example that swaps
the values of two variables, a and b, without using a temporary variable.*/
let arr = [1, 2, 3, 4, 5, 6]
let [a, b] = arr.splice(1, 2)

console.log(`Before swap: a = ${a}, b = ${b}`)
[a, b] = [b, a]
console.log(`After swap: a = ${a}, b = ${b}`)