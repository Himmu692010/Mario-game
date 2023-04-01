img="";
xNose=0;
yNose=0;
marioX=320;
marioY=320;

function preload() {
	
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(1340,345);
	video.parent('game_console');
	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose','gotPoses');
	
	
}

function gotPoses(results,error){
	if(results.length>0){
		xNose=results[0].pose.nose.x;
		yNose=results[0].pose.nose.y;

		console.log("Nose X = "+xNose);
		console.log("Nose Y = "+yNose);

	}
}

function modelLoaded(){
	console.log("Model is loaded");
}


function draw() {
	
	game();
}






