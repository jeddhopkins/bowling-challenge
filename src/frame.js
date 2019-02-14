function Frame() {
  this.pincount = 10
  this.firstBowl = null;
  this.secondBowl = null;
  this.shotcount = 0;
  this.score = 0;
};

Frame.prototype.bowl = function (bowl) {
  if (this.firstBowl == null) {
    this.firstBowl = bowl;
  } else {
    this.secondBowl = bowl;
  };

  this.score += bowl
};
