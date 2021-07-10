<?php
	$sMessage= "";


	// DEBUT
	if (isset($_POST["iNbre"]))
	{
		//Lire iNbre
		$iNbre= $_POST["iNbre"];

		//Pour iPlusdix = 1 à 10
		for ($i=1; $i<11; $i++)
		{
			$iNbre=$iNbre+1;
			//Ecrire "iNbre"
			$sMessage.=($iNbre.(($i!=10)?' / ':''));
		// iPlusdix Suivant		
		}
	//Fin	
	}

	require "exo_5_4.html";
?>