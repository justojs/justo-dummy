/**
 * Creates a test dummy.
 *
 * @overload Function dummy
 * @noparam
 *
 * @overload Object dummy for an object
 * @param instance:object			The instance object.
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
	var res;

	//(1) create dummy
	res = function(...args) {
		return res.dummy.call(args);
	};

	Object.defineProperty(res, "dummy", {value: new FunctionDummy()});

	//(2) return
	return res;
}

/**
 * Creates an object dummy.
 *
 * @param instance:object		The instance object.
 */
function createObjectDummy(instance) {
	Object.defineProperty(instance, "dummy", {value: new ObjectDummy(instance)});
	return instance;
}
