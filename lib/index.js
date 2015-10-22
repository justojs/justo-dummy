//imports
import FunctionDummy from "./FunctionDummy";
import ObjectDummy from "./ObjectDummy";

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
export default function dummy(...args) {
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
 * @param obj:object            The instance object.
 * @param mems:string|string[]  The members to double.
 */
function createObjectDummy(obj, mems = []) {
  //(1) arguments
  if (typeof(mems) == "string") mems = [mems];

  //(2) create dummy object
  Object.defineProperty(obj, "dummy", {value: new ObjectDummy(obj)});

  //(3) add responses
  for (var i = 0; i < mems.length; ++i) {
    obj.dummy.respond(mems[i]);
  }

  //(4) return object
  return obj;
}
