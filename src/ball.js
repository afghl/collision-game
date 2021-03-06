var $ = require('jquery');
var CollisionResolver = require('./collision_resolver.js');

var Ball = (function() {
  function Ball(options) {
    this.domId = options.domId;
    this.r = options.radius;
    this.position = options.position;
    this.m = options.mass;
    this.v = options.velocity;
    this.$container = $("<div class='ball'></div>")
    Ball.allBalls.push(this);
  }

  if (Ball.allBalls == null) { Ball.allBalls = []; }

  Ball.prototype.updateTemplate = function() {
    var positionLeft = this.position[0] - this.r;
    var positionTop = this.position[1] - this.r;
    return "<div id = " + this.domId + " style = \"position:absolute;top:" + positionTop + ";left:" + positionLeft + ";height:" + this.r * 2 + "; width:" + this.r * 2 + "; border:1px solid; border-radius:" + this.r + "px\"" + "></div>" ;
  }

  Ball.prototype.render = function() {
    this.$container.empty().append(this.updateTemplate())
    $('body').append(this.$container);
    return this;
  }

  Ball.prototype.kickOff = function() {
    var self = this;
    setInterval(function (){
      self.detectCollision().detectWallTouch().run().render();
    }, 30);
    return this;
  }

  Ball.prototype.detectWallTouch = function() {
    if((wall = Ball.wall) == null) { return this; }
    if(this.position[0] + this.r >= wall.right) this.v = [-Math.abs(this.v[0]), this.v[1]];
    if(this.position[0] - this.r <= wall.left) this.v = [Math.abs(this.v[0]), this.v[1]];
    if(this.position[1] + this.r >= wall.bottom) this.v = [this.v[0], -Math.abs(this.v[1])];
    if(this.position[1] - this.r <= wall.top) this.v = [this.v[0], Math.abs(this.v[1])];
    return this;
  }

  Ball.prototype.detectCollision = function() {
    var self = this;
    $.each(Ball.allBalls, function(index, ball) {
      if (ball == self) { return; }

      var distance = Math.sqrt(Math.pow(self.position[0] - ball.position[0], 2) + Math.pow(self.position[1] - ball.position[1], 2))

      if(distance > self.r + ball.r) { return; }

      CollisionResolver.handleCollision(self, ball);
    })
    return this;
  }

  Ball.prototype.run = function() {
    var positionX = this.position[0] + this.v[0];
    var positionY = this.position[1] + this.v[1];
    this.position = [positionX, positionY];
    return this;
  }

  return Ball;
})();

module.exports = Ball;
