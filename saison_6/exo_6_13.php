<?php
	$sMessage= "";
	
	//Début
	if (isset($_POST["iNbreDyn"]))
	{
		// Recuperer les nombre de valeur(s) à inserer
		$iNbreDyn=$_POST["iNbreDyn"];
		// Definir la taille du tableau en fonction du nombre de valeur(s) récuprée(s)
		$TabExo13=[$iNbreDyn];
		// Récuperation des valeurs à inserer dans le tableau
		for ($iv=0;$iv<$iNbreDyn;$iv++)
		{
			// Lire Tab(x)
			$TabExo13[$iv]=$_POST["iNombre".($iv+1)];
		}

		$iGreatest = "";
		
		// Pour i ← 0 à x-1
		for ($i=0;$i<$iNbreDyn;$i++)
		{
			// Si Tab(i)>iGreatest ou 1er nombre comparé Alors
			if ($TabExo13[$i]>$iGreatest || $iGreatest === "")
			{
				// iGreatest ← Tab(i)
				$iGreatest = $TabExo13[$i];
				$iPosition = $i;
			// finSI
			}
		// i suivant 
		}
		$sMessage.="La plus grande valeur est : " . $iGreatest . "<br> en position numero " . ($iPosition+1);
	//Fin
	} 

	require "exo_6_13.html";
?>