<?php

    $A = 14;
	$B = 29;
	$A = $B;
	$B = $A;

    $array= array('A' => $A, 'B' => $B);
    echo json_encode($array);
?>