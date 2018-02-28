function setup(){
    var canv = createCanvas(displayWidth,displayHeight);
    canv.parent('drawing');
    background(0);
    strokeWeight(10);
    stroke(255);
    frameRate(60);
}

class StrokeShape {
    constructor (_r){
        this.r = _r;
    }
    draw(_x,_y){
        ellipse(_x,_y,this.r,this.r);
    }


}

function mouseDragged(){
    console.log("hi");
    line(mouseX,mouseY, pmouseX, pmouseY);
    // return false;
    // var stroke = new StrokeShape(10); 
    // stroke.draw(mouseX,mouseY);
}