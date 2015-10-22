//imports
const assert = require("assert");
const dummy = require("../../../dist/es5/nodejs/justo-dummy");

//suite
describe("FunctionDummy", function() {
  it("call", function() {
    var double = dummy();
    assert(double() === undefined);
  });
});
