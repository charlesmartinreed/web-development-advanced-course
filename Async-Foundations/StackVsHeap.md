// What is the stack?

- Ordered data structure
- Keeps track of function invocations. When you run a function, the details and implementation are pushed to the top of the stack. When the function is complete, the JS runtime pops it off the stack.
- Part of the JS runtime, but you don't access it directly.

function multiply(x, y) {
	return x * y; //added to the stack, after the invocation.
}

var res = multiply(3, 5); //added to the stack, with its code line number

// 1. the program itself is added to the stack via the "main" function
// 2. Our invoked function is added to the stack, along with the line number where it was invoked
// 3. The result of our function is added to the stack, along with the line number
// 4. When our code is complete, each item is popped off the stack, including the main function

// What is a stack frame?

Keep track of each function and their location in the code.
Contains information on the function that was invoked
Contains the parameters that were passed to the function
Contains the line number of the stack item.

// Again, what is a stack?
- Ordered set of stack frames
- Most recently invoked function is on the top of the stack.
- The bottom of the stack is the first function invoked.
- The stack is processed from top to bottom, until stack is empty.

========================================================================

// OK, so what's a heap?
- An area in memory where your data is stored

// the first assignment CREATES a memory space for us
// the second assignment merely REFERENCES that memory space
// changing an attribute in referenceCopy ALSO CHANGES that attribute in obj

var obj = {firstName: "Tim", lastName: "Garcia"};
var referenceCopy = obj;
