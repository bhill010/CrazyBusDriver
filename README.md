# Crazy Bus Driver

[Crazy Bus Driver](https://bhill010.github.io/CrazyBusDriver/lib/index.html)

Crazy Bus Driver is a browser-based game loosely inspired by the "Crazy Taxi" game. Crazy Bus Driver utilizes Javascript and Canvas to handle game functionality and rendering, with some light help from jQuery for easier event handling.

## Gameplay

### Controls

The user interface for Crazy Bus Driver are quite simple. There are just four controls used to steer the bus left or right, and to accelerate or decelerate.

### Objective

Crazy Bus Driver centers around beating the 30-second countdown in a race to school, or the finish-line. Users have the option of restarting the clock and progress with the Restart button.

## Implementation

The movement of the bus and its collision interaction with obstacles involved manipulating speed with sin/cosine formulas, and keeping track of the X and Y coordinates of the vehicle in relation to the dimensions of each obstacle.

Manipulating the design of the level was achieved by writing out an array containing a sequence of numbers that corresponded to different tile types. Setting up the grid in such a way allowed for clearer design planning and on-the-fly changes in its setup.

Street grid code:

```javascript
let streetGrid = [
				 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 4, 1,
				 1, 1, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 1,
				 1, 1, 0, 0, 0, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 4, 1,
				 1, 1, 1, 1, 0, 1, 4, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 4, 1,
				 1, 4, 4, 1, 0, 1, 4, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 4, 1,
				 1, 4, 1, 1, 0, 1, 4, 0, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0, 4, 1,
				 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 4, 4, 4, 4, 1, 4, 4, 4, 1,
				 1, 0, 0, 0, 0, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1,
				 1, 0, 0, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 4, 1,
				 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 4, 1,
				 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1,
				 1, 0, 1, 0, 5, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 4, 4, 4, 4, 1,
				 1, 2, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 1,
				 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
			 ];

let streetBlankGrid = [];
const STREET_ROAD = 0;
const STREET_WALL = 1;
const STREET_PLAYERSTART = 2;
const FINISH_LINE = 3;
const TREE = 4;
const SCHOOL = 5;
```

Street display:

<p align="center">
  <img src="/docs/images/street_grid_display.png" alt="Street Grid" />
</p>

## Future Directions for the Project

Obstacles with varying effects on the vehicle will be added to make the gameplay more dynamic, as well as multiple levels with varying difficulty.
