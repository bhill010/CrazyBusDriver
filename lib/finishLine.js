let finishLinePic = document.createElement("img");
let finishLinePicLoaded = false;

function finishLineImageLoad() {
	finishLinePic.onload = function() {
		finishLinePicLoaded = true;
	};
	finishLinePic.src = "finish_line.png";
}
