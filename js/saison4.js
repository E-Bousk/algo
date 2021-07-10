// --------------------
// --------------------
// --   EXERCICE 1   --
// --------------------
// --------------------

// --------------------
// --------------------
// --   EXERCICE 2   --
// --------------------
// --------------------

	// ALGORITHME Exo_4_2 JSPROMPT
    function Exo_4_2()
    // DEBUT
	{
        var iHeures, iMinutes;

        //Ecrire "Entrez l'heure actuelle :"
        //Lire iHeures
        iHeures=prompt("Entrez l'heure actuelle :");
        //Ecrire "Entrez les minutes :"
        //Lire iMinutes
        iMinutes=prompt("Entrez les minutes :");

        iMinutes=parseInt(iMinutes)+1;

        //Si iMinutes=60 alors
        if (iHeures!=23 & iMinutes==60)
        {
            iHeures=parseInt(iHeures)+1;
            iMinutes="00";
            //Ecrire "Dans une minute, il sera " + iHeure + " heure(s) " + iMinutes
            alert("Dans une minute, il sera " + iHeures + " heure(s) " + iMinutes);
        }

        //SINON SI iHeures=23 ET iMinutes=60 alors
        else if (iHeures==23 & iMinutes==60)
        {
            //Ecrire "Dans une minute, il sera 00 heure 00"
            alert("Dans une minute, il sera 00 heure 00");
        }
        //SINON
        else
        {
            //Ecrire "Dans une minute, il sera " + iHeure + " heure(s) " + iMinutes
            alert("Dans une minute, il sera " + iHeures + " heure(s) " + iMinutes + " minutes");
        }
        //FINSI		
    //FIN	
    }
// ----------
// ----------

	// ALGORITHME Exo_4_2 JSFORM
    function Exo_4_2_jsform()
    // DEBUT
	{
        var iHeures, iMinutes;

        //Ecrire "Entrez l'heure actuelle :"
        //Lire iHeures
        iHeures=document.getElementById("iHeures").value;
        //Ecrire "Entrez les minutes :"
        //Lire iMinutes
        iMinutes=document.getElementById("iMinutes").value;

        iMinutes=parseInt(iMinutes)+1;

        //Si iMinutes=60 alors
        if (iHeures !=23 & iMinutes==60)
        {
            iHeures=parseInt(iHeures)+1;
            iMinutes="00";
            //Ecrire "Dans une minute, il sera " + iHeure + " heure(s) " + iMinutes
            document.getElementById("sp_resultat_code").innerHTML="Dans une minute, il sera " + iHeures + " heure(s) " + iMinutes;
        }

        //SINON SI iHeures=23 ET iMinutes=60 alors
        else if (iHeures==23 & iMinutes==60)
        {
            //Ecrire "Dans une minute, il sera 00 heure 00"
            document.getElementById("sp_resultat_code").innerHTML="Dans une minute, il sera 00 heure 00";
        }
        //SINON
        else
        {
            //Ecrire "Dans une minute, il sera " + iHeure + " heure(s) " + iMinutes
            document.getElementById("sp_resultat_code").innerHTML="Dans une minute, il sera " + iHeures + " heure(s) " + iMinutes;
        }
        //FINSI		
    //FIN	
    }
// ----------
// ----------

	// ALGORITHME Exo_4_2 JQUERY
    function Exo_4_2_jquery()
    // DEBUT
	{
        var iHeures, iMinutes;

        //Ecrire "Entrez l'heure actuelle :"
        //Lire iHeures
        iHeures=$("#iHeures").val();
        //Ecrire "Entrez les minutes :"
        //Lire iMinutes
        iMinutes=$("#iMinutes").val();

        iMinutes=parseInt(iMinutes)+1;

        //Si iMinutes=60 alors
        if (iHeures!=23 & iMinutes==60)
        {
            iHeures=parseInt(iHeures)+1;
            iMinutes="00";
            //Ecrire "Dans une minute, il sera " + iHeure + " heure(s) " + iMinutes
            $("#sp_resultat_code").html("Dans une minute, il sera " + iHeures + " heure(s) " + iMinutes);
        }

        //SINON SI iHeures=23 ET iMinutes=60 alors
        else if (iHeures==23 & iMinutes==60)
        {
            //Ecrire "Dans une minute, il sera 00 heure 00"
            $("#sp_resultat_code").html("Dans une minute, il sera 00 heure 00");
        }
        //SINON
        else
        {
            //Ecrire "Dans une minute, il sera " + iHeure + " heure(s) " + iMinutes
            $("#sp_resultat_code").html("Dans une minute, il sera " + iHeures + " heure(s) " + iMinutes);
        }
        //FINSI		
    //FIN	
    }
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 3   --
// --------------------
// --------------------

	// ALGORITHME Exo_4_3 JSPROMPT
    function Exo_4_3() 
    // DEBUT
	{ 
        var iHeures, iMinutes, iSecondes;

        //Ecrire "Entrez l'heure actuelle :"
        //Lire iHeures
        iHeures=prompt("Entrez l'heure actuelle :");
        //Ecrire "Entrez les minutes :"
        //Lire iMinutes
        iMinutes=prompt("Entrez les minutes :");
        //Ecrire "Entrez les secondes :"
        //Lire iSecondes
        iSecondes=prompt("Entrez les secondes :");

        iSecondes=parseInt(iSecondes)+1;

        //Si iSecondes=60 alors
        if (iSecondes==60)
        {
            iSecondes=0;
            iMinutes=parseInt(iMinutes)+1;
        }

        //Si iMinutes=60 alors
        if (iMinutes==60)
        {
            iMinutes=0;
            iHeures=parseInt(iHeures)+1;
        }
        
        //Si iHeures=60 alors
        if (iHeures==24)
        {
            iHeures=0;
        }

        alert("Dans une seconde, il sera " + iHeures + " heure(s) " + iMinutes + " minute(s) " + iSecondes + " seconde(s)" );
    }
// ----------
// ----------

	// ALGORITHME Exo_4_3 JSFORM
    function Exo_4_3_jsform() 
    // DEBUT
	{ 
        var iHeures, iMinutes, iSecondes;

        //Ecrire "Entrez l'heure actuelle :"
        //Lire iHeures
        iHeures=document.getElementById("iHeures").value;
        //Ecrire "Entrez les minutes :"
        //Lire iMinutes
        iMinutes=document.getElementById("iMinutes").value;
        //Ecrire "Entrez les secondes :"
        //Lire iSecondes
        iSecondes=document.getElementById("iSecondes").value;

        iSecondes=parseInt(iSecondes)+1;

        //Si iSecondes=60 alors
        if (iSecondes==60)
        {
            iSecondes=0;
            iMinutes=parseInt(iMinutes)+1;
        }

        //Si iMinutes=60 alors
        if (iMinutes==60)
        {
            iMinutes=0;
            iHeures=parseInt(iHeures)+1;
        }
        
        //Si iHeures=60 alors
        if (iHeures==24)
        {
            iHeures=0;
        }

        document.getElementById("sp_resultat_code").innerHTML=("Dans une seconde, il sera " + iHeures + " heure(s) " + iMinutes + " minute(s) " + iSecondes + " seconde(s)") ;
    }
// ----------
// ----------					

	// ALGORITHME Exo_4_3 JQUERY
    function Exo_4_3_jquery() 
    // DEBUT
    { 
        var iHeures, iMinutes, iSecondes;

        //Ecrire "Entrez l'heure actuelle :"
        //Lire iHeures
        iHeures=$("#iHeures").val();
        //Ecrire "Entrez les minutes :"
        //Lire iMinutes
        iMinutes=$("#iMinutes").val();
        //Ecrire "Entrez les secondes :"
        //Lire iSecondes
        iSecondes=$("#iSecondes").val();

        iSecondes=parseInt(iSecondes)+1;

        //Si iSecondes=60 alors
        if (iSecondes==60)
        {
            iSecondes=0;
            iMinutes=parseInt(iMinutes)+1;
        }

        //Si iMinutes=60 alors
        if (iMinutes==60)
        {
            iMinutes=0;
            iHeures=parseInt(iHeures)+1;
        }
        
        //Si iHeures=60 alors
        if (iHeures==24)
        {
            iHeures=0;
        }

        $("#sp_resultat_code").html("Dans une seconde, il sera " + iHeures + " heure(s) " + iMinutes + " minute(s) " + iSecondes + " seconde(s)" );
    }
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 4   --
// --------------------
// --------------------

	// ALGORITHME Exo_4_4 JSPROMPT
    function Exo_4_4() 
    // DEBUT
	{ 
        var iNombre;

        //Ecrire "Entrez le nombre de photocopies réalisées :"
        //Lire iNombre
        iNombre=prompt("Entrez le nombre de photocopies réalisées :");
        

        //Si iNombre<=10 alors
        //Ecrire "Votre facture s'élève à :" + iNombre*0.1 + "€"
        if (iNombre<=10){
            alert("Votre facture s'élève à : " + iNombre*0.1 + "€");
        }

        //Si iNombre >10 & <=30 alors
        //Ecrire "Votre facture s'élève à :" + (1+iNombre*0.09) + "€"
            if (iNombre>10 && iNombre<=30){
            iNombre=iNombre-10;
            alert("Votre facture s'élève à : " + (1+iNombre*0.09) + "€");
        }

        //Si iNombre >30
        //Ecrire "Votre facture s'élève à :" + (2.8+iNombre*0.08) + "€"
        if (iNombre>30){
            iNombre=iNombre-30;
            alert("Votre facture s'élève à : " + (2.8+iNombre*0.08) + "€");
        }
    //FIN
    }
// ----------
// ----------

	// ALGORITHME Exo_4_4 JSFORM
    function Exo_4_4_jsform() 
    // DEBUT
	{ 
        var iNombre;

        //Ecrire "Entrez le nombre de photocopies réalisées :"
        //Lire iNombre
        iNombre=document.getElementById("iNombre").value;
        

        //Si iNombre<=10 alors
        //Ecrire "Votre facture s'élève à :" + iNombre*0.1 + "€"
        if (iNombre<=10){
            document.getElementById("sp_resultat_code").innerHTML="Votre facture s'élève à : " + (iNombre*0.1).toFixed(2) + " €";
        }

        //Si iNombre >10 & <=30 alors
        //Ecrire "Votre facture s'élève à :" + (1+iNombre*0.09) + "€"
            if (iNombre>10 && iNombre<=30){
            iNombre=iNombre-10;
            document.getElementById("sp_resultat_code").innerHTML="Votre facture s'élève à : " + (1+iNombre*0.09).toFixed(2) + " €";
        }

        //Si iNombre >30
        //Ecrire "Votre facture s'élève à :" + (2.8+iNombre*0.08) + "€"
        if (iNombre>30){
            iNombre=iNombre-30;
            document.getElementById("sp_resultat_code").innerHTML="Votre facture s'élève à : " + (2.8+iNombre*0.08).toFixed(2) + " €";
        }
    //FIN
    }
// ----------
// ----------

	// ALGORITHME Exo_4_4 JQUERY
    function Exo_4_4_jquery() 
    // DEBUT
	{ 
        var iNombre;

        //Ecrire "Entrez le nombre de photocopies réalisées :"
        //Lire iNombre
        iNombre=$("#iNombre").val();

        //Si iNombre<=10 alors
        //Ecrire "Votre facture s'élève à :" + iNombre*0.1 + "€"
        if (iNombre<=10){
            $("#sp_resultat_code").html("Votre facture s'élève à : " + (iNombre*0.1).toFixed(2) + " €");
        }

        //Si iNombre >10 & <=30 alors
        //Ecrire "Votre facture s'élève à :" + (1+iNombre*0.09) + "€"
            if (iNombre>10 && iNombre<=30){
            iNombre=iNombre-10;
            $("#sp_resultat_code").html("Votre facture s'élève à : " + (1+iNombre*0.09).toFixed(2) + " €");
        }

        //Si iNombre >30
        //Ecrire "Votre facture s'élève à :" + (2.8+iNombre*0.08) + "€"
        if (iNombre>30){
            iNombre=iNombre-30;
            $("#sp_resultat_code").html("Votre facture s'élève à : " + (2.8+iNombre*0.08).toFixed(2) + " €");
        }
    //FIN
    }
// ----------
// ----------
// --------------------
// --   EXERCICE 5   --
// --------------------
// --------------------

	// ALGORITHME Exo_4_5 JSPROMPT
    
	// C'EST FINI !!
// ----------
// ----------

	// ALGORITHME Exo_4_5 JSFORM
    // function Exo_4_5_jsform() 
    // // DEBUT
	// { 
    //     var iNombre, bH, bF;

    //     //
    //     //

    //     iNombre=document.getElementById("iNombre").value;

    //     if (document.getElementById('bHom').checked) {
    //         bH = document.getElementById('bHom').value;
    //     }

    //     if (document.getElementById('bFem').checked) {
    //         bF = document.getElementById('bFem').value;
    //     }


    //     //Si 
    //     //Ecrire 
    //     if (bH && iNombre>20){
    //         document.getElementById("sp_resultat_code").innerHTML="Vous êtes imposable";
    //     }

    //     //Si 
    //     //Ecrire 
    //     else if (bF && iNombre >=18 && iNombre <=35){
    //         document.getElementById("sp_resultat_code").innerHTML="Vous êtes imposable";
    //     }

    //     //Si 
    //     //Ecrire
    //     else {
    //         document.getElementById("sp_resultat_code").innerHTML="Vous n'êtes pas imposable";
    //     }
    // //FIN
    // }

	// ALGORITHME Exo_4_5 JSFORM
    function Exo_4_5_jsform() 
    // DEBUT
	{ 
        var iNombre;
        var bH= false;

        //Ecrire "Entrez votre age :"
        //Lire iNombre
        iNombre=document.getElementById("iNombre").value;

        //Si radio Homme sélectionné
        if (document.formPHP.bSexe[0].checked == true)   {
            bH= true;
        }  

        //Si "Homme" séléctionné et age > 20
        //Ecrire "Vous êtes imposable"
        if ((bH) && (iNombre>20)){
            document.getElementById("sp_resultat_code").innerHTML="Vous êtes imposable";
        }

        //Si "Femme" séléctionné et age >=18 et <=35
        //Ecrire "Vous êtes imposable"
        else if ((!bH) && (iNombre) >=18 && (iNombre) <=35){
            document.getElementById("sp_resultat_code").innerHTML="Vous êtes imposable";
        }

        //SINON
        //Ecrire "Vous n'êtes pas imposable"
        else {
            document.getElementById("sp_resultat_code").innerHTML="Vous n'êtes pas imposable";
        }
    //FIN
    }    
// ----------
// ----------

	// ALGORITHME Exo_4_5 JQUERY
    function Exo_4_5_jquery() 
        // DEBUT
	{ 
        var iNombre;
        var bH= false;

        //
        //

        iNombre=$("#iNombre").val();

        if ( $("#bSexeH:checked").val() == "H"){
            bH= true;
        }  
        
        //Si 
        //Ecrire 
        if ((bH) && (iNombre>20)){
            $("#sp_resultat_code").html("Vous êtes imposable");
        }

        //Si 
        //Ecrire 
        else if ((!bH) && (iNombre) >=18 && (iNombre) <=35){
            $("#sp_resultat_code").html("Vous êtes imposable");
        }

        //Si 
        //Ecrire
        else {
            $("#sp_resultat_code").html("Vous n'êtes pas imposable");
        }
    //FIN
    }
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 6   --
// --------------------
// --------------------
	
	// ALGORITHME Exo_4_6 JSFORM
	function Exo_4_6_jsform()
	//Début
	{
		var iCandidat1, iCandidat2, iCandidat3, iCandidat4, bBattu, bBallotage, bElu;

        //Ecrire "Entrez le score (en %) de premier tour du candidat # 1 : "
        //Lire iCandidat1
        iCandidat1=parseInt(document.getElementById("iCandidat1").value);
        // console.log("iCandidat1 = " + iCandidat1);

        //Ecrire "Entrez le score (en %) de premier tour du candidat # 2 : "
        // Lire iCandidat2
        iCandidat2=parseInt(document.getElementById("iCandidat2").value);
        // console.log("iCandidat2 = " + iCandidat2);

        // Ecrire "Entrez le score (en %) de premier tour du candidat # 3 : "
        // Lire iCandidat3
        iCandidat3=parseInt(document.getElementById("iCandidat3").value);
        // console.log("iCandidat3 = " + iCandidat3);

        // Ecrire "Entrez le score (en %) de premier tour du candidat # 4 : "
        // Lire iCandidat4
        iCandidat4=parseInt(document.getElementById("iCandidat4").value);
        // console.log("iCandidat4 = " + iCandidat4);

        
        bBattu = iCandidat1<12.5 || iCandidat2>50 || iCandidat3>50 || iCandidat4>50 ;
        // console.log("bBattu = " + bBattu);
        bElu = iCandidat1>50;
        // console.log("bElu = " + bElu);
        bBallotage = iCandidat1>=12.5 && iCandidat1<=50
        // console.log("bBallotage = " + bBallotage);



        //Si iCandidat1 <12.5 ou Candidat2>50 ou Candidat3>50 ou Candidat4>50 
        if (bBattu)
        {
            // console.log("IF 1");
            //Ecrire "Le candidat # 1 est battu dès le premier tour"
            document.getElementById("sp_resultat_code").innerHTML= "Le candidat # 1 est battu dès le premier tour";
        }

        //Si iCandidat1 >50
        else if (bElu)
        {
            // console.log("IF 2");
            //Ecrire "Le candidat # 1 est élu au premier tour"
            document.getElementById("sp_resultat_code").innerHTML= "Le candidat # 1 est élu au premier tour";
        }

        //Si iCandidat1 <=50 ET >=12.5 OU <iCandidat2 OU <iCandidat3 OU <iCandidat3
        else if ((bBallotage) && (iCandidat1 < iCandidat2) || (bBallotage) && (iCandidat1 < iCandidat3) ||  (bBallotage) && (iCandidat1 < iCandidat4))
        {
            // console.log("IF 3");
            //Ecrire "Le candidat # 1 est en ballotage défavorable au second tour"
            document.getElementById("sp_resultat_code").innerHTML=("Le candidat # 1 est en ballotage défavorable au 2nd tour");
        }

        //SiNON 
        else 
        {
            // console.log("IF 4");
            //Ecrire "Le candidat # 1 est en ballotage favorable au second tour"
            document.getElementById("sp_resultat_code").innerHTML=("Le candidat # 1 est en ballotage favorable au second tour");
        }
    //FIN
    }
// ----------
// ----------

	// ALGORITHME Exo_4_6 JQUERY
	function Exo_4_6_jquery()
	//Début
	{
		var iCandidat1, iCandidat2, iCandidat3, iCandidat4, bBattu, bBallotage, bElu;

        //Ecrire "Entrez le score (en %) de premier tour du candidat # 1 : "
        //Lire iCandidat1
        iCandidat1=parseInt($("#iCandidat1").val());
        //Ecrire "Entrez le score (en %) de premier tour du candidat # 2 : "
        // Lire iCandidat2
        iCandidat2=parseInt($("#iCandidat2").val());
        // Ecrire "Entrez le score (en %) de premier tour du candidat # 3 : "
        // Lire iCandidat3
        iCandidat3=parseInt($("#iCandidat3").val());    
        // Ecrire "Entrez le score (en %) de premier tour du candidat # 4 : "
        // Lire iCandidat4
        iCandidat4=parseInt($("#iCandidat4").val());


        bBattu = iCandidat1<12.5 || iCandidat2>50 || iCandidat3>50 || iCandidat4>50;
        bElu = iCandidat1>50;
        bBallotage = iCandidat1>=12.5 && iCandidat1<=50

        //Si iCandidat1 <12.5 ou Candidat2>50 ou Candidat3>50 ou Candidat4>50
        if (bBattu)
        {
            //Ecrire "Le candidat # 1 est battu dès le premier tour"
            document.getElementById("sp_resultat_code").innerHTML= "Le candidat # 1 est battu dès le premier tour";
        }

        //Si iCandidat1 >50
        else if (bElu)
        {
            //Ecrire "Le candidat # 1 est élu au premier tour"
            $("#sp_resultat_code").html("Le candidat # 1 est élu au premier tour");
        }

        //Si iCandidat1 <=50 ET >=12.5 OU <iCandidat2 OU <iCandidat3 OU <iCandidat3
        
        else if ((bBallotage) && (iCandidat1 < iCandidat2) || (bBallotage) && (iCandidat1 < iCandidat3) ||  (bBallotage) && (iCandidat1 < iCandidat4))
        {
            //Ecrire "Le candidat # 1 est en ballotage défavorable au second tour"
            $("#sp_resultat_code").html("Le candidat # 1 est en ballotage défavorable au 2nd tour");
        }

        //SiNON 
        else 
        {
            //Ecrire "Le candidat # 1 est en ballotage favorable au second tour"
            $("#sp_resultat_code").html("Le candidat # 1 est en ballotage favorable au second tour");
        }
    //FIN
    }
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 7   --
// --------------------
// --------------------

    // ALGORITHME Exo_4_7 JSFORM
    function Exo_4_7_jsform()
    //Début
    {
        var iConducteur, iPermis, iAccident, iFidelite, sRouge, sOrange, sVert, sBleu, bConducteur, bPermis ;

        //Ecrire "Entrez l'age du conducteur :"
        //Lire iConducteur
        iConducteur= document.getElementById("iConducteur").value;
        // Ecrire "Entrez l'age du permis :"
        // Lire iPermis
        iPermis= document.getElementById("iPermis").value;
        //Ecrire "Entrez le nombre d'accident responsable :"
        //Lire iConducteur
        iAccident= document.getElementById("iAccident").value;
        //Ecrire "Entrez le nombre d'année d'inscription à la compagnie d'assurance :"
        // Lire iPermis
        iFidelite= document.getElementById("iFidelite").value;


        bConducteur = iConducteur>25;
        bPermis = iPermis>2;

        sRouge = "rouge";
        sOrange = "orange";
        sVert = "vert";
        sBleu = "bleu";

        if (iFidelite >5)
        {
            sRouge=sOrange;
            sOrange=sVert;
            sVert=sBleu;        
        }

        if ((!bConducteur && !bPermis) && iAccident==0 || ((!bConducteur &&  bPermis) || (bConducteur &&  !bPermis)) &&  iAccident==1 || (bConducteur && bPermis) && iAccident==2)
        {
            document.getElementById("sp_resultat_code").innerHTML="La couleur de votre contrat : " + sRouge;
        }

        else if (((!bConducteur &&  bPermis) || (bConducteur &&  !bPermis)) &&  iAccident==0 || (bConducteur && bPermis) && iAccident==1)
        {
            document.getElementById("sp_resultat_code").innerHTML="La couleur de votre contrat : " + sOrange;
        }

        else if ((bConducteur && bPermis) && iAccident==0)
        {
            document.getElementById("sp_resultat_code").innerHTML="La couleur de votre contrat : " + sVert;
        }

        else 
        {
            document.getElementById("sp_resultat_code").innerHTML="Nous ne pouvons pas vous assurer";
        }
    //FIN
    }
// ----------
// ----------

    // ALGORITHME Exo_4_7 JQUERY
    function Exo_4_7_jquery()
    //Début
    {
        var iConducteur, iPermis, iAccident, iFidelite, sRouge, sOrange, sVert, sBleu, bConducteur, bPermis ;

        //Ecrire "Entrez l'age du conducteur :"
        //Lire iConducteur
        iConducteur= $("#iConducteur").val();
        // Ecrire "Entrez l'age du permis :"
        // Lire iPermis
        iPermis= $("#iPermis").val();
        //Ecrire "Entrez le nombre d'accident responsable :"
        //Lire iConducteur
        iAccident= $("#iAccident").val();
        //Ecrire "Entrez le nombre d'année d'inscription à la compagnie d'assurance :"
        // Lire iPermis
        iFidelite= $("#iFidelite").val();


        bConducteur = iConducteur>25;
        bPermis = iPermis>2;

        sRouge = "rouge";
        sOrange = "orange";
        sVert = "vert";
        sBleu = "bleu";

        if (iFidelite >5)
        {
            sRouge=sOrange;
            sOrange=sVert;
            sVert=sBleu;        
        }

        if ((!bConducteur && !bPermis) && iAccident==0 || ((!bConducteur &&  bPermis) || (bConducteur &&  !bPermis)) &&  iAccident==1 || (bConducteur && bPermis) && iAccident==2)
        {
            $("#sp_resultat_code").html("La couleur de votre contrat : " + sRouge);
        }

        else if (((!bConducteur &&  bPermis) || (bConducteur &&  !bPermis)) &&  iAccident==0 || (bConducteur && bPermis) && iAccident==1)
        {
            $("#sp_resultat_code").html("La couleur de votre contrat : " + sOrange);
        }

        else if ((bConducteur && bPermis) && iAccident==0)
        {
            $("#sp_resultat_code").html("La couleur de votre contrat : " + sVert);
        }

        else 
        {
            $("#sp_resultat_code").html("Nous ne pouvons pas vous assurer");
        }
    //FIN
    }
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 8   --
// --------------------
// --------------------

	// ALGORITHME Exo_4_8 JSFORM
    function Exo_4_8_jsform()
    //Début
    {
        var iJour, iMois, iAnnee, bBis, bTrente;

        //Ecrire "Entrez le jour"
        // Lire iJour
        iJour=document.getElementById("iJour").value;
        // Ecrire "Entre le mois"
        // Lire iMois
        iMois=document.getElementById("iMois").value;
        // Ecrire "Entrez l'année"
        // Lire iAnnee
        iAnnee=document.getElementById("iAnnee").value;

        bBis= iAnnee%4===0 && iAnnee%100!=0 || iAnnee%400===0;        
        bTrente=(iMois==="avr") || (iMois==="jui") || (iMois==="sep") || (iMois==="nov");



        if ((iMois==="fev" && ((iJour>"28" && !bBis) || iJour>"29")) || (iJour>"30" && bTrente) || (iJour>"31"))
        {
            document.getElementById("sp_resultat_code").innerHTML="votre date est incorrect";
        }
         else 
         {
            document.getElementById("sp_resultat_code").innerHTML="votre date est valide";
         }

    }
// ----------
// ----------

	// ALGORITHME Exo_4_8 JQUERY
    function Exo_4_8_jquery()
    //Début
    {
        var iJour, iMois, iAnnee, bBis, bTrente;

        //Ecrire "Entrez le jour"
        // Lire iJour
        iJour=$("#iJour").val();
        // Ecrire "Entre le mois"
        // Lire iMois
        iMois=$("#iMois").val();
        // Ecrire "Entrez l'année"
        // Lire iAnnee
        iAnnee=$("#iAnnee").val();

        bBis= iAnnee%4===0 && iAnnee%100!=0 || iAnnee%400===0;        
        bTrente=(iMois==="avr") || (iMois==="jui") || (iMois==="sep") || (iMois==="nov");



        if ((iMois==="fev" && ((iJour>"28" && !bBis) || iJour>"29")) || (iJour>"30" && bTrente) || (iJour>"31"))
        {
            $("#sp_resultat_code").html("votre date est incorrect");
        }
            else 
            {
                $("#sp_resultat_code").html("votre date est valide");
            }

    }
// ----------
// ----------