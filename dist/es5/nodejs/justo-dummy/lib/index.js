//imports
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = dummy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _FunctionDummy = require("./FunctionDummy");

var _FunctionDummy2 = _interopRequireDefault(_FunctionDummy);

var _ObjectDummy = require("./ObjectDummy");

var _ObjectDummy2 = _interopRequireDefault(_ObjectDummy);

/**
 * Creates a test dummy.
 *
 * @overload Function dummy
 * @noparam
 *
 * @overload Object dummy for an object
 * @param obj:object            The instance object.
 * @param [mem]:string|string[] The members to double.
 */

function dummy() {
  var double;

  //(1) create dummy

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 0) double = createFunctionDummy();else double = createObjectDummy.apply(undefined, args);

  //(2) return dummy
  return double;
}

/**
 * Creates a function dummy.
 */
function createFunctionDummy() {
  var res;

  //(1) create dummy
  res = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return res.dummy.call(args);
  };

  Object.defineProperty(res, "dummy", { value: new _FunctionDummy2["default"]() });

  //(2) return
  return res;
}

/**
 * Creates an object dummy.
 *
 * @param obj:object            The instance object.
 * @param mems:string|string[]  The members to double.
 */
function createObjectDummy(obj) {
  var mems = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  //(1) arguments
  if (typeof mems == "string") mems = [mems];

  //(2) create dummy object
  Object.defineProperty(obj, "dummy", { value: new _ObjectDummy2["default"](obj) });

  //(3) add responses
  for (var i = 0; i < mems.length; ++i) {
    obj.dummy.respond(mems[i]);
  }

  //(4) return object
  return obj;
}
module.exports = exports["default"];
