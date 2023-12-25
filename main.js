noseX = 0;
noseY = 0;

function preload(){
    mustache = loadImage('https://i.postimg.cc/bJZw7fgx/filter.png');
}
function setup(){
    video = createCapture(VIDEO);
    video.hide();

    canvas = createCanvas(700, 400);
    canvas.position(320,0);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) 
{
	if (results.length > 0) {
		noseX = results[0].pose.nose.x - 55;
		noseY = results[0].pose.nose.y - 60;
		console.log("noseX = " + noseX + "noseY = " + noseY);
	}
}

function modelLoaded() {
	console.log("Model Loaded");
}

function draw(){
    image(video, 0, 0, 700, 400);
    image(mustache, noseX, noseY, 160, 130);
}

function onClick(){
    
}