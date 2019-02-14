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
    it('the pincount should still be 10', function() {
      expect(frame.pincount).toEqual(10)
    })
  });

  describe('player making a bowl', function() {
    it('can play bowl number one', function() {
      frame.bowl(7);
      expect(frame.firstBowl).toEqual(7)
    });
    it('the score updates after one bowl', function() {
      frame.bowl(3);
      expect(frame.score).toEqual(3)
    })

    it('can play bowl number two', function() {
      frame.bowl(3);
      frame.bowl(6)
      expect(frame.firstBowl).toEqual(3)
      expect(frame.secondBowl).toEqual(6)
    });
    it('the score updates after each bowl', function() {
      frame.bowl(3);
      expect(frame.score).toEqual(3);
      frame.bowl(6)
      expect(frame.score).toEqual(9)
    })
  });
});
