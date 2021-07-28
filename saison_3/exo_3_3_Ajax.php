<?php

	// ALGORITHME Exo_3_3 PHP
	
	// SI LES CHAMPS EXISTENT ET QU'ILS NE SONT PAS VIDES ALORS EXECUTE LE CODE PHP
    if ((isset($_POST["sNom1"]) && $_POST["sNom1"] !== "") 
    	&& (isset($_POST["sNom2"]) && $_POST["sNom2"] !== "") 
    	&& (isset($_POST["sNom3"]) && $_POST["sNom3"] !== ""))
	{

		// indique pas d'erreur
		$array_res[0] = array(
			'error' => 0
		);

        // LIRE sNom1, sNom2, sNom3
		$sNom1= $_POST["sNom1"];
		$sNom2= $_POST["sNom2"];
		$sNom3= $_POST["sNom3"];
		
		
		//SI sLettreNom1 < sLettreNom2 ET sLettreNom2 < sLettreNom3
		if (($sNom1 < $sNom2) && ($sNom2 < $sNom3))
		{
			//Ecrire "Ils sont rangés par ordre alphabétique"
			$array_res[1]= array(
				'resultat' => '1'
			);
		}
		// SINON
		else
		{
			//Ecrire "Ils ne sont pas rangés par ordre alphabétique"
			$array_res[1]= array(
				'resultat' => '0'
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