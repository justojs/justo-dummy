//imports
const ObjectDouble = require("justo-double").ObjectDouble;

/**
 * A test dummy for an object.
 */
class ObjectDummy extends ObjectDouble {
	/**
	 * Constructor.
	 * 
	 * @overload
	 * @param instance:object			The instance object.
	 * @param [members]:object[]	The members to double.
	 */
	constructor(...args) {
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
		super(instance);
		
		//(3) init
		for (let i = 0, keys = Object.keys(members); i < keys.length; ++i) {
			let name = keys[i];
			
			(name, type) => {
				var val;
				
				if (type == "method") val = function dummy() {};
				Object.defineProperty(this, name, {value: val, enumerable: true});
			}(name, members[name]);
		}
	}
}