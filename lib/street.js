const STREET_W = 40;
const STREET_H = 40;
const STREET_GAP = 2;
const STREET_COLS = 20;
const STREET_ROWS = 15;
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

function returnTileTypeAtColRow(col, row) {
	if(col >= 0 && col < STREET_COLS &&
		row >= 0 && row < STREET_ROWS) {
		 let streetIndexUnderCoord = rowColToArrayIndex(col, row);
		 return streetGrid[streetIndexUnderCoord];
	} else {
		return STREET_WALL;
	}
}

function busStreetHandling(whichCar) {
	let busStreetCol = Math.floor(whichCar.x / STREET_W);
	let busStreetRow = Math.floor(whichCar.y / STREET_H);
	let streetIndexUnderBus = rowColToArrayIndex(busStreetCol, busStreetRow);

	if(busStreetCol >= 0 && busStreetCol < STREET_COLS &&
		busStreetRow >= 0 && busStreetRow < STREET_ROWS) {
		var tileHere = returnTileTypeAtColRow( busStreetCol,busStreetRow );

		if(tileHere == FINISH_LINE) {
			GAME_WON = true;
		} else if (tileHere != STREET_ROAD){
			whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed * 7;
			whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed * 7;

			whichCar.speed *= -0.5;
		}
	}
}

function rowColToArrayIndex(col, row) {
	return col + STREET_COLS * row;
}

function drawStreets() {

	for(var eachRow=0;eachRow<STREET_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<STREET_COLS;eachCol++) {

			let arrayIndex = rowColToArrayIndex(eachCol, eachRow);
			let tileKindHere = streetGrid[arrayIndex];
			let useImg;

			switch(tileKindHere) {
				case STREET_WALL:
					colorRect(STREET_W*eachCol,STREET_H*eachRow,
						STREET_W-STREET_GAP,STREET_H-STREET_GAP, 'gray');
					break;
				case FINISH_LINE:
					canvasContext.drawImage(finishLinePic, STREET_W*eachCol,STREET_H*eachRow);
					break;
				case TREE:
					canvasContext.drawImage(treePic, STREET_W*eachCol,STREET_H*eachRow);
					break;
				case SCHOOL:
					canvasContext.drawImage(schoolPic, STREET_W*eachCol,STREET_H*eachRow);
					break;
			}
		}
	}
}
