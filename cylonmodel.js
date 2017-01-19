Battledome.cylonType = {};


// cylon types

Battledome.cylonType.oldCylon = function() {
  this.type = "Old Cylon";
  this.health = this.health(50, 150);
  this.damage = this.damage(45, 85);
  this.image = "images/cylon1970s.png"
}

Battledome.cylonType.oldCylon.prototype = new Battledome.cylonBase.cylon();

// console.log(Battledome.cylonType.oldCylon.prototype)
// console.log(new Battledome.cylonType.oldCylon)

Battledome.cylonType.newCylon = function() {
  this.type = "New Cylon";
  this.damage = this.damage(30, 100);
  this.health = this.health(55, 200);
  this.image = "images/newCylon.png"
}

Battledome.cylonType.newCylon.prototype = new Battledome.cylonBase.cylon();

// console.log(Battledome.cylonType.newCylon)

Battledome.cylonType.humanCylon = function () {
  this.type = "Human Cylon";
  this.damage = this.damage(25, 70);
  this.health = this.health(50, 400);
}

Battledome.cylonType.humanCylon.prototype = new Battledome.cylonBase.cylon();

// console.log(Battledome.cylonBase.cylon.oldCylon)

// old cylon models

Battledome.cylonType.commandOldCylon = function() {
  this.model = "Command Old Cylon";
  this.damage = this.damage + 5;
  this.health = this.health + 20;
}

// Battledome.cylonType.commandOldCylon.prototype = new Battledome.cylonType.oldCylon

Battledome.cylonType.soldierOldCylon = function () {
  this.model = "Soldier Old Cylon";
  this.damage = this.damage - 20;
  this.health = this.health - 25;
}

Battledome.cylonType.soldierOldCylon.prototype = new Battledome.cylonType.oldCylon

// console.log("new Battledome.cylonType.soldierOldCylon", new Battledome.cylonType.soldierOldCylon);

Battledome.cylonType.pilotOldCylon = function () {
  this.model = "Pilot Old Cylon";
  this.damage = this.damage - 30;
  this.health = this.health + 50;
}

Battledome.cylonType.pilotOldCylon.prototype = new Battledome.cylonType.oldCylon

// console.log(new Battledome.cylonType.pilotOldCylon)

//new cylon models

Battledome.cylonType.commandNewCylon = function () {
  this.model = "Command New Cylon";
  this.health = this.health + 10;
  this.damage = this.damage + 20;
}

Battledome.cylonType.commandNewCylon.prototype = new Battledome.cylonType.newCylon

// console.log(new Battledome.cylonType.commandNewCylon)

Battledome.cylonType.soldierNewCylon = function () {
  this.model = "Solider New Cylon";
  this.health = this.health + 3;
  this.damage = this.damage - 10;
}

Battledome.cylonType.soldierNewCylon.prototype = new Battledome.cylonType.newCylon

console.log(new Battledome.cylonType.soldierNewCylon)

Battledome.cylonType.pilotNewCylon = function () {
  this.model = "Pilot New Cylon";
  this.health = this.health + 50;
  this.damage = this.damage - 15;
}

Battledome.cylonType.pilotNewCylon.prototype = new Battledome.cylonType.newCylon

// console.log(new Battledome.cylonType.pilotNewCylon)

// human cylon models

Battledome.cylonType.numberTwo = function () {
  this.model = "Number Two";
  this.health = this.health - 10;
  this.damage = this.damage + 25;
}

Battledome.cylonType.numberTwo.prototype = new Battledome.cylonType.humanCylon

// console.log(new Battledome.cylonType.numberTwo)

Battledome.cylonType.cylonTigh = function () {
  this.model = "Saul Tigh";
  this.health = this.health - 25;
  this.damage = this.damage - 20;
}

Battledome.cylonType.cylonTigh.prototype = new Battledome.cylonType.humanCylon

console.log(new Battledome.cylonType.cylonTigh)

Battledome.cylonType.numberEight = function () {
  this.model = "Number Eight";
  this.health = this.health + 5;
  this.damage = this.damage + 10;
}

Battledome.cylonType.numberEight.prototype = new Battledome.cylonType.humanCylon

console.log(new Battledome.cylonType.numberEight)

// Gauntlet.GuildHall.Fighter = function() {
//   this.healthBonus = 20;
//   this.strengthBonus = 10;
// };
// Gauntlet.GuildHall.Fighter.prototype = new Gauntlet.GuildHall.PlayerClass();
//
//
// Gauntlet.GuildHall.Warrior = function() {
//   this.name = "Warrior";
//   this.healthBonus = this.healthBonus + 25;
//   this.strengthBonus = this.strengthBonus + 30;
//   this.image = "images/warrior.png";
// };
// Gauntlet.GuildHall.Warrior.prototype = new Gauntlet.GuildHall.Fighter();
