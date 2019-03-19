// What is the Event Loop?
- Functionality in the JS runtime that checks when the queue to see when the stack is empty.

// What is the Queue?
- Ordered list of Functions waiting to be placed on the STACK.
- Functions placed in the queue are processed FIFO, first in first out.

// How do the event loop and the queue work with the stack?
- If the stack is empty, the FRONT of the QUEUE is placed in the stack.

setTimeout(function() {
	console.log("Hello World")
	}, 0);

// console log is taken from the queue, placed in the stack by the event loop

// keep in mind that, while our setTimeout is set to execute immediately, it won't actually be executed until after the event loop has determined that the stack is clear, after the loop has moved the function from the queue to the stack and after the function has been processed/removed from the stack. This is because JS is single-threaded.

// Is JavaScript a single or multi-threaded language?
Single. Code execution is linear. Running code cannot be interrupted by something else happening.

//In the following code, setTimeout executes only after the queue-event loop-stack process has taken place. 0 merely means to execute as soon as possible, which, will will take a while since our loop is quite lengthy. The callback will only execute AFTER that loop is complete.

setTimeout(function() {
	console.log("Hello from the timeout");
	}, 0);

	for (var i = 0; i < 100000000; i++) {
		var x = i * 2;
	}

	console.log("Done with loop");

	console.log('first')

	setTimeout(function() {
		console.log('second')
		}, 0)

	console.log('third')
