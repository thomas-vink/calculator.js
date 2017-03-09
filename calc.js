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
document.getElementById('btnd').addEventListener("click",btn);

						//operators
var getal1 = 0;
var operator="";

document.getElementById("opr+").addEventListener("click",Plus);
document.getElementById("opr-").addEventListener("click",min);
document.getElementById("opr*").addEventListener("click",x);
document.getElementById("opr/").addEventListener("click",deel);
document.getElementById("opr=").addEventListener("click",Calculate);

							//plus

function Plus() {
	getal1 = parseFloat(document.getElementById('register').innerHTML);
	document.getElementById('register').innerHTML = '';
	operator="+"
}

							//keer

function x() {
	getal1 = parseFloat(document.getElementById('register').innerHTML);
	document.getElementById('register').innerHTML = '';
	operator="*"
}							

							//deelen

function deel() {
	getal1 = parseFloat(document.getElementById('register').innerHTML);
	document.getElementById('register').innerHTML = '';
	operator="/"
}							

							//min

function min() {
	getal1 = parseFloat(document.getElementById('register').innerHTML);
	document.getElementById('register').innerHTML = '';
	operator="-"
}							



function Calculate() {
	var getalInDisplay = parseFloat(document.getElementById('register').innerHTML);
	
	if (operator == '+') {
		var uitkomst = getal1 + getalInDisplay;
		uitkomst = uitkomst.toFixed(2);
    }
    if (operator == '-') {
    	var uitkomst = getal1 - getalInDisplay;
    	uitkomst = uitkomst.toFixed(2);
    }
    if (operator == '*') {
    	var uitkomst = getal1 * getalInDisplay;
    	uitkomst = uitkomst.toFixed(2);
    }
    if (operator == '/') {
    	var uitkomst = getal1 / getalInDisplay;
    	uitkomst = uitkomst.toFixed(2);
    }
	document.getElementById('register').innerHTML = uitkomst;
}
























