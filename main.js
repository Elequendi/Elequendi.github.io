$(document).ready(()=> {
	const $kord = $(".kord");
	const $img = $(".image");
	$kord.on("mouseenter", ()=> {
			$kord.addClass("finger");
	});
	let counter = 0;
	const Arr2 = ["ptol1.html","Vard1.html"];
	const Arr1 = ["url('images/pharos.png')", "url('images/stone1.png')"];
	const Arr3 = ["Das Reich am Nil","Das Ende des Marsches"];
	$kord.on("click", () => {
			counter += 1;
			if (counter > (Arr1.length - 1)) {
					counter = 0;
				};
			$img.hide();
			$img.css("backgroundImage", Arr1[counter]);
			$img.fadeIn(800);
			$img.attr("href", Arr2[counter]);
			$(".Beschreibung").text(Arr3[counter]);
			return counter;
	});
	$kord.on("mousedown", () => {
			$kord.css("height","1210px");
	})
	$kord.on("mouseup", () => {
			$kord.css("height","1190px");
	})

});
