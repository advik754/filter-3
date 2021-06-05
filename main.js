var noseY="";
var noseX="";
var imagesad="";
function preload(){
imagesad=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');

}

function draw(){
image(video,0,0,300,300);
image(imagesad,noseX,noseY,30,30);
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video, modelloaded);

poseNet.on('pose',gotPoses);
}

function takesnapshot(){
save("ok.png");
}

function modelloaded(){
console.log("model loaded");
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
noseY=results[0].pose.nose.y-15;
noseX=results[0].pose.nose.x-15;
console.log("nose x = "+results[0].pose.nose.x);
console.log("nose y = "+results[0].pose.nose.y);
}

}








