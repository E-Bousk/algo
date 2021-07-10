<?php

require "exo_7_5_dico.php"; 


if (isset($_POST["btn_php"]) and isset($_POST["sMot"]))
{
    // Lire sMot
    $sMot=$_POST["sMot"];
	// Convertir en MAJUSCULE pour chercher dans dico sans erreur calcul ASCII*
	$sMotUpperCased = strtoupper($sMot);
    // booléen mot trouvé égal FAUX
    $bFlag = false;
    // limite haute égale dernier index
    $iLimiteHaute=$_POST["iLimiteHaute"];
    //limite basse égale index 0
    $iLimiteBasse= $_POST["iLimiteBasse"];

    //Tant que le mot n'est pas trouvé et que la limite basse <= limite haute
	while (!$bFlag && $iLimiteBasse <= $iLimiteHaute)
	{
		// iMilieu = (iLimiteHaute + iLimiteBasse)/2 arondi au supérieur
		$iMilieu = round(($iLimiteHaute+$iLimiteBasse)/2);
		//Si valeur du mot > celle dans index milieu
		if ($sMotUpperCased > strtoupper($aDico[$iMilieu]))
		{
			// iLimiteBasse devient ce milieu +1
			$iLimiteBasse=$iMilieu+1;
		}
		//Sinon Si valeur du mot < celle dans index milieu
		else if ($sMotUpperCased < strtoupper($aDico[$iMilieu]))

		{
			// iLimiteHaute devient ce milieu -1
			$iLimiteHaute=$iMilieu-1;
		}
		//Sinon, mot trouvé donc booléen égal VRAI
		else 
		{
			$bFlag = true;
		}
    //FIN TANTQUE
	}
    //Si booléen égal VRAI ecrire "Mot trouvé dans l'index " & iMilieu
    if ($bFlag)
    {
        $sMessage="Mot trouvé dans l'index ".$iMilieu;
		$iLimiteHaute=count($aDico)-1;
		$iLimiteBasse=0;
		$iMilieu=0;
    }
    //Sinon ecrire "Mot introuvable"
    else
    {
        $sMessage="Mot introuvable";
		$iLimiteHaute=count($aDico)-1;
		$iLimiteBasse=0;
		$iMilieu=0;
    }

	//Pour vérifier
	if (in_array($sMot, $aDico))
	{
		$sMessage.="<br><br>(VERIFICATION : Il y a bien le mot « $sMot »)";
	}
	else
	{
		$sMessage.="<br><br>(VERIFICATION : Il n'y a pas le mot « $sMot »)";
	}
//FIN
}
else
{
    $sMessage= "";
    $iLimiteHaute=count($aDico)-1;
    $iLimiteBasse=0;
    $iMilieu=0;
}

require "exo_7_5.html";

?>