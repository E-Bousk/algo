<?php
	$sMessage= "";

	// SI LE CHAMP iNombre EXISTE ALORS EXECUTE LE CODE PHP
	if (isset($_POST["iNombre1"]))
	{
		// ECRIRE "Entrez un nombre :"
		// LIRE iNombre1
		$iNombre1= $_POST["iNombre1"];
		$iNombre2= $_POST["iNombre2"];
		
		// SI iNombre >= 0 ALORS
		if ($iNombre1 >=0 && $iNombre2 >=0 || $iNombre1 <=0 && $iNombre2 <=0)
		{
			// ECRIRE "Votre nombre est positif"
			$sMessage= "<b>Leur produit est positif</b>";
		}
		// SINON
		else
		{
			// ECRIRE "Leur produit est négatif"
			$sMessage= "<span style='color: red'>Votre nombre est négatif</span>";
		// FINSI
		}
	}

	require "exo_3_2.html";
?>