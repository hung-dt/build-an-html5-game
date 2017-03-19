var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.UI = (function($){
  var UI = {
    BUBBLE_DIMS: 44,
    ROW_HEIGHT: 40,

    init : function(){
    },

    hideDialog : function(){
      $(".dialog").fadeOut(500);
    },

    getMouseCoords: function(e) {
      var coords = {x: e.pageX, y: e.pageY};
      return coords;
    },

    getBubbleCoords: function(bubble) {
      var bubbleCoords = bubble.position();
      bubbleCoords.left += UI.BUBBLE_DIMS/2;
      bubbleCoords.top  += UI.BUBBLE_DIMS/2;
      return bubbleCoords;
    },

    getBubbleAngle: function(bubble, e) {
      var mouseCoords = UI.getMouseCoords(e);
      var bubbleCoords = UI.getBubbleCoords(bubble);
      var gameCoords = $("#game_screen").position();
      var boardLeft = 120;
      var angle = Math.atan((mouseCoords.x - bubbleCoords.left - boardLeft)
        / (bubbleCoords.top + gameCoords.top - mouseCoords.y));
      if (mouseCoords.y > bubbleCoords.top + gameCoords.top) {
        angle += Math.PI;
      }
      return angle;
    },

    fireBubble: function(bubble, coords, duration) {
      bubble.getSprite().animate({
        left: coords.x - UI.BUBBLE_DIMS/2,
        top: coords.y - UI.BUBBLE_DIMS/2
      },
      {
        duration: duration,
        easing: "linear"
      });
    },
    drawBoard: function(board) {
      var rows = board.getRows();
      var gameArea = $("#board");
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        for (var j = 0; j < row.length; j++) {
          var bubble = row[j];
          if (bubble) {
            var sprite = bubble.getSprite();
            gameArea.append(sprite);
            var left = j * UI.BUBBLE_DIMS / 2;
            var top = i * UI.ROW_HEIGHT;
            sprite.css({
              left: left,
              top: top
            });
          }
        }
      }
    }
  };
  return UI;
})(jQuery);