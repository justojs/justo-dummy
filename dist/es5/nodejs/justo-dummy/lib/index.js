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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.dummy = dummy;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

  Object.defineProperty(res, "dummy", { value: new FunctionDummy() });

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
  Object.defineProperty(obj, "dummy", { value: new ObjectDummy(obj) });

  //(3) add responses
  for (var i = 0; i < mems.length; ++i) {
    obj.dummy.respond(mems[i]);
  }

  //(4) return object
  return obj;
}

/**
 * Test dummy for a function.
 */

var FunctionDummy = (function () {
  function FunctionDummy() {
    _classCallCheck(this, FunctionDummy);
  }

  /**
   * A test dummy for an object.
   *
   * @readonly instance:object  The instance object to double.
   */

  _createClass(FunctionDummy, [{
    key: "call",

    /**
     * Calls the function dummy.
     */
    value: function call() {}
  }]);

  return FunctionDummy;
})();

var ObjectDummy = (function () {
  /**
   * Constructor.
   *
   * @overload
   * @param(attr) instance
   */

  function ObjectDummy(instance) {
    _classCallCheck(this, ObjectDummy);

    Object.defineProperty(this, "instance", { value: instance });
  }

  /**
   * Adds a response.
   *
   * @param name:string    The method name.
   */

  _createClass(ObjectDummy, [{
    key: "respond",
    value: function respond(name) {
      if (/^@/.test(name)) this.respondAttribute(name.substr(1));else if (/\(\)$/.test(name)) this.respondMethod(name.replace("()", ""));else throw new Error("Member name must be 'method()' or '@attr'. Received: " + name + ".");
    }

    /**
     * Adds an attribute response.
     *
     * @protected
     * @param name:string  The attribute name.
     */
  }, {
    key: "respondAttribute",
    value: function respondAttribute(name) {
      Object.defineProperty(this.instance, name, { value: undefined, enumerable: true });
    }

    /**
     * Adds a method response.
     *
     * @protected
     * @param name:string  The method name.
     */
  }, {
    key: "respondMethod",
    value: function respondMethod(name) {
      Object.defineProperty(this.instance, name, { value: function value() {}, enumerable: true });
    }
  }]);

  return ObjectDummy;
})();
