// The players in the simulation

var Heading = {
    NORTH: { name: 'North', dx:  0, dy: -1, right: 'EAST',  left: 'WEST'},
    EAST:  { name: 'East',  dx:  1, dy:  0, right: 'SOUTH', left: 'NORTH'},
    SOUTH: { name: 'South', dx:  0, dy:  1, right: 'WEST',  left: 'EAST'},
    WEST:  { name: 'West',  dx: -1, dy:  0, right: 'NORTH', left: 'SOUTH'}
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

    self.report = function() {
        return [self.x, self.y, self.heading.name].join(',')
    }

}

exports.Robot = Robot
exports.Heading = Heading