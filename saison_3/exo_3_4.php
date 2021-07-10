<?php
	$sMessage= "";

	// SI LE CHAMP iNombre EXISTE ALORS EXECUTE LE CODE PHP
	if (isset($_POST["iNombre"]))
	{
		// ECRIRE "entrez un nombre"
		// LIRE iNombre
		$iNombre= $_POST["iNombre"];
		$bZero=$iNombre==0;
		$bNegatif=$iNombre<0;
		
		//SI iNombre =0
		if ($bZero)
		{
			//Ecrire "Ce nombre vaut zéro"
			$sMessage= "<b>Ce nombre vaut zéro</b>";
		}
		//SINON SI iNombre <0
		else if ($bNegatif)
		{
			//Ecrire "Ce nombre est négatif"
			$sMessage= "<span style='color: red'>Ce nombre est négatif</span>";
		}
		//SINON
		else
		{
			//Ecrire "Ce nombre est positif"
			$sMessage= "Ce nombre est positif";
			
		// FINSI
		}
	//FIN	
	}

	require "exo_3_4.html";
?>