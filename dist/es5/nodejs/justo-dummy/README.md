# justo-dummy

A test dummy library.

Features:

- Allow to create function dummies.
- Allow to create object dummies.

Proudly made in Valencia, Spain.

## Install

`npm install justo-dummy` 

## justo.dummy()

The justo.dummy() function is used to create the dummies.

To create a function dummy:

```
var double = justo.dummy();
```

To create an object dummy:

```
var double = justo.dummy({});
var double = justo.dummy({}, {myAttr: "attr", myMethod: "method"});
```

## Function dummy

A function dummy does nothing. When it is called, it always returns `undefined`.

Example:

```
var fn = justo.dummy();
fn();
```

## Object dummy

An object dummy is an object whose attributes always return `undefined` and
methods also.

To define an attribute or a method, we must use the justo.dummy() or the
define() method:

