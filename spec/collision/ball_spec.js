describe("Ball", function() {
  var ball;
  var Ball = CollisionGame.Ball;

  beforeEach(function() {
    ball = new Ball({
      domId: 'ball-1',
      radius: 5,
      position: [5, 7],
      mass: 10,
      acceleratedSpeed: [10, 6],
      velocity: [4, 6]
    });
  });

  it("has expected attributes", function() {
    expect(ball.r).toEqual(5);
    expect(ball.position).toEqual([5, 7]);
    expect(ball.m).toEqual(10);
    expect(ball.a).toEqual([10, 6]);
    expect(ball.v).toEqual([4, 6]);
  });

  it("will be drawed in DOM", function() {
    ball.render();
    expect($('body > #ball-1').length).toBeGreaterThan(0);
  })

  it("will has expected dom arrtibutes", function() {
    ball.render();
    ballDom = $('#ball-1')[0];
    expect(parseInt(ballDom.style.height.match(/\d+/)[0])).toEqual(ball.r * 2);
    expect(parseInt(ballDom.style.width.match(/\d+/)[0])).toEqual(ball.r * 2);
    expect(ballDom.style.position).toEqual('absolute');
  })

  it("will be drawed in expected position", function() {
    ball.render();
    pos = $('#ball-1').position();
    expect([pos.top, pos.left]).toEqual(ball.position);
  })
});
