document.querySelector("img");
document.querySelector("img").src="dice6.png";
document.querySelector(".img2").src="dice6.png";

var randomnumber1 = Math.random();

randomnumber1 = randomnumber1 * 6;
randomnumber1 = Math.floor(randomnumber1)+1;

var fsrc= ("dice"+randomnumber1+".png");
document.querySelector("img").setAttribute("src",fsrc);
var randomnumber2 = Math.random();

randomnumber2 = randomnumber2 * 6;
randomnumber2 = Math.floor(randomnumber2)+1;
fsrc= ("dice"+randomnumber2+".png");
document.querySelector(".img2").setAttribute("src",fsrc);
if(randomnumber1>randomnumber2){
document.querySelector("h1").innerHTML="Player 1 Wins1!";
}else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}



