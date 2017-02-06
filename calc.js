function btn(parms) {
	register.innerHTML += parms.target.innerHTML;
}
function clear(){
	register.innerHTML = "";
}


//clear
document.getElementById("btnc").addEventListener("click",clear)

//NUMBERS
document.getElementById("btn0").addEventListener("click",btn);
document.getElementById("btn1").addEventListener("click",btn);
document.getElementById("btn2").addEventListener("click",btn);
document.getElementById("btn3").addEventListener("click",btn);
document.getElementById("btn4").addEventListener("click",btn);
document.getElementById("btn5").addEventListener("click",btn);
document.getElementById("btn6").addEventListener("click",btn);
document.getElementById("btn7").addEventListener("click",btn);
document.getElementById("btn8").addEventListener("click",btn);
document.getElementById("btn9").addEventListener("click",btn);




//Operators
var operators;

function op(){
	var operators = 'op';
	console.log ('operators')
}


document.getElementById("opr+").addEventListener("click",op);
document.getElementById("opr-").addEventListener("click",op);
document.getElementById("opr/").addEventListener("click",op);
document.getElementById("opr=").addEventListener("click",op);
document.getElementById("opr*").addEventListener("click",op);



























