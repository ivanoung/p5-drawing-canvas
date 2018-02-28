class StrokeShape {
    constructor (_r){
        this.r = _r;
    }
    draw(_x,_y){
        ellipse(_x,_y,this.r,this.r);
    }


}

function mouseMoved(){
    
}