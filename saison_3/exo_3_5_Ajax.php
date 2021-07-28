<?php

	// ALGORITHME Exo_3_5 PHP
	
// SI LE CHAMP iNombre1 et iNombre2 EXISTENT ET QU'ILS NE SONT PAS VIDES ALORS EXECUTE LE CODE PHP
if ((isset($_POST["iNombre1"]) && $_POST["iNombre1"] !=="") && (isset($_POST["iNombre2"]) && $_POST["iNombre2"] !==""))
{

	// indique pas d'erreur
	$array_res[0] = array(
		'error' => 0
	);

	//Lire iNombre1
	$iNombre1= $_POST["iNombre1"];
	//Lire iNombre2
	$iNombre2= $_POST["iNombre2"];
	
	
	//SI (iNombre1 >0 ET iNombre2 >0) ou (iNombre1 <0 ET iNombre2 <0)
	if ($iNombre1 >0 && $iNombre2 >0 || $iNombre1 <0 && $iNombre2 <0)
	{
		//Ecrire "Leur produit est positif"
		$array_res[1]= array(
			'resultat' => 1
		);
	}
	//SINON SI 
	else if ($iNombre1 !=0 && $iNombre2 !=0)
	{
		//Ecrire "Ce nombre est négatif"
		$array_res[1]= array(
			'resultat' => -1
		);
	}
	//SINON
	else
	{
		//Ecrire "Leur produit est nul"
		$array_res[1]= array(
			'resultat' => 0
		);			
	// FINSI
	}

	echo json_encode($array_res);
}

// sinon (s'il manque un(des) champ(s) et/ou pas reçu(s))
else
{
	// indique erreur
	$array_res[0] = array(
		'error' => 1
	);

	// renvoie à la page JS le tableau avec erreur=1
	echo json_encode ($array_res);
}

?>