function setup()
{
    video = createCapture(VIDEO);
    video.size(500,450);

    canvas = createCanvas(500,450);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background("gray")
}

function modelLoaded()
{
    console.log('PoseNet has been confirmed, SIUUUUUUUUUU');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}