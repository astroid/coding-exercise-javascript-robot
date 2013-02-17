// The players in the simulation

exports.Robot = function() {
    var self = this

    self.x = 0
    self.y = 0
    self.heading = exports.Heading.NORTH

    self.place = function(x,y,heading) {
        self.x = x
        self.y = y
        self.heading = heading
    }

}

exports.Heading = {

    NORTH: {},
    EAST: {},
    SOUTH: {},
    WEST: {}

}