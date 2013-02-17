robot-nodejs
============

The common variety robot coding test - but in nodejs!

[![Build Status](https://travis-ci.org/pokle/robot-nodejs.png)](https://travis-ci.org/pokle/robot-nodejs)


The Objective
=============

Build a robot simulator that is able to control a robot on a two dimensional 5x5 grid. The robot is issued commands in little snippets like the following:

    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT

That asks the robot to start on the grid at position 1,2 heading east. Move two grid units forward. Turn left. Move another grid unit forward. And finally report its position. In this case the reported position would be 3,3,NORTH.

The most important rule is that I make the rules! This is because I've been asked to write this coding test by a recruiter without being told any more than "do the robot coding test!"

Cheers
-Tushar
