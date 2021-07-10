<?php
	$sMessage= "";

	// var_dump($_POST);
	
	// DEBUT
	if (isset($_POST["iNbre"]) and isset($_POST["iComptMax"]) and isset($_POST["iGreatest"]))
	{	
		//Lire $iNbre
		$iNbre=$_POST["iNbre"];
		//Lire $iComptMax
		$iComptMax=$_POST["iComptMax"];
		//Lire $iGreatest
		$iGreatest=$_POST["iGreatest"];

		if ($iComptMax < 21)
		{
			if ($iNbre > $iGreatest)
			{
				$iGreatest = $iNbre;
			}

			$sCompteur=("Saisie n° " . ($iComptMax+1) . " (sur 20)");
			$sMessage=("Saisie n° " . $iComptMax . " bien prise en compte");
			
			$iComptMax = $iComptMax + 1;
		

			if ($iComptMax > 20)
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
			$sMessage=("Le plus grand de ces nombres est : $iGreatest ");
		}
	}

	else
    {
        $iGreatest = "";
		$iComptMax = 1;
		$sCompteur=("<br><br>Saisie n° " . $iComptMax . " (sur 20)");
    //Fin Sinon
    }

	require "exo_5_8_a.html";
?>