robot
=====

The common variety robot coding test - but in nodejs!

[![Circle CI](https://circleci.com/gh/pokle/coding-exercise-javascript-robot.svg?style=svg)](https://circleci.com/gh/pokle/coding-exercise-javascript-robot)

The objective
=============

Build a robot simulator that is able to control a remote controlled robot on a two dimensional grid. The robot is issued commands such as:

* Place at an x,y co-ordinate with heading (North, South, East or West) 
* Rotate left or right 90 degrees
* Move a single grid unit in the direction of its heading
* Report back position and heading

The most important rule is that I make the rules! This is because I've been asked to write this coding test by a recruiter without being told any more than "do the robot coding test!"

My solution
===========

* [simulation.js](simulation.js) - contains the Robot class that simulates the robot
* [test/test.js](test/test.js) - contains unit tests that ensure that the objectives are met. *Start here!*

----
[My other coding exercises](https://github.com/search?q=user%3Apokle+coding-exercise)
