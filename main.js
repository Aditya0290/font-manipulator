rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose, gotPoses');
}
function modelLoaded(){
    console.log("poseNet Initislized");
};
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("LeftWristX = "+leftWristX + "RightWristX = "+rightWristX + "difference = "+difference);
    }
}
function draw(){
    background('white');
    textSize(difference);
    fill('black');
    text("Aditya", 50, 380);
    document.getElementById("font_size").innerHTML = "font size of the text will be = "+difference+"px";
}
