function start() {
	c=document.getElementById("myCanvas");
    blockSize = 50;

    c.width = blockSize * 10;
    c.height = blockSize * 15;

    ctx=c.getContext("2d");
    
    block = { x: 0, y: 0, width: blockSize, height: blockSize };


    ctx.rect(block.x, block.y, block.width, block.height);
    ctx.stroke();
    console.log("TEST");

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

function updateGame() {


}

function drawGame() {
	clearCanvas(ctx, c);
	ctx.rect(block.x, block.y, block.width, block.height);
	ctx.fillStyle = "green";
	ctx.fillRect(block.x, block.y, block.width, block.height);
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
  context.clearRect(0, 0, canvas.width, canvas.height);
  var w = canvas.width;
  canvas.width = 1;
  canvas.width = w;
}

