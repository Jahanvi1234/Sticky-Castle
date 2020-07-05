
function setup(){
    createCanvas(750,400);
}

function draw(){
    background (0,0,0);
    fill(204, 101, 192, 127); 
    console.log("x:"+mouseX+ "y:"+ mouseY);
    stroke(127, 63, 120);
    rect(50,60,50,340);
    rect(650,60,50,340);
    rect(140,118,30,280);
    rect(580,118,30,280);
    rect(190,200,10,230);
    rect(550,200,10,230);
    rect(223,200,300,300);
    //arc(479, 300, 280, 280, PI, TWO_PI);
   // ellipse(240,240,80,80);
    triangle(50,60,100,60,75,25);
    triangle(140,120,170,120,155,90);
    triangle(190,200,200,200,195,180);
    triangle(550,200,560,200,555,180);
    triangle(580,120,610,120,595,90);
    triangle(650,60,700,60,675,25);
    triangle(223,201,523,201,370,100);


    drawSprites();
   
}

