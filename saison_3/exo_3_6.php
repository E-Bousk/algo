<?php

	$sMessage= "";


	// SI LE CHAMP iNombre EXISTE ALORS EXECUTE LE CODE PHP
	if (isset($_POST["iAge"]))
	{
		//Ecrire "Entrez le 1er nombre :"
		//Lire iAge 
		$iAge = intval($_POST["iAge"]);

		$bA= ($iAge < 6);
		$bB= (($iAge == 6) || ($iAge == 7));
		$bC= (($iAge == 8) || ($iAge == 9));
		$bD= (($iAge == 10) || ($iAge == 11));


		//SI $bA
		if ($bA)
		{
			//Ecrire "Tu es trop jeune pour jouer en club"
			$sMessage= "<b>Tu es trop jeune pour jouer en club</b>";
		}
		//SINON SI 
		else if ($bB)
		{
			//Ecrire "Ta catégorie est : Poussin"
			$sMessage= "<b>Ta catégorie est : Poussin</b>";
		}
		//SINON SI 
		else if ($bC)
		{
			 //Ecrire "Ta catégorie est : Pupille"
			$sMessage= "<b>Ta catégorie est : Pupille</b>";
		}
		//SINON SI
		else if ($bD)
		{
			 //Ecrire "Ta catégorie est : Minime"
			$sMessage= "<b>Ta catégorie est : Minime</b>";
		}
		//SINON
		else
		{
			//Ecrire "Ta catégorie est : Cadet"
			$sMessage= "<b>Ta catégorie est : Cadet</b>";
			
		// FINSI
		}
	//FIN	
	}

	require "exo_3_6.html";
?>

