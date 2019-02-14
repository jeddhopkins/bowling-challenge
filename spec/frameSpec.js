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
    it('can play bowl number one', function() {
      frame.bowl(7);
      expect(frame.firstBowl).toEqual(7)
    });
    it('can play bowl number two', function() {
      frame.bowl(3);
      expect(frame.firstBowl).toEqual(3)
      frame.bowl(6)
      expect(frame.secondBowl).toEqual(6)
    });
    it('the score updates after each bowl', function() {
      frame.bowl(3);
      expect(frame.score).toEqual(3);
      frame.bowl(6)
      expect(frame.score).toEqual(9)
    });
    it('the pincount updates accordingly after each bowl', function() {
      frame.bowl(3);
      expect(frame.pincount).toEqual(7);
      frame.bowl(6)
      expect(frame.pincount).toEqual(1)
    })
    it('the shotcount increases with every bowl', function() {
      frame.bowl(3);
      expect(frame.shotcount).toEqual(1);
      frame.bowl(6)
      expect(frame.shotcount).toEqual(2)
    })
  });

  describe('strike', function() {
    it('recognises that the player has scored a strike', function() {
      frame.bowl(10)
      expect(frame.strike()).toEqual(true)
    })
  })

  describe('spare', function() {
    it('recognises that the player has scored a spare', function() {
      frame.bowl(5)
      frame.bowl(5)
      expect(frame.spare()).toEqual(true)
    })
  })
});
