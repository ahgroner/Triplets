//generate a four digit card id
function makeCard()
{
	att1=Math.floor(Math.random()*3+1)
	att2=Math.floor(Math.random()*3+1)
	att3=Math.floor(Math.random()*3+1)
	att4=Math.floor(Math.random()*3+1)
	return att1*1000+att2*100+att3*10+att4;
}
//get attributes
function getShape(card){ return Number(String(card).charAt(0));}
function getFill(card){ return Number(String(card).charAt(1));}
function getColor(card){ return Number(String(card).charAt(2));}
function getCount(card){ return Number(String(card).charAt(3));}

//create a new card that does not already exist
function addCard()
{
	//return(1111)
	do{
		newCard=makeCard();
	}
	while($("#"+newCard).length==1){
		return(newCard)
	}
}

function pass(value)
{
	return value%3==0;
}

//return true if triplet
function isTriplet(card1,card2,card3)
{
	//return true;
	var sum=card1+card2+card3;
	return (pass(getColor(sum))
	&& pass(getShape(sum))
	&& pass(getCount(sum))
	&& pass(getFill(sum))
	)
}