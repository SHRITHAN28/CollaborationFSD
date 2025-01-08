/*Given the following object:
const user = {name: ‘Afroz’, age: 30, city: ‘Hyderabad’, country: ‘INDIA’ };
Use object destructuring to extract the properties name and city into individual
variables.
 */

const user = { name: 'Afroz', age: 30, city: 'Hyderabad', country: 'INDIA' };
const { name, city } = user;
console.log(name);
console.log(city);