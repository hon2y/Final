var img1;

function setup() {
    createCanvas(1000, 700);
    img1 = loadImage("bg.png");
    a = loadImage("a.png");
    b = loadImage("b.png");
    c = loadImage("c.png");
    d1 = loadImage("d1.png");
    cl1 = loadImage("cl1.png");
    cl2 = loadImage("cl2.png");
    cl3 = loadImage("cl3.png");
    br1 = loadImage("br1.png");
    br2 = loadImage("br2.png");
    bus = loadImage("bus.png");
    car1 = loadImage("car1.png");
    car2 = loadImage("car2.png");
    tr1 = loadImage("tr1.png");
    tr2 = loadImage("tr2.png");
    tr3 = loadImage("tr3.png");
    mtr = loadImage("mtr.png");
}


function draw() {
   background(img1);
   

   image(a, 242, 46, 180, 533);
   image(b, 431, 71, 150, 508);
   image(c, 587, 303, 238, 276);
   image(cl1,10+sin(t1*1)*1000,10,1100,600);

   // image(img2, 700-img2.width/2, 700-img2.height/2, 300, 300);
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