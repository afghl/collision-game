describe("VectorRotate", function() {
  var VectorRotate = CollisionGame.VectorRotate;

  describe("#rotateVectorByAngle", function() {
    it("will rotate vector", function() {
      var vector = [10, 10];
      expect(VectorRotate.rotateVectorByAngle(vector, 0)).toEqual([10, 10]); // 0
      expect(VectorRotate.rotateVectorByAngle(vector, 0.785)).toEqual([0.01, 14.14]); // 45
      expect(VectorRotate.rotateVectorByAngle(vector, 1.571)).toEqual([-10, 10]); // 90
      expect(VectorRotate.rotateVectorByAngle(vector, 2.356)).toEqual([-14.14, 0]); // 135
      expect(VectorRotate.rotateVectorByAngle(vector, 3.142)).toEqual([-10, -10]); // 180
      expect(VectorRotate.rotateVectorByAngle(vector, 3.927)).toEqual([0, -14.14]); // 225
      expect(VectorRotate.rotateVectorByAngle(vector, 6.283)).toEqual([10, 10]); // 360
    });
  });

  describe("#getAngleFromPosition", function() {
    it("will get angle from position", function() {
      var get = VectorRotate.getAngleFromPosition;
      expect(get([10, 10], [10, 10])).toEqual(0);
      expect(get([10, 10], [20, 10])).toEqual(0); // 0
      expect(get([10, 10], [20, 20])).toEqual(0.785); // 45
      expect(get([10, 10], [10, 20])).toEqual(1.571); // 90
      expect(get([10, 10], [0, 20])).toEqual(2.356); // 135
      expect(get([10, 10], [0, 0])).toEqual(3.927); // 225
    })
  })
})
