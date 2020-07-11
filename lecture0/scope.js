// ##########################
// hoisting in JS           #
// ##########################

greet();
doesThisWork();    // this will not work
console.log(i);


// function declaration

function greet(){
	console.log('Hi!')
}


// variable initialization

var doesThisWork = function(){
	console.log('Hello!')
}


var i = 42;
