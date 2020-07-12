var int1 = 42;
var int2 = int1;
int2 = 50;

console.log ('int1 is:' + int1)
console.log('int2 is:' + int2)

// working with objects

var obj1 = {};
var obj2 = obj1;
obj2.test = "test";

console.log(JSON.stringify(obj1))

obj2.arr = [];

var x = obj2.arr
x.push(1)

console.log(JSON.stringify(obj1))
