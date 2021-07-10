<?php
	$sMessage= "";
	$sTotal= "";
	$iTotalPrix="";

	// DEBUT
	if (isset($_POST["iNbreSaisiePrix"]))
	{
		$iB10=0;
		$iB5=0;

		//Lire iTotalPrix
		$iTotalPrix= 0;

		// je boucle de 1 à nombre_de_champs, et pour cela j'ai le nombre dans ma saisie "nombre de prix à saisir"
		for ($i=1; $i<=$iNbre=$_POST["iNbreSaisiePrix"]; $i++)
		{
			/*
				je récupére les valeurs de tous mes champs iNombre1, iNombre2, iNombre3
				Qui revient à faire iNombre+i à chaque tour
				Je cumule pour en avoir la somme
			*/
			$iTotalPrix += $_POST["iNombre".$i];
		}
		// Ecrire total prix
		$sTotal="Le montant total s'élève à : " . $iTotalPrix . "€";

		
		if ($_POST["iSomme"] !=0)
		{
			$iTotalPrix= $_POST["iTotalPrix"];

			// calculer somme à rendre
			$iMonnaie = $_POST["iSomme"] - $iTotalPrix;

			//Tant que monnaie >= 10
			while ($iMonnaie>=10)
			{
				$iB10++;
				$iMonnaie=$iMonnaie-10;
			}
			//Tant que monnaie >= 5
			if ($iMonnaie>=5)
			{
				$iB5++;
				$iMonnaie=$iMonnaie-5;
			}
			
			//Ecrire devises rendues
			$sMessage="La monnaie rendue est de " . ($_POST["iSomme"] - $iTotalPrix) . "€<br>" . "et se décompose en :<br>" . $iB10 . " billet(s) de 10€ <br>" . $iB5 . " billet(s) de 5€ <br>" . $iMonnaie . " pièce(s) de 1€"; 
		}

	//Fin
	} 

	require "exo_5_10.html";
?>