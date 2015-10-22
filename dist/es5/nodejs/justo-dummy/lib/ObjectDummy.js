/**
 * A test dummy for an object.
 *
 * @readonly instance:object  The instance object to double.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

exports["default"] = ObjectDummy;
module.exports = exports["default"];
