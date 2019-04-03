- similar to a for...in loop, which is traditionally used to loop over keys in an object
- for...of is great for looping over values in an array

var arr = [1,2,3,4,5];
for(let val of arr) {
	console.log(val)
}

- behind the scenes, for...of works using the new Symbol value type, which has an iterator method attached to it that dictates how particular value types are iterated.
- Some data types, strings, ints, maps and sets have built in iterators in the Symbol method, but objects don't

console.dir(arr) //__proto__ has a Symbol.iterator
console.dir({}) // has no Symbol.iterator!
