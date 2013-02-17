var sim = require("../simulation")
var assert = require("assert")

describe('Robot', function(){
  // describe('#place()', function(){
    
    it('should be possible to place the robot anywhere on the grid with a heading', function() {
        var robot = new sim.Robot()
        robot.place(1,2, sim.Heading.EAST)

        assert.equal(robot.x, 1)
        assert.equal(robot.y, 2)
        assert.equal(robot.heading, sim.Heading.EAST)
    })

    it('should turn clockwise through NORTH, EAST, SOUTH, WEST and back to NORTH', function() {
        var robot = new sim.Robot()

        robot.place(0, 0, sim.Heading.NORTH)
        assert.equal(robot.heading, sim.Heading.NORTH)

        robot.right()
        assert.equal(robot.heading, sim.Heading.EAST)

        robot.right()
        assert.equal(robot.heading, sim.Heading.SOUTH)

        robot.right()
        assert.equal(robot.heading, sim.Heading.WEST)

        robot.right()
        assert.equal(robot.heading, sim.Heading.NORTH)

    })

    it('should turn anti-clockwise through NORTH, WEST, SOUTH, EAST and back to NORTH', function() {
        var robot = new sim.Robot()

        robot.place(0, 0, sim.Heading.NORTH)
        assert.equal(robot.heading, sim.Heading.NORTH)

        robot.left()
        assert.equal(robot.heading, sim.Heading.WEST)

        robot.left()
        assert.equal(robot.heading, sim.Heading.SOUTH)

        robot.left()
        assert.equal(robot.heading, sim.Heading.EAST)

        robot.left()
        assert.equal(robot.heading, sim.Heading.NORTH)

    })

    it('should not fall off the grid', function() {
        // PENDING - only after we've implemented move
    })

  // })
})
