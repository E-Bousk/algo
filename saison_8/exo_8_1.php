<?php

if (isset($_POST["btn_php"]))
{

    // 1ere version :

    for ($i=0; $i<6; $i++)
    {
        for ($j=0; $j<13; $j++)
        {
            $aTab1[$i][$j]=0;
        }
    }
    
    // 2eme version :
    $aTab2 = Array_fill(0,6,Array_fill(0,13,0));


    // affichage tableau 1
    $sMessage="Tableau 1 :<br>";
    for ($i=0; $i<6; $i++)
    {
        $SousTableau1=$aTab1[$i];
        $sMessage.="<br>".implode(' | ', $SousTableau1);
    }

    // affichage tableau 2
    $sMessage.="<br><br>Tableau 2 :<br>";
    for ($i=0; $i<6; $i++)
    {
        $SousTableau2=$aTab2[$i];
        $sMessage.="<br>".implode(' | ', $SousTableau2);
    }
    // // affichage tableau
    // function implode_r($g, $p) 
    // {
    //     return is_array($p) ?
    //     implode($g, array_map(__FUNCTION__, array_fill(0, count($p), $g), $p)) : 
    //     $p;
    // }
    // $sMessage="<br><br>Tableau :<br>".implode_r(' | ', $aTab1);
    // // $sMessage.="<br><br>Tableau :<br>".implode_r(' | ', $aTab2);
    // $sMessage.="<br><br>Tableau :<br>".implode_r(' | ', $aTab2);

//Fin
}

else
{
    $sMessage= "";
}

require "exo_8_1.html";

?>