var Ball = require('./ball.js');

(function() {
  function CollisionGame() {}

  CollisionGame.Ball = Ball;

  return (window.CollisionGame = CollisionGame);
})();
