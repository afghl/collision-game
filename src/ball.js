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
    template = "<div id = " + this.domId + "> haha</div>"
    $('body').append(template);
  }

  return Ball;
})();

module.exports = Ball;
