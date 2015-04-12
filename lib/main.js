//variables
export var justo;

//(1) install
if (!global.hasOwnProperty("justo")) {
	Object.defineProperty(global, "justo", {value: {}, enumerable: true});
}

justo = global.justo;

//(2) create dummy()
Object.defineProperty(justo, "dummy", {value: dummy, enumerable: true});

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
export function dummy(...args) {
	var double;
	
	//(1) create dummy
  if (args.length === 0) double = createFunctionDummy();
  else double = createObjectDummy(...args);
  
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
function createObjectDummy(instance, members = {}) {
	return new ObjectDummy(instance, members);
}