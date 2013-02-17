// The players in the simulation

var Heading = {
    NORTH: { dx:  0, dy: -1, right: 'EAST',  left: 'WEST'},
    EAST:  { dx:  1, dy:  0, right: 'SOUTH', left: 'NORTH'},
    SOUTH: { dx:  0, dy:  1, right: 'WEST',  left: 'EAST'},
    WEST:  { dx: -1, dy:  0, right: 'NORTH', left: 'SOUTH'}
}

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
        self.heading = Heading[self.heading.right]
    }

    self.left = function() {
        self.heading = Heading[self.heading.left]
    }

    self.move = function () {
        self.x = self.x + self.heading.dx
        self.y = self.y + self.heading.dy
    }

}

exports.Robot = Robot
exports.Heading = Heading