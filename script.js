

$(document).ready(function() {
	$("#brownies").text("Brownies: 0");

var brownies = 0;
var clickAmount = 1;
var maxUpgrade = false;

	$("#winner").text("To Win you must have 10000000000000 brownies! You need 10000000000000 more to win!");
	$("#upgraded").text("Per-Click: 1");
	$("#boughtMax").text("TO USE UPGRADE MAX YOU NEED TO BUY IT");
	$("#cookie-clicker").click(function(){
		brownies += clickAmount;
		$("#brownies").text("Brownies: " + brownies);

		if(brownies >= 10000000000000){
			$("#winner").text("YOU WIN YOU HAVE " + (brownies - 10000000000000) + " MORE THAN THE GOAL OF 10000000000000!");
		}else{
			$("#winner").text("To Win you must have 10000000000000 brownies! You need " + (10000000000000 - brownies) + " more to win!");
		}
	});

	$("#reset").click(function() {
		brownies = 0;
		clickAmount = 1;
		maxUpgrade = false;
		$("#winner").text("To Win you must have 10000000000000 brownies! You need 10000000000000 more to win!");
		$("#brownies").text("Brownies: 0");
		$("#upgraded").text("Per-Click: 1");
		$("#boughtMax").text("TO USE UPGRADE MAX YOU NEED TO BUY IT");
	})

	$("#unlockMax").click(function(){
		if(brownies >= 100000){
			brownies -= 100000;
			maxUpgrade = true;
			$("#brownies").text("Brownies: " + brownies);
			$("#boughtMax").text("MAX UPGRADE HAS BEEN BOUGHT");
		}else{
			alert("You can not afford to buy the Max Upgrade! You need " + (100000 - brownies) + " more brownies");
		}
	});

	$("#upgrade1").click(function(){
		if(brownies >= 10){
			clickAmount += 1;
			brownies -= 10;
			$("#upgraded").text("Per-Click: " + clickAmount);
			$("#brownies").text("Brownies: " + brownies);
		}else{
			alert("Sorry you do not have enough brownies. You need a total of 10. You need " + (10 - brownies) + " more brownies!");
		}
	});

	$("#upgrade10").click(function() {
		if(brownies >= 100){
			clickAmount += 10;
			brownies -= 100;
			$("#upgraded").text("Per-Click: " + clickAmount);
			$("#brownies").text("Brownies: " + brownies);
		}else{
			alert("Sorry you do not have enough brownies. You need a total of 100. You need " + (100 - brownies) + " more brownies!");
		}
	});

	$("#upgrade100").click(function(){
		if(brownies >= 1000){
			clickAmount += 100;
			brownies -= 1000;
			$("#upgraded").text("Per-Click: " + clickAmount);
			$("#brownies").text("Brownies: " + brownies);
		}else{
			alert("Sorry you do not have enough brownies. You need a total of 1000. You need " + (1000 - brownies) + " more brownies!");
		}
	});

	$("#upgrade1000").click(function() {
		if(brownies >= 10000){
			clickAmount += 1000;
			brownies -= 10000;
			$("#upgraded").text("Per-Click: " + clickAmount);
			$("#brownies").text("Brownies: " + brownies);
		}else{
			alert("Sorry you do not have enough brownies. You need a total of 10000. You need " + (10000 - brownies) + " more brownies!");
		}
	});



	$("#upgradeMax").click(function() {
		if(maxUpgrade === true){
			if(brownies >= 10){
				var max = Math.floor(brownies / 10);
				clickAmount += max;
				brownies -= (max * 10);
				$("#brownies").text("Brownies: " + brownies);
				$("#upgraded").text("Per-Click: " + clickAmount);
			}else{
				alert("Sorry you do not have enough brownies. You need a atleast 10. You need " + (10 - brownies) + " more brownies!");
			}
		}else{
			alert("You need to unlock Upgrade Max first. You need " + (100000 - brownies) + " more brownies to unlock!");
		}	
	})


	//$("#brownie-set").change(function(){
	//	brownies = $("brownie-set").val();
	//	$("#brownies").text("Brownies: " + brownies);
	//});

	

});

