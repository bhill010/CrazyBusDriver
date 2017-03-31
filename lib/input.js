const KEY_LEFT_ARROW = 65;
const KEY_UP_ARROW = 87;
const KEY_RIGHT_ARROW = 68;
const KEY_DOWN_ARROW = 83;

let keyHeld_Gas = false;
let keyHeld_Reverse = false;
let keyHeld_TurnLeft = false;
let keyHeld_TurnRight = false;

let mouseX = 0;
let mouseY = 0;

function setUpInput() {
	canvas.addEventListener('mousemove', updateMousePos);

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
}

function updateMousePos(evt) {
	let rect = canvas.getBoundingClientRect();
	let root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;
}

function keyPressed(evt) {
	if(evt.keyCode == KEY_LEFT_ARROW) {
		keyHeld_TurnLeft = true;
	};
	if(evt.keyCode == KEY_RIGHT_ARROW) {
		keyHeld_TurnRight = true;
	};
	if(evt.keyCode == KEY_UP_ARROW) {
		keyHeld_Gas = true;
	};
	if(evt.keyCode == KEY_DOWN_ARROW) {
		keyHeld_Reverse = true;
	};
}

function keyReleased(evt) {
	if(evt.keyCode == KEY_LEFT_ARROW) {
		keyHeld_TurnLeft = false;
	};
	if(evt.keyCode == KEY_RIGHT_ARROW) {
		keyHeld_TurnRight = false;
	};
	if(evt.keyCode == KEY_UP_ARROW) {
		keyHeld_Gas = false;
	};
	if(evt.keyCode == KEY_DOWN_ARROW) {
		keyHeld_Reverse = false;
	};
}
