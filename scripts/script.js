var dwWidth = document.getElementById("drawing").offsetWidth;
var dwHeight = document.getElementById("drawing").offsetHeight;


let colr = [
    "#6699cc",
    "#fff275",
    "#ff8c42",
    "#ff3c38",
    "#a23e48",
    "#c649ff",
    "#48ffa7",
    "#d4f0fb",
    "#a4e3d2"
];



function setup() {
    var canv = createCanvas(dwWidth, dwHeight);
    canv.parent('drawing');
    // background(0);
    strokeWeight(5);
    stroke("#555555");
    frameRate(80);
}

class StrokeShape {
    constructor(_r) {
        this.r = _r;
    }
    draw(_x, _y) {
        ellipse(_x, _y, this.r, this.r);
    }


}

function mouseDragged() {
    line(mouseX, mouseY, pmouseX, pmouseY);
    // return false;
    // var stroke = new StrokeShape(10); 
    // stroke.draw(mouseX,mouseY);
}

function windowResized(){
    canv = resizeCanvas(dwWidth,dwHeight);
    canv.parent('drawing');
}

// $(".colors").click(function () {
// });

$(document).ready(function () {
    console.log("test");
    for (let i = 0; i<colr.length; i++){
        $(`#cl${i+1}`).css("background-color",colr[i]);
    }
});

// Reset drawing
$(".eraser").click(() => {
    background(255);
})

$(".colors").click(function(){
    let clickColor = $(this).css("background-color");
    // console.log(clickColor);
    stroke(clickColor);
})