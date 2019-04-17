#Object.assign

- introduced in ES2015
- need to make a copy of an object? You can't just assign them to one another directly because they're copy by reference
- Object.assign accepts a series of objects and RETURNS a NEW OBJECT with keys and values for all objects passed into it

#ES5 vs ES2015
var o = {name: 'Elie'};
var o2 = o;

o2.name = "Tim";
o.name; //"Tim"

var o = {name: "Elie"};

- putting in an empty object means that we don't want to copy by reference
  var o2 = Object.assign({}, o);

o2.name = "Tim";
o.name; //"Elie"

- This doesn't create a deep clone, so nested objects are actually still copied by reference. Other libraries like lodash can help with this, or you can write a function to account for it yourself.

#Array.from

- convert an array like object into an Array
- What's an array like? Think node lists that you get from thinks like document.getElementsByTagName('div')

# ES5 vs ES2015

var converted = [].slice.call(divs)

var converted = Array.from(divs);

- works with strings, maps, objects
  var firstSet = new Set([1, 2, 3, 4, 3, 2, 1])
  var arrayFromSet = Array.from(firstSet);
