var Bee = function() {
  // using the call method allows me to call a function defined somewhere else and allowing access in the current context
  // what parameter?
  // I want the reference from this object
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

