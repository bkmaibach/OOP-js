//adds car properties to an object, it is a decorator with an adjective name by convention
var carlike = function(obj, loc){
    obj.loc = loc;
    obj.move =  function(){
        obj.loc++;
    };
    return obj;
};

//It is valueable to factor repeated code out into a function
//Because changing the code down the line menas theres only one place you need to change.
