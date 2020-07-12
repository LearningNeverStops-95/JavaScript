// map()

var x = [0,1,2,3]
function addOne(x){
	return x + 1 ;
}

console.log(x.map(addOne))
// console.log(x.map)


// filter()
console.log(x.filter(function(x){ return (x%2) === 0}))

// reduce()

function accumulate(prevTotal, newValue){ return prevTotal + newValue}

console.log(x.reduce(accumulate, 0))
