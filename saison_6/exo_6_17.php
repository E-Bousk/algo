<?php
	$sMessage= "";
	
	//Début
	if (isset($_POST["iNbre"]) and isset($_POST["iChaineTab"]) and isset($_POST["i"]) )
	{

		$aTab=[];
		//Lire $i
		$i=$_POST["i"];

		//Lire $TabInput (Récuperer les valeurs du tableau depuis HTML)
		$iChaineTab= $_POST["iChaineTab"];
		if ($iChaineTab !="")
		{
			//pour (re)créer tableau
			$aTab=explode(",",$iChaineTab);
		}

		//POUR i ← 0 à 99
		if ($i<=99)		
		{
			///Lire la valeur à inserer
			$iNbre=$_POST["iNbre"];
			// SI le tableau est vide...
			if (count($aTab)==0)
			{
				// alors la 1ere valeur prend la 1ere position (0)
				$aTab[0]=$iNbre;
			}
			//SINON, on crée un booléen pour chercher et marquer la position où il faut ranger la valeur
			else
			{
				//boucle = 0
				$j=0;
				// booléen pour marquer position = FAUX
				$bFlag=0;

				//TANT QU'on ne trouve pas la position (booléen FAUX) et j < nombre de position dans tableau
				while ($bFlag==0 && $j<count($aTab))
				{
					// (on teste) SI la valeur dans la position (i) est supérieure à la valeur qu'il faut ajouter
					if ($aTab[$j]>$iNbre)
					{
						//ALORS on marque la position
						$bFlag=1;
						$iPosition=$j;
					//FIN SI
					}
				// On incrémente la boucle
				$j++;
				//FIN de TANTQUE
			}
				// SI on ne trouve pas la position
				if ($bFlag==0)
				{
					//On place la valeur dans la dernière position du tableau
					$aTab[count($aTab)]=$iNbre;
				}
				//SINON
				else
				{
					//On boucle de la fin du tableau jusqu'a la position trouvée
					for ($k=count($aTab)-1; $k>=$iPosition; $k--)
					{
						$aTab[$k+1]=$aTab[$k];
					}
					//Puis on place la valeur ajoutée dans la position trouvée
					$aTab[$iPosition]=$iNbre;
				//FinSI
				}
			//Finsi
			}
			$i++;
		//FinSI
		}
		//Éclater les valeurs en lignes en les séparants par un « : » pour envoyer dans HTML
		$iChaineTab=implode(",", $aTab);

		$sMessage="Les valeurs sont :<br>";
        for ($i=0; $i<=count($aTab)-1; $i++)
        {
            $sMessage.="Position n° " . ($i+1) . " : " . $aTab[$i] . "<br>";
        }
	//FINSI
	}	

	else
	{
		$sMessage="";
		$iChaineTab="";
		$i=0;
	}

	require "exo_6_17.html";
?>