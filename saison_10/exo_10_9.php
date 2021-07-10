<?php

if (isset($_POST["btn_php"]))
{
    $sMessage= "";
    // Ouverture du fichier .TXT
    $sReferenceFichier = fopen("./Fichiers/Exercice10_9.txt", "r");

    // Si bien ouvert
    if ($sReferenceFichier)
    {
        // Tant que PAS fin de fichier
        while (!feof($sReferenceFichier))
        {
            // FGETS lit une ligne à chaque boucle et l'attribue à la variable $buffer
            $buffer = fgets($sReferenceFichier);

            // explode la ligne en tableau $data
            $datas = explode("::",$buffer);

            // crée un tableau associatif avec pour index chaque nom récupéré
            // depuis l'index 0 du tableau précédent
            $aOfLigneFichier[$datas[0]]["ventes"]=0;

        // Fin TANTQUE 
        }
    }

    fclose($sReferenceFichier);

    
    // Ouverture du fichier .TXT
    $sReferenceFichier = fopen("./Fichiers/Exercice10_9.txt", "r");
    // Si bien ouvert
    if ($sReferenceFichier)
    {
        // Tant que PAS fin de fichier
        while (!feof($sReferenceFichier))
        {
            // FGETS lit une ligne à chaque boucle et l'attribue à la variable $buffer
            $buffer = fgets($sReferenceFichier);

            // explode la ligne en tableau $data
            $datas = explode("::",$buffer);

            // rempli le tableau associatif en additionnant les nombres récupérés
            // depuis l'index 1 du tableau précédent
            $datas[1]= intval($datas[1]);
            $aOfLigneFichier[$datas[0]]["ventes"]+=$datas[1];
             
        // Fin TANTQUE 
        }   
        // Pour chaque index dans le tableau $aOfLigneFichier
        foreach ($aOfLigneFichier as $vendeur => $value)
        {
            // affiche sa valeur (son nom)
            $sMessage.= "Vendeur : $vendeur<br>";
            
            // Pour chaque index dans cet index
            foreach ($value as $ventes)
            {
                // affiche sa valeur
                $sMessage.= " Total des ventes : $ventes €<br><br>";
            }
            
        // Fin FOR EACH
        }
        

    // Fin SI
    }
// FIN
}

else
{
    $sMessage= "";
}

require "exo_10_9.html";

?>