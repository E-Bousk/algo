<?php
	$sMessage= "";

	// SI LE CHAMP iNombre EXISTE ALORS EXECUTE LE CODE PHP
	if (isset($_POST["iHeures"]))
	{
		//Ecrire "Entrez l'heure actuelle :"
    	//Lire iHeures
		$iHeures= intval($_POST["iHeures"]) ;
		//Ecrire "Entrez les minutes :"
    	//Lire iMinutes
		$iMinutes= intval($_POST["iMinutes"]);
		//Ecrire "Entrez les secondes :"
    	//Lire iMinutes
		$iSecondes= intval($_POST["iSecondes"]);

		$iSecondes++;

    //Si iSecondes=60 alors
    if ($iSecondes==60)
    {
        $iSecondes=0;
        $iMinutes=$iMinutes+1;
    }

    //Si iMinutes=60 alors
    if ($iMinutes==60)
    {
        $iMinutes=0;
        $iHeures=$iHeures+1;
    }
    
    //Si iHeures=60 alors
    if ($iHeures==24)
    {
        $iHeures=0;
    }

    $sMessage= "Dans une seconde, il sera " . $iHeures . " heure(s) " . $iMinutes . " minute(s) " . $iSecondes . " seconde(s)" ;
} 

	require "exo_4_3.html";
?>

