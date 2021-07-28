<?php
    $A=17;
    $B=$A+2;
    $A=9;

    // echo json_encode("A = " . $A . "<br>" . "B = " . $B);
    $array= array('A' => $A, 'B' => $B);
    echo json_encode($array);
?>