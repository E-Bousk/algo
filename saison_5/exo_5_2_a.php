<?php
	$sMessage1= "";
	$sMessage2= "";

	// DEBUT
	if (isset($_POST["iNum"]))
	{
		//Lire iNum
		$iNum= $_POST["iNum"] ;

		
		//TantQue iNum<10 OU iNum>20
		if (($iNum<10) || ($iNum>20))
		{
			//Ecrire "ce nombre n'est pas compris entre 10 et 20"
			$sMessage1="[" . $iNum . "]" . " n'est pas compris entre 10 et 20 !";
			
			//SI iNum<10 Alors
			if ($iNum<10)
			{
				//Ecrire "Plus grand!"
				$sMessage2="<br><span style='color: red'>Plus grand !</span>";
			}

			//Sinon
			else
			{
				//Ecrire "Plus petit !"
				$sMessage2="<br><span style='color: red'>Plus petit !</span>";
			}	
		// FinTantQue	
		}
		else
		{
			//Ecrire : "La réponse convient"
			$sMessage1="[" . $iNum . "]" . " est bien compris entre 10 et 20...";
			$sMessage2="<br>C'est parfait !";
		}
	//Fin
	}	

	require "exo_5_2_a.html";
?>