<?php
	$sMessage= "";


	// DEBUT
	if (isset($_POST["iNbre"]))
	{
		//Lire iNbre
		$iNbre= $_POST["iNbre"];
		$iPlusdix=$iNbre+10;

		//TantQue iNbre <> iPlusdix Alors
		while ($iNbre != $iPlusdix)
		{
			$iNbre=$iNbre+1;
			//Ecrire "iNbre"
			$sMessage.=($iNbre." - ");
		// FinTantQue		
		}
	//Fin	
	}

	require "exo_5_3.html";
?>