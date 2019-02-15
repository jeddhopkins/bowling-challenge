describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('create', function() {
    it('creates a gamne with ten identical frames', function() {
      scorecard.create();
      console.log(this.frames);
      expect(scorecard.frames.length).toEqual(10);
    })
  })

  
});
