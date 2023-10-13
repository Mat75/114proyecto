hanx=0
hany=0
function preload(){
leftGlove=loadImage("https://rideshop.cl/cdn/shop/products/CARVE_GLOVES_EVERGLADE_BACK_1024x.png?v=1627029052")
rightGlove=loadImage("https://i.postimg.cc/65qJZm93/guantes-buffon-pro-titan-azul.png")
}
function setup(){
Canvas=createCanvas(300, 300)
Canvas.center()
Video=createCapture(VIDEO)
Video.hide()
poseNet=ml5.poseNet(Video, modelLoaded)
}
function modelLoaded(){
    console.log("Modelo_cargado")
}

function draw(){

}