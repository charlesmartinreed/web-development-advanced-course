# find

- invoked on arrays
- accepts callback with value, index, array (like foreach, map, filter)
- returns value found or undefined if not found

var instructors = [{name: "Elie"}, {name: "Matt"}, {name: "Tim"}, {name: "Colt"}]
instructors.find(val => {
return val.name === "Tim";
});

- great way to return a value without using a for loop

# findIndex

- similar to find, but returns an index or -1 if value is not found

# includes

- returns a boolean if a value is in a string
- similar to indexOf, but is more concise since it works with conditional logic
  "awesome".includes("some"); // true

# Number.isFinite

- typeof NaN is actually a number, so checking whether or not a number is actually just that is a little tricky

function seeIfNumber(val) {
if(typeof val === 'number' && !isNaN(val) {
return "it is a number"
})
}

- but now, with isFinite
  function seeIfNumber(val) {
  if(Number.isFinite(val)) {
  return 'It is a number!'
  }
  }

- Number.isInteger also exists
