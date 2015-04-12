"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

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
 * @param instance:object			The instance object.
 * @param [members]:object[]	The members(s) to double.
 * @example
 * obj = justo.dummy({}, {length: "attribute", getLength: "method"});
 */
exports.dummy = dummy;
//variables
var justo;

exports.justo = justo;
//(1) install
if (!global.hasOwnProperty("justo")) {
	Object.defineProperty(global, "justo", { value: {}, enumerable: true });
}

exports.justo = justo = global.justo;

//(2) create dummy()
Object.defineProperty(justo, "dummy", { value: dummy, enumerable: true });
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
	var fnDummy = new FunctionDummy();

	return function dummy() {
		return fnDummy.call();
	};
}

/**
 * Creates an object dummy.
 * 
 * @param instance:object		The instance object.
 * @param [members]:object	The members to double.
 */
function createObjectDummy(instance) {
	var members = arguments[1] === undefined ? {} : arguments[1];

	return new ObjectDummy(instance, members);
}

//imports
var FunctionDouble = require("justo-double").FunctionDouble;

/**
 * Test dummy for a function.
 */

var FunctionDummy = (function (_FunctionDouble) {
	function FunctionDummy() {
		_classCallCheck(this, FunctionDummy);

		if (_FunctionDouble != null) {
			_FunctionDouble.apply(this, arguments);
		}
	}

	_inherits(FunctionDummy, _FunctionDouble);

	_createClass(FunctionDummy, [{
		key: "call",

		/**
   * Calls the function dummy.
   */
		value: function call() {}
	}]);

	return FunctionDummy;
})(FunctionDouble);

//imports
var ObjectDouble = require("justo-double").ObjectDouble;

/**
 * A test dummy for an object.
 */

var ObjectDummy = (function (_ObjectDouble) {
	/**
  * Constructor.
  * 
  * @overload
  * @param instance:object			The instance object.
  * @param [members]:object[]	The members to double.
  */

	function ObjectDummy() {
		var _this = this;

		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		_classCallCheck(this, ObjectDummy);

		var instance, members;

		//(1) arguments
		if (args.length === 0) {
			instance = {};
		} else {
			instance = args[0];
			members = args[1];
		}

		if (!members) members = {};

		//(2) superconstructor
		_get(Object.getPrototypeOf(ObjectDummy.prototype), "constructor", this).call(this, instance);

		//(3) init
		for (var i = 0, keys = Object.keys(members); i < keys.length; ++i) {
			var _name = keys[i];

			(function (name, type) {
				var val;

				if (type == "method") val = function dummy() {};
				Object.defineProperty(_this, name, { value: val, enumerable: true });
			})(_name, members[_name]);
		}
	}

	_inherits(ObjectDummy, _ObjectDouble);

	return ObjectDummy;
})(ObjectDouble);