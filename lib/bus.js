var busPic = document.createElement("img");
var busPicLoaded = false;

var bus = new busClass();

const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.15;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.07;

function busImageLoad() {
	busPic.onload = function() {
		busPicLoaded = true;
	}
	busPic.src = "bus_icon.png";
}

function busClass() {

	this.x = 75;
	this.y = 75;
	this.ang = 0;
	this.speed = 0;

	this.reset = function() {
	  for(var eachRow=0;eachRow<STREET_ROWS;eachRow++) {
	    for(var eachCol=0;eachCol<STREET_COLS;eachCol++) {
	      var arrayIndex = rowColToArrayIndex(eachCol, eachRow);

	      if(streetGrid[arrayIndex] == STREET_PLAYERSTART) {
	        streetGrid[arrayIndex] = STREET_ROAD;
					this.ang = -Math.PI/2;
	        this.x = eachCol * STREET_W + STREET_W/2;
	        this.y = eachRow * STREET_H + STREET_H/2;
					return;
	      }
	    }
	  }
	}

	this.move = function() {
		this.speed *= GROUNDSPEED_DECAY_MULT;
		if(keyHeld_Gas) {
			this.speed += DRIVE_POWER;
		}
		if(keyHeld_Reverse) {
			this.speed -= REVERSE_POWER;
		}
		if(keyHeld_TurnLeft) {
			this.ang -= TURN_RATE;
		}
		if(keyHeld_TurnRight) {
			this.ang += TURN_RATE;
		}

		this.x += Math.cos(this.ang) * this.speed;
		this.y += Math.sin(this.ang) * this.speed;
	};

	this.draw = function() {
		if(busPicLoaded) {
			drawBitmapCenteredWithRotation(busPic, this.x,this.y, this.ang);
		}
	};

	this.stop = function() {
		busSpeed = 0;
	};
}
