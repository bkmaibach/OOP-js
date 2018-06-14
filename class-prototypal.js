//This is the true example of JS classes
//Car.prototype is used to delegate failed lookups on the newly created car obj
//However, there is nothing special about the .prototype property: metally rename it the .methods property because it works exactly the same way as the class-intro.js example
var Car = function(loc){
    var obj = Object.create(Car.prototype);
    obj.loc = loc;
    return obj;
}

//The .prototype property is just an object that exists without having to explicitly declare it, and is bundled together with every and any function
//just in case that function is to be used as a constructor.
Car.prototype.move = function(){
    //Remember that "this" will eventually refer to the object instance that will be calling this move function with a dot.
    this.loc++;
};

//There is an inconvenient lexical ambiguity when refering to "prototype"
//If someone says "object1's prototype is object2" it is reasonable to think that failed lookups on object1 should fall through to object2
//So we might say for example "Amy's prototype is Car.prototype." Where Amy is an instance of Car (it was created using the constructor function Car())
//But this is not the relationship that Car has with Car.prototype. Failed lookups on the Car object are not delegated to Car.prototype.
//This confusion stems from the fact that unlike Java, JS classes are merely functions and are equivelant structures to instances themselves.

var amy = Car(1);

//This is the only special feature about the .prototype method
console.log(Car.prototype.constructor)
//is equivelant to
console.log(Car)
//is equivelant to
console.log(amy.constructor);
//Since amy.constructor is a failed lookup on the instance that is delegated to the prototype.
//This is useful for refering to the constructor that crated a particular object isntance.

log(amy instanceof Car) //Prints true

