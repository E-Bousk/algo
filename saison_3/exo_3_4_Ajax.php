<?php

	// ALGORITHME Exo_3_4 PHP
	
	// SI LE CHAMP iNombre EXISTE ET QU'IL N'EST PAS VIDE ALORS EXECUTE LE CODE PHP
	if (isset($_POST["iNombre"]) && $_POST["iNombre"] !=="")
    {

		// indique pas d'erreur
		$array_res[0] = array(
			'error' => 0
		);

		// LIRE iNombre
		$iNombre= $_POST["iNombre"];
		$bZero=$iNombre==0;
		$bNegatif=$iNombre<0;
		
		
		//SI iNombre =0
		if ($bZero)
		{
			//Ecrire "Ce nombre vaut zéro"
			$array_res[1]= array(
				'resultat' => 0
			);
		}
		//SINON SI iNombre <0
		else if ($bNegatif)
		{
			//Ecrire "Ce nombre est négatif"
			$array_res[1]= array(
				'resultat' => -1
			);
		}
		//SINON
		else
		{
			//Ecrire "Ce nombre est positif"
			$array_res[1]= array(
				'resultat' => 1
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