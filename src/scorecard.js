function Scorecard() {

  this.frames = []
  this.score = 0;
};

Scorecard.prototype.create = function () {
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame)
  }
};

Scorecard.prototype.haveGo = function (pinsHit) {
  for (var i = 0; i < this.frames.length;) {
    if (this.frames[i].firstBowl === null) {
      this.frames[i].bowl(pinsHit)
      break
  } else if (this.frames[i].secondBowl === null) {
      if (this.frames[i].isOver() === true) {
      } else {
        this.frames[i].bowl(pinsHit)
        break
      }
    }
    i++
  }
  this._updateScore()
};

Scorecard.prototype._updateScore = function () {
  var totalFrameScore = 0
  for (var n = 0; n < this.frames.length; n++) {
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
