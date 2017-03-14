var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.UI = (function($){
  var UI = {
    init : function(){
    },
    hideDialog : function(){
      $(".dialog").fadeOut(500);
    }
  };
  return UI;
})(jQuery);