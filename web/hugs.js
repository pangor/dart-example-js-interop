function Hug(strength) {
  this.strength = strength;
}

Hug.prototype.embrace = function(length) {
  return 'Thanks, that was a good hug for ' + length + ' minutes!';
}

Hug.prototype.patBack = function(onDone) {
  onDone('All done.');
}