var color = $("#color");
var paint = $("#paint");
	
var textButton = $("#text");
var backgroundButton = $("#background");
var textBool = false;
var backgroundBool = false;






textButton.click(function(){
	typeReset();
	this.style.borderStyle = "inset";
	textBool = true;
})
backgroundButton.click(function(){
	typeReset();
	this.style.borderStyle = "inset";
	backgroundBool = true;
})


var bodyButton = $("#body_op");
var divButton = $("#div_op");
var pButton = $("#p_op");
var liButton = $("#li_op");
var bodyBool = false;
var divBool = false;
var pBool = false;
var liBool = false;



bodyButton.click(function(){
	partReset();
	this.style.borderStyle = "inset";
	bodyBool = true;
})
divButton.click(function(){
	partReset();
	this.style.borderStyle = "inset";
	divBool = true;
})
pButton.click(function(){
	partReset();
	this.style.borderStyle = "inset";
	pBool = true;
})
liButton.click(function(){
	partReset();
	this.style.borderStyle = "inset";
	liBool = true;
})





paint.click(function(){
	chrome.tabs.query({ active:true, currentWindow:true} , function(tab){
        chrome.tabs.sendMessage( tab[0].id, {part: getPart(), type: getType(), color: getColor()});

    });
})	







//
//FUNCTIONS
//


function hexToRGB(s) {
	let r = s.substring(1,3);
	let g = s.substring(3,5);
	let b = s.substring(5,7);
	r = parseInt(r,16).toString(10);
	g = parseInt(g,16).toString(10);
	b = parseInt(b,16).toString(10);
	return "rgb(" + r + "," + g + "," + b + ")";
}

function partReset(){
	bodyButton.css("border-style", "outset");
	divButton.css("border-style", "outset");
	pButton.css("border-style", "outset");
	liButton.css("border-style", "outset");
	bodyBool = false;
	divBool = false;
	pBool = false;
	liBool = false;
}

function getPart() {
	if (bodyBool){
		return "body";
	}
	else if (divBool){
		return "div";
	}
	else if (pBool){
		return "div";
	}
	else if (liBool){
		return "div";
	} else {
		return "n";
	}

}

function getType() {
	if (textBool) {
		return "color"
	} else if (backgroundBool) {
		return "background-color"
	} else {
		return "n"
	}
}
function getColor() {
	return hexToRGB(color.val())
}

function typeReset(){
	textButton.css("border-style", "outset");
	backgroundButton.css("border-style", "outset");
	textBool = false;
	backgroundBool = false;
}