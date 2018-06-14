var sagas = [];
var hero = newHero();
var newSaga = function(){
    var foil = newFoil();
    sagas.push(function(){ 
        var deed = newDeed();
        console.log(hero+deed+foil);
    });
};
newSaga();
sagas[0]();
sagas[0](); //The second time this is done, the hero and foil remain the same, but a new deed is generated
newSaga(); //A new foil is generated, and a new funciton object is pused to the sagas[1] spot.
 
//The takeaway of this lesson is that an execution context can be retained even after a function is completed.
//This is the beauty of being able to store a function as an object inside an array.