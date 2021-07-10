<?php

    echo "echo file_get_contents(\"FICHIER.txt\"); ===> <br><br>";
    echo file_get_contents("./Fichiers/Exercice10_2.txt");
    echo "<br><br><hr>";

    echo "echo nl2br(file_get_contents(\"FICHIER.txt\")); ===> <br><br>";
    echo nl2br(file_get_contents("./Fichiers/Exercice10_2.txt"));
    echo "<br><br><hr>";

    echo "print_r(file(\"FICHIER.txt\")); ===> <br><br>";
    echo "<pre>";
    print_r(file("./Fichiers/Exercice10_2.txt"));
    echo "</pre>";
    echo "<br><br><hr>";
    
    echo "<br>readfile(\"FICHIER.txt\")); ===> <br><br>";
    readfile("./Fichiers/Exercice10_2.txt");
    echo "<br><br><hr>";

    $ressource = fopen("./Fichiers/Exercice10_2.txt", "rb");
    echo "<br>echo fread(\$ressource, filesize(\"FICHIER.txt\")); ===> <br><br>";
    echo fread($ressource, filesize("./Fichiers/Exercice10_2.txt"));
    echo "<br><br><hr>";

    $ressource = fopen("./Fichiers/Exercice10_2.txt", "rb");        
    echo "<br>echo fgets(\$ressource,30); ===> <br>";
    //Lit les 30 premiers caractères du fichier
    echo "Premier appel (lit les 30 premiers caractères) : " .fgets($ressource, 30). "<br>";
    echo "<br>echo fgets(\$ressource); ===> <br>";
    //Lit le reste de la première ligne
    echo "Deuxième  appel (lit le reste de la première ligne) : " .fgets($ressource). "<br>"; 
    echo "<br>echo fgets(\$ressource); ===> <br>";
    //Lit la deuxième ligne du fichier
    echo "Troisième appel (lit la deuxième ligne du fichier) : " .fgets($ressource). "<br>";
    echo "<br><br><hr>";

    //Lit le premier caractère du fichier
    echo "<br>echo fgetc(\$ressource); ===> <br>";
    echo "Premier appel (lit le premier caractère) : " .fgetc($ressource). "<br>";
    //Lit le deuxième caractère
    echo "<br>echo fgetc(\$ressource); ===> <br>";
    echo "Deuxième  appel (lit le deuxième caractère) :  : " .fgetc($ressource). "<br>"; 
    //Lit le troisième caractère
    echo "<br>echo fgetc(\$ressource); ===> <br>";
    echo "Troisième appel (lit le troisième caractère) : : " .fgetc($ressource). "<br>";
    echo "<br><br><hr>";


    // Tant que la fin du fichier n'est pas atteinte, c'est-à-dire
    // tant que feof() renvoie FALSE (= tant que !feof() renvoie TRUE)
    // on echo une nouvelle ligne du fichier
    echo "Tant que la fin du fichier n'est pas atteinte, c'est-à-dire tant que feof() renvoie FALSE (= tant que !feof() renvoie TRUE) on echo une nouvelle ligne du fichier :<br>";
    echo "while (!feof(\$res)) { \$ligne = fgets(\$res); echo 'La ligne \"' .\$ligne. '\" contient' .strlen(\$ligne).'caractères < br>'; } ===> <br><br>";
    $res = fopen("./Fichiers/Exercice10_2.txt", "rb");
    while(!feof($res))
    {
        $ligne = fgets($res);
        echo "La ligne \"" .$ligne. "\" contient" .strlen($ligne). " caractères <br>";
    }
    echo "<br><br><hr>";

    echo "while(!feof(\$res)){ echo 'Le pointeur est au niveau du caractère ' .ftell(\$res). '< br>'; \$ligne = fgets(\$res); echo 'La ligne \"' .\$ligne. '\" contient ' .strlen(\$ligne). ' caractères < br>< br>'; } ===> <br><br>";
    $res = fopen("./Fichiers/Exercice10_2.txt", "rb");
    while(!feof($res))
    {
        echo "Le pointeur est au niveau du caractère " .ftell($res). "<br>";
        $ligne = fgets($res);
        echo "La ligne \"" .$ligne. "\" contient
        " .strlen($ligne). " caractères <br><br>";
    }
    echo "<br><br><hr>";

    $res = fopen("./Fichiers/Exercice10_2.txt", "rb");
    echo "Le pointeur est derrière le caractère " .ftell($res). "<br>";
    echo "Le caractère " .(ftell($res) + 1). " est un " .fgetc($res). "<br>";
    echo "Le pointeur est derrière le caractère " .ftell($res). "<br><br>";

    echo "fseek(\$res, 20); ===> <br>";
    fseek($res, 20);
    echo "Le pointeur est derrière le caractère " .ftell($res). "<br>";
    echo "Le caractère " .(ftell($res) + 1). " est un " .fgetc($res). "<br>";
    echo "Le pointeur est derrière le caractère " .ftell($res). "<br><br>";
    echo "fseek(\$res, 40, SEEK_CUR); ===> <br>";
    fseek($res, 40, SEEK_CUR);
    echo "Le pointeur est derrière le caractère " .ftell($res). "<br>";
    echo "Le caractère " .(ftell($res) + 1). " est un " .fgetc($res). "<br>";
    echo "<br><br><hr>";

    echo "echo fread(\$res, filesize(\"./Fichiers/Exercice10_2.txt\"));<br>";
    echo "fclose(\$res); ===> <br><br>";
    $res = fopen("./Fichiers/Exercice10_2.txt", "rb");
    echo fread($res, filesize("./Fichiers/Exercice10_2.txt"));
    fclose($res);


?>