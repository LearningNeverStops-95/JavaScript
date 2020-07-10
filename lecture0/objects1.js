// Different ways of creating objects in JavaScript:-


// 1. using 'new' keyword


var o = new Object();
o.firstName = "Arjun";
o.lastName = "Goel";
o.isAnEngineer = true;
o.age = 24;

console.log(JSON.stringify(o))


// 2. using object literal  --> preferred way of creating an object

var o2 = {};
o2['firstName'] = 'Arjun'
var a = 'lastName';
o2[a] = 'Goel'

console.log(JSON.stringify(o2))


// 3. Inline

var o3 = {
	firstName:'Arjun',
	lastName:'Goel',
	greet: function(){
		console.log('Hi!' + o3.firstName);
	}
}

console.log(JSON.stringify(o3))

