$(document).ready (()=> {
	$(".bild").mouseenter(function() {
		$(this).addClass("bildaktiv");
		$(this).children().fadeTo(100, 1);
	})
	$(".bild").mouseleave(function() {
		$(this).removeClass("bildaktiv");
		if ($(this).children().text() != "coming soon") {
			$(this).children().fadeTo(100, 0);
					}
	})
	$("#asche").click(function(){
		if ($(".aar").css("height") < "1") {
			$(".aar").css("height", "90%");
			$(".rahmen").fadeTo(0,0);}
		else {
			$(".aar").css("height", "0%")
			$(".rahmen").fadeTo(0,1);}
	})
})