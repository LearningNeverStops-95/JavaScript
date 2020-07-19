function printOne(){
	console.log('1');
}

function printTwo(){
	console.log('2');
}

function printThree(){
        console.log('3');
}


function hang(seconds){
	var now = new Date().getTime();
	while (new Date().getTime() < now + (1000 * seconds))
	{
		console.log("hang for sometime, please bear!!");
	}
}


//setTimeout(printOne, 1000);
//setTimeout(printTwo, 0);

printTwo();
hang(1);
printThree();
