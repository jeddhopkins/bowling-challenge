describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
    scorecard.create();
  });

  describe('create', function() {
    it('creates a game with ten identical frames', function() {
      expect(scorecard.frames.length).toEqual(10);
    })
  })

  describe('haveGo', function() {
    it('successfully logs one bowl', function() {
      scorecard.haveGo(6)
      expect(scorecard.frames[0].firstBowl).toEqual(6)
    })
    it('successfully logs two bowls (no spare or strike)', function() {
      scorecard.haveGo(6)
      scorecard.haveGo(2)
      expect(scorecard.frames[0].firstBowl).toEqual(6)
      expect(scorecard.frames[0].secondBowl).toEqual(2)
      expect(scorecard.frames[0].score).toEqual(8)
    })
    it('successfully logs two bowls (spare)', function() {
      scorecard.haveGo(6)
      scorecard.haveGo(4)
      expect(scorecard.frames[0].firstBowl).toEqual(6)
      expect(scorecard.frames[0].secondBowl).toEqual(4)
      expect(scorecard.frames[0].score).toEqual(10)
    })
    it('successfully logs two bowls (strike)', function() {
      scorecard.haveGo(10)
      expect(scorecard.frames[0].firstBowl).toEqual(10)
      expect(scorecard.frames[0].score).toEqual(10)
    })
    it('successfully logs 2 frames (4 bowls)', function() {
      scorecard.haveGo(6)
      scorecard.haveGo(2)
      scorecard.haveGo(6)
      scorecard.haveGo(2)
      expect(scorecard.frames[1].firstBowl).toEqual(6)
      expect(scorecard.frames[1].secondBowl).toEqual(2)
      expect(scorecard.score).toEqual(16)
    })
    it('successfully logs 2 frames (2 spares)', function() {
      scorecard.haveGo(6)
      scorecard.haveGo(4)
      scorecard.haveGo(6)
      scorecard.haveGo(4)
      expect(scorecard.frames[1].firstBowl).toEqual(6)
      expect(scorecard.frames[1].secondBowl).toEqual(4)
      expect(scorecard.score).toEqual(20)
    })
    it('successfully logs 2 frames (2 strikes)', function() {
      scorecard.haveGo(10)
      scorecard.haveGo(10)
      expect(scorecard.frames[0].firstBowl).toEqual(10)
      expect(scorecard.frames[1].firstBowl).toEqual(10)
      expect(scorecard.score).toEqual(20)
    })


  })


});
