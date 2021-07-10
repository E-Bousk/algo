<?php


    /*On teste les permissions de notre
        *fichier fichier.txt créé précédemment*/
    
    echo decoct(fileperms("exemple_test/fichier.txt")). "<br>";
    echo var_dump(is_readable("exemple_test/fichier.txt")). "<br>";
    echo var_dump(is_writable("exemple_test/fichier.txt")). "<br>";

    
    echo "<hr>";


    echo "Permissions d'origine : "
    .decoct(fileperms("exemple_test/fichier.txt")). "<br>";
    
    //chmod() renvoie truc en cas de succès
    if(chmod("exemple_test/fichier.txt", 0777)){
        echo "Permissions du fichier bien modifiées";
    }


?>