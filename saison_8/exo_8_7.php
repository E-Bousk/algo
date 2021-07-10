<?php

if (isset($_POST["btn_php"]) and isset($_POST["iLigne"]) and  isset($_POST["iColonne"]))
{
   	//Creation du damier vide

	for ($i=0; $i<10; $i++)
	{
		for ($j=0; $j<10; $j++)
		{
			$aDamier[$i][$j]="<img src=\"../img/pionBlanc.png\">";
		}
	}

	// Ecrire "Indiquez la position"
	// Lire iLigne, iColonne
	$iLigne=$_POST["iLigne"];
	$iColonne=$_POST["iColonne"];

	//TANTQUE iLigne OU iColonne < 1 OU > 10
	if ($iLigne < 1 || $iLigne > 10 || $iColonne < 1 || $iColonne > 10)
	{
		// Ecrire "valeur incorrect, recommencez"
		$sMessage="valeur incorrect, recommencez";
		// Pour eviter erreur -Undefined variable-
		$sMessage2="";
	//FIN TANTQUE
	}

	// Sinon
	else
	{
		// pour faire un distingo entre valeurs tableau (0 à 9) et valeurs damier (1 à 10)
		$iLigneTab=$iLigne-1;
		$iColonneTab=$iColonne-1;

		// Positionner le pion dans le tableau à la case voulue
		$aDamier[$iLigneTab][$iColonneTab]="<img src=\"../img/pionNoir.png\">";
		$sMessage="Le pion se trouve à la position (ligne ".$iLigne.", colonne ".$iColonne.")";
		
		$bLigMsImp = false;
		$bColMsImp = false;
		$bLigPsImp = false;
		$bColPsImp = false;
		
		// Mouvements impossibles si pion au bords du tableau
		if ($iLigneTab == 0)
		{
			$bLigMsImp = true;
		}
		if ($iColonneTab == 0)
		{
			$bColMsImp = true;
		}
		if ($iLigneTab == 9)
		{
			$bLigPsImp = true;
		}
		if ($iColonneTab == 9)
		{
			$bColPsImp = true;
		}

		// Lire iMvt
		$iMvt=$_POST["iMvt"];
	
		// Si mouvement = haut gauche
		if ($iMvt == 0)
		{
			if ($bLigMsImp || $bColMsImp)
			{
				// Ecrire "mouvement impossible, recommencez"
				$sMessage="déplacement impossible, recommencez";
			}
			
			else
			{
				$aDamier[$iLigneTab][$iColonneTab]="<img src=\"../img/pionBlanc.png\">";
				$iLigneTab--;
				$iColonneTab--;
				$iLigne--;
				$iColonne--;
				$aDamier[$iLigneTab][$iColonneTab]="<img src=\"../img/pionNoir.png\">";
				$sMessage="Le pion se trouve à la position (ligne ".$iLigne.", colonne ".$iColonne.")";
			}
		//Fin SI
		}
		
		// Si mouvement = haut droite
		if ($iMvt == 1)
		{
			if ($bLigMsImp || $bColPsImp)
			{
				// Ecrire "mouvement impossible, recommencez"
				$sMessage="déplacement impossible, recommencez";
			}
			
			else
			{
				$aDamier[$iLigneTab][$iColonneTab]="<img src=\"../img/pionBlanc.png\">";
				$iLigneTab--;
				$iColonneTab++;
				$iLigne--;
				$iColonne++;
				$aDamier[$iLigneTab][$iColonneTab]="<img src=\"../img/pionNoir.png\">";
				$sMessage="Le pion se trouve à la position (ligne ".$iLigne.", colonne ".$iColonne.")";
			}
		//Fin SI
		}

		// Si mouvement = bas gauche
		if ($iMvt == 2)
		{
			if ($bLigPsImp || $bColMsImp)
			{
				// Ecrire "mouvement impossible, recommencez"
				$sMessage="déplacement impossible, recommencez";
			}
			
			else
			{
				$aDamier[$iLigneTab][$iColonneTab]="<img src=\"../img/pionBlanc.png\">";
				$iLigneTab++;
				$iColonneTab--;
				$iLigne++;
				$iColonne--;
				$aDamier[$iLigneTab][$iColonneTab]="<img src=\"../img/pionNoir.png\">";
				$sMessage="Le pion se trouve à la position (ligne ".$iLigne.", colonne ".$iColonne.")";
			}
		//Fin SI
		}

		// Si mouvement = bas droite
		if ($iMvt == 3)
		{
			if ($bLigPsImp || $bColPsImp)
			{
				// Ecrire "mouvement impossible, recommencez"
				$sMessage="déplacement impossible, recommencez";
			}
			
			else
			{
				$aDamier[$iLigneTab][$iColonneTab]="<img src=\"../img/pionBlanc.png\">";
				$iLigneTab++;
				$iColonneTab++;
				$iLigne++;
				$iColonne++;
				$aDamier[$iLigneTab][$iColonneTab]="<img src=\"../img/pionNoir.png\">";
				$sMessage="Le pion se trouve à la position (ligne ".$iLigne.", colonne ".$iColonne.")";
			}
		//Fin SI
		}

		// Génération du tableau à damier N&B
		$sHtml ="";
		//Pour a de 0 à 10
		for ($a = 0; $a < 10; $a++) 
		{
			$sHtml .= "<tr><td style=\"width:24px; \">" . ($a+1) . "</td>";

			//Pour b de 0 à 10
			for ($b = 0; $b < 10; $b++)
			{
				//Si a est paire et b aussi couleur noir
				if ($a % 2 == 0 && $b % 2 == 0)
				{
					$sHtml .= "<td style=\"background-color: black; width:43px; height: 45px;\">" . $aDamier[$a][$b] . "</td>";

				//SiNonSi a est impaire et b aussi couleur noir
				} else if (($a % 2 !== 0 && $b % 2 !== 0))
				{
					$sHtml .= "<td style=\"background-color: black; width:43px; height: 45px;\">" . $aDamier[$a][$b] . "</td>";
				} 

				//SiNon couleur blanc
				else 
				{
					$sHtml .= "<td style=\"background-color: white; width:43px; height: 45px;\">" . $aDamier[$a][$b] . "</td>";
				}
			//b Suivant	
			}

			$sHtml = $sHtml . "</tr>";

		//a Suivant 	
		}

		// Afficher tableau
		$sMessage2="<br><table><tr><td style=\"width:24px; \"></td><td style=\"width:43px;\">1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr></table>";
		$sMessage2.="<table>" . $sHtml . "</table><br>";

	//Fin SINON
	}
//Fin
}

else
{
    $sMessage= "";
	$sMessage2= "";
	$iLigne= "";
	$iColonne= "";
}

require "exo_8_7.html";

?>