<?php
	$sMessage= "";


	if ((isset($_POST["iJour"])) && ($_POST["iAnnee"] != ""))
	{
		// Lire iJour
		$iJour= $_POST["iJour"] ;
		// Lire iMois
		$iMois= $_POST["iMois"] ;
		// Lire iAnnee
		$iAnnee= $_POST["iAnnee"] ;

		$bBis= $iAnnee%4===0 && $iAnnee%100!=0 || $iAnnee%400===0;        
		$bTrente=($iMois==="avr") || ($iMois==="jui") || ($iMois==="sep") || ($iMois==="nov");

		if (($iMois==="fev" && (($iJour>"28" && !$bBis) || $iJour>"29")) || ($iJour>"30" && $bTrente) || ($iJour>"31"))
	{
		$sMessage= "votre date est incorrect";
	}
		else 
		{
			$sMessage= "votre date est valide";
		}


	}



	
	require "exo_4_8.html";
?>