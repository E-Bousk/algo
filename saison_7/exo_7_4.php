<?php


if (isset($_POST["btn_php"]) and isset($_POST["iNbre"]))
{
    //Création d'un tableau de 11 entrées
	$aTab = [11];
	// Pour i de 0 à 10
	for ($i=0;$i<=10;$i++)
	{
		// Remplissage du tableau de 0 à 10
		$aTab[$i]=$i;
	// i suivant 
	}

	//affichage tableau original
	$sMessage="Tableau original :<br>". implode(" | ",$aTab)."<br><br>";

    //Lire iNbre (index de l'élément à supprimer)
    $iNbre=$_POST["iNbre"];

    //pour ne pas accepter une valeur plus grande que le tableau
    // SI iNbre <0 ou iNbre > 10 ALORS
    if ($iNbre <0 || $iNbre > 10)
    {
        //Ecrire "Pas plus de 10. Merci"
        $sMessage.="Votre demande n'est pas comprise entre 0 et 10<br>Veuillez recommencer !";
    //Fin SI
    }
    //SINON
    else
	{
		//boucle de l'index choisi à la fin du tableau
		for ($i=$iNbre; $i<count($aTab)-1;$i++)
		{	
			//déplace les éléments d'un index depuis celui choisi
			$aTab[$i]=$aTab[$i+1];
		//Fin de la boucle
		}

        //Ecrire l'indice a effacer
        $sMessage.="Indice à effacer : $iNbre <br><br>";
		//redimension du tableau (supprime le dernier index)
		array_splice($aTab, -1);
		//affichage du tableau modifié
		$sMessage.="Tableau modifié :<br>". implode(" | ",$aTab);
	//Fin SINON	
	}
//Fin 
}

else
{
    $sMessage= "";
}
require "exo_7_4.html";

?>