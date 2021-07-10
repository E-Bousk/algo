<?php

if (isset($_POST["btn_php"]))
{
    
    // lire sTitre, sRealisateur, sAnnee
    $sTitre=$_POST["sTitre"];
    $sRealisateur=$_POST["sRealisateur"];
    $sAnnee=$_POST["sAnnee"];
    
    // verifie si champ "Titre" est rempli
    if (empty($sTitre))
    {
        $sMessage= "Rien à ajouter.<br>";
        $sMessage.= "(titre du film obligatoire)";
    }

    // verifie si nombre de caractère $sTitre < 50
    else if (strlen($sTitre)>50)
    {
        $sMessage="Le titre est trop long. (50 caractères max.)";
        $sMessage.="<br> Vous avez entré ". strlen($sTitre)." caractères";
    }

    // verifie si nombre de caractère $sRealisateur < 25
    else if (strlen($sRealisateur)>25)
    {
        $sMessage="Le nom est trop long. (25 caractères max.)";
        $sMessage.="<br> Vous avez entré ". strlen($sRealisateur)." caractères";
    }

    // verifie si nombre de caractère $sAnnee < 4
    else if (strlen($sAnnee)>4)
    {
        $sMessage="Année sur 4 caractères maximum";
        $sMessage.="<br> Vous avez entré ". strlen($sAnnee)." caractères";

    }

    // si tout est ok
    else
    {     
        // initialise $sTexte à vide pour pouvoir concatener dedans plus tard
        $sTexte="";

        // ouvre fichier "Exercice10_3.txt" en AJOUT et attribut son contenu à la variable $sReferenceFichier
        $sReferenceFichier = fopen("./Fichiers/Exercice10_3.txt", "a");

        // Si $sReferenceFichier rempli (fichier trouvé et ouvert)
        if ($sReferenceFichier)
        {
            // Ajoute les espaces manquant après les données
            $sTitre=str_pad($sTitre,50);
            $sRealisateur=str_pad($sRealisateur,25);
            $sAnnee=str_pad($sAnnee,4);

            // concatène tout dans variable $sTexte et ajoute un saut de ligne avant
            $sTexte.="\r\n".$sTitre.$sRealisateur.$sAnnee;
            // ecrit les données
            fwrite($sReferenceFichier, $sTexte);
            // fermeture du fichier à traiter
            fclose($sReferenceFichier);
        //FIN SI
        }

        ////////////////////////////////////////
        // POUR AFFICHER LE TEXTE AVEC L'AJOUT :
        // ouvre fichier "Exercice10_3.txt" en LECTURE et attribut son contenu à la variable $sReferenceFichier
		$sReferenceFichier = fopen("./Fichiers/Exercice10_3.txt", "r");

        // Si $sReferenceFichier rempli (fichier trouvé et ouvert)
        if ($sReferenceFichier)
		{
            // confirmer par message l'ajout des données
            $sMessage= "Données ajoutées<br><br>";

            //Tant que pas fin de fichier (dernière ligne)
			while(!feof($sReferenceFichier))
			{
                // affiche les données ligne par ligne
				$sMessage .= fgets($sReferenceFichier)."<br>";	
			}
			// fermeture du fichier à traiter
			fclose($sReferenceFichier);
        // FIN SIN
		}
    //FIN SINON
    }
//FIN
}

else
{
    $sMessage= "";
}

require "exo_10_3.html";

?>