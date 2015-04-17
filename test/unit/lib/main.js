//imports
const dummy = require("justo-dummy").dummy;

//suites
describe("#dummy()", function() {
	it("Function dummy", function() {
		var double = dummy();

		double.must.be.instanceOf(Function);
		double.dummy.constructor.name.must.be.eq("FunctionDummy");
	});

	it("Object dummy", function() {
		var obj = {};
		var double = dummy(obj);

		double.must.be.same(obj);
		obj.dummy.constructor.name.must.be.eq("ObjectDummy");
	});
});
