describe("VectorRotate", function() {
   VectorRotate = CollisionGame.VectorRotate;

  describe("#rotateVectorByAngle", function() {
    it("will rotate vector", function() {
      var vector = [3, 4];
      expect(VectorRotate.rotateVectorByAngle(vector, 0)).toEqual([3, 4]); // 0
      expect(VectorRotate.rotateVectorByAngle(vector, 0.7854)).toEqual([-1, 5]); // 45
      expect(VectorRotate.rotateVectorByAngle(vector, 1.571)).toEqual([-4, 3]); // 90
      expect(VectorRotate.rotateVectorByAngle(vector, 2.356)).toEqual([-5, -1]); // 135
      expect(VectorRotate.rotateVectorByAngle(vector, 3.142)).toEqual([-3, -4]); // 180
      expect(VectorRotate.rotateVectorByAngle(vector, 3.927)).toEqual([1, -5]); // 225
      expect(VectorRotate.rotateVectorByAngle(vector, 6.283)).toEqual([3, 4]); // 360
    });
  });

  describe("#revertRotated", function() {
    it("will revert rotated vector", function() {
      var origin = [10, 10];
      expect(VectorRotate.revertRotated([10, 10], 0)).toEqual(origin); // 0
      expect(VectorRotate.revertRotated([0.01, 14.14], 0.785)).toEqual(origin); // 45
      expect(VectorRotate.revertRotated([-10, 10], 1.571)).toEqual(origin); // 90
      expect(VectorRotate.revertRotated([-14.14, 0], 2.356)).toEqual(origin); // 135
      expect(VectorRotate.revertRotated([-10, -10], 3.142)).toEqual(origin); // 180
      expect(VectorRotate.revertRotated([0, -14.14], 3.927)).toEqual(origin); // 225
    })
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
  });
})
