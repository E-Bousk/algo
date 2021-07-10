<?php
	$sMessage= "";

	// var_dump($_POST);
	
	// DEBUT
	if (isset($_POST["iNbre"]) and isset($_POST["iCompteur"]) and isset($_POST["iGreatest"]))
	{	
		//Lire $iNbre
		$iNbre=$_POST["iNbre"];
		//Lire $iCompteur
		$iCompteur=$_POST["iCompteur"];
		//Lire $iGreatest
		$iGreatest=$_POST["iGreatest"];
		//Lire $iGreatest
		$iPosition=$_POST["iPosition"];

		// if ($iCompteur == 0) 
		// {
		// 	$iCompteur = 1;
		// }

		if ($iCompteur < 21)
		{
			if ($iNbre > $iGreatest)
			{
				$iGreatest = $iNbre;
				$iPosition = $iCompteur;
			}

			$sCompteur=("Saisie n° " . ($iCompteur+1) . " (sur 20)");
			$sMessage=("Saisie n° $iCompteur (nombre : $iNbre) bien prise en compte");
			
			$iCompteur = $iCompteur + 1;

			if ($iCompteur > 20)
			{
				//Pour ne pas afficher "saisie n° 21" mais "Cliquez pour obtenir le résultat"
				$sCompteur=("Cliquez pour obtenir le résultat");
			}		
		}
		else 
		{	
			//Effacer la ligne
			$sCompteur=("");
			//Ecrire "Le plus grand de ces nombres est : " & iGreatest
			$sMessage=("Le plus grand de ces nombres est : " . $iGreatest . "<br> Ce nombre a été saisie à la position : " . $iPosition);
		}
	}

	else
	{
		$iGreatest = "";
		$iCompteur = 1;
		$iPosition = 1;
		$sCompteur=("<br><br>Saisie n° " . $iCompteur . " (sur 20)");
	//Fin Sinon
	}
	require "exo_5_8_b.html";
?>