<?php

	// ALGORITHME Exo_3_1 PHP
	
	// SI LE CHAMP iNombre1 et iNombre2 EXISTENT ET QU'ILS NE SONT PAS VIDES ALORS EXECUTE LE CODE PHP
	if ((isset($_POST["iNombre1"]) && $_POST["iNombre1"] !=="") && (isset($_POST["iNombre2"]) && $_POST["iNombre2"] !==""))
	{

		// indique pas d'erreur
		$array_res[0] = array(
			'error' => 0
		);

        // ECRIRE "Entrez un nombre :"
        // LIRE iNombre1
        $iNombre1= $_POST["iNombre1"];
        $iNombre2= $_POST["iNombre2"];
		
		
		// SI iNombre >= 0 ALORS
		if ($iNombre1 >=0 && $iNombre2 >=0 || $iNombre1 <=0 && $iNombre2 <=0)
		{
			// ECRIRE "Votre nombre est positif"
			$array_res[1]= array(
				'resultat' => 'positif'
			);
		}
		// SINON
		else
		{
			// ECRIRE "Votre nombre est négatif"
			$array_res[1]= array(
				'resultat' => 'negatif'
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