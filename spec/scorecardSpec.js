describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

    it('should have a score of zero', function() {
      expect(scorecard.score).toEqual(0);
    });

  describe('create', function() {
    it('creates a gamne with ten identical frames', function() {
      scorecard.create();
      console.log(this.frames);
      expect(scorecard.frames.length).toEqual(10);
    })
  })
});
