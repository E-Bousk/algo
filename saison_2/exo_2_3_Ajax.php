<?php
if ((isset($_POST["iPrixArticle"]) && $_POST["iPrixArticle"] !== "") 
    && (isset($_POST["iNombreArticle"]) && $_POST["iNombreArticle"] !== "") 
    && (isset($_POST["iTauxTVA"]) && $_POST["iTauxTVA"] !== "")
    ) {

        // indique pas d'erreur
        $array_res[0] = array(
            'error' => 0
        );

        $iPrixArticle= $_POST["iPrixArticle"];
        $iNombreArticle= $_POST["iNombreArticle"];
        $iTauxTVA= $_POST["iTauxTVA"];
        $iTTC= $iPrixArticle * $iNombreArticle * (1+ $iTauxTVA/100 );

        $array_res[1]= array('iTTC' => $iTTC);
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