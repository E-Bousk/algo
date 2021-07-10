<?php
	// ALGORITHME Exo_3_1 PHP
	

	$sMessage= "";
	
	// SI LE CHAMP iNombre EXISTE ALORS EXECUTE LE CODE PHP
	if (isset($_POST["iNombre"]))
	{
		// VARIABLE iNombre en NUMERIQUE
		// INUTILE, ON NE DECLARE PAS LES VARIABLES.
		// var iNombre;
		
		// ECRIRE "Entrez un nombre :"
		// LIRE iNombre
		$iNombre= $_POST["iNombre"];
		
		
		// SI iNombre >= 0 ALORS
		if ($iNombre >= 0)
		{
			// ECRIRE "Votre nombre est positif"
			$sMessage= "<b>PHP Votre nombre est positif</b>";
		}
		// SINON
		else
		{
			// ECRIRE "Votre nombre est négatif"
			$sMessage= "<span style='color: red'>PHP Votre nombre est négatif</span>";
		// FINSI
		}
	}


	require "exo_3_1.html";
?>