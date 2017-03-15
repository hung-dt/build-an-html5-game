var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.UI = (function($){
  var UI = {
    BUBBLE_DIMS: 44,
    
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
    }
  };
  return UI;
})(jQuery);