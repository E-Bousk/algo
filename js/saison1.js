// --------------------
// --------------------
// --   EXERCICE 1   --
// --------------------
// --------------------

// ALGORITHME Exo_1_1 JSPROMPT
function Exo_1_1() 
	// DEBUT
	{
		//VALEUR A, B
		var A, B;

		A=17;
		B=A+2;
		A=9;

		alert ("A = " + A + '\n' + "B = " + B);

	//Fin
	}
// ----------
// ----------

// ALGORITHME Exo_1_1 JSFORM
function Exo_1_1_jsform() 
	// DEBUT
	{
		//VALEUR A, B
		var A, B;

		//attribution des valeurs
		A=17;
		B=A+2;
		A=9;

		//Ecrire valeur A, B
		document.getElementById("sp_resultat_code").innerHTML= ("A = " + A + "<br/>" + "B = " + B);
	//Fin
	}
// ----------
// ----------

// ALGORITHME Exo_1_1 JQUERY
function Exo_1_1_jquery() 
	// DEBUT
	{
		//VALEUR A, B
		var A, B;

		//attribution des valeurs
		A=17;
		B=A+2;
		A=9;

		//Ecrire valeur A, B
		$("#sp_resultat_code").html("A = " + A + "<br/>" + "B = " + B);
	//Fin
	}
// ----------
// ----------

// ALGORITHME Exo_1_1 PHP - Appel AJAX
function Exo_1_1_phpAjax() {
	$.ajax(
		{
			type: "POST", 
			url: "exo_1_1_Ajax.php", 
			async: true, 
			// data: datas, 
			dataType: "json", 
			cache: false, 
		})
	
		.done(function(result) 
		{
			$("#sp_resultat_code").html("A = " + result['A'] + "<br> B = "+ result['B']);
		})
	
		.fail(function(err) 
		{
			// Affichage d'erreur
			console.log("fail");
			alert("error : " + err.status);
		});
}
// ----------
// ----------

// --------------------
// --------------------
// --   EXERCICE 2   --
// --------------------
// --------------------

// ALGORITHME Exo_1_2 JSPROMPT
function Exo_1_2() 
    // DEBUT
    {
        //VALEUR A, B, C
        var A, B, C;

        //attribution des valeurs
        A=51;
        B=34;
        C=A+B;
        A=21;
        C=B-A;

        //Ecrire valeur A, B, C
        alert ("A = " + A + '\n' + "B = " + B + '\n' + "C = " + C);
    //Fin
    }

// ----------
// ----------

// ALGORITHME Exo_1_2 JSFORM
function Exo_1_2_jsform() 
    // DEBUT
    {
        //VALEUR A, B, C
        var A, B, C;

        //attribution des valeurs
        A=51;
        B=34;
        C=A+B;
        A=21;
        C=B-A;

        //Ecrire valeur A, B, C
        document.getElementById("sp_resultat_code").innerHTML= ("A = " + A + "</br>" + "B = " + B + "</br>" + "C = " + C);
    //Fin
    }
// ----------
// ----------

// ALGORITHME Exo_1_2 JQUERY
function Exo_1_2_jquery() 
	// DEBUT
	{
		//VALEUR A, B, C
		var A, B, C;

		//attribution des valeurs
		A=51;
		B=34;
		C=A+B;
		A=21;
		C=B-A;

		//Ecrire valeur A, B, C
		$("#sp_resultat_code").html("A = " + A + "</br>" + "B = " + B + "</br>" + "C = " + C);
	//Fin
	}
// ----------
// ----------

// ALGORITHME Exo_1_2 PHP - Appel AJAX
function Exo_1_2_phpAjax() {
	$.ajax(
		{
			type: "POST", 
			url: "exo_1_2_Ajax.php", 
			async: true, 
			// data: datas, 
			dataType: "json", 
			cache: false, 
		})
	
		.done(function(result) 
		{
			$("#sp_resultat_code").html("A = " + result['A'] + "<br> B = "+ result['B'] + "<br> C = "+ result['C']);
		})
	
		.fail(function(err) 
		{
			// Affichage d'erreur
			console.log("fail");
			alert("error : " + err.status);
		});
}
// ----------
// ----------

// --------------------
// --------------------
// --   EXERCICE 3   --
// --------------------
// --------------------

// ALGORITHME Exo_1_3 JSPROMPT
function Exo_1_3() 
    // DEBUT
    {
        //VALEUR A, B
        var A, B;

        //attribution des valeurs
        A=49;
        B=A+4;
        A=A+1;
        B=A-4;

        //Ecrire valeur A, B
        alert ("A = " + A + '\n' + "B = " + B);
    //Fin
    }
// ----------
// ----------

// ALGORITHME Exo_1_3 JSFORM
function Exo_1_3_jsform() 
	// DEBUT
	{
		//VALEUR A, B
		var A, B;

		//attribution des valeurs
        A=49;
        B=A+4;
        A=A+1;
        B=A-4;

		//Ecrire valeur A, B
		document.getElementById("sp_resultat_code").innerHTML= ("A = " + A + "<br/>" + "B = " + B);
	//Fin
	}
// ----------
// ----------					

// ALGORITHME Exo_1_3 JQUERY
function Exo_1_3_jquery() 
	// DEBUT
	{
		//VALEUR A, B
		var A, B;

		//attribution des valeurs
        A=49;
        B=A+4;
        A=A+1;
        B=A-4;

		//Ecrire valeur A, B
		$("#sp_resultat_code").html("A = " + A + "<br/>" + "B = " + B);
	//Fin
	}
// ----------
// ----------
// ALGORITHME Exo_1_3 PHP - Appel AJAX
function Exo_1_3_phpAjax() {
	$.ajax(
		{
			type: "POST", 
			url: "exo_1_3_Ajax.php", 
			async: true, 
			// data: datas, 
			dataType: "json", 
			cache: false, 
		})
	
		.done(function(result) 
		{
			$("#sp_resultat_code").html("A = " + result['A'] + "<br> B = "+ result['B']);
		})
	
		.fail(function(err) 
		{
			// Affichage d'erreur
			console.log("fail");
			alert("error : " + err.status);
		});
}
// ----------
// ----------

// --------------------
// --------------------
// --   EXERCICE 4   --
// --------------------
// --------------------

// ALGORITHME Exo_1_4 JSPROMPT
function Exo_1_4() 
// DEBUT
{
	//VALEUR A, B, C
	var A, B, C;

	//attribution des valeurs
	A=13;
	B=19;
	C=A+B;
	B=A+B;
	A=C;

	//Ecrire valeur A, B, C
	alert ("A = " + A + '\n' + "B = " + B + '\n' + "C = " + C);
//Fin
}
// ----------
// ----------

// ALGORITHME Exo_1_4 JSFORM
function Exo_1_4_jsform()
// DEBUT
{
	//VALEUR A, B, C
	var A, B, C;

	//attribution des valeurs
	A=13;
	B=19;
	C=A+B;
	B=A+B;
	A=C;

	//Ecrire valeur A, B, C
	document.getElementById("sp_resultat_code").innerHTML= ("A = " + A + "</br>" + "B = " + B + "</br>" + "C = " + C);
//Fin
}
// ----------
// ----------

// ALGORITHME Exo_1_4 JQUERY
function Exo_1_4_jquery() 
// DEBUT
{
	//VALEUR A, B, C
	var A, B, C;

	//attribution des valeurs
	A=13;
	B=19;
	C=A+B;
	B=A+B;
	A=C;

	//Ecrire valeur A, B, C
	$("#sp_resultat_code").html("A = " + A + "</br>" + "B = " + B + "</br>" + "C = " + C);
//Fin
}
// ----------
// ----------
// ALGORITHME Exo_1_4 PHP - Appel AJAX
function Exo_1_4_phpAjax() {
	$.ajax(
		{
			type: "POST", 
			url: "exo_1_4_Ajax.php", 
			async: true, 
			// data: datas, 
			dataType: "json", 
			cache: false, 
		})
	
		.done(function(result) 
		{
			$("#sp_resultat_code").html("A = " + result['A'] + "<br> B = "+ result['B'] + "<br> C = "+ result['C']);
		})
	
		.fail(function(err) 
		{
			// Affichage d'erreur
			console.log("fail");
			alert("error : " + err.status);
		});
}
// ----------
// ----------

// --------------------
// --------------------
// --   EXERCICE 5   --
// --------------------
// --------------------

// ALGORITHME Exo_1_5 JSPROMPT
function Exo_1_5() 
// DEBUT
{
	//VALEUR A, B
	var A, B;

	//attribution des valeurs
	A = 14;
	B = 29;
	A = B;
	B = A;

	//Ecrire valeur A, B
	alert ("A = " + A + '\n' + "B = " + B);
//Fin
}
// ----------
// ----------

// ALGORITHME Exo_1_5 JSFORM
function Exo_1_5_jsform()
// DEBUT
{
	//VALEUR A, B
	var A, B;

	//attribution des valeurs
	A = 14;
	B = 29;
	A = B;
	B = A;

	//Ecrire valeur A, B
	document.getElementById("sp_resultat_code").innerHTML=("A = " + A + "<br/>" + "B = " + B);
//Fin
}
// ----------
// ----------

// ALGORITHME Exo_1_5 JQUERY
function Exo_1_5_jquery() 
// DEBUT
{
	//VALEUR A, B
	var A, B;

	//attribution des valeurs
	A = 14;
	B = 29;
	A = B;
	B = A;

	//Ecrire valeur A, B
	$("#sp_resultat_code").html("A = " + A + "<br/>" + "B = " + B);
//Fin
}
// ----------
// ----------
// ALGORITHME Exo_1_5 PHP - Appel AJAX
function Exo_1_5_phpAjax() {
	$.ajax(
		{
			type: "POST", 
			url: "exo_1_5_Ajax.php", 
			async: true, 
			// data: datas, 
			dataType: "json", 
			cache: false, 
		})
	
		.done(function(result) 
		{
			$("#sp_resultat_code").html("A = " + result['A'] + "<br> B = "+ result['B']);
		})
	
		.fail(function(err) 
		{
			// Affichage d'erreur
			console.log("fail");
			alert("error : " + err.status);
		});
}
// ----------
// ----------

// --------------------
// --------------------
// --   EXERCICE 6   --
// --------------------
// --------------------

// ALGORITHME Exo_1_6 JSPROMPT
function Exo_1_6() 
    // DEBUT
    {
        //VALEUR sVarA, sVarB, sTemp
        var sVarA, sVarB, sTemp;

		// ECRIRE "Entrez la valeur A"
		// LIRE sVarA
		sVarA= prompt("Entrez la valeur A :");

		// ECRIRE "Entrez la valeur B"
		// LIRE sVarB
		sVarB= prompt("Entrez la valeur B :");

		//Inversion des valeurs
        sTemp=sVarA;
        sVarA=sVarB;
        sVarB=sTemp;

        //Ecrire valeur A, B
        alert ("Inversion des valeurs :" + '\n' + "A = " + sVarA + '\n' + "B = " + sVarB);
    //Fin
    }
// ----------
// ----------

// ALGORITHME Exo_1_6 JSFORM
function Exo_1_6_jsform() 
    // DEBUT
    {
        //VALEUR sVarA, sVarB, sTemp
        var sVarA, sVarB, sTemp;

		// ECRIRE "Entrez la valeur A"
		// LIRE sVarA
		sVarA= document.getElementById("sVarA").value;

		// ECRIRE "Entrez la valeur B"
		// LIRE sVarB
		sVarB= document.getElementById("sVarB").value;

		//Inversion des valeurs
        sTemp=sVarA;
        sVarA=sVarB;
        sVarB=sTemp;

        //Ecrire valeur A, B
        document.getElementById("sp_resultat_code").innerHTML=("Inversion des valeurs :" + "</br>" + "A = " + sVarA + "</br>" + "B = " + sVarB);
    //Fin
    }

// ----------
// ----------

// ALGORITHME Exo_1_6 JQUERY
function Exo_1_6_jquery() 
    // DEBUT
    {
        //VALEUR sVarA, sVarB, sTemp
        var sVarA, sVarB, sTemp;

		// ECRIRE "Entrez la valeur A"
		// LIRE sVarA
		sVarA= $("#sVarA").val();

		// ECRIRE "Entrez la valeur B"
		// LIRE sVarB
		sVarB= $("#sVarB").val();

		//Inversion des valeurs
        sTemp=sVarA;
        sVarA=sVarB;
        sVarB=sTemp;

        //Ecrire valeur A, B
		$("#sp_resultat_code").html("Inversion des valeurs :" + "</br>" + "A = " + sVarA + "</br>" + "B = " + sVarB);
	//Fin
    }
// ----------
// ----------
// ALGORITHME Exo_1_6 PHP - Appel AJAX
function Exo_1_6_phpAjax()
{

	var datas = 
    {
        sVarA: $("#sVarA").val(),
        sVarB: $("#sVarB").val()
    }

	$.ajax(
	{
		type: "POST", 
		url: "exo_1_6_Ajax.php", 
		async: true, 
		data: datas, 
		dataType: "json", 
		cache: false
	})

	.done(function(result)
	{
        if (result[0]["error"] === 0)
        {
			$("#sp_resultat_code").html("Inversion des valeurs :</br>A = " + result[1]['sVarA'] + "</br>B = " + result[1]['sVarB']);
		}
        else 
        {
            // affiche un message d'erreur
            $("#sp_resultat_code").html("Veuillez saisir tous les champs !");
        }
	})
	
	.fail(function(err) 
	{
		// Affichage d'erreur
		console.log("fail");
		alert("error : " + err.status);
	});
}
// ----------
// ----------

// --------------------
// --------------------
// --   EXERCICE 7   --
// --------------------
// --------------------

// ALGORITHME Exo_1_7 JSPROMPT
function Exo_1_7() 
// DEBUT
{
	//VALEUR sVarA, sVarB, sVarC, sTemp
	var sVarA, sVarB, sVarC, sTemp;

	// ECRIRE "Entrez la valeur A"
	// LIRE sVarA
	sVarA= prompt("Entrez la valeur A :");

	// ECRIRE "Entrez la valeur B"
	// LIRE sVarB
	sVarB= prompt("Entrez la valeur B :");

	// ECRIRE "Entrez la valeur C"
	// LIRE sVarC
	sVarC= prompt("Entrez la valeur C :");

	//Inversion des valeurs
	sTemp=sVarA;
	sVarA=sVarC;
	sVarC=sVarB;
	sVarB=sTemp;

	//Ecrire valeur A, B, C
	alert ("Inversion des valeurs :" + '\n' + "A = " + sVarA + '\n' + "B = " + sVarB + '\n' + "C = " + sVarC);
//Fin
}
// ----------
// ----------

// ALGORITHME Exo_1_7 JSFORM
function Exo_1_7_jsform() 
// DEBUT
{
	//VALEUR sVarA, sVarB, sVarC, sTemp
	var sVarA, sVarB, sVarC, sTemp;

	// ECRIRE "Entrez la valeur A"
	// LIRE sVarA
	sVarA= document.getElementById("sVarA").value;

	// ECRIRE "Entrez la valeur B"
	// LIRE sVarB
	sVarB= document.getElementById("sVarB").value;

	// ECRIRE "Entrez la valeur C"
	// LIRE sVarC
	sVarC= document.getElementById("sVarC").value;

	//Inversion des valeurs
	sTemp=sVarA;
	sVarA=sVarC;
	sVarC=sVarB;
	sVarB=sTemp;

	//Ecrire valeur A, B, C
	document.getElementById("sp_resultat_code").innerHTML=("Inversion des valeurs :" + "</br>" + "A = " + sVarA + "</br>" + "B = " + sVarB + "</br>" + "C = " + sVarC);
//Fin
}
// ----------
// ----------

// ALGORITHME Exo_1_7 JQUERY
function Exo_1_7_jquery() 
// DEBUT
{
	//VALEUR sVarA, sVarB, sVarC, sTemp
	var sVarA, sVarB, sVarC, sTemp;

	// ECRIRE "Entrez la valeur A"
	// LIRE sVarA
	sVarA= $("#sVarA").val();

	// ECRIRE "Entrez la valeur B"
	// LIRE sVarB
	sVarB= $("#sVarB").val();

	// ECRIRE "Entrez la valeur C"
	// LIRE sVarC
	sVarC= $("#sVarC").val();

	//Inversion des valeurs
	sTemp=sVarA;
	sVarA=sVarC;
	sVarC=sVarB;
	sVarB=sTemp;

	//Ecrire valeur A, B, C
	$("#sp_resultat_code").html("Inversion des valeurs :" + "</br>" + "A = " + sVarA + "</br>" + "B = " + sVarB + "</br>" + "C = " + sVarC);
//Fin
}
// ----------
// ----------
// ALGORITHME Exo_1_7 PHP - Appel AJAX
function Exo_1_7_phpAjax()
{

	var datas = 
    {
        sVarA: $("#sVarA").val(),
        sVarB: $("#sVarB").val(),
		sVarC: $("#sVarC").val()
    }

	$.ajax(
	{
		type: "POST", 
		url: "exo_1_7_Ajax.php", 
		async: true, 
		data: datas, 
		dataType: "json", 
		cache: false
	})

	.done(function(result)
	{
        if (result[0]["error"] === 0)
        {
			$("#sp_resultat_code").html("Inversion des valeurs :</br>A = " + result[1]['sVarA'] + "</br>B = " + result[1]['sVarB'] + "</br>C = " + result[1]['sVarC']);
		}
        else 
        {
            // affiche un message d'erreur
            $("#sp_resultat_code").html("Veuillez saisir tous les champs !");
        }
	})
	
	.fail(function(err) 
	{
		// Affichage d'erreur
		console.log("fail");
		alert("error : " + err.status);
	});
}
// ----------
// ----------