function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
 
}

function draw() {
  background(255,255,255);
translate(200,200)
rotate(-90)
hr=hour()
mn=minute()
sec=second()

hra=map(hr%12,0,12,0,360)
mna=map(mn,0,60,0,360)
seca=map(sec,0,60,0,360)
push();
rotate(hra)
stroke(246,0,238)
strokeWeight(10)
line(0,0,50,0)

pop();

push();
rotate(mna)
stroke(11,247,1)
strokeWeight(10)
line(0,0,75,0)

pop();

push();
rotate(seca)
stroke(246,0,0)
strokeWeight(10)
line(0,0,100,0)

pop();
stroke (255,0,255)
point(0,0)
strokeWeight(8)
noFill()
stroke(246,0,238)
arc(0,0,300,300,0,hra)

stroke(11,247,1)
arc(0,0,280,280,0,mna)

stroke(246,0,0)
arc(0,0,260,260,0,seca)

stroke(247,247,0)
arc(0,0,360,360,0,360)
}