//imports
const assert = require("assert");
const justo = require("justo-dummy");

//suite
describe("ObjectDummy", function() {
	var dummy;
	
	beforeEach(function() {
		dummy = justo.dummy({});
	});
	
	it("method()", function() {
		dummy = justo.dummy({}, {myMethod: "method"});
		assert(dummy.myMethod() === undefined);
	});
});