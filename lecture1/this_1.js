var employee = {
	firstName:'Arjun',
	lastName: 'Goel',
	isEmployee: true,
	greet: function(whatToSay){
		console.log(whatToSay + ', ' + this.firstName);
}
}

employee.greet('Hi!!')
