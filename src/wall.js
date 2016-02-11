var Ball = require('./ball.js');

var Wall = (function() {
  function Wall(options) {
    if(options == null) { options = {}; }
    this.position = options.position || [300, 150];
    this.size = options.size || [1000, 600];
    this.left = this.position[0];
    this.top = this.position[1];
    this.right = this.position[0] + this.size[0];
    this.bottom = this.position[1] + this.size[1];
    // TODO: find another to pass variables to balls.
    Ball.wall = this;
  }

  Wall.prototype.render = function() {
    var template = "<div class='wall' style = \"position:absolute;top:" + this.top + ";left:" + this.left + ";height:" + this.size[1] + "; width:" + this.size[0] + "; border:1px solid;\"></div>" ;
    $('body').append(template);
  }

  return Wall;
})();

module.exports = Wall;
