<?php
	$sMessage= "";

	// DEBUT
	if (isset($_POST["iNbre"]))
	{
		//Lire iNbre
		$iNbre= $_POST["iNbre"];
		$iFact=1;
		
		if ($iNbre>=0 && $iNbre<=170)
		{
			//Pour i = 1 à iNbre
			for ($i=1; $i<=$iNbre; $i++)
			{
				$iFact = $iFact*$i;
			// i Suivant	
			}
			// Ecrire "La factorielle de " & iNbre & " est : " & iFact
			$sMessage=("La factorielle de " . $iNbre . " est : " . $iFact);
		}	
		else if ($iNbre>170)
		{
			// Ecrire "La factorielle de "  & iNbre &  " est : une INFINITÉ !!"
			$sMessage=("La factorielle de "  . $iNbre .  " est : une INFINITÉ !!");
		}

		else
		{
			//Ecrire "La factorielle n'est définie que sur les entiers positifs"
			$sMessage=("La factorielle n'est définie que sur les entiers positifs");
		}
		
	//Fin	
	}	

	require "exo_5_7.html";
?>