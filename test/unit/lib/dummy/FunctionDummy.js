//imports
const assert = require("assert");
const justo = require("justo-dummy");

//suite
describe("FunctionDummy", function() {
	it("call", function() {
		var dummy = justo.dummy();
		assert(dummy() === undefined);
	});
});