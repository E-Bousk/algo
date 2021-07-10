<?php

    $string= file_get_contents("liste_francais.txt");
        // var_dump($string);
    $aofString= explode("\n", $string);
        // var_dump($aofString);

    for ($i=0; $i<count($aofString); $i++)
    {
        // <!> pour eviter le saut de ligne non voulu !! <!>
        $sansSautdeLigneIntempestif = trim($aofString[$i]);
        $aofString[$i]= "\$aDico[".$i."]= \"".$sansSautdeLigneIntempestif."\";";
    }
        // var_dump($aofString);

    $sNewString = implode("\n",$aofString);
        // var_dump($sNewString);
    file_put_contents("liste_francais.txt",$sNewString);

?>