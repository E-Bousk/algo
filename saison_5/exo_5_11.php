<?php
	$sMessage= "";

	// DEBUT
	if (isset($_POST["iChevauxPartant"]) and isset($_POST["iChevauxJoue"]) )
	{

		//Lire 
		$iChevauxPartant = $_POST["iChevauxPartant"];
		$iChevauxJoue = $_POST["iChevauxJoue"];

		$iFactCP = 1;
		$iFactCJ = 1;
		$iFactCPCJ = 1;
		$i = 1;
		$j = 1;
		$k = 1;

		for ($i;$i<=$iChevauxPartant;$i++)
		{
			$iFactCP = $iFactCP*$i;
		}	
		for ($j;$j<=$iChevauxJoue;$j++)
		{
			$iFactCJ = $iFactCJ*$j;
		}
		for ($k;$k<=($iChevauxPartant-$iChevauxJoue);$k++)
		{
			$iFactCPCJ = $iFactCPCJ*$k;
		}

		$sMessage="Dans l'ordre, vous avez une chance sur " . $iFactCP/$iFactCPCJ . " de gagner <br>";
		$sMessage.="Dans le désordre, vous avez une chance sur " . $iFactCP/($iFactCJ*$iFactCPCJ) . " de gagner";

	//Fin
	} 

	require "exo_5_11.html";
?>