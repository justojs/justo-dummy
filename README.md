[![Build Status](https://travis-ci.org/justojs/justo-dummy.svg)](https://travis-ci.org/JustoJS/justo-dummy)

A test dummy library.

*Proudly made with ♥ in Valencia, Spain, EU.*

## Test doubles

A **test double** is an object that represents other, used to perform in unit testings.
There are several types of test doubles:

- **Test dummies**. Test double that responds to calls with no action.
- **Test stubs**. Test double that responds to calls with predefined responses.
- **Test spies**. Test double that monitors the calls to an object.

## Install

```
npm install justo-dummy
```

## Test dummies

A **test dummy** is an object that when it is call, it always returns `undefined`.
We can create function dummies and object dummies.

## dummy()

To create a test dummy, we must use the `dummy()` function:

```
const dummy = require("justo-dummy");
```

## Function dummy

A **function dummy** does nothing. When it is called, it always returns `undefined`.
The `dummy()` overload to use is:

```
dummy() : function
```

Example:

```
var fn = dummy();
```

## Object dummy

An **object dummy** is an object whose members always return `undefined`.
The `dummy()` overload to use is:

```
dummy(obj : object) : object
dummy(obj : object, member : string) : object
dummy(obj : object, members: string[]) : object
```

The `obj` is the object to double and the `member` and `members` parameters are
the members for doubling.

Example:

```
user = dummy(new User("user01", "password"));
user = dummy(new User("user01", "password"), "changePassword()");
user = dummy(new User("user01", "password"), ["changePassword()"]);
```

### API dummy

The object returned by the `dummy()` contains a property, `dummy`,
which is used to configure the object dummy.

### Configuring responses

The object dummies can configure responses for attributes and methods. This
configuration is very easy. We must use the `dummy` property of the object dummy.

#### Configuring methods

To configure a method response, we will use the `respond()` method of the API object:

```
respond(name : string)
```

The `name` parameter is the method name to double followed by `()`.

Example:

```
var calcul = dummy({});

calcul.dummy.respond("sum()");
calcul.dummy.respond("sub()");
```

Once we have added a response, we will see the method in the object.

#### Configuring attributes

To configure an attribute response, we will use the same signature of the
`respond()` method:

```
respond(name : string)
```

But now, the `name` parameter is the attribute name prefixed by `@`.

Example:

```
var list = dummy({});

list.dummy.respond("@length");
```

Once we have added a response, we will see the attribute in the object.
