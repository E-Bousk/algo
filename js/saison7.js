// --------------------
// --------------------
// --   EXERCICE 1   --
// --------------------
// --------------------

// ALGORITHME Exo_7_1 JSFORM
function inputDynamiqueExo_7_1()
	{
		var sHTML= "";
		// générer un chiffre aléatoire
		var iRandom= Math.floor(Math.random() * 99) + 1;
		// créer la div "saisie n°1" et l'imput
		sHTML= "<p><div name=\"div_Nombre\" id=\"div_Nombre\">Saisie n° 1</div></p><p><input type=\"number\" name=\"iNombre\" id=\"iNombre\" value=\"" + iRandom + "\"></p>";
		$('#div_formDyn').html(sHTML);
	}

	var iExo71=0;
	var bFlagExo71=false;
	var aTabExo71=[];
	var sTDExo71="";
	
	function Exo_7_1_jsform()
	//Début
	{
		var iNbreVal, iNombre;

		// lire combien de valeur à saisir (iNbreVal)
		iNbreVal=document.getElementById("iNbreVal").value;

		// boucle de 0 à iNbreVal
		if (iExo71<iNbreVal)
		{
			// ecrire "saisie n° iExo71+2"
			document.getElementById("div_Nombre").innerHTML="Saisie n° "+(iExo71+2);
			// lire la valeur a ajouter
			iNombre=document.getElementById("iNombre").value;

			//si le tableau est vide alors
			if (aTabExo71.length==0)
			{
				// alors la 1ere valeur prend la 1ere position (0)
				aTabExo71[0]=iNombre;
				//ecrire que la valeur iNombre est ajoutée
				document.getElementById("sp_result").innerHTML="Valeur " + iNombre + " ajoutée<br>";
				// (inscrire dans l'imput le chiffre suivant)
				document.getElementById("iNombre").value=+iNombre+1;
				//concaténer la valeur pour l'afficher plus tard sous forme de tableau
				sTDExo71+="<td>" + aTabExo71[iExo71] + "</td>";
				// i suivant
				iExo71++;
			}
			// sinon
			else
			{
				// ajouter la nouvelle valeur iNombre dans l'index suivant
				aTabExo71[iExo71]=iNombre;
				//ecrire que la valeur iNombre est ajoutée
				document.getElementById("sp_result").innerHTML+="Valeur " + iNombre + " ajoutée<br>";
				// (inscrire dans l'imput le chiffre suivant)
				document.getElementById("iNombre").value=+iNombre+1;
				//concaténer la valeur pour l'afficher plus tard sous forme de tableau
				sTDExo71+="<td>" + aTabExo71[iExo71] + "</td>";
				// si la valeur dans l'index est différente de la valeur+1 de l'index précédent alors
				if (aTabExo71[iExo71]!=+aTabExo71[iExo71-1]+1)
				{
					// mettre le repère à VRAI
					bFlagExo71=true;
				}
				// i suivant
				iExo71++;
			}	
		}
		// si i égale iNbreVal (on a enter toutes les valeurs demandées) alors
		if (iExo71==iNbreVal)
		{
			// si le repère est VRAI
			if (bFlagExo71===true)
			{
				// (effacer le nombre dans l'imput)
				document.getElementById("iNombre").value="";
				// (effacer "saisie n°")
				document.getElementById("div_Nombre").innerHTML="";
				// Ecrire sous forme de tableau les différentes valeurs entrée
				document.getElementById("sp_result").innerHTML="<table><tr>" + sTDExo71 + "</tr></table><br>";
				// Ecrire "Les valeurs ne sont pas consécutives"
				document.getElementById("sp_result").innerHTML+="Les valeurs ne sont pas consécutives";
			}
			// Sinon (repère FAUX)
			else
			{
				// (effacer le nombre dans l'imput)
				document.getElementById("iNombre").value="";
				// (effacer "saisie n°")
				document.getElementById("div_Nombre").innerHTML="";
				// Ecrire sous forme de tableau les différentes valeurs entrée
				document.getElementById("sp_result").innerHTML="<table><tr>" + sTDExo71 + "</tr></table><br>";
				// Ecrire "Les valeurs sont consécutives"
				document.getElementById("sp_result").innerHTML+="Les valeurs sont consécutives";
			}
		}
	//Fin	
	} 
// ----------
// ----------

// ALGORITHME Exo_7_1 JQUERY

////////////////////////////////
/// FONCTION DÉJA DÉCLARÉE   ///
////////////////////////////////
// function inputDynamiqueExo_7_1()
// 	{
// 		var sHTML= "";
// 		var iRandom= Math.floor(Math.random() * 99) + 1;
// 		sHTML+= "<p><div name=\"div_Nombre\" id=\"div_Nombre\">Saisie n° 1</div><input type=\"number\" name=\"iNombre\" id=\"iNombre\" value=\"" + iRandom + "\"></p>";
// 		$('#div_formDyn').html(sHTML);
// 	}
//////////////////////////////
////////////////////////////////
/// VARIABLES DÉJA DÉCLARÉES ///
////////////////////////////////
// var iExo71=0;
// var bFlagExo71=false;
// var aTabExo71=[];
// var sTDExo71="";
////////////////////////////////

	function Exo_7_1_jquery()
	//Début
	{
		var iNbreVal, iNombre;
		
		iNbreVal=$("#iNbreVal").val();
		if (iExo71<iNbreVal)
		{
			document.getElementById("div_Nombre").innerHTML="Saisie n° "+(iExo71+2);
			iNombre=$("#iNombre").val();

			if (aTabExo71.length==0)
			{
				// alors la 1ere valeur prend la 1ere position (0)
				aTabExo71[0]=iNombre;
				$("#sp_result").html("Valeur " + iNombre + " ajoutée<br>");
				$("#iNombre").val(+iNombre+1);
				sTDExo71+="<td>" + aTabExo71[iExo71] + "</td>";
				iExo71++;
			}

			else
			{
				aTabExo71[iExo71]=iNombre;
				$("#sp_result").append("Valeur " + iNombre + " ajoutée<br>");
				$("#iNombre").val(+iNombre+1);
				sTDExo71+="<td>" + aTabExo71[iExo71] + "</td>";
				// iParseInt=parseInt(aTabExo71[i-1]);

				// if (aTabExo71[i]!=parseInt(iParseInt+1))
				if (aTabExo71[iExo71]!=+aTabExo71[iExo71-1]+1)
				{
					bFlagExo71=true;
				}
				
				iExo71++;
			}	
		}

		if (iExo71==iNbreVal)
		{
			if (bFlagExo71===true)
			{
				$("#iNombre").val("");
				$("#div_Nombre").html("");
				$("#sp_result").html("<table><tr>" + sTDExo71 + "</tr></table><br>");
				$("#sp_result").append("Les valeurs ne sont pas consécutives");
			}
			else
			{
				$("#iNombre").val("");
				$("#div_Nombre").html("");
				$("#sp_result").html("<table><tr>" + sTDExo71 + "</tr></table><br>");
				$("#sp_result").append("Les valeurs sont consécutives");
			}
		}
	//Fin	
	} 
// ----------
// ----------
// --------------------
// --------------------
// -- EXERCICE 2 a)  --
// --------------------
// --------------------

// ALGORITHME Exo_7_2_a JSFORM

	function inputDynamiqueExo_7_2()
	{	
		//Si nombre demandé dans imput iNbreDyn > 50
		if ($('#iNbreDyn').val() >50)
		{
			//Ecrire "Pas plus de 50 !! Merci."
			$("#sp_result").html("Pas plus de 50 !!<br> Merci.");
		}

		// Sinon
		else
		{
			// Efface message précedent (au cas où il est présent)
			$("#sp_result").html("");

			var iID;
			var sHTML= "";

			// Boucle de 1 à iNbreDyn (nombre d'imput à créer)
			for (iID=1; iID<=$('#iNbreDyn').val(); iID++)	
			{
				// génère un chiffre aléatoire
				var iRandom= Math.floor(Math.random() * 999) + 1;
				// Concatène liste de champs dans variable sHTML
				sHTML+= "<p>" + iID + ".) <input type=\"number\" name=\"iNombre" + iID + "\" id=\"iNombre" + iID + "\" value=\"" + iRandom + "\"></p>";
			}
			// Crée les imputs dans la div ID div_formDyn
			$('#div_formDyn').html(sHTML);
		}
	}

	function Exo_7_2_a_jsform()
	//Début
	{ 
		var aTab, sTD, iNbreDyn, i, iNombre;

		aTab=[];
		sTD="";

		// Lire combien de valeur à inserer
		iNbreDyn=document.getElementById("iNbreDyn").value;

		// Boucle de 1 à iNbreDyn
		for (i=1; i<=iNbreDyn; i++)
		{
			//récupère les valeurs des imputs
			iNombre=+document.getElementById("iNombre"+i).value;
			//Range les valeurs dans les indexes du tableau
			aTab[i-1]=iNombre;
			//Concatène les indexes du tableau pour les afficher plus tard
			sTD +=aTab[i-1] + " | ";
		}

		//Afficher le tableau non trié
		document.getElementById("sp_result").innerHTML="Tableau non trié : <br>"+sTD+"<br><br>";

		var iPlusGrand, iTemp, j;

		//Boucle de 0 à longueur du tableau pour faire verifier dans l'index i
		for (i=0; i<=aTab.length-1; i++)
		{
			//On marque la position du plus grand nombre ici
			iPlusGrand = i;

			//Boucle pour comparer les nombres suivants avec celui définit par i
			for (j=i+1; j<aTab.length; j++)
			{
				//si j (le nombre suivant) est plus grand que celui marqué alors
				if (aTab[j] > aTab[iPlusGrand])
				{
					//La position du plus grand devient celle-ci
					iPlusGrand = j;
				// Fin si
				}
			//j suivant
			}
			//On intervertit les positions
			iTemp = aTab[iPlusGrand];
			aTab[iPlusGrand] = aTab[i];
			aTab[i] = iTemp;
		// i suivant
		}
		
		//Afficher le tableau trié
		document.getElementById("sp_result").innerHTML+="Tableau trié : <br>"+ aTab.join(" | ")+"<br><br>";

	//fin
	}
// ----------
// ----------

// ALGORITHME Exo_7_2_a JQUERY

////////////////////////////////
/// FONCTION DÉJA DÉCLARÉE   ///
////////////////////////////////
// function inputDynamiqueExo_7_2()
// {	
// 	//Si nombre demandé dans imput iNbreDyn > 50
// 	if ($('#iNbreDyn').val() >50)
// 	{
// 		//Ecrire "Pas plus de 50 !! Merci."
// 		$("#sp_result").html("Pas plus de 50 !!<br> Merci.");
// 	}
// 	// Sinon
// 	else
// 	{
// 		// Efface message précedent (au cas où il est présent)
// 		$("#sp_result").html("");

// 		var iID;
// 		var sHTML= "";

// 		// Boucle de 1 à iNbreDyn (nombre d'imput à créer)
// 		for (iID=1; iID<=$('#iNbreDyn').val(); iID++)	
// 		{
// 			// génère un chiffre aléatoire
// 			var iRandom= Math.floor(Math.random() * 999) + 1;
// 			// Concatène liste de champs dans variable sHTML
// 			sHTML+= "<p>" + iID + ".) <input type=\"number\" name=\"iNombre" + iID + "\" id=\"iNombre" + iID + "\" value=\"" + iRandom + "\"></p>";
// 		}
// 		// Crée les imputs dans la div ID div_formDyn
// 		$('#div_formDyn').html(sHTML);
// 	}
// }
//////////////////////////////

	function Exo_7_2_a_jquery()
	//Début
	{ 
		var aTab, sTD, iNbreDyn, i, iNombre;

		aTab=[];
		sTD="";

		// Lire combien de valeur à inserer
		iNbreDyn=$('#iNbreDyn').val();

		// Boucle de 1 à iNbreDyn
		for (i=1; i<=iNbreDyn; i++)
		{
			//récupère les valeurs des imputs
			iNombre=+$("#iNombre"+i).val();
			//Range les valeurs dans les indexes du tableau
			aTab[i-1]=iNombre;
			//Concatène les indexes du tableau pour les afficher plus tard
			sTD +=aTab[i-1] + " | ";
		}

		//Afficher le tableau non trié
		$("#sp_result").html("Tableau non trié : <br>"+sTD+"<br><br>");

		var iPlusGrand, iTemp, j;

		//Boucle de 0 à longueur du tableau pour faire verifier dans l'index i
		for (i=0; i<=aTab.length-1; i++)
		{
			//On marque la position du plus grand nombre ici
			iPlusGrand = i;

			//Boucle pour comparer les nombres suivants avec celui définit par i
			for (j=i+1; j<aTab.length; j++)
			{
				//si j (le nombre suivant) est plus grand que celui marqué alors
				if (aTab[j] > aTab[iPlusGrand])
				{
					//La position du plus grand devient celle-ci
					iPlusGrand = j;
				// Fin si
				}
			//j suivant
			}
			//On intervertit les positions
			iTemp = aTab[iPlusGrand];
			aTab[iPlusGrand] = aTab[i];
			aTab[i] = iTemp;
		// i suivant
		}
		
		//Afficher le tableau trié
		$("#sp_result").append("Tableau trié : <br>"+ aTab.join(" | ")+"<br><br>");

	//fin
	}
// ----------
// ----------
// --------------------
// --------------------
// -- EXERCICE 2 b)  --
// --------------------
// --------------------

// ALGORITHME Exo_7_2_b JSFORM

////////////////////////////////
/// FONCTION DÉJA DÉCLARÉE   ///
////////////////////////////////
// function inputDynamiqueExo_7_2()
// {	
// 	//Si nombre demandé dans imput iNbreDyn > 50
// 	if ($('#iNbreDyn').val() >50)
// 	{
// 		//Ecrire "Pas plus de 50 !! Merci."
// 		$("#sp_result").html("Pas plus de 50 !!<br> Merci.");
// 	}
// 	// Sinon
// 	else
// 	{
// 		// Efface message précedent (au cas où il est présent)
// 		$("#sp_result").html("");

// 		var iID;
// 		var sHTML= "";

// 		// Boucle de 1 à iNbreDyn (nombre d'imput à créer)
// 		for (iID=1; iID<=$('#iNbreDyn').val(); iID++)	
// 		{
// 			// génère un chiffre aléatoire
// 			var iRandom= Math.floor(Math.random() * 999) + 1;
// 			// Concatène liste de champs dans variable sHTML
// 			sHTML+= "<p>" + iID + ".) <input type=\"number\" name=\"iNombre" + iID + "\" id=\"iNombre" + iID + "\" value=\"" + iRandom + "\"></p>";
// 		}
// 		// Crée les imputs dans la div ID div_formDyn
// 		$('#div_formDyn').html(sHTML);
// 	}
// }
//////////////////////////////
function Exo_7_2_b_jsform()
	//Début
	{ 
		var aTab, sTD, iNbreDyn, i, iNombre;

		aTab=[];
		sTD="";

		// Lire combien de valeur à inserer
		iNbreDyn=document.getElementById("iNbreDyn").value;

		// Boucle de 1 à iNbreDyn
		for (i=1; i<=iNbreDyn; i++)
		{
			//récupère les valeurs des imputs
			iNombre=+document.getElementById("iNombre"+i).value;
			//Range les valeurs dans les indexes du tableau
			aTab[i-1]=iNombre;
			//Concatène les indexes du tableau pour les afficher plus tard
			sTD +=aTab[i-1] + " | ";
		}

		//Afficher le tableau non trié
		document.getElementById("sp_result").innerHTML="Tableau non trié : <br>"+sTD+"<br><br>";

		var iTemp, j;

		//Boucle de 0 à longueur du tableau pour faire verifier dans l'index i
		for (i=0; i<=aTab.length-1; i++)
		{
			//Boucle pour comparer les nombres suivants avec celui définit par i
			for (j=i+1; j<aTab.length; j++)
			{
				//si j (le nombre suivant) est plus grand que celui marqué alors
				if (aTab[i] < aTab[j])
				{
					//On intervertit les positions
					iTemp = aTab[j];
					aTab[j] = aTab[i];
					aTab[i] = iTemp;
					//FinSI
				}
			//j suivant
			}
		// i suivant
		}
		
		//Afficher le tableau trié
		document.getElementById("sp_result").innerHTML+="Tableau trié : <br>"+ aTab.join(" | ")+"<br><br>";

	//fin
	}
// ----------
// ----------

// ALGORITHME Exo_7_2_b JQUERY

////////////////////////////////
/// FONCTION DÉJA DÉCLARÉE   ///
////////////////////////////////
// function inputDynamiqueExo_7_2()
// {	
// 	//Si nombre demandé dans imput iNbreDyn > 50
// 	if ($('#iNbreDyn').val() >50)
// 	{
// 		//Ecrire "Pas plus de 50 !! Merci."
// 		$("#sp_result").html("Pas plus de 50 !!<br> Merci.");
// 	}
// 	// Sinon
// 	else
// 	{
// 		// Efface message précedent (au cas où il est présent)
// 		$("#sp_result").html("");

// 		var iID;
// 		var sHTML= "";

// 		// Boucle de 1 à iNbreDyn (nombre d'imput à créer)
// 		for (iID=1; iID<=$('#iNbreDyn').val(); iID++)	
// 		{
// 			// génère un chiffre aléatoire
// 			var iRandom= Math.floor(Math.random() * 999) + 1;
// 			// Concatène liste de champs dans variable sHTML
// 			sHTML+= "<p>" + iID + ".) <input type=\"number\" name=\"iNombre" + iID + "\" id=\"iNombre" + iID + "\" value=\"" + iRandom + "\"></p>";
// 		}
// 		// Crée les imputs dans la div ID div_formDyn
// 		$('#div_formDyn').html(sHTML);
// 	}
// }
//////////////////////////////

function Exo_7_2_b_jquery()
	//Début
	{ 
		var aTab, sTD, iNbreDyn, i, iNombre;

		aTab=[];
		sTD="";

		// Lire combien de valeur à inserer
		iNbreDyn=$('#iNbreDyn').val();

		// Boucle de 1 à iNbreDyn
		for (i=1; i<=iNbreDyn; i++)
		{
			//récupère les valeurs des imputs
			iNombre=+$("#iNombre"+i).val();
			//Range les valeurs dans les indexes du tableau
			aTab[i-1]=iNombre;
			//Concatène les indexes du tableau pour les afficher plus tard
			sTD +=aTab[i-1] + " | ";
		}

		//Afficher le tableau non trié
		$("#sp_result").html("Tableau non trié : <br>"+sTD+"<br><br>");

		var iTemp, j;

		//Boucle de 0 à longueur du tableau pour faire verifier dans l'index i
		for (i=0; i<=aTab.length-1; i++)
		{
			//Boucle pour comparer les nombres suivants avec celui définit par i
			for (j=i+1; j<aTab.length; j++)
			{
				//si j (le nombre suivant) est plus grand que celui marqué alors
				if (aTab[i] < aTab[j])
				{
					//On intervertit les positions
					iTemp = aTab[j];
					aTab[j] = aTab[i];
					aTab[i] = iTemp;
				//FinSI
				}
			//j suivant
			}
		// i suivant
		}
		
		//Afficher le tableau trié
		$("#sp_result").append("Tableau trié : <br>"+ aTab.join(" | ")+"<br><br>");

	//fin
	}
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 4   --
// --------------------
// --------------------

// ALGORITHME Exo_7_4 JSFORM
function Exo_7_4_jsform()
	//Début
	{	
		// déclaration des variables
		var aTab, i, iNbre;

		//Création d'un tableau de 11 entrées
		aTab = [11];
		// Pour i de 0 à 10
		for (i=0;i<=10;i++)
		{
			// Remplissage du tableau de 0 à 10
			aTab[i]=i;
		// i suivant 
		}

		//affichage tableau original
		console.table(aTab);
		document.getElementById("sp_result").innerHTML="Tableau original :<br>"+aTab.join(" | ")+"<br><br>";

		//Lire iNbre (index de l'élément à supprimer)
		iNbre=+document.getElementById("iNbre").value;

		//pour ne pas accepter une valeur plus grande que le tableau
		// SI iNbre <0 ou iNbre > 10 ALORS
		if (iNbre <0 || iNbre > 10)
		{
			//Ecrire "Pas plus de 10. Merci"
			document.getElementById("sp_result").innerHTML+="Votre demande n'est pas comprise entre 0 et 10<br>Veuillez recommencer !";
		//Fin SI
		}
		//SINON
		else
		{
			//boucle de l'index choisi à la fin du tableau
			for (i=iNbre; i<aTab.length-1;i++)
			{	
				//déplace les éléments d'un index depuis celui choisi
				aTab[i]=aTab[i+1];
			//Fin de la boucle
			}

			//Ecrire l'indice a effacer
			document.getElementById("sp_result").innerHTML+="Indice à effacer : "+ iNbre +"<br><br>";
			//redimension du tableau (supprime le dernier index)
			aTab.length--;
			// (pour verifier la nouvelle taille du tableau)
			console.table(aTab);
			//affichage du tableau modifié
			document.getElementById("sp_result").innerHTML+="Tableau modifié :<br>"+aTab.join(" | ");
		//Fin SINON	
		}
	//Fin
	console.table(aTab);
	}

// ----------
// ----------					

// ALGORITHME Exo_7_4 JQUERY
function Exo_7_4_jquery()
	//Début
	{	
		// déclaration des variables
		var aTab, i, iNbre;

		//Création d'un tableau de 11 entrées
		aTab = [11];
		// Pour i de 0 à 10
		for (i=0;i<=10;i++)
		{
			// Remplissage du tableau de 0 à 10
			aTab[i]=i;
		// i suivant 
		}

		//affichage tableau original
		$("#sp_result").html("Tableau original :<br>"+aTab.join(" | ")+"<br><br>");

		//Lire iNbre (index de l'élément à supprimer)
		iNbre=+$("#iNbre").val();

		//pour ne pas accepter une valeur plus grande que le tableau
		// SI iNbre <0 ou iNbre > 10 ALORS
		if (iNbre <0 || iNbre > 10)
		{
			//Ecrire "Pas plus de 10. Merci"
			$("#sp_result").append("Votre demande n'est pas comprise entre 0 et 10<br>Veuillez recommencer !");
		//Fin SI
		}
		//SINON
		else
		{
			//boucle de l'index choisi à la fin du tableau
			for (i=iNbre; i<aTab.length-1;i++)
			{	
				//déplace les éléments d'un index depuis celui choisi
				aTab[i]=aTab[i+1];
			//Fin de la boucle
			}
			
			//Ecrire l'indice a effacer
			$("#sp_result").append("Indice à effacer : "+ iNbre +"<br><br>");
			//redimension du tableau (supprime le dernier index)
			aTab.length--;
			//affichage du tableau modifié
			$("#sp_result").append("Tableau modifié :<br>"+aTab.join(" | "));
		//Fin SINON	
		}
	//Fin
	}
// --------------------
// --------------------
// --   EXERCICE 5   --
// --------------------
// --------------------

// ALGORITHME Exo_7_5 JSFORM

//Chargement du fichier dico.js :
// file = "../js/dico.js";
// tag = document.createElement('script');
// tag.setAttribute("type","text/javascript");
// tag.setAttribute("src", file);
// tag.onload = function() {
// 	/* executez ce que vous souhaitez ici */
// 	alert('fichier chargé');
// }
// document.getElementsByTagName('head')[0].appendChild(tag);
// /!\ ou alors : /!\
// au début du fichier HTML :
//	<script type="text/javascript" src="../js/dico.js">
// </script>

function Exo_7_5_jsform()
//Début
{	
	// déclaration des variables
	var iMilieu, iLimiteBasse, iLimiteHaute, sMot, sMotUpperCased, bFlag;
	
	// Lire sMot
	sMot=document.getElementById("sMot").value;
	// Convertir en MAJUSCULE pour chercher dans dico sans erreur calcul ASCII*
	sMotUpperCased= sMot.toUpperCase();
	// booléen mot trouvé égal FAUX
	bFlag = false;
	// limite haute égale dernier index
	iLimiteHaute= aDico.length-1;
	//limite basse égale index 0
	iLimiteBasse= 0;

	//Tant que le mot n'est pas trouvé et que la limite basse <= limite haute
	while (!bFlag && iLimiteBasse <= iLimiteHaute)
	{
		// iMilieu = (iLimiteHaute + iLimiteBasse)/2 arondi au supérieur
		iMilieu = Math.round((iLimiteHaute+iLimiteBasse)/2);
		//Si valeur du mot > celle dans index milieu
		if (sMotUpperCased > aDico[iMilieu].toUpperCase())
		{
			// iLimiteBasse devient ce milieu +1
			iLimiteBasse=iMilieu+1;
		}
		//Sinon Si valeur du mot < celle dans index milieu
		else if (sMotUpperCased < aDico[iMilieu].toUpperCase())
		{
			// iLimiteHaute devient ce milieu -1
			iLimiteHaute=iMilieu-1;
		}
		//Sinon, mot trouvé donc booléen égal VRAI
		else 
		{
			bFlag = true;
		}
	//FIN TANTQUE
	}
	//Si booléen égal VRAI ecrire "Mot trouvé dans l'index " & iMilieu
	if (bFlag)
	{
		document.getElementById("sp_result").innerHTML="Mot trouvé dans l'index "+iMilieu;
	}
	//Sinon ecrire "Mot introuvable"
	else
	{
		document.getElementById("sp_result").innerHTML="Mot introuvable";
	}

	//Pour vérifier
	if (aDico.includes(sMot))
	{
		document.getElementById("sp_result").innerHTML+="<br><br>(Verification : aDico.includes(sMot) : "+aDico.includes(sMot)+"<br>--> Ce mot est bien présent)";
	}

	else
	{
		document.getElementById("sp_result").innerHTML+="<br><br>(Verification : aDico.includes(sMot) : "+aDico.includes(sMot)+"<br>--> Ce mot n'est pas dans ce dico)";
	}
//FIN
}
// ----------
// ----------

// ALGORITHME Exo_7_5 JQUERY

//Chargement du fichier dico.js :
// file = "../js/dico.js";
// tag = document.createElement('script');
// tag.setAttribute("type","text/javascript");
// tag.setAttribute("src", file);
// tag.onload = function() {
// 	/* executez ce que vous souhaitez ici */
// 	alert('fichier chargé');
// }
// document.getElementsByTagName('head')[0].appendChild(tag);
// /!\ ou alors : /!\
// au début du fichier HTML :
//	<script type="text/javascript" src="../js/dico.js">
// </script>

function Exo_7_5_jquery()
//Début
{	
	// déclaration des variables
	var iMilieu, iLimiteBasse, iLimiteHaute, sMot, sMotUpperCased, bFlag;
	
	// Lire sMot
	sMot=$("#sMot").val();
	// Convertir en MAJUSCULE pour chercher dans dico sans erreur calcul ASCII*
	sMotUpperCased= sMot.toUpperCase();
	// booléen mot trouvé égal FAUX
	bFlag = false;
	// limite haute égale dernier index
	iLimiteHaute= aDico.length-1;
	//limite basse égale index 0
	iLimiteBasse= 0;

	//Tant que le mot n'est pas trouvé et que la limite basse <= limite haute
	while (!bFlag && iLimiteBasse <= iLimiteHaute)
	{
		// iMilieu = (iLimiteHaute + iLimiteBasse)/2 arondi au supérieur
		iMilieu = Math.round((iLimiteHaute+iLimiteBasse)/2);
		//Si valeur du mot > celle dans index milieu
		if (sMotUpperCased > aDico[iMilieu].toUpperCase())
		{
			// iLimiteBasse devient ce milieu +1
			iLimiteBasse=iMilieu+1;
		}
		//Sinon Si valeur du mot < celle dans index milieu
		else if (sMotUpperCased < aDico[iMilieu].toUpperCase())
		{
			// iLimiteHaute devient ce milieu -1
			iLimiteHaute=iMilieu-1;
		}
		//Sinon, mot trouvé donc booléen égal VRAI
		else 
		{
			bFlag = true;
		}
	//FIN TANTQUE
	}
	//Si booléen égal VRAI ecrire "Mot trouvé dans l'index " & iMilieu
	if (bFlag)
	{
		$("#sp_result").html("Mot trouvé dans l'index "+iMilieu);
	}
	//Sinon ecrire "Mot introuvable"
	else
	{
		$("#sp_result").html("Mot introuvable");
	}

	//Pour vérifier
	if (aDico.includes(sMot))
	{
		$("#sp_result").append("<br><br>(Verification : aDico.includes(sMot) : "+aDico.includes(sMot)+"<br>--> Ce mot est bien présent)");
	}

	else
	{
		$("#sp_result").append("<br><br>(Verification : aDico.includes(sMot) : "+aDico.includes(sMot)+"<br>--> Ce mot n'est pas dans ce dico)");
	}
//FIN
}
// --------------------
// --------------------
// --   EXERCICE 7   --
// --------------------
// --------------------

// ALGORITHME Exo_7_7 JSFORM
function Exo_7_7_jsform()
//Début
{	
	var aTabA=[1,18,25,26,27,263,299,401];
	var aTabB=[0,9,22,46,222,500];
	var aTabC=[];
	var iTailleTabC=aTabA.length+aTabB.length;
	var i=0;
	var j=0;
	var bFinTabA=false;
	var bFinTabB=false;

	//TANT QUE la taille du nouveau tableau est inférieur à la somme des deux tableaux à fusionner
	//(c'est que le tableau C n'est pas entièrement rempli)
	while (aTabC.length<iTailleTabC)
	{	

		// TANT QUE la valeur i du tableau A est plus petite que celle de j du tableau B
		// ET que le tableau A n'est pas fini
		// OU
		// TANT QUE le tableau C n'est pas entièrement rempli
		// ET que le tableau B est fini
		while ((aTabA[i] <= aTabB[j] && bFinTabA===false) || (aTabC.length<iTailleTabC && bFinTabB===true))
		{	
			//inserer la  valeur i du tableau A dans tableau C
			aTabC.push(aTabA[i]);
			//i suivant
			i++;

			// Si i égal taille du tableau
			if (i===aTabA.length)
			{
				// i devient dernier index du tableau
				i=aTabA.length-1;
				// booléen VRAI pour indiquer qu'il n'y a plus de valeur à récuperer
				bFinTabA = true;
			//FINSI
			}
		//FIN TANTQUE
		}

		// TANT QUE la valeur j du tableau b est plus petite que celle de i du tableau A
		// ET que le tableau B n'est pas fini
		// OU
		// TANT QUE le tableau C n'est pas entièrement rempli
		// ET que le tableau A est fini
		while ((aTabB[j] <= aTabA[i]  && bFinTabB===false) || (aTabC.length<iTailleTabC && bFinTabA===true))
		{	
			//inserer la  valeur j du tableau B dans tableau C
			aTabC.push(aTabB[j]);
			//j suivant
			j++;

			// Si j égal taille du tableau
			if (j===aTabB.length)
			{
				// j devient dernier index du tableau
				j=aTabB.length-1;
				// booléen VRAI pour indiquer qu'il n'y a plus de valeur à récuperer
				bFinTabB = true;
			//FINSI
			}
		//FIN TANTQUE
		}
	//FIN TANTQUE
	}

	//Affichage des tableaux à fusionner
	document.getElementById("sp_result").innerHTML="Tableau 1 : <br>"+ aTabA.join(" | ")+"<br><br>";
	document.getElementById("sp_result").innerHTML+="Tableau 2 : <br>"+ aTabB.join(" | ")+"<br><br>";
	//Affichage du nouveau tableau fusionné
	document.getElementById("sp_result").innerHTML+="Tableau fusionné : <br>"+ aTabC.join(" | ");
//FIN
}
// ----------
// ----------

// ALGORITHME Exo_7_7 JQUERY
function Exo_7_7_jquery()
//Début
{	
	var aTabA=[1,18,25,26,27,88,119,263];
	var aTabB=[0,9,22,46,47,88,131,201,222];
	var aTabC=[];
	var iTailleTabC=aTabA.length+aTabB.length;
	var i=0;
	var j=0;
	var bFinTabA=false;
	var bFinTabB=false;

	//TANT QUE la taille du nouveau tableau est inférieur à la somme des deux tableaux à fusionner
	//(c'est que le tableau C n'est pas entièrement rempli)
	while (aTabC.length<iTailleTabC)
	{	

		// TANT QUE la valeur i du tableau A est plus petite que celle de j du tableau B
		// ET que le tableau A n'est pas fini
		// OU
		// TANT QUE le tableau C n'est pas entièrement rempli
		// ET que le tableau B est fini
		while ((aTabA[i] <= aTabB[j] && bFinTabA===false) || (aTabC.length<iTailleTabC && bFinTabB===true))
		{	
			//inserer la  valeur i du tableau A dans tableau C
			aTabC.push(aTabA[i]);
			//i suivant
			i++;

			// Si i égal taille du tableau
			if (i===aTabA.length)
			{
				// i devient dernier index du tableau
				i=aTabA.length-1;
				// booléen VRAI pour indiquer qu'il n'y a plus de valeur à récuperer
				bFinTabA = true;
			//FINSI
			}
		//FIN TANTQUE
		}

		// TANT QUE la valeur j du tableau b est plus petite que celle de i du tableau A
		// ET que le tableau B n'est pas fini
		// OU
		// TANT QUE le tableau C n'est pas entièrement rempli
		// ET que le tableau A est fini
		while ((aTabB[j] <= aTabA[i]  && bFinTabB===false) || (aTabC.length<iTailleTabC && bFinTabA===true))
		{	
			//inserer la  valeur j du tableau B dans tableau C
			aTabC.push(aTabB[j]);
			//j suivant
			j++;

			// Si j égal taille du tableau
			if (j===aTabB.length)
			{
				// j devient dernier index du tableau
				j=aTabB.length-1;
				// booléen VRAI pour indiquer qu'il n'y a plus de valeur à récuperer
				bFinTabB = true;
			//FINSI
			}
		//FIN TANTQUE
		}
	//FIN TANTQUE
	}

	//Affichage des tableaux à fusionner
	$("#sp_result").html("Tableau 1 : <br>"+ aTabA.join(" | ")+"<br><br>");
	$("#sp_result").append("Tableau 2 : <br>"+ aTabB.join(" | ")+"<br><br>");
	//Affichage du nouveau tableau fusionné
	$("#sp_result").append("Tableau fusionné : <br>"+ aTabC.join(" | "));

//FIN
}