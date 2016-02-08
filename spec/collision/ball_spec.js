describe("Ball", function() {
  var ball;
  var Ball = CollisionGame.Ball;

  beforeEach(function() {
    ball = new Ball({
      domId: 'ball-1',
      radius: 5,
      position: [5, 7],
      mass: 10,
      velocity: [4, 6]
    });
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  })

  it("has expected attributes", function() {
    expect(ball.r).toEqual(5);
    expect(ball.position).toEqual([5, 7]);
    expect(ball.m).toEqual(10);
    expect(ball.v).toEqual([4, 6]);
  });

  it("will be drawed in DOM", function() {
    ball.render();
    expect($('#ball-1').length).toBeGreaterThan(0);
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

  it("will run", function() {
    ball.render().kickOff();
    jasmine.clock().tick(51);
    pos = ball.$container.find('#ball-1').position()
    expect(ball.position).toEqual([9, 13]);
    expect([pos.top, pos.left]).toEqual(ball.position);
  })

  it("should keep running", function() {
    ball.render().kickOff();
    jasmine.clock().tick(101);
    pos = ball.$container.find('#ball-1').position()
    expect(ball.position).toEqual([13, 19]);
    expect([pos.top, pos.left]).toEqual(ball.position);
  })
});
