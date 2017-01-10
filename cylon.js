//create the Battledome object to hold all the other constructor functions

var Battledome = Battledome || {}

//create Cylon types object

Battledome.cylonBase = {}

// create base cylon

Battledome.cylonBase.cylon = function(name) {
  this.name = name || "Cylon";
  this.health = function getHealth(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  this.damage = function getDamage(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };;

}
console.log(Battledome.cylonBase.cylon)





// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
