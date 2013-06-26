function Hug(strength) {
  this.strength = strength;
}

Hug.prototype.embrace = function(length) {
  return 'Thanks, that was a good hug for ' + length + ' minutes!';
}

Hug.prototype.patBack = function(onDone) {
  onDone('All done.');
}

function HugDatabase() {
  this.hugs = [];
}

HugDatabase.prototype.addHug = function(hug) {
  this.hugs.push(hug);
}
