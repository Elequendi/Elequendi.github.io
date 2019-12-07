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
		if ($(".aar_bild").attr("src") != "images/assyr-aar1.jpg") {
			if($(".aar").css("height") > "1"){
				$(".aar_bild").attr("src", "images/assyr-aar1.jpg");}
			else {
				$(".aar_bild").attr("src", "images/assyr-aar1.jpg");
				$(".aar").css("height", "90%");
				$(".rahmen").fadeTo(0,0);}}
		else {
			if ($(".aar").css("height") < "1") {
				$(".aar").css("height", "90%");
				$(".rahmen").fadeTo(0,0);}
			else {
				$(".aar").css("height", "0%")
				$(".rahmen").fadeTo(0,1);}}
	})
	$("#flamme").click(function(){
		if ($(".aar_bild").attr("src") != "images/assyr-aar2.jpg") {
			if($(".aar").css("height") > "1"){
				$(".aar_bild").attr("src", "images/assyr-aar2.jpg");}
			else {
				$(".aar_bild").attr("src", "images/assyr-aar2.jpg");
				$(".aar").css("height", "90%");
				$(".rahmen").fadeTo(0,0);}}
		else {
			if ($(".aar").css("height") < "1") {
				$(".aar").css("height", "90%");
				$(".rahmen").fadeTo(0,0);}
			else {
				$(".aar").css("height", "0%")
				$(".rahmen").fadeTo(0,1);}}
	})
	$("#licht").click(function(){
		if ($(".aar_bild").attr("src") != "images/assyr-aar3.jpg") {
			if($(".aar").css("height") > "1"){
				$(".aar_bild").attr("src", "images/assyr-aar3.jpg");}
			else {
				$(".aar_bild").attr("src", "images/assyr-aar3.jpg");
				$(".aar").css("height", "90%");
				$(".rahmen").fadeTo(0,0);}}
		else {
			if ($(".aar").css("height") < "1") {
				$(".aar").css("height", "90%");
				$(".rahmen").fadeTo(0,0);}
			else {
				$(".aar").css("height", "0%")
				$(".rahmen").fadeTo(0,1);}}
	})
})