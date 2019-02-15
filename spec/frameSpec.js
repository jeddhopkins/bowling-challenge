describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('initialising a frame', function() {
    it('should not have rolled already', function() {
      expect(frame.firstBowl).toEqual(null);
    });
    it('the player should not have a score', function() {
      expect(frame.score).toEqual(0);
    });
    it('the pincount should be 10', function() {
      expect(frame.pincount).toEqual(10)
    })
  });

  describe('bowl', function() {
    beforeEach(function() {
      frame.bowl(4);
      frame.bowl(6);
    });

    it('can play bowls number one & two', function() {
      expect(frame.firstBowl).toEqual(4)
      expect(frame.secondBowl).toEqual(6)
    });
    it('the score updates after each bowl', function() {
      expect(frame.score).toEqual(10)
    });
    it('the pincount updates accordingly after each bowl', function() {
      expect(frame.pincount).toEqual(0)
    })
    it('the shotcount increases with every bowl', function() {
      expect(frame.shotcount).toEqual(2)
    })
  });

  describe('isStrike', function() {
    it('recognises that the player has scored a strike', function() {
      frame.bowl(10)
      expect(frame.isStrike()).toEqual(true)
    })
    it('recognises that the player has not scored a strike', function() {
      frame.bowl(9)
      expect(frame.isStrike()).toEqual(false)
    })
  })

  describe('isSpare', function() {
    it('recognises that the player has scored a spare', function() {
      frame.bowl(6)
      frame.bowl(4)
      expect(frame.isSpare()).toEqual(true)
    })
    it('recognises that the player has not scored a spare', function() {
      frame.bowl(5)
      frame.bowl(4)
      expect(frame.isSpare()).toEqual(false)
    })
  })

  describe('isOver', function() {
    it('ends the frame after two 0 bowls', function() {
      frame.bowl(0)
      frame.bowl(0)
      expect(frame.isOver()).toEqual(true)
    })
    it('ends the frame after two random bowls', function() {
      frame.bowl(5)
      frame.bowl(3)
      expect(frame.isOver()).toEqual(true)
    })
    it('ends the frame after a spare', function() {
      frame.bowl(5)
      frame.bowl(5)
      expect(frame.isOver()).toEqual(true)
    })
    it('ends the frame after a strike', function() {
      frame.bowl(10)
      expect(frame.isOver()).toEqual(true)
    })
  })
});
