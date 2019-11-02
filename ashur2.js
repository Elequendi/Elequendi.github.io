$(document).ready (()=> {
	const $knopf1 = $(".knopf1");
	const $nishrail = $(".nishrail");
	const $nishrail1 = $(".nishrail1");
	const $nishrail2 = $(".nishrail2");
	const $bilder2 = $(".bilder2");
	const $bilder1 = $(".bilder1");
	const $text = $(".text");
	
	array1 = ["Shamashs Heimstadt ward entehrt.", "Lang sind geflossen die Wasser der Ströme,", "Heim gerufen ins Meer,", "fern und glitzernd unter der Sonne.", "Die Erben Ilu-Schumas sind verstreut", "Wie Sand in der Wüste.", "Die Ziqqurrat steht leer.", "Das stolze Niniue ward gebrochen.", "Doch unter der Sonne Glut,", "entzündet ein Funke sich,", "brennt und lodert und strahlt,", "weit hinaus in die Welt.", "Denn die Erben Ilu-schumas, ", "die Kinder Ashurs,", "sie erheben sich aus dem Staub.", "Und erstehen wird wieder,", "aus Asche und Tod,", "strahelnbringend und ehrfurchtgebietend,", "Niniue die erhabene", "alt wie die Zeit", "und stark wie die Sterne.", "Und es wird herrschen,", "wo sein Auge blickt", "und sein Sinn sich wendet,", "Ashur in all seiner Pracht.", "Und der Könige Stimme,", "mit Weisheit gewogen,", "wird sein der Völker Gebot."];
	
	array2 = ["url('images/assyr24.jpg')","url('images/assyr25.jpg')", "url('images/assyr27.jpg')", "url('images/tenor.gif')", "url('images/assyr30.jpg')", "url('images/assyr34.jpg')", "url('images/assyr39.jpg')", "url('images/tenor.gif')", "url('images/assyr37.jpg')", "url('images/fire.gif')", "url('images/fire3.gif')", "url('images/tenor.gif')", "url('images/assyr38.jpg')", "url('images/tenor.gif')", "url('images/assyr41.jpg')", "url('images/assyr40.jpg')", "url('images/tenor.gif')", "url('images/assyr42.jpg')", "url('images/tenor.gif')", "url('images/assyr43.jpg')", "url('images/assyr45.jpg')", "url('images/tenor.gif')", "url('images/assyr46.jpg')"];
	
	let counter = 0;
	let text_counter = 0;
	let counter_bild = 0;

	function bildertausch () {
			if (counter === 0) {
				$bilder2.fadeTo(8000,1);
				$bilder1.fadeTo(8000,0);
				counter = 1;
				}
			else {
				$bilder2.fadeTo(8000,0);
				$bilder1.fadeTo(8000,1);
				counter = 0;
				}
		}

	function texttausch () {
			$text.text(array1[text_counter]);
			text_counter += 1;
			$text.fadeTo(3000,1).delay(3000).fadeTo(3000,0);
		}
	
	function hintergrund_anders (bild) {
			$bilder1.css("backgroundImage", array2[counter_bild]);
			counter_bild += 1;
		}
	
	function hintergrund_anders2 (bild) {
			$bilder2.css("backgroundImage", array2[counter_bild]);
			counter_bild += 1;
		}
	
	
	$knopf1.mouseenter(function() {
			$knopf1.addClass("knopfaktiv");
		})
	$knopf1.mouseleave(function() {
			$knopf1.removeClass("knopfaktiv");
		})
	$knopf1.click(function() {
			$knopf1.addClass("knopfklick").delay(100).fadeOut(900);
			$nishrail.fadeTo(0,1).delay(1000).fadeTo(0,0);	
			$nishrail1.fadeTo(0,0).delay(1000).fadeTo(0,1).delay(1300).fadeTo(0,0);
			$nishrail2.fadeTo(0,0).delay(1000).fadeTo(0,1);
			$bilder2.fadeTo(0,1).delay(8000).fadeTo(7000,0);
			$bilder1.fadeTo(0,0).delay(8000).fadeTo(7000,1);
			$text.text("Ashurs Häuser sind gefallen.")
			$text.fadeTo(0,0).delay(5000).fadeTo(3000,1).delay(3000).fadeTo(3000,0);
			setTimeout(bildertausch,0);
			setTimeout(hintergrund_anders,24000);
			setTimeout(bildertausch,26000);
			setTimeout(texttausch,24000);
			setTimeout(hintergrund_anders2,34000);
			setTimeout(bildertausch,34000);
			setTimeout(texttausch,38000);
			setTimeout(texttausch,47000);
			setTimeout(hintergrund_anders, 44000);
			setTimeout(bildertausch,51000);
			setTimeout(texttausch,57000);
			setTimeout(hintergrund_anders2,61000);
			setTimeout(bildertausch,62000);
			setTimeout(texttausch,70000);
			setTimeout(hintergrund_anders, 69000);
			setTimeout(bildertausch,74000);
			setTimeout(texttausch,80000);
			setTimeout(bildertausch,86000);
			setTimeout(texttausch,95000);
			setTimeout(hintergrund_anders, 95000);
			setTimeout(bildertausch,95000);
			setTimeout(hintergrund_anders2, 103000);
			setTimeout(bildertausch,103000);
			setTimeout(texttausch,104000);
			setTimeout(hintergrund_anders, 111000);	
			setTimeout(bildertausch,111000);
			setTimeout(texttausch,117000);
			setTimeout(hintergrund_anders2, 119000);
			setTimeout(bildertausch,119000);
			setTimeout(hintergrund_anders, 127000);
			setTimeout(texttausch,126000);
			setTimeout(bildertausch,127000);
			setTimeout(texttausch,135000);
			setTimeout(hintergrund_anders2, 135000);
			setTimeout(bildertausch,138000);
			setTimeout(texttausch,144000);
			setTimeout(hintergrund_anders, 143000);
			setTimeout(bildertausch,146000);
			setTimeout(texttausch,154000);
			setTimeout(texttausch,163000);
			setTimeout(texttausch,172000);
			setTimeout(hintergrund_anders2, 154000);
			setTimeout(bildertausch,164000);
			setTimeout(hintergrund_anders, 174000);
			setTimeout(bildertausch,176000);
			setTimeout(texttausch,184000);
			setTimeout(texttausch,193000);
			setTimeout(hintergrund_anders2, 186000);
			setTimeout(bildertausch,190000);
			setTimeout(texttausch,202000);
			setTimeout(hintergrund_anders, 198000);
			setTimeout(bildertausch,204000);
			setTimeout(texttausch,211000);
			setTimeout(texttausch,220000);
			setTimeout(texttausch,229000);
			setTimeout(hintergrund_anders2, 214000);
			setTimeout(bildertausch,234000);
			setTimeout(texttausch,242000);
			setTimeout(texttausch,251000);
			setTimeout(texttausch,260000);
			setTimeout(texttausch,269000);
			setTimeout(hintergrund_anders, 260000);
			setTimeout(bildertausch,266000);
			setTimeout(texttausch,278000);
			setTimeout(texttausch,287000);
			setTimeout(texttausch,296000);
			setTimeout(hintergrund_anders2, 274000);
			setTimeout(bildertausch,274000);
			setTimeout(hintergrund_anders, 282000);
			setTimeout(bildertausch,282000);
			setTimeout(hintergrund_anders2, 290000);
			setTimeout(bildertausch,290000);
			setTimeout(hintergrund_anders, 298000);
			setTimeout(bildertausch,298000);
			setTimeout(hintergrund_anders2, 306000);
			setTimeout(bildertausch,306000);
		
		})
})