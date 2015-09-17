//append click listener
$('#worldmap').click(function(event){
	mouseOverMap(event, true)
});
$('#worldmap').mousemove(function(event){
	mouseOverMap(event, false);
});
//initTooltip
$('#worldmap').tooltip();
//end initTooltip

function mouseOverMap(event, isClick) {
	var offset = $('#worldmap').offset();
	var relX = event.pageX - offset.left;
	var relY = event.pageY - offset.top;
	checkCountry(relX, relY, event, isClick);
}

function checkCountry(x,y, event, isClick){
	if(checkIfBelgium(x,y)){
		(isClick) ? navigateTo("BE") : setTooltip(event, "Belgie");
	}else{
		removeTooltip();
	}
}

function checkIfBelgium(x,y){
	if(x > 460 && x < 471){//check Y coordinates
		if(y > 175 && y < 182){
			return "BE";
		}
	}
}

function setTooltip(event, text){
	$('#worldmap').attr('title',text);
	$('#worldmap').tooltip({
		position: {
			my: "left+3 bottom-3",
			of: event,
			collision: "fit"
		},
		track: true
	});
	$('#worldmap').tooltip('open');
}

function removeTooltip(){
	$('#worldmap').tooltip('close');
	$('#worldmap').removeAttr("title");
}

function navigateTo(countryCode){
	switch(countryCode){
	case "BE":
		window.open("be.html", "Belgie");
		break;
	}
}