/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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

	var time = 30;
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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map