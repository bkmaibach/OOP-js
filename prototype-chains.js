var gold = {a:1};
console.log(gold.a);
console.log(gold.z);

var blue = extend({}, gold)
//This copies over all the current properties of gold

blue.b = 2;
log(blue.a);//1
log(blue.b);//2
log(blue.z);//undefined

var rose = Object.create(gold);
//This creates rose with gold as the prototype.
//Failed lookups on rose are delegated to gold.


