var symbol; // symbole du joueur est une variable statique
var ok = []; // pour les id deja pris

function disableGame(){
	for(let i = 1; i <= 9; i++){
		document.getElementById(i).disabled = true;
	}
}

function disablePressed(){
	for(let i = 0; i < ok.length; i++){
		document.getElementById(ok[i]).disabled = true;
	}
}

function choice(value){
	symbol = value;
	document.getElementById('choice1').disabled = true;
	document.getElementById('choice2').disabled = true;

	// enable the game content buttons
	for(let i = 1; i <= 9; i++){
		document.getElementById(i).disabled = false;
	}
}

function setSymb(value){
	if(ok.length < 8){
		ok[ok.length] = value;

		let flag, rand;
		do{
			flag = false
			// pour pouvoir avoir une valeur entre 9 et 1 y inclus 9, j'ai choisit 10 comme max car le floor met la valeur la plus petite et non la plus grande donc si je met 9 j'aurai entre 1 et 8 inclus 8
			rand = Math.floor(Math.random() * (10 - 1) + 1);
			// il faut que la valeur de rand ne soit egale a aucune valeur des presentes dans le tableau ok[]
			for(let i = 0; i < ok.length; i++){
				if(rand == ok[i]){ flag = true; }
			}
		} while(flag);
		ok[ok.length] = rand;
		
		document.getElementById(value).value = symbol;
		let randElt = document.getElementById(rand);
		if(symbol == 'X'){
			randElt.value = 'O';
		} else{ randElt.value = 'X'; }

		disablePressed();
	}else{
		alert("Game Finished !");
	}
}