<?php
    $A=51;
    $B=34;
    $C=$A+$B;
    $A=21;
    $C=$B-$A;

    $array= array('A' => $A, 'B' => $B, 'C' => $C);
    echo json_encode($array);
?>