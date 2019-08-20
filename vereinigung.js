$(document).ready(()=> {
	const $kapitel = $(".kapitel");
	const $text = $(".text");
	const $hintergrund = $(".hintergrund");
	const $hintergrund2 = $(".hintergrund2");
	const $iberisch = $(".iberisch");
	const $knopf = $(".knopf");
	const stein = new Audio("stein.mp3");
	const trommel = new Audio("trommel3.mp3");
	const trommel2 = new Audio("trommel.mp3");
	const trommel3 = new Audio("trommel2.mp3");
	const fanfare = new Audio("fanfare3.mp3");
	const marsch = new Audio("marsch1.mp3");
	const schlacht = new Audio("schlacht.mp3");
	const schlacht2 = new Audio("schlacht2.mp3");
	const musik = new Audio("music2.mp3");
	const intro = new Audio("intro.mp3");
	const markt = new Audio("markt.mp3");
	const gallop = new Audio("gallop.mp3");
	const jubel = new Audio("jubel.mp3");
	const krieg = new Audio("krieg.mp3");
	const carynx = new Audio("carynx.mp3");
	const sieg = new Audio("victory.mp3");
	var counter = 0;
	const arr1 = ["Kurz nachdem wir in Oiasso angekommen waren, räumten wir den Schutt aus der Stadt fort und besserten die Palisadenmauer aus. Wir hatten Glück, das Wetter war uns gewogen und wir fanden unter den Trümmern viel Material, um den Wall damit ausbessern zu können.","Nachdem wir die Mauer instandgesetzt hatten, verteilten sich die Familien in der Festung und begannen ihren Boden abzustecken. Es zeigte sich aber schon bald, dass der Platz uns hier bald ausgehen würde, weshalb wir unbedingt neues Land für alle brauchen würden.","Viele der Familien mussten sich in den umliegenden Regionen niederlassen und gründeten neue Höfe und Dörfer. Doch wussten wir alle, dass wir diese Ortschaften auch beschützen mussten und dafür brauchten wir Verbündete ausserhalb von Varduliens Grenzen.","Nachdem alle bedeutenden Familien sich durch einen Eid dazu verpflichtet hatten, Bosilkas in Fragen der Kriegsführung zu folgen, waren wir zumindest innerlich gefestigt. Doch um die Caristier zu besiegen, mussten neue Allianzen geschmiedet werden.","Daher wurden Abgesandte zu den Stämmen der Vasconen im Osten, der Sibuzaten im Norden, welche uns im Gebirge geholfen hatten und der Concanier im Westen, geschickt, um ihre Hilfe im Konflikt mit den Caristiern und deren zahlreichen Verbündeten zu erbitten.","Alle drei Stämme stimmten dem Bündnis zu und unsere Allianz veranlasste sofort die Verlegung von Truppen an die Caristianische Grenze, denn wir wollten den Feind überraschen, noch bevor dieser seine Kräfte zu bündeln vermochte und seine Heere vereinigen konnte.","Schnell konnten wir das Heer der Caristier nahe der Hauptsiedlung Velbia stellen, wobei unsere gut gerüsteten Krieger ihr Zentrum rasch zu überrennen vermochten und die Festung, bemannt mit nur einer kleinen Garnison von nicht mehr als eintausend Mann, unbewacht vor uns lag.","Zwar kamen die gegnerischen Heere nach und nach ihren Verbündeten zur Hilfe, offenbarten dabei aber das Fehlen jeglicher Kommunikation, da sie sich den unsrigen immer nur als einzelne Verbände und nie als gemeinsame Armee ihrer vereinigten Allianz entgegenstellten.","Bald darauf kapitulierte Velbia und fiel in unsere Hand. Nun hielt uns nichts mehr davon ab in das Gebiet der anderen Stämme einzudringen und ihre Ländereinen zu besetzen. Bald schon folgte die totale Kapitulation der Feinde und Vardulien hatte den ersten Krieg gewonnen.","Das gesamte Gebiet der Allianz ging an Vardulien und somit konnte unser noch junger Stamm zur wichtigsten Macht in der Region werden. Oiasso wurde weiter ausgebaut, neue Festungen an den Grenzen errichtet und die Stärke der Armee in der Folge mehr als verdoppelt.","Als Jahre später die Ländereien der Vasconen im Osten von aggressiven Stämmen aus dem Süden überrannt worden waren, ergriffen wir die Gelegenheit und verleibten uns ihre Lande ebenfalls ein, indem wir die eingefallenen Horden überraschten und vernichteten.", "Nun konnten wir mit unserer vereinten Macht bis zu den Häfen des Südmeeres vorstossen und uns so Zugang zu neuen Handelsrouten sichern. Damit war das gesamte Gebiet der Grenze unter unseren Stamm vereint und genoss eine florierende Epoche des Wachstums und Friedens."];	
	const funktion1 = ()=> {
			$text.text(arr1[counter]);
		};
	const klasse = ()=> {
			$knopf.hide().delay(18000).fadeIn(2000);
			$knopf.removeClass("druck");
		};
	const trommel_play = () => {
			trommel.play();
		};
	const trommel2_play = () => {
			trommel2.play();
		};
	const musik_play = () => {
			musik.play();
		};
	const marsch_play = () => {
			marsch.play();
		};
	const fanfare_play = () => {
			fanfare.play();
		};
	const schlacht_play = () => {
			schlacht.play();
		};
	const schlacht2_play = () => {
			schlacht2.play();
		};
	const intro_play = () => {
			intro.play();
		};
	const markt_play = () => {
			markt.play();
		};
	const gallop_play = () => {
			gallop.play();
		};
	const jubel_play = () => {
			jubel.play();
		};
	const krieg_play = () => {
			krieg.play();
		};
	const carynx_play = () => {
			carynx.play();
		};
	const victory_play = () => {
			sieg.play();
		};
	$kapitel.hide().delay(2000).fadeTo(2000,1).delay(2000).fadeOut(2000);
	$text.text(arr1[0]);
	setTimeout(intro_play, 6000);
	$text.hide().delay(12000).fadeTo(4000,1);
	$iberisch.hide().delay(9000).fadeTo(2000,1);
	$hintergrund2.hide().delay(26000).fadeTo(6000,1);
	$knopf.hide().delay(30000).fadeTo(2000,1);
	$knopf.on("mouseover",()=>{
		$knopf.addClass("hover");
		}).on("mouseleave", ()=> {
		$knopf.removeClass("hover")
		});
	$knopf.on("click", () => {
		counter += 1;
		stein.play();
		if (counter < 12) {
			$knopf.addClass("druck");
			setTimeout(klasse, 900);
			$iberisch.hide().delay(3000).fadeIn(2000);
			$text.fadeOut(2000).delay(5000).fadeIn(4000);
			setTimeout(funktion1,2500);
				};
		if (counter === 1) {
			$iberisch.css("backgroundImage","url('images/stein3.png')");
			$hintergrund.css("backgroundImage","url('images/oppfertig.png')");
			$hintergrund2.fadeTo(1,1).delay(14000).fadeOut(6000);
				};
		if (counter === 2) {
			$iberisch.css("backgroundImage","url('images/stein4.png')");
			$hintergrund2.css("backgroundImage","url('images/oppfertig2.png')");
			$hintergrund2.hide().delay(14000).fadeIn(6000);
			setTimeout(markt_play, 2000);
				};

		if (counter === 3) {
			$iberisch.css("backgroundImage","url('images/stein5.png')");
			$hintergrund.css("backgroundImage","url('images/schwur.png')");
			$hintergrund2.fadeTo(1,1).delay(1000).fadeOut(6000);
				};
		if (counter === 4) {
			$iberisch.css("backgroundImage","url('images/stein2.png')");
			$hintergrund2.css("backgroundImage","url('images/allianz2.png')");
			$hintergrund2.hide().delay(1000).fadeIn(6000);
			setTimeout(gallop_play, 10000);
				};
		if (counter === 5) {
			$iberisch.css("backgroundImage","url('images/stein4.png')");
			$hintergrund.css("backgroundImage","url('images/angriff2.png')");
			$hintergrund2.fadeTo(1,1).delay(1000).fadeOut(6000);
			setTimeout(marsch_play, 10000);
				};
		if (counter === 6) {
			$iberisch.css("backgroundImage","url('images/stein2.png')");
			$hintergrund2.css("backgroundImage","url('images/angriff3.png')");
			$hintergrund2.hide().delay(1000).fadeIn(6000);
			setTimeout(krieg_play, 8000);
				};
		if (counter === 7) {
			$iberisch.css("backgroundImage","url('images/stein5.png')");
			$hintergrund.css("backgroundImage","url('images/angriff4.png')");
			$hintergrund2.fadeTo(1,1).delay(1000).fadeOut(6000);
			setTimeout(schlacht_play, 10000);
				};
		if (counter === 8) {
			$iberisch.css("backgroundImage","url('images/stein3.png')");
			$hintergrund2.css("backgroundImage","url('images/bund2.png')");
			$hintergrund2.hide().delay(1000).fadeIn(6000);
			setTimeout(fanfare_play,14000);
				};
		if (counter === 9) {
			$iberisch.css("backgroundImage","url('images/stein4.png')");
			$hintergrund.css("backgroundImage","url('images/sieg2.png')");
			$hintergrund2.fadeTo(1,1).delay(1000).fadeOut(6000);
			setTimeout(carynx_play, 10000);
				};
		if (counter === 10) {
			$iberisch.css("backgroundImage","url('images/stein2.png')");
			$hintergrund2.css("backgroundImage","url('images/angriff5.png')");
			$hintergrund2.hide().delay(1000).fadeIn(6000);
			setTimeout(schlacht2_play, 12000);

				};
		if (counter === 11) {
			$iberisch.css("backgroundImage","url('images/stein4.png')");
			$hintergrund.css("backgroundImage","url('images/sieg1.png')");
			$hintergrund2.fadeTo(1,1).delay(1000).fadeOut(6000);
			setTimeout(victory_play, 6000);
			intro.pause();
			intro.cancel();
				};
		if (counter === 12) {
			$hintergrund2.css("backgroundImage","url('images/schwarz.png')");
			$hintergrund2.hide().delay(1000).fadeIn(6000);
			$kapitel.text("Ende Zweiter Teil");
			$kapitel.hide().delay(3000).fadeIn(6000);
			$kapitel.css({
					"color": "white",
					"left" : "750px",
					"top"  : "350px"

				});
			$iberisch.hide();
			$text.fadeOut(2000);
			$knopf.fadeOut(2000);
				};

	});
});
