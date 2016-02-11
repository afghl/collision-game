var VectorRotate = (function() {
  // rounded to three decimal places
  var roundedOff = function(number, places) {
    return parseFloat(number.toFixed(places));
  }

  return {
    rotateVectorByAngle : function(vector, angle) {
      var cos = Math.cos(angle);
      var sin = Math.sin(angle);
      var vx = roundedOff(vector[0] * cos - vector[1] * sin, 0);
      var vy = roundedOff(vector[1] * cos + vector[0] * sin, 0);
      return [vx, vy];
    },

    revertRotated : function(vector, angle) {
      return this.rotateVectorByAngle(vector, -angle);
    },

    getAngleFromPosition : function(positionA, positionB) {
      var dx = positionB[0] - positionA[0];
      var dy = positionB[1] - positionA[1];
      var angle = Math.atan2(dy, dx);

      if(angle < 0) { angle += 2 * Math.PI; }

      return roundedOff(angle, 3);
    }
  };

})();

module.exports = VectorRotate;
