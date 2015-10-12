var brownies = 0;
var clickAmount = 1;

$(document).ready(function() {
	$("#brownies").text("Brownies: 0");

	$("#cookie-clicker").click(function(){
		brownies += clickAmount;
		$("#brownies").text("Brownies: " + brownies);
	});

	$("#upgrade").click(function(){
		if(brownies >= 10){
			clickAmount += 1;
			brownies -= 10;
			$("#brownies").text("Brownies: " + brownies);
		}else{
			alert("Sorry you do not have enought brownies. You need a total of 10. You need " + (10 - brownies) + " more brownies!");
		}
	});
});