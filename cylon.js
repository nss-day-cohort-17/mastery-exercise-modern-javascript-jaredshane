//create the Battledome object to hold all the other constructor functions

var Battledome = Battledome || {}

//create Cylon types object

Battledome.cylonType = {}

// create base cylon

Battledome.cylonType.cylon = function(name) {
  this.health = 0;
  this.damage = 0;
  this.name = "Cylon"

}

// cylon types

Battledome.cylonType.oldCylon = function() {
  this.type = "Old Cylon";
  this.health = this.health + 40;
  this.damage = this.damage - 10;
  this.image = "images/cylon1970s.png"
}

Battledome.cylonType.oldCylon.prototype = new Battledome.cylonType.cylon();


Battledome.cylonType.newCylon = function() {
  this.type = "New Cylon";
  this.damage = this.damage + 50;
  this.health = this.health + 5;
  this.image = "images/newCylon.png"
}

Battledome.cylonType.newCylon.prototype = new Battledome.cylonType.cylon();

console.log(Battledome.cylonType.newCylon)

Battledome.cylonType.humanCylon = function () {
  this.type = "Human Cylon";
  this.damage = this.damage - 20;
  this.health = this.health + 100
  console.log(this.health)
}

Battledome.cylonType.humanCylon.prototype = new Battledome.cylonType.cylon();

console.log(Battledome.cylonType)

//cylon models

Battledome.cylonType.commandCylon = function() {

}





// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
