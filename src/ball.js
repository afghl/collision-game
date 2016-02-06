var $ = require('jquery');

var Ball = (function() {
  function Ball(options) {
    this.domId = options.domId;
    this.r = options.radius;
    this.position = options.position;
    this.m = options.mass;
    this.a = options.acceleratedSpeed;
    this.v = options.velocity;
  }

  Ball.prototype.render = function (){
    template = "<div id = " + this.domId
    + " style = \"position:absolute;top:" + this.position[0] + ";left:" + this.position[1] + ";height:" + this.r * 2 + "; width:" + this.r * 2 + "; border:1px solid; border-radius:" + this.r + "px\""
    + "></div>"
    $('body').append(template);
  }

  return Ball;
})();

module.exports = Ball;
