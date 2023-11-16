function preload(){
  sound1 = loadSound("mixkit-tech-house-vibes-130.mp3") //先把音樂檔載入到sound1程式碼中
}


  



function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#caf0f8")
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}
var w =100
var h =100
function draw() {
  background("#caf0f8");
  rectMode(CENTER)  //設定方框中心點為方框的座標點
  noFill()
  
  if(sound1.isPlaying())
  {
    fc = map(analyzer.getLevel(),0,1,0,100)
    fc1 = map(analyzer.getLevel(),0,1,0,100)
  }
    else  //音樂沒有撥放
  {
    fc = map(mouseX,0,width,0,100)
    fc1 = map(mouseY,0,width,0,100)
  }

  for(var y=50;y<=height+50;y=y+h){
  for(var x=50;x<=width+50;x=x+w){
      stroke("#0096c7")
      strokeWeight(2)
      ellipse(x,y,w+fc)
      stroke("#023e8a")
      strokeWeight(2)
      rect(x,y,w+fc)
      stroke("#ffb703")
      strokeWeight(2)
      ellipse(x+50,y,w+fc)
    }
  }
  textSize(fc)
  text("412730201 陳妍希",width-800,height-100)
}



//按下滑鼠播放音樂
function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }

}