<?php
    
//Début
if (isset($_POST["iNbre"]) and isset($_POST["i"]))
{
    //Lire $i
    $i=$_POST["i"];
    $iChaineNote= $_POST["iChaineNote"];

    if ($iChaineNote !="")
    {
        $aTableau=explode(":",$iChaineNote);
    }

    //Pour i ← 0 à 8
    if ($i<8)		
    {
        $iNbre = $_POST["iNbre"];
        $aTableau[]=$iNbre;
        $sMessage="Valeur " . ($i+1) . " du tableau : " . $aTableau[$i] . "<br>";
        $i++;
    }
            
    else if ($i==8)		
    {
        $iNbre = $_POST["iNbre"];
        $aTableau[]=$iNbre;
        $sMessage="Valeur " . ($i+1) . " du tableau : " . $aTableau[$i] . "<br> Cliquez pour afficher les valeurs<br>";
        $i++;
    }

    else
    {
        $sMessage="Les 9 valeurs sont :<br>";
        for ($i=0; $i<9; $i++)
        {
            $sMessage.="Note n° " . ($i+1) . " : " . $aTableau[$i] . "<br>";
        }
        $sMessage="<br><br>".implode(" : ",$aTableau);
    }
    $iChaineNote=implode(":",$aTableau);
}

else
{
    $sMessage= "";
    $aTableau=[];
    $iChaineNote="";
    $i = 0;
}

require "exo_6_3.html";




// /////////////////////////////////
// /////////////////////////////////
//  EXERCICE FAIT AVEC $_SESSION
// /////////////////////////////////
// /////////////////////////////////
// session_start();
// $iNbre = 0;

// if (!isset($_SESSION["MonTableau"]))
// {
//     $_SESSION["MonTableau"]=[];
//     $_SESSION["i"]=0;
//     $sMessage= "";
    
//     var_dump($_POST);
// }
// // 

// else 
// {
//     if ($_SESSION["i"]<=8)		
//     {
//         //Lire iNbre
//         $iNbre = +$_POST["iNbre"];
//         array_push($_SESSION["MonTableau"],$iNbre);
//         // ON PEUT ÉCRIRE : $_SESSION["MonTableau"] []= $iNbre];
//         $_SESSION["i"]++;
        
//         //Ecrire "Tableau de" & i & Tab
//         $sMessage ="Valeur " . $_SESSION["i"] . " du tableau : " . $iNbre . "<br>";
//     }
    
//     else
//     {
//         var_dump($_SESSION["MonTableau"]);
//         $sMessage ="Voici le résultat : <br>" . implode(", ", $_SESSION["MonTableau"]);
//         $_SESSION = [];
//     }
// }


// 	require "exo_6_3.html";

?>