"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a test dummy.
 *
 * @overload Function dummy
 * @noparam
 *
 * @overload Object dummy for an object
 * @param instance:object      The instance object.
 */
exports.dummy = dummy;

function dummy() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var double;

  //(1) create dummy
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
 * @param instance:object    The instance object.
 */
function createObjectDummy(instance) {
  Object.defineProperty(instance, "dummy", { value: new ObjectDummy(instance) });
  return instance;
}

/**
 * Test dummy for a function.
 */

var FunctionDummy = (function () {
  function FunctionDummy() {
    _classCallCheck(this, FunctionDummy);
  }

  _createClass(FunctionDummy, [{
    key: "call",

    /**
     * Calls the function dummy.
     */
    value: function call() {}
  }]);

  return FunctionDummy;
})();

/**
 * A test dummy for an object.
 *
 * @readonly instance:object  The instance object to double.
 */

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

  _createClass(ObjectDummy, [{
    key: "respond",

    /**
     * Adds a response.
     *
     * @param name:string    The method name.
     */
    value: function respond(name) {
      if (/^@/.test(name)) this.respondAttribute(name.substr(1));else if (/\(\)$/.test(name)) this.respondMethod(name.replace("()", ""));else throw new Error("Member name must be 'method()' or '@attr'. Received: " + name + ".");
    }
  }, {
    key: "respondAttribute",

    /**
     * Adds an attribute response.
     *
     * @protected
     * @param name:string  The attribute name.
     */
    value: function respondAttribute(name) {
      Object.defineProperty(this.instance, name, { value: undefined, enumerable: true });
    }
  }, {
    key: "respondMethod",

    /**
     * Adds a method response.
     *
     * @protected
     * @param name:string  The method name.
     */
    value: function respondMethod(name) {
      Object.defineProperty(this.instance, name, { value: function value() {}, enumerable: true });
    }
  }]);

  return ObjectDummy;
})();