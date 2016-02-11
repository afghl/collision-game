var Ball = require('./ball.js');
var VectorRotate = require('./vector_rotate.js');
var Wall = require('./wall.js');

(function() {
  function CollisionGame() {}

  CollisionGame.factory = (function() {
    var createBall = function(options) {
      new Ball(options);
    }

    var createWall = function(options) {
      new Wall(options);
    }

    return {
      createBall: createBall,
      createWall: createWall
    }
  })();

  CollisionGame.start = function () {
    Ball.wall.render();
    console.log(Ball.allBalls);
    for (var i = 0;i < Ball.allBalls.length; i++) {
      Ball.allBalls[i].render().kickOff();
    }
  }

  CollisionGame.Ball = Ball;
  CollisionGame.VectorRotate = VectorRotate;
  return (window.CollisionGame = CollisionGame);
})();
