<?php
	$sMessage= "";

	// SI LE CHAMP iNombre EXISTE ALORS EXECUTE LE CODE PHP
	if (isset($_POST["iNombre"]))
	{
		//Ecrire "Entrez le nombre de photocopies réalisées :"
    	//Lire iNombre
		$iNombre= intval($_POST["iNombre"]) ;

		
		//Si iNombre<=10 alors
		if ($iNombre<=10)
		{
			//Ecrire "Votre facture s'élève à :" + iNombre*0.1 + "€"
			$sMessage= "Votre facture s'élève à : " . $iNombre*0.1 . " €";
		}

		//Si iNombre >10 & <=30 alors
		if ($iNombre>10 && $iNombre<=30)
		{
			$iNombre=$iNombre-10;
			//Ecrire "Votre facture s'élève à : " + (1+iNombre*0.09) + "€"
			$sMessage= "Votre facture s'élève à : " . (1+$iNombre*0.09) . " €";
		}

		//Si iNombre >30
		if ($iNombre>30)
		{
			$iNombre=$iNombre-30;
			//Ecrire "Votre facture s'élève à :" + (2.8+iNombre*0.08) + "€"
			$sMessage= "Votre facture s'élève à :" . (2.8+$iNombre*0.08) . " €";
			
		// FINSI
		}
	//FIN	
	}


	require "exo_4_4.html";
?>

