//imports
const justo = require("justo-dummy");

//suites
describe("exports", function() {
	it("#dummy", function() {
		justo.must.have("dummy");
	});
	
	it("#justo - not added", function() {
		justo.must.not.have("justo");
	});
});

describe("#justo.dummy()", function() {
	it("dummy() : FunctionDummy", function() {
		var dummy = justo.dummy();
		dummy.must.be.instanceOf(Function);
		dummy.name.must.be.eq("dummy");
	});
	
	it("dummy(instance) : ObjectDummy", function() {
		var dummy = justo.dummy({});
		dummy.constructor.name.must.be.eq("ObjectDummy");
	});
	
	it("dummy(instance, []) : ObjectDummy", function() {
		var dummy = justo.dummy({}, []);
		dummy.constructor.name.must.be.eq("ObjectDummy");
	});
	
	it("dummy(instance, members)", function() {
		var dummy = justo.dummy({}, {myAttr: "attr", myMethod: "method"});
		dummy.constructor.name.must.be.eq("ObjectDummy");
		dummy.myMethod.must.be.instanceOf(Function);
		dummy.must.have({myAttr: undefined});
	});
});