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


Frame.prototype._checkIfLegal = function (pinsHit) {
  if (this.shotcount === 2) { throw new Error ('Cannot exceed 2 shots per frame'); }
  if (this.pincount - pinsHit < 0) { throw new Error ('Cannot knock down more than 10 pins per frame'); }
};

Frame.prototype._updateProperties = function (pinsHit) {
  this.pincount -= pinsHit;
  this.score += pinsHit
  !this.firstBowl ? this.firstBowl = pinsHit : this.secondBowl = pinsHit
};

Frame.prototype.strike = function () {
  if (this.firstBowl === 10) { return true }
};

Frame.prototype.spare = function () {
  if (this.firstBowl + this.secondBowl === 10) { return true }
};

// frame function to see if complete?
// if strike then complete?
// frame.strike, here or on scorecard?
// frame.spare, here or on scorecard?
