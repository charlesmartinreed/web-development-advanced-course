# BeforeEach

- runs a passed callback before each 'it' callback
- example: (note that arr is defined OUTSIDE of the beforeEach for scoping purposes)
describe("Arrays", function(){
	var arr;
	beforeEach(function(){
		arr = [1,3,5];
		});
	});

# AfterEach
- useful for teardown, to ensure data returns to default state after testing. You see this a lot when working with databases.

example:
describe("Counting", function(){
	var count = 0;

	beforeEach(function(){
		count++;
		});
	afterEach(function(){
		count = 0;
		});

	it("has a counter that increments", function(){
		expect(count).toBe(1);
	});

	it("gets reset", function(){
		expect(count).toBe(1);
		});
	});

# beforeAll/afterAll
- is run before or after all tests, does not reset like beforeEach/afterEach

# Nesting describe
describe("Array", function(){
	...
	beforeEach(function(){
		...
		})
		describe("#unshift", function(){
			it("adds an element to the beginning of an array", funciton(){
				arr.unshift(17);
				expect(arr[0]).toBe(17);
				});
				it("returns the new length", function(){
					expect(arr.unshift(1000)).toBe(4);
					});
			});
			describe("#push", function(){
				...
				})
	});

# Pending tests
- Marking as pending is done when we don't know exactly what we'll be testing or if we're not sure wheen the test will be done
- Mark as pending by omitting callback to the it function, adding a pending function OR placing an x before the it function (xit)

- General rule of thumb is to add as many expect cases as needed, but don't test unrelated functionality under the same it block
