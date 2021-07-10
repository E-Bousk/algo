<?php
	$sMessage= "";
	
	//Début
	// pour ne pas afficher le resultat avant d'avoir cliqué sur boutton
	if (isset($_POST["btn_php"]))
	{
		$Tab = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
		$iTotal = 0;
		$i=0;
		//Pour i ← 0 à 6
		for ($i;$i<=9;$i++)
		{
			$iTotal = $iTotal+$Tab[$i];	
		}
		$sMessage="Le total des valeurs est de : "	. $iTotal;
	//Fin
	} 

	require "exo_6_9.html";
?>