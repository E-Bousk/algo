<?php
if ((isset($_POST["iNombreUtilisateur"]) && $_POST["iNombreUtilisateur"] !== "")) {
    
    // indique pas d'erreur
    $array_res[0] = array(
        'error' => 0
    );
    
    //calcule du double
    $iDouble= $_POST["iNombreUtilisateur"] * 2;

    $array_res[1]= array('iNombreUtilisateur' => $_POST["iNombreUtilisateur"], 'iDouble' => $iDouble);
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