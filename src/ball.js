var $ = require('jquery');
var CollisionHelper = require('./collision_helper.js');

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
      self.detectCollision();
      self.run();
      self.render();
    }, 50);
    return this;
  }

  Ball.prototype.detectCollision = function() {
    self = this;
    $.each(Ball.allBalls, function(index, ball) {
      if (ball == self) { return; }

      distance = Math.sqrt(Math.pow(self.position[0] - ball.position[0], 2) + Math.pow(self.position[1] - ball.position[1], 2))

      if(distance > self.r + ball.r) { return; }

      result = CollisionHelper.calculateVelocity({v: self.v, m: self.m}, {v: ball.v, m: ball.m})
      self.v = result.object1velocity;
      ball.v = result.object2velocity;
    })
  }

  Ball.prototype.run = function() {
    positionX = this.position[0] + this.v[0];
    positionY = this.position[1] + this.v[1];
    this.position = [positionX, positionY];
  }

  return Ball;
})();

module.exports = Ball;
