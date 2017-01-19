var player1;

var player2;

$('.saveNameButton').click(function (e) {
  player1 = $('.player1Input')[0].value;
  player2 = $('.player2Input')[0].value;
  console.log($('.player1Input')[0].value)
  console.log($('.player2Input')[0].value);
  if (player1 == "") {
    alert('whoaaaa enter a name for player 1, bud')
  } else if (player2 == "") {
    alert('hey partner, enter a name for player 2')
  }
});
