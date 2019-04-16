# Sets

- introduced in ES2015
- all values must be unique
- any type of value can exist in a set
- created using the new keyword
- have a property called 'size'
- check for membership with .has()
- remove with .delete()
- support for...of loops

# When to use a set

- when you don't need duplicate values
- when you don't care about value order
- when you don't need to worry about keys

# How to build a set

- var a = new Set;
- var b = new Set([1, 3, 5, 6, 1, 9 ,2, 3]) // [1, 3, 5, 6, 9, 2]

#WeakSet

- similar to set, but all values must be objects
- cleared from memory if no references remain
- cannot iterate over weakSets
