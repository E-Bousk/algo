<?php

if (isset($_POST["btn_php"]))
{

    $aTabA=[1,18,25,26,27,263,299,401];
	$aTabB=[0,9,22,46,222,500];
	$aTabC=[];
	$iTailleTabC=count($aTabA)+count($aTabB);
	$i=0;
	$j=0;
	$bFinTabA=false;
	$bFinTabB=false;
	//TANT QUE la taille du nouveau tableau est inférieur à la somme des deux tableaux à fusionner
	//(c'est que le tableau C n'est pas entièrement rempli)
	while (count($aTabC)<$iTailleTabC)
	{	

		// TANT QUE la valeur i du tableau A est plus petite que celle de j du tableau B
		// ET que le tableau A n'est pas fini
		// OU
		// TANT QUE le tableau C n'est pas entièrement rempli
		// ET que le tableau B est fini
		while (($aTabA[$i] <= $aTabB[$j] && $bFinTabA===false) || (count($aTabC)<$iTailleTabC && $bFinTabB===true))
		{	
			//inserer la  valeur i du tableau A dans tableau C
			array_push($aTabC,$aTabA[$i]);
			//i suivant
			$i++;

			// Si i égal taille du tableau
			if ($i===count($aTabA))
			{
				// i devient dernier index du tableau
				$i=count($aTabA)-1;
				// booléen VRAI pour indiquer qu'il n'y a plus de valeur à récuperer
				$bFinTabA = true;
			//FINSI
			}
		//FIN TANTQUE
		}

		// TANT QUE la valeur j du tableau b est plus petite que celle de i du tableau A
		// ET que le tableau B n'est pas fini
		// OU
		// TANT QUE le tableau C n'est pas entièrement rempli
		// ET que le tableau A est fini
		while (($aTabB[$j] <= $aTabA[$i]  && $bFinTabB===false) || (count($aTabC)<$iTailleTabC && $bFinTabA===true))
		{	
			//inserer la  valeur j du tableau B dans tableau C
			// $aTabC.push($aTabB[$j]);
            array_push($aTabC,$aTabB[$j]);
			//j suivant
			$j++;

			// Si j égal taille du tableau
			if ($j===count($aTabB))
			{
				// j devient dernier index du tableau
				$j=count($aTabB)-1;
				// booléen VRAI pour indiquer qu'il n'y a plus de valeur à récuperer
				$bFinTabB = true;
			//FINSI
			}
		//FIN TANTQUE
		}
	//FIN TANTQUE
	}

	//Affichage des tableaux à fusionner
	$sMessage="Tableau 1 : <br>". implode(" | ", $aTabA)."<br><br>";
	$sMessage.="Tableau 2 : <br>". implode(" | ", $aTabB)."<br><br>";
	//Affichage du nouveau tableau fusionné
	$sMessage.="Tableau fusionné : <br>". implode(" | ", $aTabC);
//FIN
}

else
{
    $sMessage= "";
}

require "exo_7_7.html";

?>