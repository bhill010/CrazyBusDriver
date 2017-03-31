var busPic = document.createElement("img");

function busImageLoad() {
	busPic.onload = function() {
		busPicLoaded = true;
	}
	busPic.src = "bus_icon.png";
}

function busDraw() {
	if(busPicLoaded) {
		drawBitmapCenteredWithRotation(busPic, busX,busY, busAng);
	}
}

function drawBitmapCenteredWithRotation(useBitmap, atX,atY, withAng) {
	canvasContext.save();
	canvasContext.translate(atX, atY);
	canvasContext.rotate(withAng);
	canvasContext.drawImage(useBitmap, -useBitmap.width/2, -useBitmap.height/2);
	canvasContext.restore();
}
