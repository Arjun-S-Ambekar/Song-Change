avengers = "";
parates = "";
left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_x = 0;
right_wrist_y = 0;

function preload(){
    pirates = loadSound("Pirates.mp3");
    avengers = loadSound("Avengers.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, model_loaded);
    posenet.on('pose', gotPoses);
}

function model_loaded(){
    console.log("model loaded");
}

function draw(){
    image(video, 0, 0, 600, 500)
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;
        console.log("right wrist x = " + right_wrist_x + ", right wrist y = " + right_wrist_y);

        left_wrist_y = results[0].pose.leftWrist.y;
        left_wrist_x = results[0].pose.leftWrist.x;
        console.log("left wrist x = " + left_wrist_x + ", left wrist y = " + left_wrist_y);

    }
}