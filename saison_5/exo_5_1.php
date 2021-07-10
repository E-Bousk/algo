<?php
	$sMessage= "";


	// DEBUT
	if (isset($_POST["iNum"]))
	{
		//Lire iNum
		$iNum= $_POST["iNum"] ;

		//TantQue iNum<1 OU iNum>3
		if (($iNum<1) || ($iNum>3))
		{
			//Ecrire "ce nombre n'est pas compris entre 1 et 3"
			$sMessage="<span style='color: red'>Ce nombre n'est pas compris entre 1 et 3</span>";
		// Fin TantQue	
		}
		else
		{
			//Ecrire : "C'est tout bon !"
			$sMessage="C'est tout bon !";
		//Fin SINON
		}
	//Fin	
	}

	require "exo_5_1.html";
?>