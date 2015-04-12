describe("global", function() {
	it("#justo", function() {
		global.must.have("justo");
	});
	
	it("#justo.dummy", function() {
		global.justo.must.have("dummy");
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