// --------------------
// --------------------
// --   EXERCICE 1   --
// --------------------
// --------------------

	// ALGORITHME Exo_2_1 JSPROMPT
	function Exo_2_1() 
		// DEBUT
		{
			//VALEUR iNombreUtilisateur, iDouble 
			var iNombreUtilisateur, iDouble;

			//ECRIRE  "Veuillez saisir une valeur"
			//LIRE iNombreUtilisateur
			iNombreUtilisateur=prompt("Veuillez saisir une valeur");

			//calcule du double
			iDouble= iNombreUtilisateur * 2;

			//ECRIRE "Le double de" + iNombreUtilisateur + "est"+ iDouble
			alert("Le double de " + iNombreUtilisateur + " est "+ iDouble);
		//Fin
		}
// ----------
// ----------

	// ALGORITHME Exo_2_1 JSFORM
	function Exo_2_1_jsform()
		// DEBUT
		{
			//VALEUR iNombreUtilisateur, iDouble 
			var iNombreUtilisateur, iDouble;

			// ECRIRE  "Veuillez saisir une valeur"
			//LIRE iNombreUtilisateur
			iNombreUtilisateur=document.getElementById("iNombreUtilisateur").value;

			//calcule du double
			iDouble= iNombreUtilisateur * 2;

			//ECRIRE "Le double de" + iNombreUtilisateur + "est"+ iDouble
			document.getElementById("sp_resultat_code").innerHTML= "Le double de " + iNombreUtilisateur + " est " + iDouble;
		//Fin
		}
// ----------
// ----------

	// ALGORITHME Exo_2_1 JQUERY
	function Exo_2_1_jquery()
		// DEBUT
		{
			//VALEUR iNombreUtilisateur, iDouble 
			var iNombreUtilisateur, iDouble;
			
			// ECRIRE  "Veuillez saisir une valeur"
			//LIRE iNombreUtilisateur
			iNombreUtilisateur=$("#iNombreUtilisateur").val();
			
			//calcule du double
			iDouble= iNombreUtilisateur * 2;
			
			//ECRIRE "Le double de" + iNombreUtilisateur + "est"+ iDouble
			$("#sp_resultat_code").html("Le double de " + iNombreUtilisateur + " est "+ iDouble);
		//Fin
		}
// ----------
// ----------

// --------------------
// --------------------
// --   EXERCICE 2   --
// --------------------
// --------------------

// ALGORITHME Exo_2_2 JSPROMPT
	function Exo_2_2()
		// DEBUT
		{
			// VARIABLE iNombreUtilisateur, iCarre en NUMERIQUE
			var iNombreUtilisateur, iCarre;
			
			// ECRIRE "Veuillez saisir un nombre"
			// LIRE iNombreUtilisateur
			iNombreUtilisateur= prompt("Veuillez saisir un nombre");
			
			// iCarre= iNombreUtilisateur * iNombreUtilisateur
			iCarre= iNombreUtilisateur * iNombreUtilisateur;
			
			// ECRIRE "Le carré de " + iNombreUtilisateur + " est " + iCarre
			alert("Le carré de " + iNombreUtilisateur + " est " + iCarre);

		// FIN
		}
// ----------
// ----------

// ALGORITHME Exo_2_2 JSFORM
	function Exo_2_2_jsform()
		// DEBUT
		{
			// VARIABLE iNombreUtilisateur, iCarre en NUMERIQUE
			var iNombreUtilisateur, iCarre;
			
			// ECRIRE "Veuillez saisir un nombre"
			// LIRE iNombreUtilisateur
			iNombreUtilisateur= document.getElementById("iNombreUtilisateur").value;
			
			// iCarre= iNombreUtilisateur * iNombreUtilisateur
			iCarre= iNombreUtilisateur * iNombreUtilisateur;
			
			// ECRIRE "Le carré de " + iNombreUtilisateur + " est " + iCarre
			document.getElementById("sp_resultat_code").innerHTML= "Le carré de " + iNombreUtilisateur + " est " + iCarre;

		// FIN
		}
// ----------
// ----------

	// ALGORITHME Exo_2_2 JQUERY
	function Exo_2_2_jquery()
		// DEBUT
		{
			// VARIABLE iNombreUtilisateur, iCarre en NUMERIQUE
			var iNombreUtilisateur, iCarre;
			
			// ECRIRE "Veuillez saisir un nombre"
			// LIRE iNombreUtilisateur
			iNombreUtilisateur= $("#iNombreUtilisateur").val();
			
			// iCarre= iNombreUtilisateur * iNombreUtilisateur
			iCarre= iNombreUtilisateur * iNombreUtilisateur;
			
			// ECRIRE "Le carré de " + iNombreUtilisateur + " est " + iCarre
			$("#sp_resultat_code").html("Le carré de " + iNombreUtilisateur + " est " + iCarre);

		// FIN
		}
// ----------
// ----------

// --------------------
// --------------------
// --   EXERCICE 3   --
// --------------------
// --------------------

	// ALGORITHME Exo_2_3
	function Exo_2_3()
		// DEBUT
		{
			// VARIABLE iPrixArticle, iNombreArticle, iTauxTVA, iTTC en NUMERIQUE
			var iPrixArticle, iNombreArticle, iTauxTVA;

			// ECRIRE "Entrez le prix de l'article en €"
			// LIRE iPrixArticle
			iPrixArticle= prompt("Entrez le prix de l'article en €");

			// ECRIRE "Entrez le nombre d'article"
			// LIRE iNombreArticle
			iNombreArticle= prompt("Entrez le nombre d'article");

			// ECRIRE "Entrez le montant de la TVA en %"
			// LIRE iTauxTVA
			iTauxTVA= prompt("Entrez le montant de la TVA en %");

			// iCarre= iNombreUtilisateur * iNombreUtilisateur
			iTTC= iPrixArticle * iNombreArticle * (1+ iTauxTVA/100 );

			// ECRIRE "Le prix TTC est de " + iTTC + " €"
			alert("Le montant TTC est de " + iTTC + " €");

		// FIN
		}
// ----------
// ----------

	// ALGORITHME Exo_2_3
	function Exo_2_3_jsform()
		// DEBUT
		{
			// VARIABLE iPrixArticle, iNombreArticle, iTauxTVA, iTTC en NUMERIQUE
			var iPrixArticle, iNombreArticle, iTauxTVA, iTTC;

			// ECRIRE "Entrez le prix de l'article en €"
			// LIRE iPrixArticle
			iPrixArticle= document.getElementById("iPrixArticle").value;

			// ECRIRE "Entrez le nombre d'article"
			// LIRE iNombreArticle
			iNombreArticle= document.getElementById("iNombreArticle").value;

			// ECRIRE "Entrez le montant de la TVA en %"
			// LIRE iTauxTVA
			iTauxTVA= document.getElementById("iTauxTVA").value;

			// iCarre= iNombreUtilisateur * iNombreUtilisateur
			iTTC= iPrixArticle * iNombreArticle * (1+ iTauxTVA/100 );

			// ECRIRE "Le prix TTC est de " + iTTC + " €"
			document.getElementById("sp_resultat_code").innerHTML= "Le montant TTC est de " + iTTC + " €";

		// FIN
		}
// ----------
// ----------					

	// ALGORITHME Exo_2_3
	function Exo_2_3_jquery()
		// DEBUT
		{
			// VARIABLE iPrixArticle, iNombreArticle, iTauxTVA, iTTC en NUMERIQUE
			var iPrixArticle, iNombreArticle, iTauxTVA, iTTC;

			// ECRIRE "Entrez le prix de l'article en €"
			// LIRE iPrixArticle
			iPrixArticle= $("#iPrixArticle").val();

			// ECRIRE "Entrez le nombre d'article"
			// LIRE iNombreArticle
			iNombreArticle= $("#iNombreArticle").val();

			// ECRIRE "Entrez le montant de la TVA en %"
			// LIRE iTauxTVA
			iTauxTVA= $("#iTauxTVA").val();

			// iCarre= iNombreUtilisateur * iNombreUtilisateur
			iTTC= iPrixArticle * iNombreArticle * (1+ iTauxTVA/100 )

			// ECRIRE "Le prix TTC est de " + iTTC + " €"
			$("#sp_resultat_code").html("Le montant TTC est de " + iTTC + " €");

		// FIN
		}
// --------------------
// --------------------
// --   EXERCICE 4   --
// --------------------
// --------------------

	// ALGORITHME Exo_2_4
	function Exo_2_4()
		// DEBUT
		{
			// Variables, sV1, sV2, sV3, sV4 en alphanumerique
			var sV1, sV2, sV3, sV4;
			var sV1 = "belle Marquise";
			var sV2 = "vos beaux yeux"
			var sV3 = "me font"
			var sV4 = "mourir d’amour"
			//ECRIRE ""
			alert ((sV1 + ' ' + sV2 + ' ' + sV4 + ' ' + sV3) + '\n' + (sV2 + ' ' + sV3 + ' ' + sV1 + ' ' + sV4) + '\n' + (sV3 + ' ' + sV4 + ' ' + sV2 + ' ' + sV1) + '\n' + (sV4 + ' ' + sV1 + ' ' + sV3 + ' ' + sV2)) ;
		// FIN
		}
// ----------
// ----------

	// ALGORITHME Exo_2_4
	function Exo_2_4_jsform()
		// DEBUT
		{
		// Variables, sV1, sV2, sV3, sV4 en alphanumerique
			var sV1, sV2, sV3, sV4;
			var sV1 = "belle Marquise";
			var sV2 = "vos beaux yeux"
			var sV3 = "me font"
			var sV4 = "mourir d’amour"
		//ECRIRE ""
			document.getElementById("sp_resultat_code").innerHTML= (sV1 + ' ' + sV2 + ' ' + sV4 + ' ' + sV3) + "<br/>" + (sV2 + ' ' + sV3 + ' ' + sV1 + ' ' + sV4) + "<br/>" + (sV3 + ' ' + sV4 + ' ' + sV2 + ' ' + sV1) + "<br/>" + (sV4 + ' ' + sV1 + ' ' + sV3 + ' ' + sV2) ;
		// FIN
		}
// ----------
// ----------
			
	// ALGORITHME Exo_2_4
	function Exo_2_4_jquery()
		// DEBUT
		{
			// Variables, sV1, sV2, sV3, sV4 en alphanumerique
			var sV1, sV2, sV3, sV4;
			var sV1 = "belle Marquise";
			var sV2 = "vos beaux yeux"
			var sV3 = "me font"
			var sV4 = "mourir d’amour"
			//ECRIRE ""
			$("#sp_resultat_code").html((sV4 + ' ' + sV1 + ' ' + sV3 + ' ' + sV2) + "<br/>" + (sV1 + ' ' + sV2 + ' ' + sV4 + ' ' + sV3) + "<br/>" + (sV2 + ' ' + sV3 + ' ' + sV1 + ' ' + sV4) + "<br/>" + (sV3 + ' ' + sV4 + ' ' + sV2 + ' ' + sV1)) ;
		// FIN
		}