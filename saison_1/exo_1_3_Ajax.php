<?php
    $A=49;
    $B=$A+4;
    $A=$A+1;
    $B=$A-4;

    $array= array('A' => $A, 'B' => $B);
    echo json_encode($array);
?>