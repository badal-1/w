s1 = "";
s2 = "";
function preload(){
s1 = loadSound("ap.mp3");
s2 = loadSound("s.mp3");
}
function setup(){
canvas = createCanvas(400, 400);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}
function draw(){
image(video, 0,0, 600, 500);
}