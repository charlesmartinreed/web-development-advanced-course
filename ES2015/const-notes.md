- Use const when creating variables that should never be redeclared

- Using const twice to declare the same variable results in a SyntaxError

- const does not make variables IMMUTABLE, just makes it impossible to redeclare that same variable at some other point in your app's lifecycle

const number = [1, 2, 3, 4]
numbers.push(10); // will this work? YES! you're stil able to mutate objects when using const, just can't reassign or declare again.

numbers; // [1, 2, 3, 4, 10]
numbers = "no!" // won't work; TypeError.
