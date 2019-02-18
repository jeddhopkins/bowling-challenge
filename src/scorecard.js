function Scorecard() {

  this.frames = []
  this.score = 0;
};

Scorecard.prototype.create = function () {
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame)
  }
};

Scorecard.prototype.extraRollOne = function (i) {
  if (this.frames[i+1].firstBowl === null) {
    return 0
} else {
    return this.frames[i+1].firstBowl
  }
};

Scorecard.prototype.extraRollTwo = function (i) {
    if (this.frames[i+1].secondBowl === null) {
      console.log('1');
      return this.frames[i+2].firstBowl
  } else {
    console.log('2');
      return this.frames[i+1].secondBowl
    }
};

Scorecard.prototype.spareBonus = function (i) {
  if (this.frames[i].isSpare() === true) { this.frames[i].score += this.extraRollOne(i) }
};

Scorecard.prototype.strikeBonus = function (i) {
  if (this.frames[i].isStrike() === true) { this.frames[i].score += (this.extraRollOne(i) + this.extraRollTwo(i)) }
};

Scorecard.prototype.updateFrameScore = function () {
  for (var i = 0; i < (this.frames.length); i++) {
    this.spareBonus(i);
    this.strikeBonus(i);
  }
};

Scorecard.prototype.haveGo = function (pinsHit) {
  this._resetFrameScores()
  for (var i = 0; i < (this.frames.length); i++) {
    if (this.frames[i].firstBowl === null) {
      this.frames[i].bowl(pinsHit)
      break
  } else if (this.frames[i].secondBowl === null) {
      if (this.frames[i].isOver() === false) {
        this.frames[i].bowl(pinsHit)
        break
      }
    }
  }
  this.updateFrameScore()
  this._updateTotalScore()
};

Scorecard.prototype._resetFrameScores = function () {
  for (var i = 0; i < (this.frames.length); i++) {
    this.frames[i].score = 0
    this.frames[i].score = (this.frames[i].firstBowl + this.frames[i].secondBowl)
  }
};

Scorecard.prototype._updateTotalScore = function () {
  var totalFrameScore = 0
  for (var n = 0; n < (this.frames.length); n++) {
    if (this.frames[n].isOver() === true) {
      totalFrameScore += this.frames[n].score
    }
  };
  this.score = totalFrameScore
};

// function that adds scores
// keeps track of frames, make new frames with array objects attached?
// game over function
// frame over function
