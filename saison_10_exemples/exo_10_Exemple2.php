<?php

    /*On appelle fopen() avec le mode c : le pointeur se situe
        *au début du fichier. Le fichier contient le texte :
        *"blablabla"*/
    $fichier = fopen("exemple_test/exemple2.txt", "c+b");
    
    /*On lit les 20 premiers octets du fichier avec fread(), le
        *pointeur se situe là où fread() arrête sa lecture*/
    $texte = fread($fichier, 20);
    
    //On ajoute du texte dans notre variable
    $texte .= " TEXTE AJOUTE AU MILIEU ";
    
    /*On lit la suite du fichier (fread() reprend sa lecture là où se
        *trouve le pointeur) et on ajoute le texte lu dans $texte*/
    $texte .= fread($fichier, filesize("exemple_test/exemple2.txt"));
    
    /*On replace le pointeur en début de fichier et on écrase l'ancien
        *texte avec le nouveau (qui est plus long)*/
    fseek($fichier, 0);
    fwrite($fichier, $texte);


?>