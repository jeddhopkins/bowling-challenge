function Frame() {
  this.pincount = 10
  this.firstBowl = null;
  this.secondBowl = null;
  this.shotcount = 0;
  this.score = 0;
  this.bonus = 0;
  this.bonusBowl = null;
};

Frame.prototype.bowl = function (pinsHit) {
  this._checkIfLegal(pinsHit);
  this._updateProperties(pinsHit);
  this.shotcount++;
};

Frame.prototype.isStrike = function () {
  return this.firstBowl === 10;
};

Frame.prototype.isSpare = function () {
  return ((this.firstBowl + this.secondBowl === 10) && (this.secondBowl)) ? true : false ;
};

Frame.prototype.isOver = function () {
  if (this.isStrike()) { return true }
  if (this.isSpare()) { return true }
  if (this.shotcount === 2) { return true }
};

Frame.prototype._checkIfLegal = function (pinsHit) {
  if (this.pincount - pinsHit < 0) { throw new Error ('Cannot knock down more than 10 pins per frame'); }
};

Frame.prototype._updateProperties = function (pinsHit) {
  this.pincount -= pinsHit;
  this.score += pinsHit
  this.firstBowl === null ? this.firstBowl = pinsHit : this.secondBowl = pinsHit
};

// frame function to see if complete?
// if strike then complete?
