game=() =>{
const play1= Math.floor(Math.random()*6)+1;
const play1dice=`img/dice-${play1}.png`;
document.getElementById('check').setAttribute('src',play1dice);

const play2= Math.floor(Math.random()*6)+1;
const play2dice=`img/dice-${play2}.png`;
document.getElementById('check1').setAttribute('src',play2dice);

if(play1>play2){
	document.querySelector('h1').innerHTML = "Player 1 Won :)";
}else if(play2>play1){
	document.querySelector('h1').innerHTML = "Player 2 Won :)";
}
else{
	document.querySelecto('h1').innerHTML = "DRAW";
}
}
