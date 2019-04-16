- Sometimes called hash maps in other languages
- prior to ES2015, objects were used as hash maps in JS
- hash map keys can be ANY type, whereas with JS objects, the key is always a string

var firstMap = new Map;

firstMap.set(1, 'Elie');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');

firstMap.delete
firstMap.size

firstMap.get(1) //Elie

firstMap.forEach(v => console.log(v));

- we can also iterate over maps using for...of because maps implement a Symbol.iterator

# Why use maps

- finding size is easy
- keys can be any data type
- maps don't have a proto object, so you can't accidentally overwrite keys
- iterating over keys is simple and clean

# When to use maps

- keys that need to be looked up dynamically
- need keys are that are not strings
- if key/value pairs are frequently added or removed
- if you're operating on multiple keys at a time

# WeakMap

- All keys MUST be objects, not primitives
- More performant than maps, but keep in mind that this is because values can be cleared from memory in a weakMap if there is no reference to them
