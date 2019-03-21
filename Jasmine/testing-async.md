# Clock

- setInterval, setTimeout, as well as dates
- Jasmine uses a Clock for testing time dependent code
- invoked in beforeEach callback, using jasmine.clock().install()
- be sure to uninstall after each spec/test in an afterEach callback

beforeEach, afterEach, beforeAll and afterAll each take an optional single argument ('done', is the name usually given) that SHOULD BE CALLED WHEN ASYNC WORK IS COMPLETE.

Test is complete when 'done' is finished.

By default, Jasmine will wait 5 seconds for the done callback to run before timing out. This duration can be altered.

- see jasmine-async-testing.html for implementation example
