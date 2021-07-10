<?php
	$sMessage= "";
	
	//Début
	// pour ne pas afficher le resultat avant d'avoir cliqué sur boutton
	if (isset($_POST["btn_php"]))
	{
		$TabExo11_1 = [4, 8, 7, 12];
		$TabExo11_2 = [3, 6];
		$iTotal = 0;
		$i=0;
		
		for ($i;$i<=3;$i++)
		{
			$j = 0;
			for ($j;$j<=1;$j++)
			{
				$iTotal = $iTotal+($TabExo11_1[$i]*$TabExo11_2[$j]);
			}
		}
		$sMessage.="Le total du calcul demandé est de : " . $iTotal;
	//Fin
	} 

	require "exo_6_11.html";
?>