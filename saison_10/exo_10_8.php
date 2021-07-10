<?php

if (isset($_POST["btn_php"]))
{
    // ouvre fichier "Exercice10_8.txt" en LECTURE et attribut son contenu à la variable $sReferenceFichier
    $sReferenceFichier = fopen("./Fichiers/Exercice10_8.txt", "r");

    // Si $sReferenceFichier rempli (fichier trouvé et ouvert)
    if ($sReferenceFichier)
    {
        // pour pouvoir faire un i++ ligne 38
        $i = -1;

        while (!feof($sReferenceFichier))
        {
            // fgets lit une ligne à chaque appel et l'attribue à la variable $buffer
            $buffer = fgets($sReferenceFichier);

            // On attribut chaque champ à une variable structurée ($variable ["nom du champ"])
            // exemple ligne suivante : récupère les 15 caractères à partir du caractère 0 de la chaine
            $aOfLigneFichier["nom"]= substr($buffer, 0, 15);
            $aOfLigneFichier["prenom"]= substr($buffer, 15, 15);
            $aOfLigneFichier["tel"]= substr($buffer, 30, 12);
            $aOfLigneFichier["mail"]= substr($buffer, 42, 20);

            // initialise le décompte d'@ à zero
            $nb = 0;
            for ($j=1; $j<strlen($aOfLigneFichier["mail"]); $j++)
            {
                // décompte des arobases
                if (substr($aOfLigneFichier["mail"], $j, 1) ==="@")
                {
                    $nb++;
                }
            }

            if ($nb===1)
            {
                $i++;
                $aOfMesPersonnes[$i]["sNom"]= $aOfLigneFichier["nom"];
                $aOfMesPersonnes[$i]["sPrenom"]= $aOfLigneFichier["prenom"];
                $aOfMesPersonnes[$i]["sTel"]= $aOfLigneFichier["tel"];
                $aOfMesPersonnes[$i]["sMail"]= $aOfLigneFichier["mail"];
            }

        //Fin TANTQUE   
        }

        // On ferme le fichier
        fclose($sReferenceFichier);

    // Fin SI   
    }

    // Ecrire mon nouveau contenu dans carnet
    // Ouvrir "Exercice10_8.txt" pour Ecriture
    $sTextFinal= "";
    for ($i= 0; $i<count($aOfMesPersonnes); $i++)	
    {
        $sTextFinal.= $aOfMesPersonnes[$i]["sNom"] . $aOfMesPersonnes[$i]["sPrenom"] . $aOfMesPersonnes[$i]["sTel"] . $aOfMesPersonnes[$i]["sMail"] . "\n";
    }

    $handle = fopen('./Fichiers/Exercice10_8.txt', 'w');
    if ($handle)	
    {
        fputs($handle, $sTextFinal);
        fclose($handle);
        $sMessage= "Carnet nettoyé des mauvaises adresses mail";
    }
}


else
{
    $sMessage= "";
}

require "exo_10_8.html";

?>

<?php

// 1er jet :


// if (isset($_POST["btn_php"]))
// {



//     // ouvre fichier "Exercice10_5.txt" en LECTURE et attribut son contenu à la variable $sReferenceFichier
//     $sReferenceFichier = fopen("./Fichiers/Exercice10_8.txt", "r");

//     // Si $sReferenceFichier rempli (fichier trouvé et ouvert)
//     if ($sReferenceFichier)
//     {
//         // pour pouvoir concatener sans erreur
//         $texte="";

//         while (!feof($sReferenceFichier))
//         {
//             // fgets lit une ligne à chaque appel et l'attribue à la variable $buffer
//             $buffer = fgets($sReferenceFichier);

//             $sArobas="@";
//             $sArobasX2="@@";
//             // recherche de double @ ou d'@ manquant
//             if (strpos($buffer, $sArobas) === false || strpos($buffer, $sArobasX2)) 
//             {
//                 $sMessage="Erreur trouvée --> ligne effacée";
//             } 

//             else 
//             {
//                 $sMessage= "Aucune erreur trouvée";
//                 $texte .=$buffer;
//             }
//         //FIN TANT QUE
//         }
//         // fermeture du fichier à traiter
//         fclose($sReferenceFichier);
//     //FIN SI
//     }
//         // ouvre fichier "Exercice10_5.txt" en ECRITURE et attribut son contenu à la variable $sReferenceFichier
//         $sReferenceFichier = fopen("./Fichiers/Exercice10_8.txt", "w");
//         if ($sReferenceFichier) 
// 		{
//             // ecrit les données
//             fwrite($sReferenceFichier, $texte);
// 			fclose($sReferenceFichier);
// 		}


// }

// else
// {
//     $sMessage= "";
// }

?>