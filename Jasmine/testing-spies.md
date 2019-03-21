# Spies

A mock is a fake object that poses as a function without the overhead of retrieving the real object. We can then define which methods are called and what is returned from within our mock object.

- In Jasmine, mocks are called 'spies'.
- Spies "stub", or mimic, any function and track calls to it and all arguments.
- Spies only exist in the 'describe' or 'it' block in which they are defined
- Spies are also removed after each "spec"  or "test"

# creating spies in jasmine
- spyOn - only used when method exists on an object. Be sure to use this with existing functions.
- jasmine.createSpy - returns a brand new function

# spyOn methods
.calls.count
.and.callThrough (triggers our function contained within our spy/mock)
