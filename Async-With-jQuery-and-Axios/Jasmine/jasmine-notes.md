# Essential Jasmine keywords

describe()
-used to organize tests
describe = "let me describe ___ to you"
usually have one of these per function or code block

it()
- function inside of describe function
- each it function exists inside of a describe function to describe intended functionality in greater detail
it = "let me tell you about ___"
- it functions correspond to tests, often called a 'spec'

expect()
- lives inside of it
- make assertions about functionality here; if one such assertion fails, the test or 'spec' fails
expect = "here's what I expect to happen"

//psuedo code example
describe("Earth")
	it("is round")
		expect(earth.isRound.toBe(true))
	it("is the third planet from the sun")
		expect(earth.numberFromSun).toBe(3)

Expect function returns an object to us, which we can attach other objects to. These attached objects are called MATCHERS. (e.g, toBe)

Generally you'll write all of your external tests in a seperate js file, called a spec file.

# MATCHERS
toBe/not.toBe uses ===
toBeCloseTo, compares two values and accepts a 2nd value for precision
toBeDefined, ensures values are not undefined
toBeTruthy/toBeFalsey
toBeGreaterThan/toBeLessThan
toContain, checks whether or not a value is in an array
toEqual, useful for comparing objects that have the same value EVEN IF they are different references in memory
jasmine.any(), used to check the type (remember than typeof isn't failproof)
