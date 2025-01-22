const sym1 = Symbol.for('key');
const sym2 = Symbol.for('key');
console.log(sym1 === sym2);//true
const symb = Symbol('key');
console.log(symb === Symbol('key'));//false