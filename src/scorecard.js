function Scorecard() {

  this.frames = [];
  this.score = 0
};

Scorecard.prototype.create = function () {
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame)
  }
};


// function that adds scores
// keeps track of frames, make new frames with array objects attached?
// game over function
// frame over function
