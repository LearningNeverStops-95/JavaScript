function corona(seconds){
	var now = new Date().getTime();
	while(new Date().getTime() < now + (1000 * seconds)){}
}

corona(10)
