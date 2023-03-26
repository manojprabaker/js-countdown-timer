
let cnt=document.querySelector(".col");
let arr=["Start","Pause","Resume","Stop"];
arr.forEach(function(e,i){
	
	let btn= document.createElement("button");
	btn.innerHTML=e;
	btn.className=e;
	cnt.appendChild(btn);
	btn.style.padding="12px";
	btn.style.margin="12px";
});

function clock(){
	let date= new Date;
	let hour=date.getHours;
	let minutes=date.getMinutes;
	let seconds=date.getSeconds;
	document.querySelector(".time").innerHTML=date.toLocaleTimeString();
	
}

let srtbtn=document.querySelector(".Start");
srtbtn.addEventListener("click",start);
var timeDelay;
function start() {
	timeDelay=setInterval(clock,1000);
}


let psbtn=document.querySelector(".Pause");
psbtn.addEventListener("click",pause);
var pasued;
function pause() {
	paused=clearInterval(timeDelay);
}

let rsbtn=document.querySelector(".Resume");
rsbtn.addEventListener("click",resume);

function resume() {
	start();
}

let stpbtn=document.querySelector(".Stop");
stpbtn.addEventListener("click",stoper);
var stopped;
function stoper() {
	stopped=clearInterval(timeDelay);
	document.querySelector(".time").innerHTML="00:00:00";
}