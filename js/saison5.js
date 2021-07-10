// --------------------
// --------------------
// --   EXERCICE 1   --
// --------------------
// --------------------

// ALGORITHME Exo_5_1 JSPROMPT
function Exo_5_1()
// DEBUT
{
	var iNum;

	//Ecrire "Veuillez saisir une valeur entre 1 et 3"
	//Lire iNum
	iNum = prompt("Veuillez saisir une valeur entre 1 et 3");


	//TantQue iNum<1 OU iNum>3
	while ((iNum < 1) || (iNum > 3)) {
		//Ecrire "ce nombre n'est pas compris entre 1 et 3"
		alert("ce nombre n'est pas compris entre 1 et 3");
		//Lire iNum
		iNum = prompt("Veuillez saisir une valeur entre 1 et 3");

		// FinTantQue	
	}
	//Ecrire : "C'est tout bon !"
	alert("C'est tout bon !");
	//Fin
}
// ----------
// ----------

// // ALGORITHME Exo_5_1 JSFORM
// function Exo_5_1_jsform()
// // DEBUT
// {	var iNum;

// 	iNum=0;

// 	//Ecrire "Entrez un chiffre entre 1 et 3"		

// 	//TantQue iNum<1 ou iNum>3
// 	if (iNum<1 || iNum>3)
// 	{
// 		//Lire iNum
// 		iNum=+document.getElementById("iNum").value;
// 		if (iNum<1 || iNum>3)
// 		{
// 		//Ecrire "ce nombre n'est pas compris entre 1 et 3"
// 		document.getElementById("sp_resultat_code").innerHTML="Ce nombre n'est pas compris entre 1 et 3";
// 		}
// 		else
// 	//Ecrire : "C'est tout bon !"
// 	document.getElementById("sp_resultat_code").innerHTML="C'est tout bon !";
// 	// FinTantQue	
// 	}

// //Fin
// }

// ALGORITHME Exo_5_1 JSFORM
function Exo_5_1_jsform()
// DEBUT
{
	var iNum;

	//Lire iNum
	iNum = +document.getElementById("iNum").value;


	//TantQue iNum<1 OU iNum>3
	if ((iNum < 1) || (iNum > 3)) {
		//Ecrire "ce nombre n'est pas compris entre 1 et 3"
		document.getElementById("sp_resultat_code").innerHTML = "<span style='color: red'>Ce nombre n'est pas compris entre 1 et 3</span>";
		// FinTantQue	
	}
	else {
		//Ecrire : "C'est tout bon !"
		document.getElementById("sp_resultat_code").innerHTML = "C'est tout bon !";
		//Fin SiNON
	}
	//Fin
}
// ----------
// ----------

// ALGORITHME Exo_5_1 JQUERY
function Exo_5_1_jquery()
// DEBUT
{
	var iNum;

	//Lire iNum
	iNum = +$("#iNum").val();


	//TantQue iNum<1 OU iNum>3
	if ((iNum < 1) || (iNum > 3)) {
		//Ecrire "ce nombre n'est pas compris entre 1 et 3"
		$("#sp_resultat_code").html("<span style='color: red'>Ce nombre n'est pas compris entre 1 et 3</span>");
		// FinTantQue	
	}
	else {
		//Ecrire : "C'est tout bon !"
		$("#sp_resultat_code").html("C'est tout bon !");
		//Fin SINON
	}
	//Fin
}
// ----------
// ----------
// --------------------
// --------------------
// --  EXERCICE 2 a) --
// --------------------
// --------------------

// ALGORITHME Exo_5_2_a JSFORM
function Exo_5_2_a_jsform()
// DEBUT
{
	var iNum;

	//Lire iNum
	iNum = +document.getElementById("iNum").value;


	//TantQue iNum<10 OU iNum>20
	if ((iNum < 10) || (iNum > 20)) {
		//Ecrire "ce nombre n'est pas compris entre 10 et 20"
		document.getElementById("sp_resultat_code_1").innerHTML = "[" + iNum + "]" + " n'est pas compris entre 10 et 20 !";

		//SI iNum<10 Alors
		if (iNum < 10) {
			//Ecrire "Plus grand!"
			document.getElementById("sp_resultat_code_2").innerHTML = "<br><span style='color: red'>Plus grand !</span>";
		}

		//Sinon
		else {
			//Ecrire "Plus petit !"
			document.getElementById("sp_resultat_code_2").innerHTML = "<br><span style='color: red'>Plus petit !</span>";
		}
		// FinTantQue	
	}
	else {
		//Ecrire : "La réponse convient"
		document.getElementById("sp_resultat_code_1").innerHTML = "[" + iNum + "]" + " est bien compris entre 10 et 20...";
		document.getElementById("sp_resultat_code_2").innerHTML = "<br>C'est parfait !";
	}
	//Fin
}
// ----------
// ----------

// ALGORITHME Exo_5_2_a JQUERY
function Exo_5_2_a_jquery()
// DEBUT
{
	var iNum;

	//Lire iNum
	iNum = +$("#iNum").val();



	//TantQue iNum<10 OU iNum>20
	if ((iNum < 10) || (iNum > 20)) {
		//Ecrire "ce nombre n'est pas compris entre 10 et 20"
		$("#sp_resultat_code_1").html("[" + iNum + "]" + " n'est pas compris entre 10 et 20 !");

		//SI iNum<10 Alors
		if (iNum < 10) {
			//Ecrire "Plus grand!"
			$("#sp_resultat_code_2").html("<br><span style='color: red'>Plus grand !</span>");
		}

		//Sinon
		else {
			//Ecrire "Plus petit !"
			$("#sp_resultat_code_2").html("<br><span style='color: red'>Plus petit !</span>");
		}
		// FinTantQue	
	}
	else {
		//Ecrire : "La réponse convient"
		$("#sp_resultat_code_1").html("[" + iNum + "]" + " est bien compris entre 10 et 20...");
		$("#sp_resultat_code_2").html("<br>C'est parfait !");
	}
	//Fin
}
// ----------
// ----------
// --------------------
// --------------------
// --  EXERCICE 2 b) --
// --------------------
// --------------------


// ALGORITHME Exo_5_2_b JSFORM
var iRand, iTour;
iRand = Math.floor(Math.random() * 100) + 1;
iTour = 1;
function Exo_5_2_b_jsform()
// DEBUT
{
	var iNum;
	//Lire iNum
	iNum = +document.getElementById("iNum").value;

	// console.log("iNum=" +iNum);
	// console.log("tour=" + iTour);
	// console.log("chiffre random=" +iRand);

	//TantQue iNum <> iRand
	if (iNum != iRand) {
		//Ecrire "Perdu, ce n'est pas " + iNum +"." + "<br>Essayez un autre nombre"
		document.getElementById("sp_resultat_code_1").innerHTML = "Perdu, ce n'est pas " + iNum + "." + "<br>Essayez un autre nombre (triche: " + iRand + ")";
		iTour++;
		//SI iNum<iRand Alors
		if (iNum < iRand) {
			//Ecrire "Essayez plus grand !"
			document.getElementById("sp_resultat_code_2").innerHTML = "<br><span style='color: red'>Essayez plus grand !</span>";
		}

		//Sinon
		else {
			//Ecrire "Essayez plus petit !"
			document.getElementById("sp_resultat_code_2").innerHTML = "<br><span style='color: red'>Essayez plus petit !</span>";
		}
		// FinTantQue	
	}
	else {
		//Ecrire : "Bravo, vous avez trouvé en " + iTour + " tentative(s)"
		document.getElementById("sp_resultat_code_1").innerHTML = "Bravo, vous avez trouvé !!";
		document.getElementById("sp_resultat_code_2").innerHTML = "<br>en " + iTour + " tentative(s). <br>Une autre partie ?";
		iRand = Math.floor(Math.random() * 100) + 1;
		iTour = 1;
	}
	//Fin
}
// ----------
// ----------

// ALGORITHME Exo_5_2_b JQUERY
///////////////////////////////
// VARIABLES DÉJA DÉCLARÉES //
//////////////////////////////
// var iRand, iTour;
// iRand = Math.floor(Math.random() * 100) + 1;
// iTour = 1;
//////////////////////////////
var iRand, iTour;
iRand = Math.floor(Math.random() * 100) + 1;
iTour = 1;
function Exo_5_2_b_jquery()
// DEBUT
{
	var iNum;
	//Lire iNum
	iNum = +$("#iNum").val();

	//TantQue iNum <> iRand
	if (iNum != iRand) {
		//Ecrire "Perdu, ce n'est pas " + iNum +"." + "<br>Essayez un autre nombre"
		$("#sp_resultat_code_1").html("Perdu, ce n'est pas " + iNum + "." + "<br>Essayez un autre nombre (triche: " + iRand + ")");
		iTour++;
		//SI iNum<iRand Alors
		if (iNum < iRand) {
			//Ecrire "Essayez plus grand !"
			$("#sp_resultat_code_2").html("<br><span style='color: red'>Essayez plus grand !</span>");
		}

		//Sinon
		else {
			//Ecrire "Essayez plus petit !"
			$("#sp_resultat_code_2").html("<br><span style='color: red'>Essayez plus petit !</span>");
		}
		// FinTantQue	
	}
	else {
		//Ecrire : "Bravo, vous avez trouvé en " + iTour + " tentative(s)"
		$("#sp_resultat_code_1").html("Bravo, vous avez trouvé !!");
		$("#sp_resultat_code_2").html("<br>en " + iTour + " tentative(s). <br>Une autre partie ?");
		iRand = Math.floor(Math.random() * 100) + 1;
		iTour = 1;
	}
	//Fin	
}
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 3   --
// --------------------
// --------------------

// ALGORITHME Exo_5_3 JSFORM
function Exo_5_3_jsform()
// DEBUT
{
	var iNbre, i;

	//Pour effacer résultat précédent
	document.getElementById("sp_resultat_code").innerHTML = "";
	//Lire iNbre
	iNbre = +document.getElementById("iNbre").value;
	i = iNbre + 10;

	//TantQue iNbre <> i Alors
	while (iNbre != i) {
		iNbre = iNbre + 1;
		//Ecrire "iNbre" avec ternaire si iNbre<i alors affiche " / " sinon n'affiche rien("")
		document.getElementById("sp_resultat_code").innerHTML += (iNbre + (iNbre<(i)?" / ":""));
		// FinTantQue	
	}
	//Fin	
}
// ----------
// ----------					

// ALGORITHME Exo_5_3 JQUERY
function Exo_5_3_jquery()
// DEBUT
{
	var iNbre, i;

	//Pour effacer résultat précédent
	$("#sp_resultat_code").html("");
	//Lire iNbre
	iNbre = +$("#iNbre").val();
	i = iNbre + 10;

	//TantQue iNbre <> i Alors
	while (iNbre != i) {
		iNbre = iNbre + 1;
		//Ecrire "iNbre" avec ternaire si iNbre<i alors affiche " / " sinon n'affiche rien("")
		$("#sp_resultat_code").append(iNbre + (iNbre<(i)?" / ":""));
		// FinTantQue	
	}
	//Fin	
}
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 4   --
// --------------------
// --------------------


// ALGORITHME Exo_5_4 JSFORM
function Exo_5_4_jsform()
// DEBUT
{
	var iNbre;

	//Pour effacer résultat précédent
	document.getElementById("sp_resultat_code").innerHTML = "";
	//Lire iNbre
	iNbre = +document.getElementById("iNbre").value;

	//Pour i = 1 à 10
	for (var i = 1; i < 11; i++) {
		iNbre = iNbre + 1;
		//Ecrire "iNbre" avec ternaire si i<>10 alors affiche " / " sinon n'affiche rien("")
		document.getElementById("sp_resultat_code").innerHTML += iNbre + ((i!=10)?" / ":"");
		// i Suivant	
	}
	//Fin	
}
// ----------
// ----------

// ALGORITHME Exo_5_4 JQUERY
function Exo_5_4_jquery()
// DEBUT
{
	var iNbre, i;

	//Pour effacer résultat précédent
	$("#sp_resultat_code").html("");
	//Lire iNbre
	iNbre = +$("#iNbre").val();
	
	//Pour i = 1 à 10
	for (i = 1; i < 11; i++) {
		iNbre = iNbre + 1; 
		console.log(iNbre);
		//Ecrire "iNbre" avec ternaire si i<>10 alors affiche " / " sinon n'affiche rien("")
		$("#sp_resultat_code").append(iNbre + ((i!=10)?" / ":""));
		// i Suivant	
	}
	//Fin	
}
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 5   --
// --------------------
// --------------------

// ALGORITHME Exo_5_5 JSFORM
function Exo_5_5_jsform()
// DEBUT
{
	var iNbre, iResult;

	//Pour effacer résultat précédent
	document.getElementById("sp_resultat_code").innerHTML = "";
	//Lire iNbre
	iNbre = +document.getElementById("iNbre").value;
	document.getElementById("sp_resultat_code").innerHTML = "La table de " + iNbre + " est :<br><br>";

	//Pour i = 1 à 10
	for (var i = 1; i < 11; i++) {
		iResult = iNbre * i;
		//Ecrire "iNbre"
		document.getElementById("sp_resultat_code").innerHTML += iNbre + " X " + i + " = " + iResult + "<br>";
		// i Suivant	
	}
	//Fin	
}
// ----------
// ----------

// ALGORITHME Exo_5_5 JQUERY
function Exo_5_5_jquery()
// DEBUT
{
	var iNbre, iResult;

	//Pour effacer résultat précédent
	$("#sp_resultat_code").html("");
	//Lire iNbre
	iNbre = $("#iNbre").val();
	$("#sp_resultat_code").html("La table de " + iNbre + " est :<br><br>");

	//Pour i = 1 à 10
	for (var i = 1; i < 11; i++) {
		iResult = iNbre * i;
		//Ecrire "iNbre"
		$("#sp_resultat_code").append(iNbre + " X " + i + " = " + iResult + "<br>");
		// i Suivant	
	}
	//Fin	
}
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 6   --
// --------------------
// --------------------


// ALGORITHME Exo_5_6 JSFORM
function Exo_5_6_jsform()
// DEBUT
{
	var iNbre, iSomme;

	//Pour effacer résultat précédent
	document.getElementById("sp_resultat_code").innerHTML = "";
	//Lire iNbre
	iNbre = +document.getElementById("iNbre").value;
	iSomme = 0
	//Ecrire "la somme des entiers jusqu’à ce nombre est : "
	document.getElementById("sp_resultat_code").innerHTML += "la somme des entiers jusqu’à ce nombre est :<br>";

	if (iNbre >= 0) {
		//Pour i = 1 à iNbre
		for (var i = 1; i <= iNbre - 1; i++) {
			//Ecrire "i + "
			document.getElementById("sp_resultat_code").innerHTML += i + " + ";
			iSomme = iSomme + i;
			// i Suivant	
		}
	}
	else {
		//Pour i = 1 à iNbre
		for (var i = -1; i >= iNbre + 1; i--) {
			//Ecrire "i + "
			document.getElementById("sp_resultat_code").innerHTML += i + " + ";
			iSomme = iSomme + i;
			// i Suivant	
		}
	}
	document.getElementById("sp_resultat_code").innerHTML += iNbre + " = " + (iSomme + iNbre);
	//Fin	
}
// ----------
// ----------

// ALGORITHME Exo_5_6 JQUERY
function Exo_5_6_jquery()
// DEBUT
{
	var iNbre, iSomme;

	//Pour effacer résultat précédent
	$("#sp_resultat_code").html("");
	//Lire iNbre
	iNbre = +$("#iNbre").val();
	iSomme = 0
	//Ecrire "la somme des entiers jusqu’à ce nombre est : "
	$("#sp_resultat_code").append("la somme des entiers jusqu’à ce nombre est :<br>");

	if (iNbre >= 0) {
		//Pour i = 1 à iNbre
		for (var i = 1; i <= iNbre - 1; i++) {
			//Ecrire "i + "
			$("#sp_resultat_code").append(i + " + ");
			iSomme = iSomme + i;
			// i Suivant	
		}
	}
	else {
		//Pour i = 1 à iNbre
		for (var i = -1; i >= iNbre + 1; i--) {
			//Ecrire "i + "
			$("#sp_resultat_code").append(i + " + ");
			iSomme = iSomme + i;
			// i Suivant	
		}
	}
	$("#sp_resultat_code").append(iNbre + " = " + (iSomme + iNbre));
	//Fin	
}
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 7   --
// --------------------
// --------------------

// ALGORITHME Exo_5_7 JSFORM
function Exo_5_7_jsform()
// DEBUT
{
	var iNbre, iFact;

	//Pour effacer résultat précédent
	document.getElementById("sp_resultat_code").innerHTML = "";
	//Lire iNbre
	iNbre = +document.getElementById("iNbre").value;
	iFact = 1;

	if (iNbre >= 0 && iNbre <= 170) {
		//Pour i = 1 à iNbre
		for (var i = 1; i <= iNbre; i++) {
			iFact = iFact * i;
			// i Suivant	
		}
		// Ecrire "La factorielle de " & iNbre & " est : " & iFact		
		document.getElementById("sp_resultat_code").innerHTML = "La factorielle de " + iNbre + " est : " + iFact;
	}

	else if (iNbre > 170) {
		// Ecrire "La factorielle de "  & iNbre &  " est : une INFINITÉ ! "
		document.getElementById("sp_resultat_code").innerHTML = "La factorielle de " + iNbre + " est : une INFINITÉ !";
	}

	else {
		//Ecrire "La factorielle n'est définie que sur les entiers positifs"
		document.getElementById("sp_resultat_code").innerHTML = "La factorielle n'est définie que sur les entiers positifs";
	}
	//Fin	
}
// ----------
// ----------

// ALGORITHME Exo_5_7 JQUERY
function Exo_5_7_jquery()
// DEBUT
{
	var iNbre, iFact;

	//Pour effacer résultat précédent
	$("#sp_resultat_code").html("");
	//Lire iNbre
	iNbre = +$("#iNbre").val();
	iFact = 1

	if (iNbre >= 0 && iNbre <= 170) {
		//Pour i = 1 à iNbre
		for (var i = 1; i <= iNbre; i++) {
			iFact = iFact * i;
			// i Suivant	
		}
		// Ecrire "La factorielle de " & iNbre & " est : " & iFact
		$("#sp_resultat_code").html("La factorielle de " + iNbre + " est : " + iFact);
	}

	else if (iNbre > 170) {
		// Ecrire "La factorielle de "  & iNbre &  " est : une INFINITÉ !"
		$("#sp_resultat_code").html("La factorielle de " + iNbre + " est : une INFINITÉ !");
	}

	else {
		//Ecrire "La factorielle n'est définie que sur les entiers positifs"
		$("#sp_resultat_code").html("La factorielle n'est définie que sur les entiers positifs");
	}
	//Fin	
}
// ----------
// ----------
// --------------------
// --------------------
// --  EXERCICE 8 a) --
// --------------------
// --------------------

// ALGORITHME Exo_5_8_a JSFORM

var iGreatest, iComptMax ;
iGreatest = "";
iComptMax = 1;
// document.getElementById("sp_compteur").innerHTML = "Saisie n° " + iComptMax + " (sur 20)";

function Exo_5_8_a_jsform()
// DEBUT
{
	var iNbre;

	//Lire iNbre
	iNbre = +document.getElementById("iNbre").value;

	// i ← 1 à 20
	if (iComptMax < 21)
	{
		if (iNbre > iGreatest || iGreatest === "")
		{
			iGreatest = iNbre;
		}

		document.getElementById("sp_compteur").innerHTML = "<br><br>Saisie n° " + (iComptMax+1) + " (sur 20)";
		document.getElementById("sp_resultat_code").innerHTML = "Saisie n° " + iComptMax + " bien prise en compte";
		
		iComptMax++;

		if (iComptMax > 20)
		{
			//Pour ne pas afficher "saisie n° 21" mais "Cliquez pour obtenir le résultat"
			document.getElementById("sp_compteur").innerHTML = "Cliquez pour obtenir le résultat";
		}
	}

	else
	{
		//Effacer la ligne
		document.getElementById("sp_compteur").innerHTML ="";
		//Ecrire "Le plus grand de ces nombres est : " & iGreatest
		document.getElementById("sp_resultat_code").innerHTML = "Le plus grand de ces nombres est : " + iGreatest;
		//Effacer le chiffre dans saisie
		document.getElementById("iNbre").value = "";
		iGreatest = "";
		iComptMax = 1;	
	}
//Fin
}
// ----------
// ----------

// ALGORITHME Exo_5_8_a JQUERY

////////////////////////////////////
// VARIABLES DÉCLARÉES PLUS HAUT !!
// var iGreatest, iComptMax ;
// iGreatest = "";
// iComptMax = 1;
// $("#sp_compteur").html("Saisie n° " + iComptMax + " (sur 20)");
////////////////////////////////////

function Exo_5_8_a_jquery()
// DEBUT
{
	var iNbre;

	//Lire iNbre
	iNbre = +$("#iNbre").val();

	//Pour i ← 1 à 20
	if (iComptMax < 21)
	{
		if (iNbre > iGreatest || iGreatest === "")
		{
			iGreatest = iNbre;
		}

		$("#sp_compteur").html("<br><br>Saisie n° " + (iComptMax+1) + " (sur 20)");
		$("#sp_resultat_code").html("Saisie n° " + iComptMax + " bien prise en compte");
		
		iComptMax++;
		
		if (iComptMax > 20)
		{
			//Pour ne pas afficher "saisie n° 21" mais "Cliquez pour obtenir le résultat"
			$("#sp_compteur").html("Cliquez pour obtenir le résultat");
		}
	}

	else
	{
		//Effacer la ligne
		$("#sp_compteur").html("");
		//Ecrire "Le plus grand de ces nombres est : " & iGreatest
		$("#sp_resultat_code").html("Le plus grand de ces nombres est : " + iGreatest);
		//Effacer le chiffre dans saisie
		$("#iNbre").val("");
		iGreatest = "";
		iComptMax = 1;	
	}
//Fin
}

// ----------
// ----------
// --------------------
// --------------------
// --  EXERCICE 8 b) --
// --------------------
// --------------------

// ALGORITHME Exo_5_8_b JSFORM

var iPosition, iCompteur, iGreatest ;
iPosition =0;
iCompteur = 0;
iGreatest = "";
// document.getElementById("sp_compteur").innerHTML = "Saisie n° " + iCompteur + " (sur 20)";

	function Exo_5_8_b_jsform()
	// DEBUT
	{
		var iNbre;
		if (iCompteur == 0) 
		{
			iCompteur = 1;
		}
		//Pour i ← 1 à 20
		if (iCompteur < 21)
		{
			//Lire iNbre
			iNbre = +document.getElementById("iNbre").value;

			if (iNbre > iGreatest || iGreatest === "")
			{
				iGreatest = iNbre;
				iPosition = iCompteur;
			}
	
			document.getElementById("sp_compteur").innerHTML = "<br><br>Saisie n° " + (iCompteur + 1) + " (sur 20)";
			document.getElementById("sp_resultat_code").innerHTML = "Saisie n° " + iCompteur + " bien prise en compte";

			iCompteur++;

			if (iCompteur > 20)
			{
				//Pour ne pas afficher "saisie n° 21" mais "Cliquez pour obtenir le résultat"
				document.getElementById("sp_compteur").innerHTML = "Cliquez pour obtenir le résultat";
			}
		}
	
		else 
		{	
			//Effacer la ligne
			document.getElementById("sp_compteur").innerHTML ="";
			//Ecrire "Le plus grand de ces nombres est : " & iGreatest
			document.getElementById("sp_resultat_code").innerHTML = "Le plus grand de ces nombres est : " + iGreatest + "<br> Ce nombre a été saisie à la position : " + iPosition;
			//Effacer le chiffre dans saisie
			document.getElementById("iNbre").value = "";
			iGreatest = "";
			iCompteur = 1;
		}
	//Fin
	} 
// ----------
// ----------

// ALGORITHME Exo_5_8_b JQUERY

////////////////////////////////////
// VARIABLES DÉCLARÉES PLUS HAUT !!
// var iPosition, iCompteur, iGreatest ;
// iPosition =0;
// iCompteur = 0;
// iGreatest = "";
// $("#sp_compteur").html("Saisie n° " + iCompteur + " (sur 20)");
////////////////////////////////////

	function Exo_5_8_b_jquery()
	// DEBUT
	{
		var iNbre;
		if (iCompteur == 0) 
		{
			iCompteur = 1;
		}
		//Pour i ← 1 à 20
		if (iCompteur < 21)
		{
			//Lire iNbre
			iNbre = +$("#iNbre").val();

			if (iNbre > iGreatest || iGreatest === "")
			{
				iGreatest = iNbre;
				iPosition = iCompteur;
			}
	
			$("#sp_compteur").html("<br><br>Saisie n° " + (iCompteur + 1) + " (sur 20)");
			$("#sp_resultat_code").html("Saisie n° " + iCompteur + " bien prise en compte");

			iCompteur++;

			if (iCompteur > 20)
			{
				//Pour ne pas afficher "saisie n° 21" mais "Cliquez pour obtenir le résultat"
				$("#sp_compteur").html("Cliquez pour obtenir le résultat");
			}
		}
	
		else 
		{	
			//Effacer la ligne
			$("#sp_compteur").html("");
			//Ecrire "Le plus grand de ces nombres est : " & iGreatest
			$("#sp_resultat_code").html("Le plus grand de ces nombres est : " + iGreatest + "<br> Ce nombre a été saisie à la position : " + iPosition);
			//Effacer le chiffre dans saisie
			$("#iNbre").val("");
			iGreatest = "";
			iCompteur = 1;	
		}
	//Fin
	} 
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 9   --
// --------------------
// --------------------

// ALGORITHME Exo_5_9 JSFORM

var iPosition, iCompteur, iGreatest ;
iCompteur = 1;
iGreatest = "";
// document.getElementById("sp_compteur").innerHTML = "JS Saisie n° " + iCompteur;

	function Exo_5_9_jsform()
	// DEBUT
	{
		var iNbre;

		//Lire iNbre
		iNbre = +document.getElementById("iNbre").value;

		if (iNbre == 0)
		{	
			//Effacer la ligne
			document.getElementById("sp_compteur").innerHTML ="";
			//Ecrire "Le plus grand de ces nombres est : " & iGreatest
			document.getElementById("sp_resultat_code").innerHTML = "Le plus grand de ces nombres est : " + iGreatest + "<br> Ce nombre a été saisie à la position : " + iPosition;
			//Effacer la chiffre dans saisie
			$("#iNbre").val("");
			iGreatest = "";
			iCompteur = 1;
		}

		else
		{	
			if (iNbre > iGreatest || iGreatest === "")
			{
				iGreatest = iNbre;
				iPosition = iCompteur;
			}
	
			document.getElementById("sp_compteur").innerHTML = "<br><br>Saisie n° " + (iCompteur + 1);
			document.getElementById("sp_resultat_code").innerHTML = "Saisie n°" + iCompteur + " (nombre : " + iNbre +") bien prise en compte";

			iCompteur++;
		}
	//Fin
	} 

// ----------
// ----------

// ALGORITHME Exo_5_9 JQUERY

////////////////////////////////////
// VARIABLES DÉCLARÉES PLUS HAUT !!/
// var iPosition, iCompteur, iGreatest ;
// iCompteur = 1;
// iGreatest = "";
// $("#sp_compteur").html("Saisie n° " + iCompteur);
////////////////////////////////////

	function Exo_5_9_jquery()
	// DEBUT
	{
		var iNbre;

		//Lire iNbre
		iNbre = +$("#iNbre").val();

		if (iNbre == 0)
		{	
			//Effacer la ligne
			$("#sp_compteur").html("");
			//Ecrire "Le plus grand de ces nombres est : " & iGreatest
			$("#sp_resultat_code").html("Le plus grand de ces nombres est : " + iGreatest + "<br> Ce nombre a été saisie à la position : " + iPosition);
			//Effacer la chiffre dans saisie
			$("#iNbre").val("");
			iGreatest = "";
			iCompteur = 1;	
		}

		else
		{	
			if (iNbre > iGreatest || iGreatest === "")
			{
				iGreatest = iNbre;
				iPosition = iCompteur;
			}
	
			$("#sp_compteur").html("<br><br>Saisie n° " + (iCompteur + 1));
			$("#sp_resultat_code").html("Saisie n°" + iCompteur + " (nombre : " + iNbre +") bien prise en compte");

			iCompteur++;
		}
	//Fin
	} 

// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 10   --
// --------------------
// --------------------

	// ALGORITHME Exo_5_10 JSFORM

	function constructFormulaire()
	{
		var i;
		// construction d'un formulaire dynamique 
		/*
			<p>1.] <input type="text" name="iNombre1" id="iNombre1" value="22"></p>
			<p>2.] <input type="text" name="iNombre2" id="iNombre2" value="18"></p>
			<p>3.] <input type="text" name="iNombre3" id="iNombre3" value="67"></p>
			etc. ...
			
		*/
		var sHTML= "";
		// Je boucle de 1 à iNbreSaisiePrix (nombre de champs à créer)
		for (i=1; i<=$('#iNbreSaisiePrix').val(); i++)	{
			// Au passage, pour m'éviter de saisir des nombres pour tester, 
			// je fais en sorte que le JS m'en donne aléatoirement
			var iRandom= Math.floor(Math.random() * 100) + 1;
			// Je concatène ma liste de champs dans ma variable sHTML
			sHTML+= "<p>" + i + ".] <input type=\"number\" name=\"iNombre" + i + "\" id=\"iNombre" + i + "\" value=\"" + iRandom + "\"></p>";
		}
		// Je remplis mon formulaire dans la div ID p_formulaire
		$('#p_formulaire').html(sHTML);
	}

	function Exo_5_10_jsform()
	// DEBUT
	{
		var iMonnaie, iB10, iB5;
		iB10=0;
		iB5=0;

		//Lire iTotalPrix
		var iTotalPrix= 0;

		var i;
		// je boucle de 1 à iNbreSaisiePrix, et pour cela j'ai le nombre dans ma saisie "nombre de prix à saisir"
		for (i=1; i<=document.getElementById("iNbreSaisiePrix").value; i++)
		{
			/*
				je récupére les valeurs de tous mes champs iNombre1, iNombre2, iNombre3
				Qui revient à faire iNombre+i à chaque tour
				Je cumule pour en avoir la somme
			*/
			iTotalPrix+= parseInt(document.getElementById("iNombre"+i).value);
		}
		// Ecrire total prix au premier clique
		document.getElementById("sp_total_prix").innerHTML="Le montant total s'élève à : " + iTotalPrix +  "€";


		// calculer somme à rendre
		iMonnaie = document.getElementById("iSomme").value - iTotalPrix;
		
		//Afficher le détail rendu monnaie si iSomme différent de zero
		if (document.getElementById("iSomme").value !="0")
		{
			//Tant que monnaie >= 10
			while (iMonnaie>=10)
			{
				iB10++;
				iMonnaie=iMonnaie-10;
			}
			//Tant que monnaie >= 5
			if (iMonnaie>=5)
			{
				iB5++;
				iMonnaie=iMonnaie-5;
			}
			
			//Ecrire devises rendues
			document.getElementById("sp_resultat_code").innerHTML="La monnaie rendue est de " + (document.getElementById("iSomme").value - iTotalPrix) + "€<br>" + "et se décompose en :<br>" + iB10 + " billet(s) de 10€ <br>" + iB5 + " billet(s) de 5€ <br>" + iMonnaie + " pièce(s) de 1€"; 

		}
	//Fin
	} 
// ----------
// ----------

	// ALGORITHME Exo_5_10 JQUERY

	////////////////////////////////////
	// FONCTION DÉCLARÉE PLUS HAUT !!
	// function constructFormulaire()
	// {
	// 	var i;
	// 	// construction d'un formulaire dynamique 
	// 	/*
	// 		<p>1.] <input type="text" name="iNombre1" id="iNombre1" value="22"></p>
	// 		<p>2.] <input type="text" name="iNombre2" id="iNombre2" value="18"></p>
	// 		<p>3.] <input type="text" name="iNombre3" id="iNombre3" value="67"></p>
	// 		etc. ...
			
	// 	*/
	// 	var sHTML= "";
	// 	// Je boucle de 1 à iNbreSaisiePrix (nombre de champs à créer)
	// 	for (i=1; i<=$('#iNbreSaisiePrix').val(); i++)	{
	// 		// Au passage, pour m'éviter de saisir des nombres pour tester, 
	// 		// je fais en sorte que le JS m'en donne aléatoirement
	// 		var iRandom= Math.floor(Math.random() * 100) + 1;
	// 		// Je concatène ma liste de champs dans ma variable sHTML
	// 		sHTML+= "<p>" + i + ".] <input type=\"number\" name=\"iNombre" + i + "\" id=\"iNombre" + i + "\" value=\"" + iRandom + "\"></p>";
	// 	}
	// 	// Je remplis mon formulaire dans la div ID p_formulaire
	// 	$('#p_formulaire').html(sHTML);
	// }

	function Exo_5_10_jquery()
	// DEBUT
	{
		var iMonnaie, iB10, iB5;
		iB10=0;
		iB5=0;

		//Lire iTotalPrix
		var iTotalPrix= 0;

		var i;
		// je boucle de 1 à iNbreSaisiePrix, et pour cela j'ai le nombre dans ma saisie "nombre de prix à saisir"
		for (i=1; i<=$('#iNbreSaisiePrix').val(); i++)
		{
			/*
				je récupére les valeurs de tous mes champs iNombre1, iNombre2, iNombre3
				Qui revient à faire iNombre+i à chaque tour
				Je cumule pour en avoir la somme
			*/
			iTotalPrix+= parseInt($('#iNombre'+i).val());
		}
		// Ecrire total prix
		$("#sp_total_prix").html("Le montant total s'élève à : " + iTotalPrix +  "€");

		// calculer somme à rendre
		iMonnaie = $("#iSomme").val() - iTotalPrix;

		//Afficher le détail rendu monnaie si iSomme différent de zero
		if ($("#iSomme").val() !="0")
		{
			//Tant que monnaie >= 10
			while (iMonnaie>=10)
			{
				iB10++;
				iMonnaie=iMonnaie-10;
			}
			//Tant que monnaie >= 5
			if (iMonnaie>=5)
			{
				iB5++;
				iMonnaie=iMonnaie-5;
			}

			//Ecrire devises rendues
			$("#sp_resultat_code").html("La monnaie rendue est de " + (document.getElementById("iSomme").value - iTotalPrix) + "€<br>" + "et se décompose en :<br>" + iB10 + " billet(s) de 10€ <br>" + iB5 + " billet(s) de 5€ <br>" + iMonnaie + " pièce(s) de 1€"); 
		}

	//Fin
	} 
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 11   --
// --------------------
// --------------------

	// // // // CORRIGÉ // // // //
	// // ALGORITHME Exo_5_11 JSFORM
	// // // // CORRIGÉ // // // //

function Exo_5_11_jsform()
// DEBUT
{
    // Variable iP, iN, iY, i, iResultY en NUMERIQUE
    var iP, iN, iX, iY, i, iResultY;

    // Ecrire "Entrez le nombre de chevaux partant" 
    // Lire iN
    iN = parseInt(document.getElementById("iChevauxPartant").value);

    // Ecrire "Entrez le nombre de chevaux joués" 
    // Lire iP
    iP = parseInt(document.getElementById("iChevauxJoue").value);

    iX = 1;
    iY = 1;
    // Pour (i = 0; i < iP; i++) Alors
    //     iX *= iN - i;
    //     iY *= i + 1;
    // FinPour
    // iResultY = iX / iY
    // Ecrire "Dans l'ordre, vous avez 1 chance sur " + iX + " de gagner. Dans le désordre, vous avez 1 chances sur " + iResultY + " de gagner"
    for (i = 0; i < iP; i++) {
        iX *= iN - i;
        iY *= i + 1;
    }
    iResultY = iX / iY;
    document.getElementById("sp_resultat_code").innerHTML = "Dans l'ordre, vous avez 1 chance sur " + iX + " de gagner. <br> Dans le désordre, vous avez 1 chances sur " + iResultY + " de gagner";

    // Vide les formulaires apres envoi des valeurs
    iP = document.getElementById("iChevauxJoue").value = "";
    iN = document.getElementById("iChevauxPartant").value = "";

    // FIN

}


	// // ALGORITHME Exo_5_11 JSFORM
	// function Exo_5_11_jsform()
	// // DEBUT
	// {
	// 	var iChevauxPartant, iChevauxJoue, iFactCP, iFactCJ, iFactCPCJ, i, j, k;

	// 	// Lire iChevauxJoue
	// 	iChevauxPartant = document.getElementById("iChevauxPartant").value;
	// 	// Lire iChevauxPartant
	// 	iChevauxJoue = document.getElementById("iChevauxJoue").value;
											
	// 	iFactCP = 1;
	// 	iFactCJ = 1;
	// 	iFactCPCJ = 1;
	// 	i = 1;
	// 	j = 1;
	// 	k = 1;

	// 	// Pour i ← 1 à iChevauxPartant
	// 	for (i;i<=iChevauxPartant;i++)
	// 	{
	// 		iFactCP = iFactCP*i;
	// 	}
	// 	// Pour j ← 1 à iChevauxJoue
	// 	for (j;j<=iChevauxJoue;j++)
	// 	{
	// 		iFactCJ = iFactCJ*j;
	// 	}
	// 	// k ← 1 à (iChevauxPartant - iChevauxJoue)
	// 	for (k;k<=(iChevauxPartant-iChevauxJoue);k++)
	// 	{
	// 		iFactCPCJ = iFactCPCJ*k;
	// 	}

	// 	// Ecrire "Dans l'ordre, vos chances de gagner sont d'une chance sur " & iFactCP/iFactCP-CJ & " de gagner"
	// 	document.getElementById("sp_resultat_code").innerHTML+="Dans l'ordre, vous avez une chance sur " + iFactCP/iFactCPCJ + " de gagner <br>";
	// 	// Ecrire "Dans le désordre, vos chances de gagner sont d'une chance sur " & iFactCP/(iFactCJ*iFactCP-CJ) & " de gagner"
	// 	document.getElementById("sp_resultat_code").innerHTML+="Dans le désordre, vous avez une chance sur " + iFactCP/(iFactCJ*iFactCPCJ) + " de gagner";
	// //Fin
	// } 
	


// ----------
// ----------

	// ALGORITHME Exo_5_11 JQUERY
	function Exo_5_11_jquery()
	// DEBUT
	{
		var iChevauxPartant, iChevauxJoue, iFactCP, iFactCJ, iFactCPCJ, i, j, k;
		
		// Lire iChevauxJoue
		iChevauxPartant = $("#iChevauxPartant").val();
		// Lire iChevauxPartant
		iChevauxJoue = $("#iChevauxJoue").val();

		iFactCP = 1;
		iFactCJ = 1;
		iFactCPCJ = 1;
		i = 1;
		j = 1;
		k = 1;	

		// Pour i ← 1 à iChevauxPartant
		for (i;i<=iChevauxPartant;i++)
		{
			iFactCP = iFactCP*i;
		}
		// Pour j ← 1 à iChevauxJoue	
		for (j;j<=iChevauxJoue;j++)
		{
			iFactCJ = iFactCJ*j;
		}
		// k ← 1 à (iChevauxPartant - iChevauxJoue)
		for (k;k<=(iChevauxPartant-iChevauxJoue);k++)
		{
			iFactCPCJ = iFactCPCJ*k;
		}

		// Ecrire "Dans l'ordre, vos chances de gagner sont d'une chance sur " & iFactCP/iFactCP-CJ & " de gagner"
		$("#sp_resultat_code").append("Dans l'ordre, vous avez une chance sur " + iFactCP/iFactCPCJ + " de gagner <br>");
		// Ecrire "Dans le désordre, vos chances de gagner sont d'une chance sur " & iFactCP/(iFactCJ*iFactCP-CJ) & " de gagner"
		$("#sp_resultat_code").append("Dans le désordre, vous avez une chance sur " + iFactCP/(iFactCJ*iFactCPCJ) + " de gagner");
	//Fin
	} 