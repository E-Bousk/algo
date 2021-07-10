function inputDynamique()
	{
		if ($('#iNbreDyn').val() >100)
		{
			$("#sp_result").html("Pas plus de 100 !!<br> Merci.");
		}
		else
		{
			$("#sp_result").html("");
			var iID;
			var sHTML= "";
			// Je boucle de 1 à iNbreDyn (nombre de champs à créer)
			for (iID=1; iID<=$('#iNbreDyn').val(); iID++)	
			{
				// Au passage, pour m'éviter de saisir des nombres pour tester, 
				// je fais en sorte que le JS m'en donne aléatoirement
				var iRandom= Math.floor(Math.random() * 999) + 1;
				// Je concatène ma liste de champs dans ma variable sHTML
				sHTML+= "<p>" + iID + ".) <input type=\"number\" name=\"iNombre" + iID + "\" id=\"iNombre" + iID + "\" value=\"" + iRandom + "\"></p>";
			}
			// Je remplis mon formulaire dans la div ID div_formDyn
			$('#div_formDyn').html(sHTML);
		}
	}


// --------------------
// --------------------
// --   EXERCICE 1   --
// --------------------
// --------------------

	// ALGORITHME Exo_6_1 JSFORM
	function Exo_6_1_jsform()
	//Début
	{
		// Effacer résultat précédent
		document.getElementById("sp_result").innerHTML="";

		var Tab, i;
		Tab = [];
		//Pour i ← 0 à 6
		for (i=0;i<=6;i++)
		{
			Tab[i] = 0;
			//Ecrire "Tableau de" & i & Tab
			document.getElementById("sp_result").innerHTML+="Tableau de " + (i+1) + " valeur(s) : " + Tab + "<br>";
		}
	//Fin
	}    
// ----------
// ----------

	// ALGORITHME Exo_6_1 JQUERY
	function Exo_6_1_jquery()
	//Début
	{
		// Effacer résultat précédent
		$("#sp_result").html("");

		var Tab, i;
		Tab = [];
		//Pour i ← 0 à 6
		for (i=0;i<=6;i++)
		{
			Tab[i] = 0;
			//Ecrire "Tableau de" & i & Tab
			$("#sp_result").append("Tableau de " + (i+1) + " valeur(s) : " + Tab + "<br>");
		}
	//Fin
	} 
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 2   --
// --------------------
// --------------------

	// ALGORITHME Exo_6_2 JSFORM
	function Exo_6_2_jsform()
	//Début
	{
		// Effacer résultat précédent
		document.getElementById("sp_result").innerHTML="";

		var Tab = [5];

		Tab[0] = "A";
		Tab[1] = "E";
		Tab[2] = "I";
		Tab[3] = "O";
		Tab[4] = "U";
		Tab[5] = "Y";

		//Ecrire "Tableau :" & Tab
		document.getElementById("sp_result").innerHTML="Tableau : " + Tab + "<br>";

	//Fin
	}
// ----------
// ----------

	// ALGORITHME Exo_6_2 JQUERY

	function Exo_6_2_jquery()
	//Début
	{
		// Effacer résultat précédent
		$("#sp_result").html("");

		var Tab = [5];

		Tab[0] = "A";
		Tab[1] = "E";
		Tab[2] = "I";
		Tab[3] = "O";
		Tab[4] = "U";
		Tab[5] = "Y";

		//Ecrire "Tableau :" & Tab
		$("#sp_result").html("Tableau : " + Tab + "<br>");

	//Fin
	}
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 3   --
// --------------------
// --------------------

	// ALGORITHME Exo_6_3 JSFORM
	var TabExo3 = [8];
	var iExo3=0;
	function Exo_6_3_jsform()
	//Début
	{
		//Pour i ← 0 à 8
		if (iExo3<=8)		
		{
			//Lire iNbre
			TabExo3[iExo3] = document.getElementById("iNbre").value;
			//Ecrire "Tableau de" & i & TabExo3
			document.getElementById("sp_result").innerHTML+="Valeur " + iExo3 + " du tableau : " + TabExo3[iExo3] + "<br>";
			iExo3++;
		}
		if (iExo3>8)
		{
			//Afficher le tableau
			document.getElementById("sp_result").innerHTML+="<br><br>"+TabExo3.join(" | ");
		}
	//Fin
	}   
// ----------
// ----------					

	// ALGORITHME Exo_6_3 JQUERY

	///////////////////////////////
	// VARIABLES DÉJA DÉCLARÉES //
	//////////////////////////////
	// var TabExo3 = [8];
	// var iExo3=0;
	//////////////////////////////

	function Exo_6_3_jquery()
	//Début
	{
		//Pour i ← 0 à 8
		if (iExo3<=8)		
		{
			//Lire iNbre
			TabExo3[iExo3] = $("#iNbre").val();
			//Ecrire "Tableau de" & i & TabExo3
			$("#sp_result").append("Valeur " + iExo3 + " du tableau : " + TabExo3[iExo3] + "<br>");
			iExo3++;
		}
		if (iExo3>8)
		{
			//Afficher le tableau
			$("#sp_result").append("<br><br>"+TabExo3.join(" | "));
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

	// ALGORITHME Exo_6_5 JSFORM
	function Exo_6_5_jsform()
	//Début
	{
		var Tab, i;
		i=1;
		Tab = [6];
		Tab[0]=1;

		// Ecrire Tab(0)
		document.getElementById("sp_result").innerHTML=""+Tab[0]+" , ";

		// Pour i ← 1 à 6
		for (i;i<=6;i++)
		{
			Tab[i]=Tab[i-1]+2;
			// Ecrire Tab(i)
			document.getElementById("sp_result").innerHTML+=""+Tab[i] + ((i<6) ? " , " :"");
		// i Suivant	
		}
	//Fin
	} 
// ----------
// ----------

	// ALGORITHME Exo_6_5 JQUERY
	function Exo_6_5_jquery()
	//Début
	{
		var Tab, i;
		i=1;
		Tab = [6];
		Tab[0]=1;

		// Ecrire Tab(0)
		$("#sp_result").html(Tab[0]+" , ");

		// Pour i ← 1 à 6
		for (i;i<=6;i++)
		{
			Tab[i]=Tab[i-1]+2;
			// Ecrire Tab(i)
			$("#sp_result").append(Tab[i] + ((i<6) ? " , " :""));
		// i Suivant	
		}
	//Fin
	} 
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 7   --
// --------------------
// --------------------

	// ALGORITHME Exo_6_7 JSFORM
	var TabExo7 = [8];
	var iExo7= 0;
	var iTotalExo7 = 0;
	function Exo_6_7_jsform()
	//Début
	{
		//Pour i ← 0 à 8
		if (iExo7<8)		
		{
			//Lire Tab(i)
			TabExo7[iExo7]=+document.getElementById("iNbre").value;
			iTotalExo7 = iTotalExo7+TabExo7[iExo7];
			// Ecrire "Notes " & iExo7+1 & "bien prise en compte.""
			document.getElementById("sp_result").innerHTML="Notes " + (iExo7+1) + " bien prise en compte.";
			iExo7++;
		}

		else if (iExo7==8)		
		{
			//Lire Tab(i)
			TabExo7[iExo7]=+document.getElementById("iNbre").value;
			iTotalExo7 = iTotalExo7+TabExo7[iExo7];
			// Ecrire "Notes " & iExo7+1 & "bien prise en compte.""
			document.getElementById("sp_result").innerHTML="Notes " + (iExo7+1) + " bien prise en compte.<br>Cliquez pour calculer la moyenne";
			iExo7++;
			// Effacer chiffre dans input
			document.getElementById("iNbre").value = "";
		}

		else
		{
			// Ecrire "La moyenne des notes est :" & iTotalExo7/i
			document.getElementById("sp_result").innerHTML="La moyenne des notes est : " + (iTotalExo7/iExo7) + "";
		}
	//Fin
	}   
// ----------
// ----------

	// ALGORITHME Exo_6_7 JQUERY

	///////////////////////////////
	// VARIABLES DÉJA DÉCLARÉES //
	//////////////////////////////
	// var TabExo7 = [8];
	// var iExo7= 0;
	// var iTotalExo7 = 0;
	//////////////////////////////

	function Exo_6_7_jquery()
	//Début
	{
		//Pour i ← 0 à 8
		if (iExo7<8)		
		{
			//Lire Tab(i)
			TabExo7[iExo7]=+document.getElementById("iNbre").value;
			iTotalExo7 = iTotalExo7+TabExo7[iExo7];
			// Ecrire "Notes " & iExo7+1 & "bien prise en compte.""
			$("#sp_result").html("Notes " + (iExo7+1) + " bien prise en compte.");
			iExo7++;
		}

		else if (iExo7==8)		
		{
			//Lire Tab(i)
			TabExo7[iExo7]=+document.getElementById("iNbre").value;
			iTotalExo7 = iTotalExo7+TabExo7[iExo7];
			// Ecrire "Notes " & iExo7+1 & "bien prise en compte.""
			$("#sp_result").html("Notes " + (iExo7+1) + " bien prise en compte.<br>Cliquez pour calculer la moyenne");
			iExo7++;
			// Effacer chiffre dans input
			$("#iNbre").val("");
		}

		else
		{
			// Ecrire "La moyenne des notes est :" & iTotalExo7/i
			$("#sp_result").html("La moyenne des notes est : " + (iTotalExo7/iExo7));
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

	// ALGORITHME Exo_6_9 JSFORM

	function Exo_6_9_jsform()
	//Début
	{	
		var TabExo9 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
		var i, iTotal;
		iTotal = 0;
		i = 0;
		for (i;i<=9;i++)
		{
			iTotal = iTotal+TabExo9[i];
		}
		document.getElementById("sp_result").innerHTML="Le total des valeurs est de : "	+ iTotal + "";
	//Fin	
	}
// ----------
// ----------

	// ALGORITHME Exo_6_9 JQUERY
	function Exo_6_9_jquery()
	//Début
	{	
		var TabExo9 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
		var i, iTotal;
		iTotal = 0;
		i = 0;
		for (i;i<=9;i++)
		{
			iTotal = iTotal+TabExo9[i];
		}
		$("#sp_result").html("Le total des valeurs est de : "	+ iTotal);
	//Fin	
	}
// ----------
// ----------
// --------------------
// --------------------
// --  EXERCICE 11   --
// --------------------
// --------------------

	// ALGORITHME Exo_6_11 JSFORM
	function Exo_6_11_jsform()
	//Début
	{	
		var TabExo11_1 = [4, 8, 7, 12];
		var TabExo11_2 = [3, 6];
		var i, j, iTotal;
		iTotal = 0;
		i = 0;

		for (i;i<=3;i++)
		{
			j = 0;
			for (j;j<=1;j++)
			{
				iTotal = iTotal+(TabExo11_1[i]*TabExo11_2[j]);
			}
		}
		
		document.getElementById("sp_result").innerHTML="Le total du calcul demandé est de : "	+ iTotal + "";
	//Fin	
	}

// ----------
// ----------

	// ALGORITHME Exo_6_11 JQUERY
	function Exo_6_11_jquery()
	//Début
	{	
		var TabExo11_1 = [4, 8, 7, 12];
		var TabExo11_2 = [3, 6];
		var i, j, iTotal;
		iTotal = 0;
		i = 0;

		for (i;i<=1;i++)
		{
			j = 0;
			for (j;j<=3;j++)
			{
				iTotal = iTotal+(TabExo11_2[i]*TabExo11_1[j]);
			}
		}
		
		$("#sp_result").html("Le total du calcul demandé est de : "	+ iTotal);
	//Fin	
	}

// ----------
// ----------
// --------------------
// --------------------
// --  EXERCICE 13   --
// --------------------
// --------------------

	// ALGORITHME Exo_6_13 JSFORM
	function Exo_6_13_jsform()
	//Début
	{	
		// déclaration des variables
		var iNbreDyn, TabExo13, iGreatest, iPosition, iv, i;
		TabExo13=[];
		
		// Recuperer les nombre de valeur(s) à inserer
		iNbreDyn=document.getElementById("iNbreDyn").value;
		
		// Récuperation des valeurs à inserer dans le tableau
		for (iv=0;iv<iNbreDyn;iv++)
		{
			// Lire Tab(x)
			TabExo13[iv]=+document.getElementById("iNombre"+(iv+1)).value;
		}

		iGreatest = "";
		
		// Pour i ← 0 à x-1
		for (i=0;i<iNbreDyn;i++)
		{
			// Si Tab(i)>iGreatest ou 1er nombre comparé Alors
			if (TabExo13[i]>iGreatest || iGreatest === "")
			{
				// iGreatest ← Tab(i)
				iGreatest = TabExo13[i];
				iPosition = i;
			// finSI
			}
		// i suivant 
		}
		document.getElementById("sp_result").innerHTML="La plus grande valeur est : " + iGreatest + "<br> en position numero " + (iPosition+1) + "";
	//Fin	
	}
// ----------
// ----------

	// ALGORITHME Exo_6_13 JQUERY
	function Exo_6_13_jquery()
	//Début
	{	
		// déclaration des variables
		var iNbreDyn, TabExo13, iGreatest, iPosition, iv, i;
		TabExo13=[];

		// Recuperer les nombre de valeur(s) à inserer
		iNbreDyn=$("#iNbreDyn").val();

		// Récuperation des valeurs à inserer dans le tableau
		for (iv=0;iv<iNbreDyn;iv++)
		{
			// Lire Tab(x)
			TabExo13[iv]=+$("#iNombre"+(iv+1)).val();
		}

		iGreatest = "";
		
		// Pour i ← 0 à x-1
		for (i=0;i<iNbreDyn;i++)
		{
			// Si Tab(i)>iGreatest ou 1er nombre comparé Alors
			if (TabExo13[i]>iGreatest || iGreatest === "")
			{
				// iGreatest ← Tab(i)
				iGreatest = TabExo13[i];
				iPosition = i;
			// finSI
			}
		// i suivant 
		}
		console.table(TabExo13);
		$("#sp_result").html("La plus grande valeur est : " + iGreatest + "<br> en position numero " + (iPosition+1));
	//Fin	
	}
// ----------
// ----------
// --------------------
// --------------------
// --  EXERCICE 15   --
// --------------------
// --------------------

	// ALGORITHME Exo_6_15 JSFORM
	function Exo_6_15_jsform()
	//Début
	{	
		// déclaration des variables
		var iAge, TabExo15, i;

		TabExo15 = [20];
		TabExo15[0] = 1000;
		
		// Pour i ← 1 à 20
		for (i=1;i<=20;i++)
		{
			TabExo15[i] = TabExo15[i-1]*(1+2.75/100);
		// i suivant 
		}
		// Ecrire "Saisissez un âge pour voir la somme correspondante"
		// Lire iAge
		iAge=document.getElementById("iAge").value;
		// Ecrire "À " & iAge & " an(s), la somme sera de :" & Tab(iAge) & " €."
		document.getElementById("sp_result").innerHTML="À " + iAge + " an(s), la somme sera de : " + TabExo15[iAge].toFixed(2) + " €.";
	//Fin	
	}
// ----------
// ----------

	// ALGORITHME Exo_6_15 JQUERY
	function Exo_6_15_jquery()
	//Début
	{	
		// déclaration des variables
		var iAge, TabExo15, i;
		
		TabExo15 = [20];
		TabExo15[0] = 1000;
		
		// Pour i ← 1 à 20
		for (i=1;i<=20;i++)
		{
			TabExo15[i] = TabExo15[i-1]*(1+2.75/100);
		// i suivant 
		}
		// Ecrire "Saisissez un âge pour voir la somme correspondante"
		// Lire iAge
		iAge=$("#iAge").val();
		// Ecrire "À " & iAge & " an(s), la somme sera de :" & Tab(iAge) & " €."
		$("#sp_result").html("À " + iAge + " an(s), la somme sera de : " + TabExo15[iAge].toFixed(2) + " €.");
	//Fin
	}
// ----------
// ----------
// --------------------
// --------------------
// --  EXERCICE 16   --
// --------------------
// --------------------

	// ALGORITHME Exo_6_16 JSFORM
	function Exo_6_16_jsform()
	//Début
	{	
		// déclaration des variables
		var TabExo16, bVrai_Faux, i;

		TabExo16 = [99];
		
		// Pour i ← 0 à 99
		for (i=0;i<=99;i++)
		{
			TabExo16[i] = Math.floor(Math.random() * 999) + 1;
			// TabExo16[i] = i + 1;
		// i suivant 
		}

		bVrai_Faux = true;

		for (i=0;i<=99;i++)
		{
			if (TabExo16[i] > TabExo16[i+1])
			{
				bVrai_Faux = false;
			}
		// i suivant 
		}
		// Afficher le tableau
		document.getElementById("sp_result").innerHTML="Tableau : <br>"+ TabExo16.join(" | ")+"<br><br>";

		if (bVrai_Faux==true)
		{
			// Ecrire "Les entiers sont consécutifs"
			document.getElementById("sp_result").innerHTML+="Les entiers sont consécutifs";
		}

		else
		{
			// Ecrire "Les entiers ne sont pas consécutifs"
			document.getElementById("sp_result").innerHTML+="Les entiers ne sont pas consécutifs";
		}
	//Fin	
	}

// ----------
// ----------

	// ALGORITHME Exo_6_16 JQUERY
	function Exo_6_16_jquery()
	//Début
	{	
		// déclaration des variables
		var TabExo16, bVrai_Faux, i;

		TabExo16 = [99];
		
		// Pour i ← 0 à 99
		for (i=0;i<=99;i++)
		{
			// TabExo16[i] = Math.floor(Math.random() * 999) + 1;
			TabExo16[i] = i + 1;
		// i suivant 
		}

		bVrai_Faux = true;
		
		for (i=0;i<=99;i++)
		{
			if (TabExo16[i] > TabExo16[i+1])
			{
				bVrai_Faux = false;
			}
		// i suivant 
		}

		//Afficher le tableau
		$("#sp_result").html("Tableau : <br>"+ TabExo16.join(" | ")+"<br><br>");

		// Si bVrai_Faux = true
		if (bVrai_Faux==true)
		{
			// Ecrire "Les entiers sont consécutifs"
			$("#sp_result").append("Les entiers sont consécutifs");
		}

		// Sinon
		else
		{
			// Ecrire "Les entiers ne sont pas consécutifs"
			$("#sp_result").append("Les entiers ne sont pas consécutifs");
		}
	//Fin	
	}

// ----------
// ----------
// --------------------
// --------------------
// --  EXERCICE 17   --
// --------------------
// --------------------

	// ALGORITHME Exo_6_17 JSFORM
	var aTab = [];
	var i=0;
	function Exo_6_17_jsform()
	//Début
	{
		var iNbre, bFlag, iPosition, j;
        		
		//POUR i ← 0 à 99
		if (i<=99)		
		{
			//Lire la valeur à inserer
			iNbre = +document.getElementById("iNbre").value;
			// SI le tableau est vide...
			if (aTab.length==0)
			{
				// alors la 1ere valeur prend la 1ere position (0)
				aTab[0]=iNbre;
			}
			//SINON, on crée un booléen pour chercher et marquer la position où il faut ranger la valeur
			else 
			{	//boucle = 0
				j=0;
				// booléen pour marquer position = FAUX
				bFlag=0;

				//TANT QU'on ne trouve pas la position (booléen FAUX) et j < nombre de position dans tableau
				while (bFlag==0 && j<aTab.length)
				{
					// (on teste) SI la valeur dans la position (j) est supérieure à la valeur qu'il faut ajouter
					if (aTab[j]>iNbre)
					{
						//ALORS on marque la position
						iPosition=j;
						// et on passe le booléen à VRAI
						bFlag=1;
					//FIN SI
					}
				// incrémentation de la boucle
				j++;
				//FIN TANTQUE	
				}

				//SI la position n'est pas trouvée, ALORS
				if (bFlag == 0)
				{
					//On place la valeur dans la dernière position du tableau
					aTab[aTab.length]=iNbre;
				}
				//SINON
				else
				{
					//On boucle de la fin du tableau jusqu'à la position trouvée
					for (j=(aTab.length-1); j>=iPosition; j--)
					{
						aTab[j+1]=aTab[j];
					}
					//On range la valeur entrée dans la position trouvée
					aTab[iPosition]=iNbre;
				//FINSI	
				}
			//FINSI	
			}
			i++;
		//FINSI	
		}
		document.getElementById("sp_result").innerHTML=aTab;
	//Fin
	}	
// ----------
// ----------

	// ALGORITHME Exo_6_17 JQUERY

///////////////////////////////
// VARIABLES DÉJA DÉCLARÉES //
//////////////////////////////
// var aTab = [];
// var i=0;
//////////////////////////////

	function Exo_6_17_jquery()
	//Début
	{
		var iNbre, bFlag, iPosition, j;
        		
		//POUR i ← 0 à 99
		if (i<=99)		
		{
			//Lire la valeur à inserer
			iNbre = +$("#iNbre").val();
			// SI le tableau est vide...
			if (aTab.length==0)
			{
				// alors la 1ere valeur prend la 1ere position (0)
				aTab[0]=iNbre;
			}
			//SINON, on crée un booléen pour chercher et marquer la position où il faut ranger la valeur
			else 
			{	//boucle = 0
				j=0;
				// booléen pour marquer position = FAUX
				bFlag=0;

				//TANT QU'on ne trouve pas la position (booléen FAUX) et j < nombre de position dans tableau
				while (bFlag==0 && j<aTab.length)
				{
					// (on teste) SI la valeur dans la position (j) est supérieure à la valeur qu'il faut ajouter
					if (aTab[j]>iNbre)
					{
						//ALORS on marque la position
						iPosition=j;
						// et on passe le booléen à VRAI
						bFlag=1;
					//FIN SI
					}
				// incrémentation de la boucle
				j++;
				//FIN TANTQUE	
				}

				//SI la position n'est pas trouvée, ALORS
				if (bFlag == 0)
				{
					//On place la valeur dans la dernière position du tableau
					aTab[aTab.length]=iNbre;
				}
				//SINON
				else
				{
					//On boucle de la fin du tableau jusqu'à la position trouvée
					for (j=(aTab.length-1); j>=iPosition; j--)
					{
						aTab[j+1]=aTab[j];
					}
					//On range la valeur entrée dans la position trouvée
					aTab[iPosition]=iNbre;
				//FINSI	
				}
			//FINSI	
			}
			i++;
		//FINSI	
		}
		$("#sp_result").html(aTab+"");
	//Fin
	}
// ----------
// ----------