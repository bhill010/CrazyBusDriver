var canvas, canvasContext;

function loadLevel(newGrid) {
	streetBlankGrid = newGrid.slice();
	bus.reset;
}

document.addEventListener("DOMContentLoaded", () => {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	const framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

	setUpInput();
	bus.reset();
	busImageLoad();
	treeImageLoad();
	finishLineImageLoad();
	schoolImageLoad();

	loadLevel(streetGrid);
	GAME_WON = false;

	timer();

	var time = 3000;
	function timer() {
		setTimeout(function() {
			var timerDiv = document.getElementById("timer");
			time--;

			if (GAME_WON) {
				time = "Right on time!";
				timerDiv.innerHTML = time;
				setTimeout(function(){ location.reload(); }, 2000);
				return;
			} else if (time < 0) {
				time = "You're fired!";
				timerDiv.innerHTML = time;
				setTimeout(function(){ location.reload(); }, 2000);
				return;
			}
			timerDiv.innerHTML = time;
			timer();
		}, 1000);
	}

	$('#new').click(function() {
		location.reload();
		time = 30;
	});

	function updateAll() {
		moveAll();
		drawAll();
	}

	function moveAll() {
		bus.move();
		busStreetHandling(bus);
	}

	function clearScreen() {
		colorRect(0,0, canvas.width,canvas.height, 'white');
	}

	function drawAll() {
		clearScreen();

		drawStreets();
		bus.draw();

	}
});
