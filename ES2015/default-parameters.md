function add(a,b){
	return a+b
}

- if we don't pass in anything, we get undefined because neither a nor or b are numbers

- Before ES2015:
function add(a, b) {
	if(a === undefined) {
		a = 2
	}
	if(b === undefined) {
		b = 4
	}
	return a+b
}

- After ES2015:
function add(a=10, b=20) {
	return a+b
}
- Default values are 10 and 20.
- Anything can be set a default value
