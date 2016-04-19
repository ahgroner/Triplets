
$(document).on("click tap","#play_button", function(){
	expand={width: "100%", "left" : "0%", "border-radius": 0}
	squish={height: "0px",  top: "550px","line-height":"0px"}
	squishVertical={width: "0px"}
	console.log(this)

	$("#play_button").animate(expand, 300, function(){
		$("#play_button").animate(squish, 300, function(){
			$("#play_button").hide();
			$("#play").hide();
			setTimeout(function(){
				$("#board").show();
				$("#home").hide();
				$("#play_button").hide();
				startGame();
			}, 500);
		})
	})
});



