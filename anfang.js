$(document).ready (() => {
	const Arr1 = ["Erster Teil:  Der Weg","Drei Monde schon.","Der Marsch war hart zu uns allen.","Vor Krieg fliehen wir...","...doch nur Krieg scheinen wir zu finden.","Terulier", "Alle fliehen mit uns.","Von den Bergen zur Küste gingen wir und wieder zurück.", "Dann, hinter einer Hügelkuppe...", "...die Ruinen einer zerstörten und verlassenen Siedlung.","Plötzlich die Stimme einer Frau..", "...wie aus dem Nichts taucht sie auf."];
	const Arr2 = ["Fremde, flüstert der Wind. Aus dem Norden, murmelt die Erde. Krieg und Leid, sagen die Gräser und Bäume. Doch eure Namen kenne ich nicht. Zuflucht könntet ihr allerdings finden, in den Gefilden, die einst lebendig und nun verlassen.","Dieser Ort dort unten, Oiasso ist sein Name und lebendig und blühend war er einst. Doch Neid und Missgunt, Fehden und Gier zerstörten ihn. Von Innen und Außen. Doch nun lebt niemand mehr, weder Freund noch Feind, alle gingen zu den Ahnen, so oder so.","Versteckt in der Tat und Fruchtbar das Land. Doch solltet ihr wissen, dass die Caristier im Westen sich nun hierhin zu wenden beginnen, ihr Land zu erweitern. Doch kann ich euch Rat geben, wenn ihr mir erzählt von eurer Reise.","So wie ich es versprach will ich tun. Die Caristier solltet ihr zwar fürchten wie ich sagte, denn sie haben viele Bundesgenossen, doch leben im Osten und Süden von hier die Vasconier. Sagt ihnen, ihr wäret Feinde der Caristier und sie werden euch helfen.","Berechtigt sind deine Fragen Bosilkas, doch die Vasconier sehen sich selbst von Feinden umgeben und werden nicht schnell riskieren einen neuen Verbündeten zum Feinde sich zu machen. Zeit werdet ihr haben, wenn erst die Caristier zurückgeschlagen sind. Zeit einen neuen Stamm zu gründen","Gut habt ihr gewählt Häuptling. Euer Stamm wird erblühen, dass sagen mir die Geister der Ahnen. Trefft eure Entscheidungen wie ihr diese getroffen habt. Mit Bedacht doch auch mit dem Herzen. Doch eilt nun, viel Arbeit ist noch zu tun, wenn diese Siedlung ihr wieder errichten wollt.","So weit wie ihr bin ich gereist und noch zehn mal so viel. Meine Heimat liegt weit hinter dem Horizont des Horizontes. Meinen Namen hat lange Zeit niemand ausgesprochen oder vernommen. Ich bin Xindra, Kind der Morgenröte. Lebt nun wohl Bosilkas, Anführer der Vardulier. Viele Winter lang werden wir uns nicht begegnen, doch wir werden uns wiedersehen, wenn dunkel die Stunden werden."];
	const Arr3 = ["Mein Name ist Bosilkas. Die, die mit mir reisen, kommen aus vielen Stämmen und wurden aus der Heimat vertrieben. Wenn ihr von einer Zuflucht sprecht, meint ihr den zerstörten Ort dort unten im Tal? Sicher wirkt er allerdings nicht.","Es lebt also niemand mehr, der Ihn für sich beanspuchen könnte? Niemand der von ihm weiß? Dies ist wahrlich seltsam. Doch könnte es in der Tat das Ende unserer Leiden sein. Eine neue Heimat. Das Tal ist in der Tat gut versteckt.","Wenn dieser Rat uns eine Zukunft hier einbringen kann, so möchte ich euch gern davon erzählen. Doch kann ich nur von meiner Reise erzählen, und nur eine Geschichte von vielen ist sie. Dann höre gute Frau von den Begebnissen unserer Fahrt.", "Nun das war meine Gechichte. Wie ihr seht, sind wir die Kinder vieler Stämme und beten zu vielen Göttern. Lange sind wir gewandert und nun brauchen wir eine Heimstätte, wo wir uns ein neues Leben aufbauen können. Würdet ihr uns nun euren Rat erteilen gute Frau?","Aber was ist, wenn diese selbst sich gegen uns wenden sollten, tauschten wir nicht nur einen Feind, gegen einen anderen womöglich noch schlimmeren ein? Wer würde sie wiederum davon abhalten, sich gegen uns zu wenden? Einen Krieg, allein gegen einen Stamm, können wir nicht gewinnen.","Ein großes Risiko gehe ich ein, sollte ich euch trauen. Aber eine Wahl habe ich kaum und auch mein Herz sagt mir, dass euer Rat der richtige sei. Ein neur Stamm habt ihr gesagt? Ja das sollten wir sein. Ich denke wir sollten hier unsere neue Stadt errichten. Dies ist eine Grenze zwischen Nord und Süd. Lasst uns also das Volk der Grenze sein, die Varduli.","Recht habt ihr gute Frau. Doch bevor wir weiterziehen. Sagt wer seid ihr, denn ihr nanntet mir nicht euren Namen. Seid ihr auch eine Fremde hier oder war dies gar eure Stadt?"];
	const $slide = $(".slide");
	const $weiter = $(".weiter");
	const $text = $(".text");
	const $hintergrund = $(".hintergrund");
	const $blaser = $(".blaser");
	const $blasel = $(".blasel");
	const $textr = $(".textr");
	const $textl = $(".textl");
	const $mann = $(".mann");
	const funktion1 = () =>{
			$text.text(Arr1[counter]);
		};
	const funktion2 = () => {
		$slide.fadeIn(2000);
	};
	const funktion3 = () => {
		$weiter.fadeTo(2000, 1);
	};
	const funktion4 = () => {
		$hintergrund.css("backgroundImage","url('images/Krieg1.png')")
	};
	const funktion5 = () => {
		$hintergrund.css("backgroundImage","url('images/Krieg2.png')")
	};
	const funktion6 = () => {
		$text.css("color","red");
	};
	const funktion7 = () => {
		$text.text("Terulier, Sorgier");
	};
	const funktion8 = () => {
		$text.text("Terulier, Sorgier, Bulgier");
	};
	const funktion9 = () => {
		$text.text("Terulier, Sorgier, Bulgier, Alukier");
	};
	const funktion10 = () => {
		$text.text("Terulier, Sorgier, Bulgier, Alukier, Rugier...");
	};
	const funktion11 = () => {
		$text.text("..alle marschieren mit uns.");
	};
	const funktion12 = () => {
		$hintergrund.css("backgroundImage","url('images/voelker1.png')");
	};
	const funktion13 = () => {
		$(".voelker2").fadeTo(1500, 1);
	};
	const funktion14 = () => {
		$(".voelker3").fadeTo(1500, 1);
	};
	const funktion15 = () => {
		$(".voelker4").fadeTo(1500, 1);
	};
	const funktion16 = () => {
		$(".voelker5").fadeTo(1500, 1);
	};
	const funktion17 = () => {
		$hintergrund.css("backgroundImage","url('images/voelker6.png')");
	};
	const funktion18 = () => {
		$hintergrund.css("backgroundImage","url('images/kueste.png')");
	};
	const funktion19 = () => {
		$text.css("color","black");
	};
	const funktion20 = () => {
		$hintergrund.css("backgroundImage","url('images/kuppe.png')");
	};
	const funktion21 = () => {
		$hintergrund.css("backgroundImage","url('images/huegel1.png')");
	};
	const funktion22 = () => {
		$hintergrund.css("backgroundImage","url('images/huegel2.png')");
	};
	const funktion23 = () => {
		$blaser.css("backgroundImage","url('images/AAR-blase1.png')");
	};
	const funktion24 = () => {
		$blaser.css("backgroundImage","url('images/AAR-blase2.png')");
	};
	const funktion25 = () => {
		$blaser.css("backgroundImage","url('images/AAR-blase3.png')");
	};
	const funktion26 = () => {
		$blaser.css("backgroundImage","url('images/AAR-blase4.png')");
	};
	const funktion27 = () => {
		$textr.text(Arr3[3]);
	};
	const funktion28 = () => {
		$hintergrund.fadeOut(3000);
	};
	const funktion29 = () => {
		$(".endtext").fadeTo(2000, 1);
	};
	const funktion30 = () => {
		$text.css("fontSize", "60px");
	};
	let counter = 0;
	$slide.hide()
	$text.text(Arr1[0]);
	setTimeout(funktion2, 2000);
	setTimeout(funktion3, 4000);
	$weiter.on("click", () => {
		counter += 1;
		$slide.fadeOut(2000).delay(1200).fadeIn(2000);
		if (counter === 1) {
				setTimeout(funktion30, 2200);
			};					
		if (counter < 12) {
				setTimeout(funktion1, 2200);
			};
		if (counter === 3) {
				$hintergrund.fadeOut(1000).delay(1100).fadeIn(1500);
				setTimeout(funktion4, 1050);
			};
		if (counter === 4) {
				$hintergrund.fadeOut(1000).delay(1100).fadeIn(1500);
				setTimeout(funktion5, 1050);
				setTimeout(funktion6, 1050);
			};
		if (counter === 5) {
				$hintergrund.fadeOut(1000).delay(1100).fadeIn(1500);
				setTimeout(funktion12, 1050);
				setTimeout(funktion7, 5000);
				setTimeout(funktion8, 6500);
				setTimeout(funktion9, 8000);
				setTimeout(funktion10, 9500);
				setTimeout(funktion11, 11000);
				setTimeout(funktion13, 5000);
				setTimeout(funktion14, 6500);
				setTimeout(funktion15, 8000);
				setTimeout(funktion16, 9500);
				setTimeout(funktion11, 11000);
				$weiter.hide().delay(11000).fadeIn(2000);
			};
		if (counter === 6) {
				$hintergrund.fadeOut(1000).delay(1100).fadeIn(1500);
				setTimeout(funktion17, 1050);
				$(".voelker2").fadeOut(1000);
				$(".voelker3").fadeOut(1000);
				$(".voelker4").fadeOut(1000);
				$(".voelker5").fadeOut(1000);
			};
		if (counter === 7) {
				$hintergrund.fadeOut(1000).delay(1100).fadeIn(1500);
				setTimeout(funktion18, 1050);
				setTimeout(funktion19, 1050);
			};
		if (counter === 8) {
				$hintergrund.fadeOut(1000).delay(1100).fadeIn(1500);
				setTimeout(funktion20, 1050);
			};
		if (counter === 9) {
				$hintergrund.fadeOut(1000).delay(1100).fadeIn(1500);
				setTimeout(funktion21, 1050);
			};

		if (counter === 11) {
				$hintergrund.fadeOut(1000).delay(1100).fadeIn(1500);
				setTimeout(funktion22, 1050);
			};
		if (counter === 12) {
				$text.fadeTo(0,0);
				$blasel.fadeTo(1500, 1);
			};
		if (counter === 13) {
				$blasel.fadeOut(500);
				$mann.fadeTo(1500, 1);
				$blaser.fadeTo(1500, 1);
			};
		if (counter === 14) {
				$blaser.fadeOut(500);
				$textl.text(Arr2[0]);
				$blasel.css("height","370px");
				$blasel.fadeIn(1500);
				$(".frau").fadeTo(0,1);
			};
		if (counter === 15) {
				$blasel.fadeOut(500);
				$textr.text(Arr3[0]);
				$blaser.css("height","330px");
				$blaser.fadeIn(1500);
			};
		if (counter === 16) {
				$blaser.fadeOut(500);
				$textl.text(Arr2[1]);
				$blasel.css("height","370px");
				$blasel.fadeIn(1500);
			};
		if (counter === 17) {
				$blasel.fadeOut(500);
				$textr.text(Arr3[1]);
				$blaser.css("height","330px");
				$blaser.fadeIn(1500);
			};
		if (counter === 18) {
				$blaser.fadeOut(500);
				$textl.text(Arr2[2]);
				$blasel.css("height","340px");
				$blasel.fadeIn(1500);
			};
		if (counter === 19) {
				$blasel.fadeOut(500);
				$textr.text(Arr3[2]);
				$blaser.css("height","370px");
				$blaser.css("top","350px");
				$blaser.fadeIn(1500);
			};
		if (counter === 20) {
				$textr.hide();
				$blaser.hide().delay(600).fadeIn(1000);
				$blaser.css("height","720px");
				$blaser.css("width","900px");
				$blaser.css("left","450px");
				$blaser.css("top","40px");
				setTimeout(funktion23, 550);
			};
		if (counter === 21) {
				$blaser.fadeOut(1000).delay(500).fadeIn(1000);
				setTimeout(funktion24, 1050);
			};
		if (counter === 22) {
				$blaser.fadeOut(1000).delay(500).fadeIn(1000);
				setTimeout(funktion25, 1050);
			};
		if (counter === 23) {
				$blaser.fadeOut(1000).delay(500).fadeIn(1000);
				setTimeout(funktion26, 1050);
			};
		if (counter === 24) {
				$textr.fadeOut(500).delay(500).fadeIn(500);
				setTimeout(funktion27, 550);
				$blaser.css("height","370px");
				$blaser.css("width","800px");
				$blaser.css("top","360px");
				$blaser.css("left","550px");
				$blaser.css("backgroundImage","url('images/blaser.png')");
				$blaser.hide().delay(500).fadeIn(1500);
			};
		if (counter === 25) {
				$blaser.fadeOut(500);
				$textl.text(Arr2[3]);
				$blasel.css("height","370px");
				$blasel.fadeIn(1500);
			};
		if (counter === 26) {
				$blasel.fadeOut(500);
				$textr.text(Arr3[4]);
				$blaser.css("height","420px");
				$blaser.fadeIn(1500);
				$blaser.css("top","260px");
			};
		if (counter === 27) {
				$blaser.fadeOut(500);
				$textl.text(Arr2[4]);
				$blasel.css("height","440px");
				$blasel.fadeIn(1500);
			};
		if (counter === 28) {
				$blasel.fadeOut(500);
				$textr.text(Arr3[5]);
				$blaser.css("height","470px");
				$blaser.fadeIn(1500);
				$blaser.css("top","250px");
			};
		if (counter === 29) {
				$blaser.fadeOut(500);
				$textl.text(Arr2[5]);
				$blasel.css("height","420px");
				$blasel.fadeIn(1500);
			};
		if (counter === 30) {
				$blasel.fadeOut(500);
				$textr.text(Arr3[6]);
				$blaser.css("height","290px");
				$blaser.css("top","290px");
				$blaser.fadeIn(1500);
			};
		if (counter === 31) {
				$blaser.fadeOut(500);
				$textl.text(Arr2[6]);
				$blasel.css("height","430px");
				$blasel.css("width","1020px");
				$textl.css("width","940px");
				$textl.css("left","55px");
				$blasel.fadeIn(1500);
			};
		if (counter === 32) {
				$blasel.hide();
				$(".frau2").fadeTo(0,1);
				setTimeout(funktion28, 2500);
				setTimeout(funktion29, 5500);
			};
		$weiter.hide().delay(5500).fadeIn(2000);
	});
	
});