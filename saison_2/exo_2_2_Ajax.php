<?php
if ((isset($_POST["iNombreUtilisateur"]) && $_POST["iNombreUtilisateur"] !== "")) {

    if (is_numeric($_POST["iNombreUtilisateur"]))
    {

        // indique pas d'erreur
        $array_res[0] = array(
            'error' => 0
        );
        
        //calcule du carré
        $iCarre= $_POST["iNombreUtilisateur"] * $_POST["iNombreUtilisateur"];
    
        $array_res[1]= array('iNombreUtilisateur' => $_POST["iNombreUtilisateur"], 'iCarre' => $iCarre);
        echo json_encode($array_res);
        
    } else {
        $array_res[0] = array(
            'error' => 2
        );
        echo json_encode($array_res);
    }
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