function whatIsThis(){
	console.log(this);
}

var person = {
	firstName: "Arjun",
	lastName: "Goel",
	whatIsThis: function(){console.log(this)},
	greet: function(whatToSay){
		console.log('Hi!' + whatToSay + ',' +  this.firstName);
	}
}

// if the function is called as a method of an object 'this' is bound to the object the method is called on.
// person.whatIsThis();
// person.greet('hi');
//whatIsThis();  -> It will print the 'global' node object


var student = {
	firstName: 'Jon',
	lastName: 'Doe'
};

// student.greet = person.greet;

// student.greet();

// var studentGreet = person.greet.bind(student);

// IIFEs (Immediately Invoked Function Expressions)
person.greet.bind(student)();
// studentGreet();

// we can alternatively use call() and apply()

person.greet.call(student, 'hi');
person.greet.apply(student, ['hi']);

// console.log(JSON.stringify(student))
