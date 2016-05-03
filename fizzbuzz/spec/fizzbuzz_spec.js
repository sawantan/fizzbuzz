// Test specification fore the fizzbuzz program
// telling the file where to find the code that we are testing
var fb = require('../fizzbuzz');

describe("A program that implements fizzbuzz counting", function() {

	it("can count from 1 to 5", function() {
		// the last number will trigger the ending statement in the loop so will never reach that number
		// eg. if statement is (1,5) the loop will operate until (4<5) because (5<5) fails the logic
		expect(fb.count(1, 5)).toBe("1 2 fizz 4 ");
		expect(fb.count(1, 7)).toBe("1 2 fizz 4 buzz fizz ")
		expect(fb.count(1,16)).toBe("1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz ")
	});

	/*it("can take a nmber and return fizz if its a multiple of 3 otherwise the number", function() {
		expect(fb.fizzer(3)).toBe("fizz");
		expect(fb.fizzer(5)).toBe(5);
		expect(fb.fizzer(17)).toBe(17);
	});*/
	
});
