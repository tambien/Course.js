//START HERE
$(function(){
	console.log("jQuerying application running");
	$(".redBackground").click(clickCallback);
	setInterval(loop, 1000);
});

var sourceText = "A written language is the representation of a language by means of a writing system. Written language is an invention in that it must be taught to children; children will pick up spoken language (oral or sign) by exposure without being specifically taught. A written language exists only as a complement to a specific spoken language, and no natural language is purely written. However, extinct languages may be in effect purely written when only their writings survive. [citation needed]";

function loop(){
	//breaking up my source text into an array
	var brokenText = sourceText.split(" ");
	//choose a random spot in my array
	var randomSpot = parseInt(Math.random() * sourceText.length);
	var randomWord = brokenText[randomSpot];
	//asign contents of #notTextBox to randomWord
	$("#notTextBox").html(randomWord);
}

function clickCallback(){
	alert("hi");
}