describe("Ball", function() {
  var ball;
  var Ball = CollisionGame.Ball;

  beforeEach(function() {
    Ball.allBalls = [];
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
  });

  expectDomPositionMatch = function(ball) {
    pos = ball.$container.find('#' + ball.domId).position();
    expect([pos.left + ball.r, pos.top + ball.r]).toEqual(ball.position);
  }

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
    expectDomPositionMatch(ball);
  })

  it("will run", function() {
    ball.render().kickOff();
    jasmine.clock().tick(51);
    expect(ball.position).toEqual([9, 13]);
    expectDomPositionMatch(ball);
  })

  it("should keep running", function() {
    ball.render().kickOff();
    jasmine.clock().tick(101);
    expect(ball.position).toEqual([13, 19]);
    expectDomPositionMatch(ball);
  })

  describe("when two balls", function() {
    beforeEach(function() {
      Ball.allBalls = [];
      ball1 = new Ball({ domId: 'ball-1', radius: 5, position: [905, 500], mass: 10, velocity: [10, 0] });
      ball2 = new Ball({ domId: 'ball-2', radius: 30, position: [940, 500], mass: 40, velocity: [-11, 0] });
    });

    it("will cause a collision when touch another ball", function() {
      ball1.render().kickOff();
      ball2.render().kickOff();
      jasmine.clock().tick(51);
      expect(ball1.v).toEqual([-24, 0]);
      expect(ball2.v).toEqual([-3, 0]);
    })
  })
});
