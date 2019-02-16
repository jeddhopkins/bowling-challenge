$(document).ready(function() {

  var scorecard = new Scorecard();
  scorecard.create();

  $('#enter0').on('click', function() {
    scorecard.haveGo(0)
    updateBowls()
    updateScores()
  })

  $('#enter1').on('click', function() {
    scorecard.haveGo(1)
    updateBowls()
    updateScores()
  })

  $('#enter2').on('click', function() {
    scorecard.haveGo(2)
    updateBowls()
    updateScores()
  })

  $('#enter3').on('click', function() {
    scorecard.haveGo(3)
    updateBowls()
    updateScores()
  })

  $('#enter4').on('click', function() {
    scorecard.haveGo(4)
    updateBowls()
    updateScores()
  })

  $('#enter5').on('click', function() {
    scorecard.haveGo(5)
    updateBowls()
    updateScores()
  })

  $('#enter6').on('click', function() {
    scorecard.haveGo(6)
    updateBowls()
    updateScores()
  })

  $('#enter7').on('click', function() {
    scorecard.haveGo(7)
    updateBowls()
    updateScores()
  })

  $('#enter8').on('click', function() {
    scorecard.haveGo(8)
    updateBowls()
    updateScores()
  })

  $('#enter9').on('click', function() {
    scorecard.haveGo(9)
    updateBowls()
    updateScores()
  })

  $('#enter10').on('click', function() {
    scorecard.haveGo(10)
    updateBowls()
    updateScores()
  })

  function updateBowls() {
    $('#frame1shot1').text(scorecard.frames[0].firstBowl);
    $('#frame1shot2').text(scorecard.frames[0].secondBowl);
    $('#frame2shot1').text(scorecard.frames[1].firstBowl);
    $('#frame2shot2').text(scorecard.frames[1].secondBowl);
    $('#frame3shot1').text(scorecard.frames[2].firstBowl);
    $('#frame3shot2').text(scorecard.frames[2].secondBowl);
    $('#frame4shot1').text(scorecard.frames[3].firstBowl);
    $('#frame4shot2').text(scorecard.frames[3].secondBowl);
    $('#frame5shot1').text(scorecard.frames[4].firstBowl);
    $('#frame5shot2').text(scorecard.frames[4].secondBowl);
    $('#frame6shot1').text(scorecard.frames[5].firstBowl);
    $('#frame6shot2').text(scorecard.frames[5].secondBowl);
    $('#frame7shot1').text(scorecard.frames[6].firstBowl);
    $('#frame7shot2').text(scorecard.frames[6].secondBowl);
    $('#frame8shot1').text(scorecard.frames[7].firstBowl);
    $('#frame8shot2').text(scorecard.frames[7].secondBowl);
    $('#frame9shot1').text(scorecard.frames[8].firstBowl);
    $('#frame9shot2').text(scorecard.frames[8].secondBowl);
    $('#frame10shot1').text(scorecard.frames[9].firstBowl);
    $('#frame10shot2').text(scorecard.frames[9].secondBowl);
    $('#frame10shot3').text(scorecard.frames[9].bonusBowl);
  };

  function updateScores() {
    $('#frame1').text(scorecard.frames[0].score);
    $('#frame2').text(scorecard.frames[1].score);
    $('#frame3').text(scorecard.frames[2].score);
    $('#frame4').text(scorecard.frames[3].score);
    $('#frame5').text(scorecard.frames[4].score);
    $('#frame6').text(scorecard.frames[5].score);
    $('#frame7').text(scorecard.frames[6].score);
    $('#frame8').text(scorecard.frames[7].score);
    $('#frame9').text(scorecard.frames[8].score);
    $('#frame10').text(scorecard.frames[9].score);
    $('#total_score').text(scorecard.score);
  }

});
