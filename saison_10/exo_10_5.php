<?php

if (isset($_POST["btn_php"]))
{
    // lire imput et ajoute les espaces manquant après les données
    $sTitre=$_POST["sTitre"];
    $sReplace=$_POST["sReplace"];
     
    // verifie si champ "Titre" est rempli
    if (empty($sTitre) || empty($sReplace) )
    {
        $sMessage= "Rien à modifier.<br>";
    }

    // verifie si nombre de caractère $sTitre < 50
    else if (strlen($sTitre)>50)
    {
        $sMessage="50 caractères max.";
        $sMessage.="<br> Vous avez entré ". strlen($sTitre)." caractères";
    }
    // verifie si nombre de caractère $sReplace < 50
    else if (strlen($sReplace)>50)
    {
        $sMessage="Le nouveau titre est trop long. (50 caractères max.)";
        $sMessage.="<br> Vous avez entré ". strlen($sReplace)." caractères";
    }
    
    // si tout est ok
    else
    {     
        // ouvre fichier "Exercice10_5.txt" en LECTURE et attribut son contenu à la variable $sReferenceFichier
        $sReferenceFichier = fopen("./Fichiers/Exercice10_5.txt", "r");

        // Si $sReferenceFichier rempli (fichier trouvé et ouvert)
        if ($sReferenceFichier)
        {
            // pour pouvoir concatener sans erreur
            $texte="";
            // pour maintenir affichage si trouvé (risque d'écrasement avec message "pas trouvé" suivant)
            $bFlag = false;

            while (!feof($sReferenceFichier))
            {
                // fgets lit une ligne à chaque appel et l'attribue à la variable $buffer
                $buffer = fgets($sReferenceFichier);

                // attribut à la variable $pos la position de la chaine de charactère recherchée
                $pos = strpos($buffer, $sTitre);

                // chaine de charactère de $sTitre n'existe pas
                if ($pos === false && $bFlag === false) 
                {
                    $sMessage="le titre : ". $sTitre ." ne se trouve pas dans ce fichier";
                    $texte .=$buffer;
                } 
                else 
                {
                    // $bFlag à VRAI pour ne pas ecraser $sMessage avec "pas trouvé" suivant
                    $bFlag = true;
                    // pour gérer les espacements
                    $sTitre=str_pad($sTitre,50);
                    $sReplace=str_pad($sReplace,50);

                    $sMessage= "le titre :<br>  $sTitre <br> a été trouvée dans ce fichier,";
                    $sMessage.= "<br><br>il est remplacé par le titre : <br> $sReplace";
                    
                    // remplace les données
                    $buffer= str_ireplace($sTitre, $sReplace, $buffer);
                    $texte .=$buffer;
                }
            //FIN TANT QUE
            }
            // fermeture du fichier à traiter
            fclose($sReferenceFichier);
        //FIN SI
        }

        // ouvre fichier "Exercice10_5.txt" en ECRITURE et attribut son contenu à la variable $sReferenceFichier
        $sReferenceFichier = fopen("./Fichiers/Exercice10_5.txt", "w");
        if ($sReferenceFichier) 
		{
            // ecrit les données
            fwrite($sReferenceFichier, $texte);
			fclose($sReferenceFichier);
		}
    //FIN SINON
    }
//FIN
}

else
{
    $sMessage= "";
}

require "exo_10_5.html";




        // $sReferenceFichier= str_replace($sTitre, $sReplace, $sReferenceFichier ) ;
        // $result=file_put_contents("./Fichiers/Exercice10_5.txt",$sReferenceFichier);
        // $sMessage=$result;



        // while (!feof($sReferenceFichier))
        // {
        //     // fgets lit une ligne à chaque appel et l'attribue à la variable $buffer
        //     $buffer = fgets($sReferenceFichier);

        //     // attribut à la variable $pos la position de la chaine de charactère de $sTitre
        //     $pos = strpos($buffer, $sTitre);

        //     // chaine de charactère de $sTitre n'existe pas
        //     if ($pos === false) 
        //     {
        //         $sMessage="le titre : ". $sTitre ." ne se trouve pas dans ce fichier";
        //     } 
        //     else 
        //     {
        //         $sMessage= "le titre :  $sTitre  a été trouvée dans ce fichier";
        //         $sMessage.= "<br> et débute à la position $pos <br>";
        //         // remplace les données
        //         $buffer= str_ireplace($sTitre, $sReplace, $buffer);
        //         var_dump($buffer);
        //         echo ftell($sReferenceFichier);
                
        //         // ecrit les données
        //         fwrite($sReferenceFichier, $buffer);
        //     }
        // //FIN TANT QUE
        // }

?>
