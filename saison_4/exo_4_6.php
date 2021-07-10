<?php
	$sMessage= "";

	// SI LE CHAMP iNombre EXISTE ALORS EXECUTE LE CODE PHP
	if ((isset($_POST["iCandidat1"])) && ($_POST["iCandidat2"] != ""))
	{
		
	//Ecrire "Entrez le score (en %) de premier tour du candidat # 1 : "
	//Lire iCandidat1
	$iCandidat1 = $_POST["iCandidat1"] ;
	//Ecrire "Entrez le score (en %) de premier tour du candidat # 2 : "
	// Lire iCandidat2
	$iCandidat2 = $_POST["iCandidat2"] ;
	// Ecrire "Entrez le score (en %) de premier tour du candidat # 3 : "
	// Lire iCandidat3
	$iCandidat3 = $_POST["iCandidat3"] ;
	// Ecrire "Entrez le score (en %) de premier tour du candidat # 4 : "
	// Lire iCandidat4
	$iCandidat4 = $_POST["iCandidat4"] ;

	$bBallotage = (($iCandidat1>=12.5) && ($iCandidat1<=50));
	
		
		//Si iCandidat1 <12.5
		if ($iCandidat1<12.5 || $iCandidat2>50 || $iCandidat3>50 || $iCandidat4>50)
		{
			//Ecrire "Le candidat # 1 est battu dès le premier tour"
			$sMessage= "Le candidat # 1 est battu dès le premier tour";
		}

		//Si iCandidat1 >50
		else if ($iCandidat1>50)
		{
			//Ecrire "Le candidat # 1 est élu au premier tour"
			$sMessage= "Le candidat # 1 est élu au premier tour";
		}

		//Si iCandidat1 &gt;=50 ET &lt;=12.5 OU &gt;iCandidat2 OU &gt;iCandidat3 OU &gt;iCandidat3
		else if (($bBallotage) && ($iCandidat1 > $iCandidat2) || ($bBallotage) && ($iCandidat1 > $iCandidat3) ||  ($bBallotage) && ($iCandidat1 > $iCandidat4))
		{
			//Ecrire "Le candidat # 1 est en ballotage favorable au second tour"
			$sMessage= "Le candidat # 1 est en ballotage favorable au second tour";
		}

		//SINON
		else
		{
			//Ecrire "Le candidat # 1 est en ballotage défavorable au second tour"
			$sMessage= "Le candidat # 1 est en ballotage défavorable au second tour";
		// FINSI
		}
	//FIN	
	}

	require "exo_4_6.html";
?>

