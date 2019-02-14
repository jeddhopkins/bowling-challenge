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

  describe('strike', function() {
    it('recognises that the player has scored a strike', function() {
      frame.bowl(10)
      expect(frame.strike()).toEqual(true)
    })
    it('recognises that the player has not scored a strike', function() {
      frame.bowl(9)
      expect(frame.strike()).toEqual(false)
    })
  })

  describe('spare', function() {
    it('recognises that the player has scored a spare', function() {
      frame.bowl(6)
      frame.bowl(4)
      expect(frame.spare()).toEqual(true)
    })
    it('recognises that the player has not scored a spare', function() {
      frame.bowl(5)
      frame.bowl(4)
      expect(frame.spare()).toEqual(false)
    })
  })
});
