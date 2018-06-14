//A class in JS is really just a constructor:
var Car = function(loc){
    var obj = {loc: loc}; //A new object is created
    obj.loc = loc;
    obj.move= function(){
        obj.loc++;
    }
    return obj; //The constructor returns the object, all set up with properties and methods.
};