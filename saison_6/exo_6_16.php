<?php
	$sMessage= "";
	
	//Début
	if (isset($_POST["btn_php"]))
	{

        $TabExo16 = [99];
	
		
		// Pour i ← 1 à 99
		for ($i=0;$i<=99;$i++)
		{
			$TabExo16[$i] = rand(0, 999);
			// $TabExo16[$i] = $i + 1;
		// i suivant 
		}		$bVrai_Faux = true;

		// Pour i ← 1 à 99
		for ($i=0;$i<99;$i++)
		{
			if ($TabExo16[$i] > $TabExo16[$i+1])
			{
				$bVrai_Faux = false;
			}
		// i suivant 
		}

		//Afficher le tableau
		$sMessage="Tableau : <br>". implode(" | ",$TabExo16)."<br><br>";

		if ($bVrai_Faux==true)
	{
		// Ecrire "Les entiers sont consécutifs"
		$sMessage.="Les entiers sont consécutifs";
	}

	else
	{
		// Ecrire "Les entiers ne sont pas consécutifs"
		$sMessage.="Les entiers ne sont pas consécutifs";
	}
	//Fin
	} 

	require "exo_6_16.html";
?>