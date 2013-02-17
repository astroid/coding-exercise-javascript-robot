// The players in the simulation

function Robot() {
    var self = this

    self.x = 0
    self.y = 0
    self.heading = Heading.NORTH

    self.place = function(x,y,heading) {
        self.x = x
        self.y = y
        self.heading = heading
    }

    self.right = function() {
        self.heading = self.heading.right
    }

    self.left = function() {
        self.heading = self.heading.left
    }

}

var Heading = {
    NORTH: {},
    EAST:  {},
    SOUTH: {},
    WEST:  {}
}

// Turning right
Heading.NORTH.right = Heading.EAST
Heading.EAST.right = Heading.SOUTH
Heading.SOUTH.right = Heading.WEST
Heading.WEST.right = Heading.NORTH

// Turning left
Heading.NORTH.left = Heading.WEST
Heading.WEST.left = Heading.SOUTH
Heading.SOUTH.left = Heading.EAST
Heading.EAST.left = Heading.NORTH


exports.Robot = Robot
exports.Heading = Heading