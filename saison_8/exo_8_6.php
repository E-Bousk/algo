<?php

if (isset($_POST["btn_php"]))
{
    // génerer un tableau à deux dimensions (12, 8) rempli aléatoirement
    for ($i=0; $i<12; $i++)
    {
        for ($j=0; $j<8; $j++)
        {
            $aTab[$i][$j]=rand(100,999);
        }
    }

    // affichage tableau
    $sMessage="Tableau :<br>";
    for ($i=0; $i<12; $i++)
    {
      $SousTableau=$aTab[$i];
      $sMessage.="<br>".implode(' | ', $SousTableau);
    }
        
    $iGreatest = "";
    for ($i=0; $i<12; $i++)
    {
        for ($j=0; $j<8; $j++)
        {
            if($aTab[$i][$j]>$iGreatest || $iGreatest==="" )
            {
                $iGreatest=$aTab[$i][$j];
                $iPosition="(".($i+1).",".($j+1).")";
            }
        }
    }
    // affichage la valeur la plus grande
    $sMessage.="<br><br><br>La plus grande valeur est :<br>".$iGreatest;
    // affichage de sa position
    $sMessage.="<br>à la position :<br>".$iPosition;
}

else
{
    $sMessage= "";
}

require "exo_8_6.html";

?>