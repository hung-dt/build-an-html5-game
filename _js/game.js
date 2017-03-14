var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Game = (function($){
  var Game = function(){
    this.init = function(){
      $(".but_start_game").bind("click",startGame);
      alert("Game init completed!");
    };
    var startGame = function(){
      $(".but_start_game").unbind("click");
      BubbleShoot.UI.hideDialog();
    };
  };
  return Game;
})(jQuery);