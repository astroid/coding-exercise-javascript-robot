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

}

var Heading = {
    NORTH: {},
    EAST:  {},
    SOUTH: {},
    WEST:  {}
}

Heading.NORTH.right = Heading.EAST
Heading.EAST.right = Heading.SOUTH
Heading.SOUTH.right = Heading.WEST
Heading.WEST.right = Heading.NORTH


exports.Robot = Robot
exports.Heading = Heading