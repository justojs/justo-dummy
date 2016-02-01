"use strict";var _FunctionDummy = require("./lib/FunctionDummy");var _FunctionDummy2 = _interopRequireDefault(_FunctionDummy);var _ObjectDummy = require("./lib/ObjectDummy");var _ObjectDummy2 = _interopRequireDefault(_ObjectDummy);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}




module.exports = dummy;











function dummy() {
  var double;


  if (arguments.length === 0) double = createFunctionDummy();else 
  double = createObjectDummy.apply(undefined, arguments);


  return double;}





function createFunctionDummy() {
  var _res;


  _res = function res() {for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
    return _res.dummy.call(args);};


  Object.defineProperty(_res, "dummy", { value: new _FunctionDummy2.default() });


  return _res;}








function createObjectDummy(obj) {var mems = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  if (typeof mems == "string") mems = [mems];


  Object.defineProperty(obj, "dummy", { value: new _ObjectDummy2.default(obj) });


  for (var i = 0; i < mems.length; ++i) {
    obj.dummy.respond(mems[i]);}



  return obj;}
