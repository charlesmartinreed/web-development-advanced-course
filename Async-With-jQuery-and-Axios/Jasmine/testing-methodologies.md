# TDD - Test Driven Development
- Write tests BEFORE writing your code
- Follow a style called "red/green refactoring"
- 1. Write the tests
- 2. Tests will fail because we don't have the code in place
- 3. Write code that will pass the tests
- 4. Refactor the code as needed; if tests still pass as we refactor our code, we can be reasonably certain we are not creating new bugs
- 5. Repeat

# BDD - Behavior Driven Development
- Subset of TDD
- The idea is that when writing tests, we describe the behavior of our functionality and not just what we expect the outcome to be
- First param of 'describe' and 'it' are strings describing behavior of what we are testing
- Encourages verbosity and can be helpful when testing the design of the software
- Jasmine is a type of BDD testing suite

Unit Tests
- written for small component or unit of our application. Proves individual components work on their own.

Integration Tests
- combining units to see how they fit together

Acceptance Tests
- performing tests on the full system (using app in browser or device) to see whether the application meets the business or system requirements

Stress tests
- determine how an app fares in difficult situations (network failures, incompatible hardware, etc)
