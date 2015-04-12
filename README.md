# justo-dummy

A test dummy library.

Features:

- Allow to create function dummies.
- Allow to create object dummies.

Proudly made in Valencia, Spain, EU.

## Install

`npm install justo-dummy` 

## justo.dummy()

The `justo.dummy()` function is used to create the dummies.

## Function dummy

A function dummy does nothing. When it is called, it always returns `undefined`.
The `dummy()` signature to use is:

```
dummy() : function
``` 

Example:

```
var fn = justo.dummy();
```

## Object dummy

An object dummy is an object whose members always return `undefined`.
The `dummy()` signature to use is:

```
dummy(instance : object) : ObjectDummy
dummy(instance : object, members : object) : ObjectDummy
```

The `instance` is the instance object to double. Meanwhile, `members` define
the members to double; the name is the dummy member name and its value indicates
the member type:

- `attr` or `attribute` to define attributes.
- `method` to define methods.

Example:

```
//no dummy member 
var obj = justo.dummy({});

//with dummy members
var obj = justo.dummy(obj, {
  myAttr: "attr",
  myMethod: "method"
});
```