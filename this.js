var r = "red";
var g = "green";
var b = "blue";

var fn = function(a, b) {
    console.log("##################################################");
    console.log(this, a, b);
    console.log("##################################################");
};

//"this" does not refer to fn
//"this" does not necessarily refer to an object that defines fn as a method
//"this" does not refer to an execution context or a scope

//"this" refers to the CALLING INSTANCE of an object whos method is defined as fn, the object that a function is being "looked up upon" when that function is being invoked
// - the object to the left of the dot.
var obj = {methodProperty: fn, stringProperty: g}
obj.methodProperty(r,g);

//It means it works like a "zeroth" parameter of any funciton, even if that parameter is the global object (ie "this" is being called from a function that is not a method)
fn(g,b);

//The "this" parameter can be added as a "zeroth" parameter manually in this case if you don't want this to refer to the global object
fn.call(r, g, b)

//or even the calling object
obj.methodProperty.call(r,g,b)

//setTimeout will call a funciton for us a second later. This can get a bit confusing.
setTimeout(fn, 1000);
//No values are passed to the function invocation, the parameters are effectively set to undefined, the "this" will refer to the global object.

//even when passed in this way, the parameter "this" will still refer to the global object at runtime, because the method was not actually invoked when it was being passed as the callback.
setTimeout(obj.methodProperty, 1000)

//One confusing aspect is that within the global scope, "this" does not refer to a calling object but once again refers to the global object.
log(this); //logs the  global object, "this" does not act like any kind of parameter in this case.

//In the following confusing case, the keyword new will refer to an entirely new object that gets created in the background.
new obj.methodProperty(r, g)
