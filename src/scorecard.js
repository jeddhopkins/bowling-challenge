function Scorecard() {

  this.frames = []
  this.score = 0;
};

Scorecard.prototype.create = function () {
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame)
  }
};

Scorecard.prototype.updateScore = function () {
  // for (var i = 0; i < this.frames.length; i++) { this.score += this.frame[i].score }
  for (var i = 0; i < this.frames.length; i++) {
   this.score += this.frames[i].score
  }
};

Scorecard.prototype.haveGo = function (pinsHit) {
  for (var i = 0; i < this.frames.length;) {
    if (this.frames[i].firstBowl === null) {
      console.log("hi");
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
};
// function that adds scores
// keeps track of frames, make new frames with array objects attached?
// game over function
// frame over function
