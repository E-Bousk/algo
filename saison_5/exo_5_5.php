<?php
	$sMessage= "";

	// DEBUT
	if (isset($_POST["iNbre"]))
	{
		//Lire iNbre
		$iNbre= $_POST["iNbre"];
		$sMessage.=("La table de " . $iNbre . " est :<br>");
		//Pour i = 1 à 10
		for ($i=1; $i<11; $i++)
		{
			$iResult=$iNbre*$i;
			//Ecrire "iNbre"
			$sMessage.=($iNbre . " X " . $i . " = " . $iResult . "<br>");
		// i Suivant		
		}
	//Fin	
	}

	require "exo_5_5.html";
?>