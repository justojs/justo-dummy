//imports
const assert = require("assert");
const dummy = require("justo-dummy").dummy;

//suite
describe("ObjectDummy", function() {
	var obj, double;

	beforeEach(function() {
		obj = {};
		double = dummy(obj);
	});

	describe("Methods", function() {
		it("#respond()", function() {
			double.dummy.respond("sum");
			double.sum.must.be.instanceOf(Function);
		});

		it("call", function() {
			double.dummy.respond("sum");
			assert(double.sum(1, 2, 3) === undefined);
		});
	});

	describe("Attributes", function() {
		it("#respond()", function() {
			double.dummy.respond("length", "attr");
			double.must.have("length");
		});

		it("call", function() {
			double.dummy.respond("length", "attr");
			assert(double.length === undefined);
		});
	});
});
