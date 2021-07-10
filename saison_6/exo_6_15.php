<?php
	$sMessage= "";
	
	//Début
	if (isset($_POST["iAge"]))
	{

        $TabExo15 = [20];
		$TabExo15[0] = 1000;
		
		// Pour i ← 1 à 20
		for ($i=1;$i<=20;$i++)
		{
			$TabExo15[$i] = $TabExo15[$i-1]*(1+2.75/100);
		// i suivant 
		}
        // Ecrire "Saisissez un âge pour voir la somme correspondante"
		// Lire iAge
		$iAge=$_POST["iAge"];
		// Ecrire "À " & iAge & " an(s), la somme sera de :" & Tab(iAge) & " €."
		$sMessage="À " . $iAge . " an(s), la somme sera de : " . number_format($TabExo15[$iAge], 2, ',', ' ') . " €.";
	//Fin
	} 

	require "exo_6_15.html";
?>