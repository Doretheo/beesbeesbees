var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.color;
  this.food;
  this.honeyPot = 0;

};

HoneyMakerBee.prototype = Object.create(Grub.prototype);

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}

HoneyMakerBee.prototype.constructor = HoneyMakerBee;