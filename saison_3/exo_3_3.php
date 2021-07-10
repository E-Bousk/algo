<?php
	$sMessage= "";

	// SI LE CHAMP iNombre EXISTE ALORS EXECUTE LE CODE PHP
	if (isset($_POST["sNom1"]))
	{
		// ECRIRE "Entrez le 1er nom :"
		// LIRE sNom1
		$sNom1= $_POST["sNom1"];
		$sNom2= $_POST["sNom2"];
		$sNom3= $_POST["sNom3"];
		
		//SI sLettreNom1 < sLettreNom2 ET sLettreNom2 < sLettreNom3
		if (($sNom1 < $sNom2) && ($sNom2 < $sNom3))
		{
			//Ecrire "Ils sont rangés par ordre alphabétique"
			$sMessage= "<b>Ils sont rangés par ordre alphabétique</b>";
		}
		// SINON
		else
		{
			//Ecrire "Ils ne sont pas rangés par ordre alphabétique"
			$sMessage= "<span style='color: red'>Ils ne sont pas rangés par ordre alphabétique</span>";
		// FINSI
		}
	}

	require "exo_3_3.html";

?>