<?php

$sMessage= "";

//Début
if (isset($_POST["iNbreVal"]) and isset($_POST["iExo71"]) and isset($_POST["bFlagExo71"]))
{
	$iNbreVal=$_POST["iNbreVal"];
	$iExo71=$_POST["iExo71"];
	$TabInput=$_POST["TabInput"];
	$sTDExo71=$_POST["sTDExo71"];
	$bFlagExo71=$_POST["bFlagExo71"];
	$aTabExo71=[];
	
	if ($TabInput !="")
		{
			//pour (re)créer tableau
			$aTabExo71=explode(",",$TabInput);
		}
	
	if ($iExo71<$iNbreVal)
	{
		$iNombre=$_POST["iNombre"];
		$div_Nombre="Saisie n° ".($iExo71+2);
		$div_formDyn="<p><div name=\"div_Nombre\" id=\"div_Nombre\">".$div_Nombre."</div></p><p><input type=\"number\" name=\"iNombre\" id=\"iNombre\" value=\"".($iNombre+1)."\"></p>";
		
		if (count($aTabExo71)===0)
		{	
			// alors la 1ere valeur prend la 1ere position (0)
			$aTabExo71[0]=$iNombre;
			$sMessage.="Valeur " . $iNombre . " ajoutée<br>";
			$sTDExo71.="<td>" . $aTabExo71[$iExo71] . "</td>";
			$iExo71++;
		}
		
		else
		{	
			$aTabExo71[$iExo71]=$iNombre;
			$sMessage.="Valeur " . $iNombre . " ajoutée<br>";
			$sTDExo71.="<td>" . $aTabExo71[$iExo71] . "</td>";
			
			if ($aTabExo71[$iExo71]!=($aTabExo71[$iExo71-1])+1)
			{
				$bFlagExo71=1;
			}
			$iExo71++;
		}
	}

	$TabInput=implode(",",$aTabExo71);

	if ($iExo71==$iNbreVal)
	{	
		$div_formDyn="";
			
		if ($bFlagExo71==1)
		{ 	
			$sMessage="<table><tr>" . $sTDExo71 . "</tr></table><br>";
			$sMessage.="Les valeurs ne sont pas consécutives";
		}
		else
		{	
			$sMessage="<table><tr>" . $sTDExo71 . "</tr></table><br>";
			$sMessage.="Les valeurs sont consécutives";
		}
	}
}

else 
{
$iExo71=0;
$sTDExo71="";
$aTabExo71=[];
$bFlagExo71=0;
$TabInput="";
$iNbreVal="";
$div_formDyn="";
}

require "exo_7_1.html";

?>