let schoolPic = document.createElement("img");
let schoolPicLoaded = false;

function schoolImageLoad() {
	schoolPic.onload = function() {
		schoolPicLoaded = true;
	};
	schoolPic.src = "school.png";
}
