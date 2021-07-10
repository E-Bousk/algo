<?php


    $f = "exemple_test/exemple.txt";
    $d = "exemple_test/jenexistepas.txt";
    
    if(file_exists($f)){
        if(is_file($f)){
            echo "Le fichier " .$f. " existe et est bien un fichier";
        }
        else{
            echo $f. " existe mais n'est pas un fichier régulier";
        }
    }else{
        echo $f. " n'existe pas";
    }
    echo "<br><br>";
    if(file_exists($d)){
        if(is_file($d)){
            echo "Le fichier " .$d. " existe et est bien un fichier";
        }
        else{
            echo $d. " existe mais n'est pas un fichier régulier";
        }
    }else{
        echo $d. " n'existe pas ";
    }

    echo "<hr>";
          
    //Nous avons créé le fichier exemple.txt précédemment
    $f = "exemple_test/exemple.txt";
    $d = "exemple_test/jenexistepas.txt";
    
    if(file_exists($f)){
        if(is_file($f)){
            $newf = "fichier.txt";
            rename($f, $newf);
            echo "Le fichier " .$f. " a été renommé en " .$newf;
        }
        else{
            echo $f. " existe mais n'est pas un fichier régulier";
        }
    }else{
        echo $f. " n'existe pas";
    }

    echo "<hr>";

    $f = "exemple_test/exemple3.txt";
            
    /*On fait deux opérations en une : on exécute unlink() et on effectue
     *notre test sur la valeur renvoyée. Si la fonction renvoie true,
     *on indique que le fichier a bien été effacé*/ 
    if(unlink($f)){
        echo "Le fichier " .$f. " a bien été effacé";
    }else{
        echo "Le fichier " .$f. " n'a pas pu être effacé";
    }
    
    echo "<hr>";


?>