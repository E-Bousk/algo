<?php
	$A=13;
	$B=19;
	$C=$A+$B;
	$B=$A+$B;
	$A=$C;

    $array= array('A' => $A, 'B' => $B, 'C' => $C);
    echo json_encode($array);
?>