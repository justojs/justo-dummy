/**
 * A test dummy for an object.
 *
 * @readonly instance:object  The instance object to double.
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
   * @param name:string    The method name.
   */
  respond(name) {
    if (/^@/.test(name)) this.respondAttribute(name.substr(1));
    else if (/\(\)$/.test(name)) this.respondMethod(name.replace("()", ""));
    else throw new Error(`Member name must be 'method()' or '@attr'. Received: ${name}.`);
  }

  /**
   * Adds an attribute response.
   *
   * @protected
   * @param name:string  The attribute name.
   */
  respondAttribute(name) {
    Object.defineProperty(this.instance, name, {value: undefined, enumerable: true});
  }

  /**
   * Adds a method response.
   *
   * @protected
   * @param name:string  The method name.
   */
  respondMethod(name) {
    Object.defineProperty(this.instance, name, {value: function() { }, enumerable: true});
  }
}
