var VectorRotate = require('./vector_rotate.js');

var CollisionResolver = (function() {
  return {
    handleCollision : function(ballA, ballB) {
      var angle = VectorRotate.getAngleFromPosition(ballA.position, ballB.position);
      // get new velocity
      var vA = VectorRotate.rotateVectorByAngle(ballA.v, angle);
      var vB = VectorRotate.rotateVectorByAngle(ballB.v, angle);

      var vxAFinal = ((ballA.m - ballB.m) * vA[0] + 2 * ballB.m * vB[0]) / (ballA.m + ballB.m)
      var vxBFinal = ((ballB.m - ballA.m) * vB[0] + 2 * ballA.m * vA[0]) / (ballA.m + ballB.m)

      ballA.v = VectorRotate.revertRotated([vxAFinal, vA[1]], angle);
      ballB.v = VectorRotate.revertRotated([vxBFinal, vB[1]], angle);
    }
  };

})();

module.exports = CollisionResolver;
