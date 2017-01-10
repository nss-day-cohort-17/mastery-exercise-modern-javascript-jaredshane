Battledome.cylonType = {};
// cylon types

Battledome.cylonType.oldCylon = function() {
  this.type = "Old Cylon";
  this.health = this.health(40, 100) + 40;
  this.damage = this.damage(25, 35)- 10;
  this.image = "images/cylon1970s.png"
}

Battledome.cylonType.oldCylon.prototype = new Battledome.cylonBase.cylon();

console.log(Battledome.cylonType.oldCylon.prototype)
console.log(new Battledome.cylonType.oldCylon)

Battledome.cylonType.newCylon = function() {
  this.type = "New Cylon";
  this.damage = this.damage + 50;
  this.health = this.health + 5;
  this.image = "images/newCylon.png"
}

Battledome.cylonType.newCylon.prototype = new Battledome.cylonBase.cylon();

console.log(Battledome.cylonType.newCylon)

Battledome.cylonType.humanCylon = function () {
  this.type = "Human Cylon";
  this.damage = this.damage - 20;
  this.health = this.health + 100
  console.log(this.health)
}

Battledome.cylonType.humanCylon.prototype = new Battledome.cylonBase.cylon();

console.log(Battledome.cylonBase.cylon.oldCylon)

//cylon models

Battledome.cylonType.commandCylon = function() {

}
