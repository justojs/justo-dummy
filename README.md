# justo-dummy

A test dummy library.

Proudly made in Valencia, Spain, EU.

Features:

- Allow to create function dummies.
- Allow to create object dummies.

## Install

`npm install justo-dummy`

## dummy()

The `dummy()` function is used to create the dummies.

## Function dummy

A **function dummy** does nothing. When it is called, it always returns `undefined`.
The `dummy()` signature to use is:

```
dummy() : function
```

Example:

```
var fn = dummy();
```

## Object dummy

An **object dummy** is an object whose members always return `undefined`.
The `dummy()` signature to use is:

```
dummy(instance : object) : object
```

The `instance` is the instance object to double.

Example:

```
var obj = dummy({});
```

### API dummy

The object returned by the `dummy()` function is the same object, but it contains
a new property, `dummy`, which is used to configure the object dummy.

### Configuring responses

The object dummies can configure responses for attributes and methods. This
configuration is very easy. We must use the `dummy` property of the object dummy.

#### Configuring methods

To configure a method response, we will use the `respond()` method of the API object:

```
respond(name : string)
```

The `name` parameter is the method name to double.

Example:

```
var calcul = dummy({});

calcul.dummy.respond("sum");
calcul.dummy.respond("sub");
```

Once we have added a response, we will see the method in the object.

#### Configuring attributes

To configure an attribute response, we will use the following signature of the
`respond()` method:

```
respond(name : string, type : string)
```

The `name` parameter is the attribute name. On the other hand, `type` indicates
the member type to double: `attr` or `attribute` for attributes and `method` for
methods, being `method` the default value.

Example:

```
var list = dummy();

list.dummy.respond("length", "attr");
```

Once we have added a response, we will see the attribute in the object.
