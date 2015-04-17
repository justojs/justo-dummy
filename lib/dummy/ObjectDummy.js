/**
 * A test dummy for an object.
 *
 * @readonly instance:object	The instance object to double.
 */
class ObjectDummy {
	/**
	 * Constructor.
	 *
	 * @overload
	 * @param(attr) instance
	 */
	constructor(instance) {
		Object.defineProperty(this, "instance", {value: instance});
	}

	/**
	 * Adds a response.
	 *
	 * @overload Method response
	 * @param name:string		The method name.
	 * @param [type]:string	The member type: method.
	 *
	 * @overload Attribute response
	 * @param name:string	The attribute name.
	 * @param type:string	The member type: attr or attribute.
	 */
	respond(name, type = "method") {
		if (type == "attr" || type == "attribute") {
			this.respondAttribute(name);
		} else {
			this.respondMethod(name);
		}
	}

	/**
	 * Adds an attribute response.
	 *
	 * @protected
	 * @param name:string	The attribute name.
	 */
	respondAttribute(name) {
		Object.defineProperty(this.instance, name, {value: undefined, enumerable: true});
	}

	/**
	 * Adds a method response.
	 *
	 * @protected
	 * @param name:string	The method name.
	 */
	respondMethod(name) {
		Object.defineProperty(this.instance, name, {value: function() { }, enumerable: true});
	}
}
