//imports
const assert = require("assert");

//suite
describe("FunctionDummy", function() {
	it("call", function() {
		var dummy = justo.dummy();
		assert(dummy() === undefined);
	});
});