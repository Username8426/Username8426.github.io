xValue = document.getElementById("xValue");
yValue = document.getElementById("yValue");
but = document.getElementById("but");
but.addEventListener("click",target)
dOut = document.getElementById("d")
hAngle = document.getElementById("hAngle")
vAngle = document.getElementById("vAngle")
targ = document.getElementById("targ")
estTo = document.getElementById("estT")
var w = 40;
var d;
var hA;
var vA;
var neg = false
var launchspeed = 100;
var v = launchspeed;
var g = 9.8;
var h= 0
var estT
math(0,0)
function target() {

    var x = xValue.value;
    var y = yValue.value;
    targ.innerHTML = "X: " + x + " Y: " + y;
    document.getElementById("targt").style.marginLeft = x-56+900+"px";
    document.getElementById("targt").style.marginTop = y-260+600+"px";
    
    math(x,y)

   
}
function math(xa,ya) {
    d = Math.sqrt(Math.pow(xa,2) + Math.pow(ya,2));
    dOut.innerHTML = "Distance: " + d;

    if(xa < 0 || ya < 0) {
        neg = true;
    }
    hA = Math.atan(ya/xa)
    hA = hA * 180 /Math.PI
    if (neg) {
        hA = 180 + hA
        neg = false
    }
    hAngle.innerHTML = "Horizontal angle: " + hA;


    vA = Math.atan((Math.pow(v,2) + Math.sqrt(Math.pow(v,4)-g*(g*Math.pow(d,2) + 2*h*Math.pow(v,2))))/(g*d))
    vai = vA
    vA = vA * 180 / Math.PI
    vA = 90 - vA
    vAngle.innerHTML = "Vertical angle: " + vA; 

    // vA = vA * Math.PI / 180;
    // estT = (v*Math.sin(vA) + Math.sqrt(Math.pow(v*Math.sin(vA),2)))/g
    estT = d / ( Math.cos(vA * Math.PI / 180) * v );
    estTo.innerHTML = "Estimated time: " + estT;

}

document.addEventListener('click', function(event) {
        let x = event.clientX;
        let y = event.clientY;
    if (y > 260) {
        targ.innerHTML = "X: " + parseInt(x-900) + " Y: " + parseInt(y-600);
        document.getElementById("targt").style.marginLeft = x-56+"px";
        document.getElementById("targt").style.marginTop = y-260+"px";

        math(parseInt(x-900), parseInt(y-600))
    }

})
