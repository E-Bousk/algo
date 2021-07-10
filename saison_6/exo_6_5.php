<?php
    //Début
    // pour ne pas afficher le resultat avant d'avoir cliqué sur boutton
	if (isset($_POST["btn_php"]))
	{
        $i=1;
        $Tab = [6];
        $Tab[0] = 1;

        // Ecrire Tab(0)
        $sMessage=$Tab[0]." / ";

        //Pour i ← 0 à 6
        for ($i;$i<=6;$i++)
        {
            $Tab[$i] = $Tab[$i-1]+2;
            // Ecrire Tab(i)
            $sMessage.=$Tab[$i] . (($i<6) ? " / " :"");
        }
	//Fin
    }
    else
    {
        $sMessage= "";
    }

	require "exo_6_5.html";
?>