<?php
	$sMessage= "";

	// SI LE CHAMP iNombre EXISTE ALORS EXECUTE LE CODE PHP
	if ((isset($_POST["iNombre"])) && ($_POST["iNombre"] != ""))
	{
		
		//Ecrire "Entrez votre age :"
		//Lire iNombre
		$iNombre= intval($_POST["iNombre"]) ;
		$Genre=$_POST["bSexe"];
		
		//Si "Homme" séléctionné et age > 20
		if ($Genre==="H" && $iNombre >20)
		{
			//Ecrire "Vous êtes imposable"
			$sMessage= "Vous êtes imposable";
		}

		//Si "Femme" séléctionné et age >=18 et <=35
		else if ($Genre==="F" && $iNombre >=18 && $iNombre <=35)
		{
			//Ecrire "Vous êtes imposable"
			$sMessage= "Vous êtes imposable";
		}

		//SINON
		else
		{
			//Ecrire "Vous n'êtes pas imposable"
			$sMessage= "Vous n'êtes pas imposable";
			
		// FINSI
		}
	//FIN	
	}

	require "exo_4_5.html";
?>