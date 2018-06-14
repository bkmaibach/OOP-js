//A class in JS is really just a constructor:
var Car = function(loc){
    //A new object can be created as a literal, or by specifying a prototype
    //var obj = {loc: loc}; //A new object is created
    var obj = Object.create(Car.methods);
    obj.loc = loc;
    //extend(obj, Car.methods); //The methods are added onto the car object
    
    return obj; //The constructor returns the object
};

    //In this example, methods of a class are contained in an object property of the constructor. Remember, functions are themselves objects that can have properties,
    //and properties can be objects full of functions.
    //Classes are constructors, constructors are functions. Functions are objects. Objects have properties, such as objects full of methods.

Car.methods = {
    move : function(){
        this.loc++;
    }
}