var Car = function(loc){
    this.loc = loc;
    
};

Car.prototype.move = function(){
    this.loc++;
};

var Van = function(loc){
    //this = Object.create(Van.prototype); remember what "this" is going to refer to inside this function when it is called using new!

    //We set the value of the "zeroith parameter" within this call to Car as - assuming that new Van(n) will be called, "this". "this" will refer to the new Van being created
    //Just like it refers to the new Car instance in the Car constructor.
    //Now when Car runs, "this" isnt something created from scratch but is provided from here.
    Car.call(this, loc);
};
//The Van's prototype will need to be set to an instance of an object whose prototype is Car.prototype.
//This will have the effect of having failed lookups on a Van instance delegate to the Cat prototype
Van.prorotype = Object.create(Car.prototype);

//Setting the prototype to a new object in this way leaves the prototypes constructor property undefined, so define it here.
Van.prototype.constructor = Van;

//Now define the subcalss methods within the constructors prototype property.
Van.prototype.grab = function(){
    //...
}