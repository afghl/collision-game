describe("Ball", function() {
  var Ball = require('../../src/ball');
  var ball;

  beforeEach(function() {
    ball = new Ball();
  });

  it("should be a ball", function() {
    expect(1 + 1).toEqual(2);
  });

});
