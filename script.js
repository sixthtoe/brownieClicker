var brownies = 0;
var clickAmount = 1;

$(document).ready(function() {
	$("#brownies").text("Brownies: 0");

	$("#cookie-clicker").click(function(){
		brownies += clickAmount;
		$("#brownies").text("Brownies: " + brownies);
	});

	$("#upgrade1").click(function(){
		if(brownies >= 10){
			clickAmount += 1;
			brownies -= 10;
			$("#brownies").text("Brownies: " + brownies);
		}else{
			alert("Sorry you do not have enought brownies. You need a total of 10. You need " + (10 - brownies) + " more brownies!");
		}
	});

	$("#upgrade10").click(function() {
		if(brownies >= 100){
			clickAmount += 10;
			brownies -= 100;
			$("#brownies").text("Brownies: " + brownies);
		}else{
			alert("Sorry you do not have enought brownies. You need a total of 100. You need " + (100 - brownies) + " more brownies!");
		}
	});

	$("#upgrade100").click(function(){
		if(brownies >= 1000){
			clickAmount += 100;
			brownies -= 1000;
			$("#brownies").text("Brownies: " + brownies);
		}else{
			alert("Sorry you do not have enought brownies. You need a total of 1000. You need " + (1000 - brownies) + " more brownies!");
		}
	});
});