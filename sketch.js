var img1;

function setup() {
    createCanvas(1000, 700);
    img1 = loadImage("bg.png");
    img2 = loadImage("1.png");
}


function draw() {
   background(img1);
   
   image(img2, 700-img2.width/2, 700-img2.height/2, 300, 300);
    // ellipse(500,500,250,250);

//수
   var duration = 3000;
   var timing = (new Date()%duration)/duration;

   fill(146,125,125);
   ellipse(600 + Math.cos(timing*2*PI)*150,           // x좌표
        600 + Math.sin(timing*2*PI)*150,       // y좌표
        10,                                     // width
        10);                                    // height

}