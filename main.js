function homeIcon() {
	let home=document.getElementById("home");
	home.src = "images/stickfig2.png"
}

function homeIcon2() {
	let home=document.getElementById("home");
	home.src = "images/stickfig.png"
}

let i=0;

function blocks() {
	if (i<4){
		document.getElementsByClassName('blocks')[i].style.fill='black';
		document.getElementsByClassName('blocks')[i+1].style.fill='red';
		document.getElementsByClassName('blocks')[i+1].onclick=blocks;
		i=i+1;
	} else {
		document.getElementById('Projects').style.color='red';
		document.getElementById('Projects').style.fontWeight='700';
		document.getElementsByClassName('blocks')[i].style.fill='black';
	}
}