<?php

if (isset($_POST["btn_php"]))
{
    $sMessage= "";
    $sReferenceFichier = fopen("./Fichiers/Exercice10_2.txt", "r");

    if ($sReferenceFichier)
    {
        while (!feof($sReferenceFichier))
        {
            // fgets lit une ligne à chaque appel et l'attribue à la variable $buffer
            $buffer = fgets($sReferenceFichier);
            // transforme (explode) la ligne de $buffer en tableau ($Datas)
            $Datas = explode(" / ",$buffer);

            //Concaténations et affichage
            $sMessage .="Année : ".$Datas[0]."<br>";
            $sMessage .="Titre : ".$Datas[1]."<br>";
            $sMessage .="Titre en kanji : ".$Datas[2]."<br>";
            $sMessage .="Titre Japonais : ".$Datas[3]."<br>";
            $sMessage .="Réalisateur : ".$Datas[4]."<br><br>";
        }
        fclose($sReferenceFichier);
    }
}

else
{
    $sMessage= "";
}

require "exo_10_2.html";

?>