var $ = require('jquery');

var Ball = (function() {
  function Ball(options) {
    this.domId = options.domId;
    this.r = options.radius;
    this.position = options.position;
    this.m = options.mass;
    this.v = options.velocity;
    this.$container = $("<div class='ball'></div>")
  }

  Ball.prototype.updateTemplate = function() {
    positionLeft = this.position[0] - this.r;
    positionTop = this.position[1] - this.r;
    return "<div id = " + this.domId + " style = \"position:absolute;top:" + positionTop + ";left:" + positionLeft + ";height:" + this.r * 2 + "; width:" + this.r * 2 + "; border:1px solid; border-radius:" + this.r + "px\"" + "></div>" ;
  }

  Ball.prototype.render = function() {
    this.$container.empty().append(this.updateTemplate())
    $('body').append(this.$container);
    return this;
  }

  Ball.prototype.kickOff = function() {
    self = this;
    timer = setInterval(function (){
      positionX = self.position[0] + self.v[0]
      positionY = self.position[1] + self.v[1]
      self.position = [positionX, positionY];
      self.render();
    }, 50);
    return this;
  }

  return Ball;
})();

module.exports = Ball;
