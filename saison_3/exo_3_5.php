<?php
	$sMessage= "";


	// SI LE CHAMP iNombre EXISTE ALORS EXECUTE LE CODE PHP
	if (isset($_POST["iNombre1"]))
	{
		//Ecrire "Entrez le 1er nombre :"
		//Lire iNombre1
		$iNombre1= $_POST["iNombre1"];
		//Ecrire "Entrez le 2nd nombre :"
		//Lire iNombre2
		$iNombre2= $_POST["iNombre2"];
		
		//SI (iNombre1 >0 ET iNombre2 >0) ou (iNombre1 <0 ET iNombre2 <0)
		if ($iNombre1 >0 && $iNombre2 >0 || $iNombre1 <0 && $iNombre2 <0)
		{
			//Ecrire "Leur produit est positif"
			$sMessage= "<b>Leur produit est positif</b>";
		}
		//SINON SI 
		else if ($iNombre1 !=0 && $iNombre2 !=0)
		{
			//Ecrire "Ce nombre est négatif"
			$sMessage= "<span style='color: red'>Ce nombre est négatif</span>";
		}
		//SINON
		else
		{
			//Ecrire "Leur produit est nul""
			$sMessage= "Leur produit est nul";
			
		// FINSI
		}
	//FIN	
	}

	require "exo_3_5.html";
?>