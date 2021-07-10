<?php


if (isset($_POST["btn_php"]) and isset($_POST["iNbreDyn"]))
{
    // Lire combien de valeur à inserer
    $iNbreDyn=$_POST["iNbreDyn"];

    // Boucle de 1 à iNbreDyn
	for ($i=1; $i<=$iNbreDyn; $i++)
	{
		//récupère les valeurs des imputs
		$iNombre=$_POST["iNombre".$i];
		//Range les valeurs dans les indexes du tableau
		$aTab[$i-1]=$iNombre;
	}

    //Afficher le tableau non trié
    $sMessage="Tableau non trié : <br>". implode(" | ",$aTab)."<br><br>";

    
    //Boucle de 0 à longueur du tableau pour faire verifier dans l'index i
	for ($i=0; $i<count($aTab)-1; $i++)
	{
        //On marque la position du plus grand nombre ici
		$iPlusGrand = $i;
        
		//Boucle pour comparer les nombre suivant avec celui définit par i
		for ($j=$i+1; $j<count($aTab); $j++)
		{
			//si j (le nombre suivant) est plus grand que celui marqué alors
			if ($aTab[$j] > $aTab[$iPlusGrand])
			{
				//La position du plus grand devient celle-ci
				$iPlusGrand = $j;
			// Fin si
			}
		//j suivant
		}
		//On intervertit les positions
		$iTemp = $aTab[$iPlusGrand];
		$aTab[$iPlusGrand] = $aTab[$i];
		$aTab[$i] = $iTemp;
	// i suivant
	}
	
	//Afficher le tableau trié
    $sMessage.="Tableau trié : <br>". implode(" | ",$aTab)."<br><br>";
    
}

else
{
$sMessage= "";
}

require "exo_7_2_a.html";

?>