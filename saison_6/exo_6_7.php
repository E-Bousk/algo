<?php
	$sMessage= "";



   //Début
if (isset($_POST["iNbre"]) and isset($_POST["i"]) and isset($_POST["iTotal"]))
{
    //Lire $i
    $i=$_POST["i"];
    //Lire $iTotal
    $iTotal=$_POST["iTotal"];
    
    //Lire $TabInput (Récuperer les valeurs du tableau depuis HTML)
    $TabInput= $_POST["TabInput"];
    if ($TabInput !="")
    {
		//pour (re)créer tableau
        $Tab=explode(":",$TabInput);
    }
    
   
    //Pour i ← 0 à 8
    if ($i<8)		
    {
        //Lire Tab(i)
        $iNbre=$_POST["iNbre"];
        $iTotal = $iTotal+$iNbre;
        // Ecrire "Notes " & i+1 & "bien prise en compte.""
        $sMessage.="Notes " . ($i+1) . " bien prise en compte.";
        $Tab[]=$iNbre;
        $i++;
    }
    
    else if ($i==8)
    {
        //Lire Tab(i)
        $iNbre=$_POST["iNbre"];
        $iTotal = $iTotal+$iNbre;
        // Ecrire "Notes " & i+1 & "bien prise en compte.""
        $sMessage.="Notes " . ($i+1) . " bien prise en compte.<br> Cliquez pour calculer la moyenne";
        $Tab[]=$iNbre;;
        $i++;
    }
    
    else
    {
        // Ecrire "La moyenne des notes est :" & iTotal/i
        $sMessage="La moyenne des notes est : " . number_format($iTotal/$i, 2) . "<br>";
        for ($i=0; $i<9; $i++)
        {
            $sMessage.="Note n° " . ($i+1) . " : " . $Tab[$i] . "<br>";
        }
    }

    //Éclater les valeurs en lignes en les séparants par un « : » pour envoyer dans HTML
    $TabInput=implode(":", $Tab);
}
else
{
    $i= 0;
    $iTotal = 0;
    $Tab="";
    $TabInput="";
}
	require "exo_6_7.html";



// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////
// CORRIGÉ
// $i= 0;
// $iTotal = 0;

// $sMessage= "";
// $TabInput= "";
// $itab_note=[];
// $iSomme= 0;

// if (isset($_POST["iNbre"]))
// {
//     // debut
//     $iNbre=$_POST["iNbre"];
//     $TabInput=$_POST["TabInput"];
//     if ($TabInput != "")
//     {
//         $itab_note= explode(",", $TabInput);
//     }
//     $itab_note[]= $iNbre;
//     var_dump($itab_note);
//     if (count($itab_note) == 9)
//     {
//         for ($i=0; $i<=8; $i++)
//         {
//             $iSomme+= $itab_note[$i];
//         }
//         $iMoyenne= $iSomme / 9;
//         $sMessage= "PHP la moyenne est de " . $iMoyenne;
//     }
//     $TabInput= implode(",", $itab_note);
    
// }
// 	require "exo_6_7.html";
// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////


?>



