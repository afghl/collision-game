var Ball = require('./ball.js');

var CollisionGame = (function() {
  function CollisionGame() {}

  CollisionGame.Ball = Ball;
  
  return (window.CollisionGame = CollisionGame);
})();
