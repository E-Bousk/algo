<?php
	//Début
	// pour ne pas afficher le resultat avant d'avoir cliqué sur boutton
	if (isset($_POST["btn_php"]))
	{
		// Pour pouvoir concaténer les messages suivants
		$sMessage= "";
		$Tab = [];
		//Pour i ← 0 à 6
		for ($i=0;$i<=6;$i++)
		{
			$Tab[$i] = 0;
			//Ecrire "Tableau de" & i & Tab
			$sMessage.="Valeur " . $i . " du tableau : " . $Tab[$i] . "<br>";
		}
	//Fin
	} 
	else
	{
		$sMessage= "";
	}
	require "exo_6_1.html";
?>