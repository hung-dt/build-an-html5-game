var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Game = (function($){
  var Game = function(){
    var curBubble;
    var board;
    var numBubbles;
    var MAX_BUBBLES = 70;

    this.init = function(){
      $(".but_start_game").bind("click",startGame);
      alert("Game init completed!");
    };

    var startGame = function(){
      $(".but_start_game").unbind("click");
      numBubbles = MAX_BUBBLES;
      BubbleShoot.UI.hideDialog();
      curBubble = getNextBubble();
      board = new BubbleShoot.Board();
      BubbleShoot.UI.drawBoard(board);
      $("#game_screen").bind("click", clickGameScreen);
    };

    var getNextBubble = function() {
      var bubble = BubbleShoot.Bubble.create();
      bubble.getSprite().addClass("cur_bubble");
      $("#board").append(bubble.getSprite());
      BubbleShoot.UI.drawBubblesRemaining(numBubbles);
      numBubbles--;
      return bubble;
    };

    var clickGameScreen = function(e) {
      var angle = BubbleShoot.UI.getBubbleAngle(curBubble.getSprite(), e);
      var duration = 750;
      var distance = 1000;
      var distX = Math.sin(angle) * distance;
      var distY = Math.cos(angle) * distance;
      var bubbleCoords = BubbleShoot.UI.getBubbleCoords(curBubble.getSprite());
      var coords = {
        x: bubbleCoords.left + distX,
        y: bubbleCoords.top - distY
      };
      BubbleShoot.UI.fireBubble(curBubble, coords, duration);
      curBubble = getNextBubble();
    };
  };

  return Game;
})(jQuery);