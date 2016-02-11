var Ball = require('./ball.js');
var VectorRotate = require('./vector_rotate.js');

(function() {
  function CollisionGame() {}

  CollisionGame.Ball = Ball;
  CollisionGame.VectorRotate = VectorRotate;
  return (window.CollisionGame = CollisionGame);
})();
