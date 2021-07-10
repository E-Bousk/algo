<?php
	$sMessage= "";

	// DEBUT
	if (isset($_POST["iNbre"]))
	{
		//Lire iNbre
		$iNbre= $_POST["iNbre"];
		$iSomme=0;
		$sMessage.=("la somme des entiers jusqu’à ce nombre est :<br>");
		
		if ($iNbre>=0)
		{
			//Pour i = 1 à iNbre
			for ($i=1; $i<=$iNbre-1; $i++)
			{
				//Ecrire "i + "
				$sMessage.=($i . " + ");
				$iSomme = $iSomme+$i;
			// i Suivant	
			}
		}	
		else
		{
			//Pour i = 1 à iNbre
			for ($i=-1; $i>=$iNbre+1; $i--)
			{
				//Ecrire "i + "
				$sMessage.=($i . " + ");
				$iSomme = $iSomme+$i;
			// i Suivant	
			}
		}
		$sMessage.=($iNbre . " = " . ($iSomme+$iNbre));
	//Fin	
	}	

	require "exo_5_6.html";
?>