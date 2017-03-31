let treePic = document.createElement("img");
let treePicLoaded = false;

function treeImageLoad() {
	treePic.onload = function() {
		treePicLoaded = true;
	};
	treePic.src = "tree.png";
}
