// 42.toString()

var x = 42; // it is number (primitive) not a Number(Object)
console.log(x.toString())

console.log(x.__proto__) // Not recommended

// To check if 'x' is instance of the Object.
console.log(x instanceof Number)

var y = new Number(56)
//console.log(y instanceof number)
console.log(y instanceof Number)