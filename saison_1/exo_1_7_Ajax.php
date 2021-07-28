<?php
if ((isset($_POST["sVarA"]) && $_POST["sVarA"] !== "") && (isset($_POST["sVarB"]) && $_POST["sVarB"] !== "") && (isset($_POST["sVarC"]) && $_POST["sVarC"] !== "")) {
    
    // indique pas d'erreur
    $array_res[0] = array(
        'error' => 0
    );
    
    //Inversion des valeurs
    $sTemp=$_POST["sVarA"];
    $sVarA=$_POST["sVarC"];
    $sVarC=$_POST["sVarB"];
    $sVarB=$sTemp;

    $array_res[1]= array('sVarA' => $sVarA, 'sVarB' => $sVarB, 'sVarC' => $sVarC);
    echo json_encode($array_res);

} 
// sinon (s'il manque un(des) champ(s) et/ou pas reçu(s))
else
{
    // indique erreur
    $array_res[0] = array(
        'error' => 1
    );

    // renvoie à la page JS le tableau avec erreur=1
    echo json_encode ($array_res);
}

?>