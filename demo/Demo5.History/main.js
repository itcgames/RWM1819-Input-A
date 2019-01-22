function main() {
	//Instantiate the input object
	this.input = new Input();

	this.canvas = {};

	// specifying the keyboard handlers
	this.input.addKeyHandler(myGetKeys);
	this.input.addUpdateLoop(draw, 33);

	this.match = ["i","n","p","u","t"];
	this.matched = false;

	this.initCanvas();
	this.img = new Image();
	this.img.src = "../assets/tick.png";
}

function initCanvas() {
	//this.canvas = document.getElementById("mycanvas");
    // Use the document object to create a new element canvas.
    this.canvas = document.createElement("canvas");
    // Assign the canvas an id so we can reference it elsewhere.
    this.canvas.id = "mycanvas";
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    // We want this to be a 2D canvas
    //var ctx = canvas.getContext("2D");
    this.ctx = this.canvas.getContext("2d");
		this.ctx.font = "50px Arial";

    // Adds the canvas element to the document.
    document.body.appendChild(this.canvas);
}

function draw() {
	this.ctx.clearRect(0,0,1000,1000);
	this.ctx.fillText("Demo 5: Please follow these instructions", 10, 50);
	this.ctx.fillText("Please enter input (lowercase) on our keyboard", 10, 200);
	this.ctx.fillText("These features stores every key press so input can be checked for combos", 10, 350);
	
	
	if(this.matched) {
		this.ctx.fillText("Demo finished, congratulations!", 10, 650);
	}
}


// Declare the keyboardhandler function
// The name of the function is what is passed to
// the addKeyHandler function
function myGetKeys(keys) {
	this.check2Arrays();	
}


function check2Arrays() {
	var tempArray = [];
	this.input.history.forEach(element => {
		tempArray.push(element[0]);
	});
	console.log(tempArray);
	console.log(this.match);
	if(this.match.every(val => tempArray.includes(val))) {
		this.matched = true;
	}	
}
