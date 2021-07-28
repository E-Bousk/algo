<?php

	// ALGORITHME Exo_3_1 PHP
	
	// SI LE CHAMP iNombre EXISTE ET QU'IL N'EST PAS VIDE ALORS EXECUTE LE CODE PHP
	if (isset($_POST["iNombre"]) && $_POST["iNombre"] !=="")
	{

		// indique pas d'erreur
		$array_res[0] = array(
			'error' => 0
		);

		// ECRIRE "Entrez un nombre :"
		// LIRE iNombre
		$iNombre= $_POST["iNombre"];
		
		
		// SI iNombre >= 0 ALORS
		if ($iNombre >= 0)
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