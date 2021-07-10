<?php
	$sMessage1= "";
	$sMessage2= "";

	// DEBUT
	if (isset($_POST["iNum"]) and isset($_POST["iRand"]))
	{

        //Lire $iNum
        $iNum= $_POST["iNum"];
        //Lire $iRand
        $iRand=$_POST["iRand"];
        //Lire $iTour
        $iTour=$_POST["iTour"];


        //TantQue $iNum <> $iRand
        if ($iNum!=$iRand)
        {
            //Ecrire "Perdu, ce n'est pas " + $iNum +"." + "<br>Essayez un autre nombre"
            $sMessage1="Perdu, ce n'est pas " . $iNum . "." . "<br>Essayez un autre nombre.";
            ++$iTour;
            //SI $iNum<$iRand Alors
            if ($iNum<$iRand)
            {
                //Ecrire "Essayez plus grand !"
                $sMessage2="<br><span style='color: red'>Essayez plus grand ! <br>(triche: $iRand)</span>";
            }
            //Sinon
            else
            {
                //Ecrire "Essayez plus petit !"
                $sMessage2="<br><span style='color: red'>Essayez plus petit ! <br>(triche: $iRand)</span>";
            }	
        // FinTantQue	
        }
        else
        {
            //Ecrire : "Bravo, vous avez trouvé en " + iTour + " tentative(s)"
            $sMessage1="Bravo, vous avez trouvé !!";
            $sMessage2="en " . $iTour . " tentative(s). <br>Une autre partie ?";
            $iRand=rand(1, 100);
            $iTour=1;
        //Fin Sinon    
        }
    //Fin Si 
    }
    else
    {
        $iRand=rand(1, 100);
        $iTour=1;
    //Fin Sinon
    }

	require "exo_5_2_b.html";
?>
