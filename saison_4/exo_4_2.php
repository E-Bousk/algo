<?php
	$sMessage= "";


	// SI LE CHAMP iNombre EXISTE ALORS EXECUTE LE CODE PHP
	if (isset($_POST["iHeures"]))
	{
		//Ecrire "Entrez l'heure actuelle :"
    	//Lire iHeures
		$iHeures= intval($_POST["iHeures"]) ;
		//Ecrire "Entrez les minutes :"
    	//Lire iMinutes
		$iMinutes= intval($_POST["iMinutes"]);

		$iMinutes++;
		
		//Si iMinutes=60 alors
		if ($iHeures!=23 & $iMinutes==60)
		{
			$iHeures++;
			$iMinutes=00;
			//Ecrire "Dans une minute, il sera " + iHeure + " heure(s) " + iMinutes
			$sMessage= "Dans une minute, il sera " . $iHeures . " heure(s) " . $iMinutes;
		}

		//SINON SI iHeures=23 ET iMinutes=60 alors 
		else if ($iHeures==23 & $iMinutes==60)
		{
			//Ecrire "Dans une minute, il sera 00 heure 00"
			$sMessage= "Dans une minute, il sera 00 heure 00";
		}

		//SINON
		else
		{
			///Ecrire "Dans une minute, il sera " + iHeure + " heure(s) " + iMinutes
			$sMessage= "Dans une minute, il sera " . $iHeures . " heure(s) " . $iMinutes;
			
		// FINSI
		}
	//FIN	
	}


	require "exo_4_2.html";
?>

