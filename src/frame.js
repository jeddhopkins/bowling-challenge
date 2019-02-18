function Frame() {
  this.pincount = 10
  this.firstBowl = null;
  this.secondBowl = null;
  this.shotcount = 0;
  this.score = 0;
};

Frame.prototype.bowl = function (pinsHit) {
  this._checkIfLegal(pinsHit);
  this._updateProperties(pinsHit);
  this.shotcount++;
};

Frame.prototype.isOver = function () {
  if (this.isStrike() === true) { return true }
  else if (this.isSpare() === true) { return true }
  else if (this.shotcount === 2) { return true }
  else { return false }

};

Frame.prototype.isSpare = function () {
  if ((this.firstBowl + this.secondBowl === 10) && (typeof this.secondBowl === 'number')) {
    return true
  } else {
    return false
  }
};

Frame.prototype.isStrike = function () {
  if (this.firstBowl === 10) {
    return true
  } else {
    return false
  }
};

Frame.prototype._checkIfLegal = function (pinsHit) {
  if (this.pincount - pinsHit < 0) { throw new Error ('Cannot knock down more than 10 pins per frame'); }
};

Frame.prototype._updateProperties = function (pinsHit) {
  this.pincount -= pinsHit;
  this.score += pinsHit;
  (this.firstBowl === null) ? (this.firstBowl = pinsHit) : (this.secondBowl = pinsHit)
};
