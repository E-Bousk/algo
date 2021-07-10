// --------------------
// --------------------
// --   EXERCICE 1   --
// --------------------
// --------------------

	// ALGORITHME Exo_8_1 JSFORM
	function Exo_8_1_jsform()
	// DEBUT
	{	
		// 1ere version
		var aTab1 = new Array(6);

		for (var i=0; i<6; i++)
		{
			aTab1[i] = new Array(13);

			for (var j=0; j<13; j++)
			{
				aTab1[i][j]=0;
			}
		}

		// 2eme version :
		var aTab2 = [];
		for(var i=0; i<6; i++)
		{
    		aTab2.push(new Array(13).fill(0));
		}
		
		// 3eme version :
		var aTab3 = new Array(6).fill(new Array(13).fill(0));

		console.table(aTab1);

		// Array.prototype.toString = function () 
		// {
		// 	return "[" + this.join(', ') + "]";
		// }




		// affichage tableaux
		document.getElementById("sp_result").innerHTML="Tableau 1 :<br>"+aTab1.join(" | ");
		document.getElementById("sp_result").innerHTML+="<br><br>Tableau 2 :<br>"+aTab2.join(" | ");
		document.getElementById("sp_result").innerHTML+="<br><br>Tableau 3 :<br>"+aTab3.join(" | ");
	//Fin
	}
// ----------
// ----------

	// ALGORITHME Exo_8_1 JQUERY
	function Exo_8_1_jquery()
	// DEBUT
	{
		// 1ere version :
		var aTab1 = new Array(6);

		for (var i=0; i<6; i++)
		{
			aTab1[i] = new Array(13);

			for (var j=0; j<13; j++)
			{
				aTab1[i][j]=0;
			}
		}

		// 2eme version :
		var aTab2 = [];
		for(var i=0; i<6; i++)
		{
			aTab2.push(new Array(13).fill(0));
		}
		
		// 3eme version :
		var aTab3 = new Array(6).fill(new Array(13).fill(0));

		console.table(aTab1);

		// Array.prototype.toString = function () 
		// {
		// 	return "[" + this.join(', ') + "]";
		// }

		// affichage tableaux
		$("#sp_result").html("Tableau 1 :<br>"+aTab1.join(" | "));
		$("#sp_result").append("<br><br>Tableau 2 :<br>"+aTab2.join(" | "));
		$("#sp_result").append("<br><br>Tableau 3 :<br>"+aTab3.join(" | "));
	//Fin
	}
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 6   --
// --------------------
// --------------------

	// ALGORITHME Exo_8_6 JSFORM
	function Exo_8_6_jsform()
	// DEBUT
	{
		// génerer un tableau à deux dimensions (12, 8) rempli aléatoirement
		var aTab = new Array(12);

		for (var i=0; i<12; i++)
		{
			aTab[i] = new Array(8);

			for (var j=0; j<8; j++)
			{
				aTab[i][j]=Math.floor(Math.random() * 999) + 1;
			}
		}
		// affichage du tableau généré
		document.getElementById("sp_result").innerHTML="Tableau :<br>"+aTab.join(" | ");


		var iGreatest = "";
		var iPosition;
		for (var i=0; i<12; i++)
		{
			for (var j=0; j<8; j++)
			{
				if(aTab[i][j]>iGreatest || iGreatest=== "" )
				{
					iGreatest=aTab[i][j];
					iPosition="("+(i+1)+","+(j+1)+")";
				}
			}
		}
		// affichage la valeur la plus grande
		document.getElementById("sp_result").innerHTML+="<br><br><br>La plus grande valeur est :<br>"+iGreatest;
		// affichage de sa position
		document.getElementById("sp_result").innerHTML+="<br>à la position :<br>"+iPosition;
	//Fin
	}
// ----------
// ----------

	// ALGORITHME Exo_8_6 JQUERY
	function Exo_8_6_jquery()
	// DEBUT
	{
		// génerer un tableau à deux dimensions (12, 8) rempli aléatoirement
		var aTab = new Array(12);

		for (var i=0; i<12; i++)
		{
			aTab[i] = new Array(8);

			for (var j=0; j<8; j++)
			{
				aTab[i][j]=Math.floor(Math.random() * 999) + 1;
			}
		}

		// affichage du tableau
		$("#sp_result").html("Tableau :<br>"+aTab.join(" | "));

		var iGreatest = "";
		var iPosition;
		for (var i=0; i<12; i++)
		{
			for (var j=0; j<8; j++)
			{
				if(aTab[i][j]>iGreatest || iGreatest=== "" )
				{
					iGreatest=aTab[i][j];
					iPosition="("+(i+1)+","+(j+1)+")";
				}
			}
		}
		// affichage la valeur la plus grande
		$("#sp_result").append("<br><br><br>La plus grande valeur est :<br>"+iGreatest);
		// affichage de sa position
		$("#sp_result").append("<br>à la position :<br>"+iPosition);
	//Fin
	}
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 7   --
// --------------------
// --------------------

	// ALGORITHME Exo_8_7 JSFORM
	// function Mouvement()
	// {
	// 	// 	Ecrire "Quel mouvement voulez-vous effectuer ?"
	// 	document.getElementById("sp_result").innerHTML="Quel mouvement voulez-vous effectuer ?";		var sHTML= "";
	// 	// créer la div "saisie mouvement" et l'imput
	// 	// var sHTML= "<p><div name=\"div_MVT\" id=\"div_MVT\">Mouvement à effectuer : </div></p><p><input type=\"number\" name=\"iMvt\" id=\"iMvt\" value=\"\"></p>";
	// 	var sHTML= "<p><label for=\"iMvt\">Mouvement :</label></p><p><select name=\"iMvt\" id=\"iMvt\"><option value=\"\">--Quel mouvement voulez-vous effectuer ?--</option><option value=\"tata\">en haut à gauche</option><option value=\"toto\">en haut à droite</option><option value=\"2\">en bas à gauche</option><option value=\"3\">en bas à droite</option></select></p>";
	// 	$('#div_formDyn').html(sHTML);
	// 	// Lire iMvt
	// 	iMvt=document.getElementById("iMvt").value;
	// 	console.log(iMvt)
	// 	return iMvt;
	// }


	
	function Exo_8_7_jsform()
	// DEBUT
	{
		var iLigne, iColonne, iLigneTab, iColonneTab, iMvt;
		var bLigMsImp, bColMsImp, bLigPsImp, bColPsImp;
		//Creation du damier vide
		var aDamier = new Array(10);
		for (var i=0; i<10; i++)
		{
			aDamier[i] = new Array(10);

			for (var j=0; j<10; j++)
			{
				aDamier[i][j]="<img src=\"../img/pionNoir.png\">";
			}
		}

		// Ecrire "Indiquez la position"
		// Lire iLigne, iColonne
		iLigne=document.getElementById("iLigne").value;
		iColonne=document.getElementById("iColonne").value;
		iLigneTab=iLigne-1;
		iColonneTab=iColonne-1;

		//TANTQUE iLigne OU iColonne < 1 OU > 10
		if (iLigne < 1 || iLigne > 10 || iColonne < 1 || iColonne > 10)
		{
			// 	Ecrire "valeur incorrect, recommencez"
			document.getElementById("sp_result").innerHTML="valeur incorrect, recommencez";
		//FIN TANTQUE
		}

		// Sinon
		else
		{
			// Positionner le pion dans le tableau à la case voulue
			aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionBlanc.png\">";
			document.getElementById("sp_result").innerHTML="Le pion se trouve à la position (ligne "+iLigne+", colonne "+iColonne+")";
			
			// Mouvements impossibles si pion au bords du tableau
			if (iLigneTab == 0)
			{
				bLigMsImp = true;
			}
			if (iColonneTab == 0)
			{
				bColMsImp = true;
			}
			if (iLigneTab == 9)
			{
				bLigPsImp = true;
			}
			if (iColonneTab == 9)
			{
				bColPsImp = true;
			}

			// Lire iMvt
			// iMvt=document.getElementById("iMvt").value;
			iMvt=document.querySelector('input[name = "iMvt"]:checked').value;
			
			// Si mouvement = haut gauche
			if (iMvt == 0)
			{
				if (bLigMsImp || bColMsImp)
				{
					// Ecrire "mouvement impossible, recommencez"
					document.getElementById("sp_result").innerHTML="déplacement impossible, recommencez";
				}
				
				else
				{
					aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionNoir.png\">";
					iLigneTab--;
					iColonneTab--;
					iLigne--;
					iColonne--;
					aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionBlanc.png\">";
					document.getElementById("sp_result").innerHTML="Le pion se trouve à la position (ligne "+iLigne+", colonne "+iColonne+")";
					document.getElementById("iLigne").value=iLigne;
					document.getElementById("iColonne").value=iColonne;
				}
			//Fin SI
			}

			// Si mouvement = haut droite
			if (iMvt == 1)
			{
				if (bLigMsImp || bColPsImp)
				{
					// Ecrire "mouvement impossible, recommencez"
					document.getElementById("sp_result").innerHTML="déplacement impossible, recommencez";
				}
				
				else
				{
					aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionNoir.png\">";
					iLigneTab--;
					iColonneTab++;
					iLigne--;
					iColonne++;
					aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionBlanc.png\">";
					document.getElementById("sp_result").innerHTML="Le pion se trouve à la position (ligne "+iLigne+", colonne "+iColonne+")";
					document.getElementById("iLigne").value=iLigne;
					document.getElementById("iColonne").value=iColonne;
				}
			//Fin SI
			}

			// Si mouvement = bas gauche
			if (iMvt == 2)
			{
				if (bLigPsImp || bColMsImp)
				{
					// Ecrire "mouvement impossible, recommencez"
					document.getElementById("sp_result").innerHTML="déplacement impossible, recommencez";
				}
				
				else
				{
					aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionNoir.png\">";
					iLigneTab++;
					iColonneTab--;
					iLigne++;
					iColonne--;
					aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionBlanc.png\">";
					document.getElementById("sp_result").innerHTML="Le pion se trouve à la position (ligne "+iLigne+", colonne "+iColonne+")";
					document.getElementById("iLigne").value=iLigne;
					document.getElementById("iColonne").value=iColonne;
				}
			//Fin SI
			}

			// Si mouvement = bas droite
			if (iMvt == 3)
			{
				if (bLigPsImp || bColPsImp)
				{
					// Ecrire "mouvement impossible, recommencez"
					document.getElementById("sp_result").innerHTML="déplacement impossible, recommencez";
				}
				
				else
				{
					aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionNoir.png\">";
					iLigneTab++;
					iColonneTab++;
					iLigne++;
					iColonne++;
					aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionBlanc.png\">";
					document.getElementById("sp_result").innerHTML="Le pion se trouve à la position (ligne "+iLigne+", colonne "+iColonne+")";
					document.getElementById("iLigne").value=iLigne;
					document.getElementById("iColonne").value=iColonne;
				}
			//Fin SI
			}

			// Génération du tableau à damier N&B
			var sHtml="";
			//Pour a de 0 à 10
			for (var a = 0; a < 10; a++) 
			{
				sHtml += "<tr><td style=\"width:24px; \">" + (a+1) + "</td>";

				//Pour b de 0 à 10
				for (var b = 0; b < 10; b++)
				{
					//Si a est paire et b aussi couleur noir
					if (a % 2 == 0 && b % 2 == 0)
					{
						sHtml += "<td style=\"background-color: black; width:43px; height: 45px;\">" + aDamier[a][b] + "</td>";

					//SiNonSi a est impaire et b aussi couleur noir
					} else if ((a % 2 !== 0 && b % 2 !== 0))
					{
						sHtml += "<td style=\"background-color: black; width:43px; height: 45px;\">" + aDamier[a][b] + "</td>";
					} 

					//SiNon couleur blanc
					else 
					{
						sHtml += "<td style=\"background-color: white; width:43px; height: 45px;\">" + aDamier[a][b] + "</td>";
					}
				//b Suivant	
				}

				sHtml = sHtml + "</tr>";

			//a Suivant 	
			}

			// Afficher tableau
			document.getElementById("sp_result2").innerHTML="<br><table><tr><td style=\"width:24px; \"></td><td style=\"width:43px;\">1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr></table>";
			document.getElementById("sp_result2").innerHTML+="<table>" + sHtml + "</table><br>";
			
		// Fin SINON
		}
	//Fin
	}
// ----------
// ----------					

// ALGORITHME Exo_8_7 JQUERY
function Exo_8_7_jquery()
// DEBUT
{
	var iLigne, iColonne, iLigneTab, iColonneTab, iMvt;
	var bLigMsImp, bColMsImp, bLigPsImp, bColPsImp;

	//Creation du damier vide
	var aDamier = new Array(10);
	for (var i=0; i<10; i++)
	{
		aDamier[i] = new Array(10);

		for (var j=0; j<10; j++)
		{
			aDamier[i][j]="<img src=\"../img/pionBlanc.png\">";
		}
	}

	// Ecrire "Indiquez la position"
	// Lire iLigne, iColonne
	iLigne=$("#iLigne").val();
	iColonne=$("#iColonne").val();
	iLigneTab=iLigne-1;
	iColonneTab=iColonne-1;

	//TANTQUE iLigne OU iColonne < 1 OU > 10
	if (iLigne < 1 || iLigne > 10 || iColonne < 1 || iColonne > 10)
	{
		// 	Ecrire "valeur incorrect, recommencez"
		$("#sp_result").html("valeur incorrect, recommencez");
	//FIN TANTQUE
	}

	// Sinon
	else
	{
		// Positionner le pion dans le tableau à la case voulue
		aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionNoir.png\">";
		$("#sp_result").html("Le pion se trouve à la position (ligne "+iLigne+", colonne "+iColonne+")");
		
		// Mouvements impossibles si pion au bords du tableau
		if (iLigneTab == 0)
		{
			bLigMsImp = true;
		}
		if (iColonneTab == 0)
		{
			bColMsImp = true;
		}
		if (iLigneTab == 9)
		{
			bLigPsImp = true;
		}
		if (iColonneTab == 9)
		{
			bColPsImp = true;
		}
		
		// Lire iMvt
		// iMvt=$("#iMvt").val();
		iMvt=$("input[type='radio'][name='iMvt']:checked").val();
		
		// Si mouvement = haut gauche
		if (iMvt == 0)
		{
			if (bLigMsImp || bColMsImp)
			{
				// Ecrire "mouvement impossible, recommencez"
				$("#sp_result").html("déplacement impossible, recommencez");
			}
			
			else
			{
				aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionBlanc.png\">";
				iLigneTab--;
				iColonneTab--;
				iLigne--;
				iColonne--;
				aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionNoir.png\">";
				$("#sp_result").html("Le pion se trouve à la position (ligne "+iLigne+", colonne "+iColonne+")");
				$("#iLigne").val(iLigne);
				$("#iColonne").val(iColonne);
			}
		//Fin SI
		}

		// Si mouvement = haut droite
		if (iMvt == 1)
		{
			if (bLigMsImp || bColPsImp)
			{
				// Ecrire "mouvement impossible, recommencez"
				$("#sp_result").html("déplacement impossible, recommencez");
			}
			
			else
			{
				aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionBlanc.png\">";
				iLigneTab--;
				iColonneTab++;
				iLigne--;
				iColonne++;
				aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionNoir.png\">";
				$("#sp_result").html("Le pion se trouve à la position (ligne "+iLigne+", colonne "+iColonne+")");
				$("#iLigne").val(iLigne);
				$("#iColonne").val(iColonne);
			}
		//Fin SI
		}

		// Si mouvement = bas gauche
		if (iMvt == 2)
		{
			if (bLigPsImp || bColMsImp)
			{
				// Ecrire "mouvement impossible, recommencez"
				$("#sp_result").html("déplacement impossible, recommencez");
			}
			
			else
			{
				aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionBlanc.png\">";
				iLigneTab++;
				iColonneTab--;
				iLigne++;
				iColonne--;
				aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionNoir.png\">";
				$("#sp_result").html("Le pion se trouve à la position (ligne "+iLigne+", colonne "+iColonne+")");
				$("#iLigne").val(iLigne);
				$("#iColonne").val(iColonne);
			}
		//Fin SI
		}

		// Si mouvement = bas droite
		if (iMvt == 3)
		{
			if (bLigPsImp || bColPsImp)
			{
				// Ecrire "mouvement impossible, recommencez"
				$("#sp_result").html("déplacement impossible, recommencez");
			}
			
			else
			{
				aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionBlanc.png\">";
				iLigneTab++;
				iColonneTab++;
				iLigne++;
				iColonne++;
				aDamier[iLigneTab][iColonneTab]="<img src=\"../img/pionNoir.png\">";
				$("#sp_result").html("Le pion se trouve à la position (ligne "+iLigne+", colonne "+iColonne+")");
				$("#iLigne").val(iLigne);
				$("#iColonne").val(iColonne);
			}
		//Fin SI
		}


		// Génération du tableau à damier N&B
		var sHtml="";
		//Pour a de 0 à 10
		for (var a = 0; a < 10; a++) 
		{
			sHtml += "<tr><td style=\"width:24px; \">" + (a+1) + "</td>";

			//Pour b de 0 à 10
			for (var b = 0; b < 10; b++)
			{
				//Si a est paire et b aussi couleur noir
				if (a % 2 == 0 && b % 2 == 0)
				{
					sHtml += "<td style=\"background-color: black; width:43px; height: 45px;\">" + aDamier[a][b] + "</td>";

				//SiNonSi a est impaire et b aussi couleur noir
				} else if ((a % 2 !== 0 && b % 2 !== 0))
				{
					sHtml += "<td style=\"background-color: black; width:43px; height: 45px;\">" + aDamier[a][b] + "</td>";
				} 

				//SiNon couleur blanc
				else 
				{
					sHtml += "<td style=\"background-color: white; width:43px; height: 45px;\">" + aDamier[a][b] + "</td>";
				}
			//b Suivant	
			}

			sHtml = sHtml + "</tr>";

		//a Suivant 	
		}

		// Afficher tableau
		$("#sp_result2").html("<br><table><tr><td style=\"width:24px; \"></td><td style=\"width:43px;\">1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr></table>");
		$("#sp_result2").append("<table>" + sHtml + "</table><br>");
		
	// Fin SINON
	}
//Fin
}		