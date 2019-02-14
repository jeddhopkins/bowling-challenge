describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('initialising a scorecard', function() {
    it('should be empty to begin with', function() {
      expect(scorecard.frame).toEqual([]);
    });

    it('should have a score of zero', function() {
      expect(scorecard.score).toEqual(0);
    });
  });

});
