"use strict";var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();Object.defineProperty(exports, "__esModule", { value: true });function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var 




ObjectDummy = function () {






  function ObjectDummy(instance) {_classCallCheck(this, ObjectDummy);
    Object.defineProperty(this, "instance", { value: instance });}_createClass(ObjectDummy, [{ key: "respond", value: function respond(







    name) {
      if (/^@/.test(name)) this.respondAttribute(name.substr(1));else 
      if (/\(\)$/.test(name)) this.respondMethod(name.replace("()", ""));else 
      throw new Error("Member name must be 'method()' or '@attr'. Received: " + name + ".");} }, { key: "respondAttribute", value: function respondAttribute(








    name) {
      Object.defineProperty(this.instance, name, { value: undefined, enumerable: true });} }, { key: "respondMethod", value: function respondMethod(








    name) {
      Object.defineProperty(this.instance, name, { value: function value() {}, enumerable: true });} }]);return ObjectDummy;}();exports.default = ObjectDummy;
