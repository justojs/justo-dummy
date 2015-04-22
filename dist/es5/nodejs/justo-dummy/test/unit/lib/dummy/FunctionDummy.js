//imports
const assert = require("assert");
const dummy = require("justo-dummy").dummy;

//suite
describe("FunctionDummy", function() {
  it("call", function() {
    var double = dummy();
    assert(double() === undefined);
  });
});
