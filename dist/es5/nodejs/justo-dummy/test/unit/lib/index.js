//imports
const dummy = require("../../../dist/es5/nodejs/justo-dummy");

//suites
describe("#dummy()", function() {
  describe("Function dummy", function() {
    it("dummy()", function() {
      var double = dummy();

      double.must.be.instanceOf(Function);
      double.dummy.constructor.name.must.be.eq("FunctionDummy");
    });
  });

  describe("Object dummy", function() {
    var obj;

    beforeEach(function() {
      obj = {};
    });

    it("dummy(obj)", function() {
      var double = dummy(obj);

      double.must.be.same(obj);
      obj.dummy.constructor.name.must.be.eq("ObjectDummy");
    });

    it("dummy(obj, mem : string)", function() {
      var double = dummy(obj, "m()");

      double.must.be.same(obj);
      double.must.have("m");
    });

    it("dummy(obj, mems : string[])", function() {
      var double = dummy(obj, ["m1()", "m2()"]);

      double.must.be.same(obj);
      double.must.have(["m1", "m2"]);
    });
  });
});
