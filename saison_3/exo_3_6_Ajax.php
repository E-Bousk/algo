<?php

	// ALGORITHME Exo_3_5 PHP
	
    // SI LE CHAMP iNombre1 et iNombre2 EXISTENT ET QU'ILS NE SONT PAS VIDES ALORS EXECUTE LE CODE PHP
	if ((isset($_POST["iAge"]) && $_POST["iAge"] !==""))
	{

		// indique pas d'erreur
		$array_res[0] = array(
			'error' => 0
		);

		//Lire iAge 
		$iAge = intval($_POST["iAge"]);

        switch ($iAge) {
            case $iAge < 6:
                //Envoyer "1" dans tableau de resultat
				$array_res[1]= array(
					'resultat' => 1
				);;
                break;
            case ($iAge === 6) || ($iAge === 7):
                //Envoyer "2" dans tableau de resultat
				$array_res[1]= array(
					'resultat' => 2
				);;
				break;
            case ($iAge == 8) || ($iAge == 9):
                //Envoyer "3" dans tableau de resultat
				$array_res[1]= array(
					'resultat' => 3
				);;
                break;
			case ($iAge == 10) || ($iAge == 11):
                //Envoyer "4" dans tableau de resultat
				$array_res[1]= array(
					'resultat' => 4
				);;
				break;
			default:
                //Envoyer "5" dans tableau de resultat
				$array_res[1]= array(
					'resultat' => 5
				);;
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