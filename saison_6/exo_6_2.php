<?php
//Début
// pour ne pas afficher le resultat avant d'avoir cliqué sur boutton
if (isset($_POST["btn_php"]))
{
	$Tab = [5];

	$Tab[0] = "A";
	$Tab[1] = "E";
	$Tab[2] = "I";
	$Tab[3] = "O";
	$Tab[4] = "U";
	$Tab[5] = "Y";

	//Ecrire "Tableau :" & Tab
	$sMessage="Tableau : " . $Tab[0]." - ".$Tab[1]." - ".$Tab[2]." - ".$Tab[3]." - ".$Tab[4]." - ".$Tab[5]."<br>";

//Fin
} 
else
{
	$sMessage= "";
}
	require "exo_6_2.html";
?>