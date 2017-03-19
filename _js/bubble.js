var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Bubble = (function($){
  // Constructor
  var Bubble = function(row, col, type, sprite) {
    var that = this;
    this.getType = function() { return type; };
    this.getColumn = function() { return col; };
    this.getRow = function() { return row; };
    this.getSprite = function() { return sprite; };
  };

  Bubble.create = function(r, c, type) {
    if (type === undefined) {
      type = Math.floor(Math.random() * 4);
    }
    var sprite = $(document.createElement("div"));
    sprite.addClass("bubble");
    sprite.addClass("bubble_" + type);
    var bubble = new Bubble(r, c, type, sprite);
    return bubble;
  };

  return Bubble;
})(jQuery);
