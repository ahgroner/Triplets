var points=0

function startGame(){
	for (r=1;r<=5;r++)
	{
		addRow();
	}
}
// cycle=2000
// interval();
// function interval(){
// 	$( "#progress" ).animate({
// 	    width: '100%'
// 	  }, cycle, function() {
// 	  	$('.card svg g').each(function(){
// 			l = Math.floor(Math.random() * 10)-5
// 		  	t = Math.floor(Math.random() * 10)-5
// 		  	$(this).transition({ x: l, y: t }, 2000, "easeInOutCubic");
// 		})
// 	    interval()
// 	});
// }

function addRow(){
	heights=[0,0,0]
	for (i=1;i<=3;i++)
	{
		heights[i-1]=$("#column"+i+" .card").length;
	}
	if(heights[0]==heights[1]&& heights[1]==heights[2]){
		for (column=1;column<=3;column++){
				card=buildCard(addCard());
				place(card, $("#column"+column));
		}
	}
	else{
	max= Math.max.apply(null, heights);
		for (column=1;column<=3;column++){
			var missing=max-(heights[column-1]);
			for(j=0;j<missing; j++){
				id=addCard();
				card=buildCard(addCard());
				place(card, $("#column"+column));
			}
		}
	}
}
function place(card, column)
{
	card.css("margin-bottom","auto");
	column.append(card);
	card.animate({"margin-bottom":"0px"}, 500, function(){});
}
$(document).on("click tap",".card", function(){
	$(this).addClass("selected");
	$(this).transition({
					// height:"240px",
					// width:"240px",
					// left:"-20px",
					// top:"-20px"
					})


	check();
});
$(document).on("click tap",".selected", function(){
	$(this).removeClass("selected");
});

function getColumn(card){
	return card.parent()
}

function check(){
	selected=$(".selected");
	if(selected.length==3){
		if(isTriplet(selected.eq(0).data("id"), selected.eq(1).data("id"), selected.eq(2).data("id"))){
			removeAnimation(selected)
		}
		else {
			selected.removeClass("selected")
		}
	}
}
function removeAnimation(selected)
{

	blowUpCSS={opacity: 0,width: "500px",height: "500px", left: -150,top: -150}

	selected.find("svg").animate( blowUpCSS, 400)
	.promise().done(function () {
		selected.css({ "visibility" : "hidden" })
		selected.animate({height: "0px"}, 400)
		.promise().done(function () {
			selected.remove();
			addRow();
		})
	})
}