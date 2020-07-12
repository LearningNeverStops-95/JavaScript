// simulate fetching data from a db
function getUserFromDatabase(callback){
	setTimeout(() => callback({firstName:'Arjun', lastName:'Goel'}), 1000);
}

// query db for user, then greet the user (synchronous calls)
/*

function greetUser(){
	var user = getUsersSync();
	console.log('Hi,' + user.firstName);
}

*/

// asynchronous call

function greetUser(){
	getUserFromDatabase(function(userObject){
		console.log('Hi, ' + userObject.firstName)
	});
}

greetUser();


