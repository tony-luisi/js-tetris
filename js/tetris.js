function start() {
	c=document.getElementById("myCanvas");
    blockSize = 50;
    c.width = blockSize * 10;
    c.height = blockSize * 15;

    ctx=c.getContext("2d");
    
    currentBlock = new block(0, 0, blockSize, "red");

    tetrisPiece = new piece(0, 0, blockSize);

    window.addEventListener("keydown", press, false);

    var mainloop = function() {
            updateGame();
            drawGame();
        };

        var animFrame = window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                window.oRequestAnimationFrame      ||
                window.msRequestAnimationFrame     ||
                null ;

        var recursiveAnim = function() {
            mainloop();
            animFrame( recursiveAnim );
        };

        // start the mainloop
        animFrame( recursiveAnim );
}

function piece(x, y, width) {

	var blockArray = getPiece(x, y, width);
	console.log(blockArray);
	this.x = x;
	this.y = y;
	this.width = width;


}



function updateGame() {

}

function drawGame() {
	clearCanvas(ctx, c);
	ctx.rect(currentBlock.x, currentBlock.y, currentBlock.width, currentBlock.width);
	ctx.fillStyle = block.colour;
	ctx.fillRect(currentBlock.x, currentBlock.y, currentBlock.width, currentBlock.width);
    ctx.stroke();
}

function press(event) {
	if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }

	var key = event.keyCode || event.which;

	console.log(key);

	switch (key) {
		case 37: //left
			block.x -= blockSize;
			break;
		case 39: //right
			block.x += blockSize;
			break;
		case 38: //up
			block.y -= blockSize;
			break;
		case 40: //down
			block.y += blockSize;
			break;
		default:
			return;
	}
}

function clearCanvas(context, canvas) {
  context.clearRect(0, 0, canvas.width, canvas.width);
  var w = canvas.width;
  canvas.width = 1;
  canvas.width = w;
}

function getPiece(x, y, width){

		//thisblock = new block(0, 0, blockSize, "red");
        
        
        var pieces = [];
        var piece = [];

        piece[0] = new block(x + width * 0 + width / 2, y + width * 0 + width / 2, width, "black");
        piece[1] = new block(x + width * 0 + width / 2, y + width * 1 + width / 2, width, "black");
        piece[2] = new block(x + width * 0 + width / 2, y + width * 2 + width / 2, width, "black");
        piece[3] = new block(x + width * 0 + width / 2, y + width * 3 + width / 2, width, "black");

        
        pieces[0] = piece;

        piece = [];

        piece[0] = new block(x + width * 0 + width / 2, y + width * 0 + width / 2, width, "yellow");
        piece[1] = new block(x + width * 0 + width / 2, y + width * 1 + width / 2, width, "yellow");
        piece[2] = new block(x + width * 0 + width / 2, y + width * 2 + width / 2, width, "yellow");
        piece[3] = new block(x + width * 1 + width / 2, y + width * 2 + width / 2, width, "yellow");
        
        pieces[1] = piece;

        piece = [];
        
        piece[0] = new block(x + width * 0 + width / 2, y + width * 0 + width / 2, width, "blue");
        piece[1] = new block(x + width * 1 + width / 2, y + width * 0 + width / 2, width, "blue");
        piece[2] = new block(x + width * 1 + width / 2, y + width * 1 + width / 2, width, "blue");
        piece[3] = new block(x + width * 2 + width / 2, y + width * 1 + width / 2, width, "blue");
        
        pieces[2] = piece;

        piece = [];
        
        piece[0] = new block(x + width * 0 + width / 2, y + width * 0 + width / 2, width, "green");
        piece[1] = new block(x + width * 1 + width / 2, y + width * 0 + width / 2, width, "green");
        piece[2] = new block(x + width * 2 + width / 2, y + width * 0 + width / 2, width, "green");
        piece[3] = new block(x + width * 1 + width / 2, y + width * 1 + width / 2, width, "green");
        
        pieces[3] = piece;

        piece = [];
        
        piece[0] = new block(x + width * 0 + width / 2, y + width * 1 + width / 2, width, "orange");
        piece[1] = new block(x + width * 1 + width / 2, y + width * 0 + width / 2, width, "orange");
        piece[2] = new block(x + width * 1 + width / 2, y + width * 1 + width / 2, width, "orange");
        piece[3] = new block(x + width * 2 + width / 2, y + width * 0 + width / 2, width, "orange");
        
        pieces[4] = piece;

        piece = [];
        
        piece[0] = new block(x + width * 0 + width / 2, y + width * 0 + width / 2, width, "red");
        piece[1] = new block(x + width * 0 + width / 2, y + width * 1 + width / 2, width, "red");
        piece[2] = new block(x + width * 1 + width / 2, y + width * 0 + width / 2, width, "red");
        piece[3] = new block(x + width * 1 + width / 2, y + width * 1 + width / 2, width, "red");
        
        pieces[5] = piece;
       	
       	var chosenPiece = pieces[1];

       	console.log(chosenPiece);

        return chosenPiece;
        
        
    }

 function block(x, y, width, colour) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.colour = colour;
}

