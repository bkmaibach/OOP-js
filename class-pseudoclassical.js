//when calling a function using the keyword new (see bottom), two lines are added to our constructor function implicitly:
var Car = function(loc){
    //this = Object.create(Car.prototype):
    //"this" oincve again refers to the instance which is constructed and returned by our Car function.
    //Assigning to "this" is not really something that we can do ourselves, but is a useful way of understanding what the interpreter is doing.
    
    //Do constructory stuff like initializing instance variables using parameters using the keyword this.
    this.loc = loc;

    //return this;
    //Implicitly, "this" is returned, once again, not something that we could write ourselves but useful to think this way.

    //Notice that in this section, everything that makes each instance different is defined, typically using the parameters.
}

//Our prototype stuff here remains the same. Once again, think of .prototype as .methods, and remember that its what failed lookups default to.
Car.prototype.move = function(){
    this.loc++;

    //Notice that in this section, everything that makes object instances the same are defined
}

//Move aside prototypal pattern
//var amy = Car(1);

var amy = new Car(1);
//now the Car function is being run in constructor mode.