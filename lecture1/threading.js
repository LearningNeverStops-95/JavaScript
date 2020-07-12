function lockdown(seconds){
	var now = new Date().getTime();
	while (new Date().getTime() < now + (seconds*2000)){
		console.log('life sucks!!!') 	
	}
}
lockdown(3);
