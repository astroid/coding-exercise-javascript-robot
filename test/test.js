var sim = require("../simulation")
var assert = require("assert")

describe('Robot', function(){
  describe('#place()', function(){
    
    it('should be possible to place the robot anywhere on the grid with a heading', function() {
        var robot = new sim.Robot()
        robot.place(1,2, sim.Heading.EAST)

        assert.equal(robot.x, 1)
        assert.equal(robot.y, 2)
        assert.equal(robot.heading, sim.Heading.EAST)
    })

  })
})
