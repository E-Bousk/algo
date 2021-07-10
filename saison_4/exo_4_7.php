<?php
	$sMessage= "";



	// SI LE CHAMP iNombre EXISTE ALORS EXECUTE LE CODE PHP
	if ((isset($_POST["iConducteur"])) && ($_POST["iPermis"] != ""))
	{
		
	// Lire iConducteur
	$iConducteur = $_POST["iConducteur"] ;
	// Lire iPermis
	$iPermis = $_POST["iPermis"] ;
	// Lire iAccident
	$iAccident = $_POST["iAccident"] ;
	// Lire iFidelite
	$iFidelite = $_POST["iFidelite"] ;

	$bConducteur = $iConducteur>25;
	$bPermis = $iPermis>2;

	$sRouge = "rouge";
	$sOrange = "orange";
	$sVert = "vert";
	$sBleu = "bleu";
	
	if ($iFidelite >5)
	{	
		$sRouge= $sOrange;
		$sOrange= $sVert;
		$sVert= $sBleu;        
	}

	if((!$bConducteur && !$bPermis) && $iAccident==0 || ((!$bConducteur &&  $bPermis) || ($bConducteur &&  !$bPermis)) &&  $iAccident==1 || ($bConducteur && $bPermis) && $iAccident==2)
	{
		$sMessage= "La couleur de votre contrat : " . $sRouge;
	}

	else if (((!$bConducteur &&  $bPermis) || ($bConducteur &&  !$bPermis)) &&  $iAccident==0 || ($bConducteur && $bPermis) && $iAccident==1)
	{
		$sMessage= "La couleur de votre contrat : " . $sOrange;
	}

	else if (($bConducteur && $bPermis) && $iAccident==0)
	{
		$sMessage= "La couleur de votre contrat : " . $sVert;
	}

	else {
		$sMessage= "Nous ne pouvons pas vous assurer";
    }
//FIN	
}
	require "exo_4_7.html";
?>

