<?php
	$sMessage= "";
	$sCompteur= "";

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

		if ($iNbre == 0)
		{	
			//Effacer la ligne
			$sCompteur=("");
			//Ecrire "Le plus grand de ces nombres est : " & iGreatest
			$sMessage=("Le plus grand de ces nombres est : " . $iGreatest . "<br> Ce nombre a été saisie à la position : " . $iPosition);
		}

		else
		{	
			if ($iNbre > $iGreatest)
			{
				$iGreatest = $iNbre;
				$iPosition = $iCompteur;
			}
	
			$sCompteur=("Saisie n° " . ($iCompteur+1));
			$sMessage=("Saisie n° $iCompteur (nombre : $iNbre) bien prise en compte");

			$iCompteur++;
		}
	}

	else
	{
		$iGreatest = "";
		$iCompteur = 1;
		$iPosition = 0;
		$sCompteur=("<br><br>Saisie n° " . $iCompteur);
	//Fin Sinon
	}

	require "exo_5_9.html";
?>