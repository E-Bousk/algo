// --------------------
// --------------------
// --   EXERCICE 1   --
// --------------------
// --------------------

	// ALGORITHME Exo_3_1 JSPROMPT
	function Exo_3_1()
	// DEBUT
	{
		//Valeur iNombre
		var iNombre;

		//Ecrire "entrez un nombre"
		//Lire iNombre
		iNombre=prompt("Veuillez entrer un nombre");

		//vérifier que c'est un nombre
		if (!isNumeric(iNombre)){
			alertNombreAttendu();
			return;
		}

		//SI iNombre >=0
		if (iNombre >=0 )
		{
			//Ecrire "Ce nombre est positif"
			alert("Ce nombre est positif");
		}
		//SINON
		else
		{
			//Ecrire Ce nombre est négatif"
			alert("Ce nombre est negatif");
		}
		//FINSI		
	//FIN	
	}
// ----------
// ----------

	// ALGORITHME Exo_3_1 JSFORM
	function Exo_3_1_jsform()
		// DEBUT
		{
			//Valeur iNombre
			var iNombre;

			//Ecrire "entrez un nombre"
			//Lire iNombre
			iNombre= document.getElementById("iNombre").value;

			//SI iNombre >=0
			if (iNombre >=0 )
			{
				//Ecrire "Ce nombre est positif"
				document.getElementById("sp_resultat_code").innerHTML="Ce nombre est positif";
			}
			//SINON
			else
			{
				//Ecrire Ce nombre est négatif"
				document.getElementById("sp_resultat_code").innerHTML="Ce nombre est negatif";
			}
			//FINSI		
		//FIN	
		}
// ----------
// ----------

	// ALGORITHME Exo_3_1 JQUERY
	function Exo_3_1_jquery()
		// DEBUT
		{
			//Valeur iNombre
			var iNombre;

			//Ecrire "entrez un nombre"
			//Lire iNombre
			iNombre= $("#iNombre").val();

			//SI iNombre >=0
			if (iNombre >=0 )
			{
				//Ecrire "Ce nombre est positif"
				$("#sp_resultat_code").html("Ce nombre est positif");
			}
			//SINON
			else 
			{
				//Ecrire Ce nombre est négatif"
				$("#sp_resultat_code").html("Ce nombre est négatif");
			}
			//FINSI		
		//FIN	
		}
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 2   --
// --------------------
// --------------------

	// ALGORITHME Exo_3_2 JSPROMPT
	function Exo_3_2()
		//DEBUT
		{
			var iNombre1, iNombre2;

			//Ecrire "Entrez le 1er nombre :"
    		//Lire iNombre1
			iNombre1= prompt("Entrez le 1er nombre :");
			//Ecrire "Entrez le 2nd nombre :"
    		//Lire iNombre2
			iNombre2= prompt("Entrez le 2nd nombre :");
    
			//SI iNombre1>=0 ET iNombre2 >=0 ou iNombre1<=0 ET iNombre2 <=0
			if (iNombre1 >=0 && iNombre2 >=0 || iNombre1 <=0 && iNombre2 <=0)
			{
				//Ecrire "Leur produit est positif"
				alert("Leur produit est positif");
			}
			//SINON
			else
			{
				//Ecrire "Leur produit est négatif"
				alert("Leur produit est négatif");
			}
			//FINSI		
		//FIN	
		}
// ----------
// ----------

	// ALGORITHME Exo_3_2 JSFORM
	function Exo_3_2_jsform()
		//DEBUT
		{
			var iNombre1, iNombre2;

			//Ecrire "Entrez le 1er nombre :"
    		//Lire iNombre1
			iNombre1= document.getElementById("iNombre1").value;
			//Ecrire "Entrez le 2nd nombre :"
    		//Lire iNombre2
			iNombre2= document.getElementById("iNombre2").value;
    
			//SI iNombre1>=0 ET iNombre2 >=0 ou iNombre1<=0 ET iNombre2 <=0
			if (iNombre1 >=0 && iNombre2 >=0 || iNombre1 <=0 && iNombre2 <=0)
			{
				//Ecrire "Leur produit est positif"
				document.getElementById("sp_resultat_code").innerHTML="Leur produit est positif";
			}
			//SINON
			else
			{
				//Ecrire "Leur produit est négatif"
				document.getElementById("sp_resultat_code").innerHTML="Leur produit est négatif";
			}
			//FINSI		
		//FIN	
		}
// ----------
// ----------

	// ALGORITHME Exo_3_2 JQUERY
	function Exo_3_2_jquery()
    //DEBUT
    {
        var iNombre1, iNombre2;

        //Ecrire "Entrez le 1er nombre :"
        //Lire iNombre1
        iNombre1= $("#iNombre1").val();
        //Ecrire "Entrez le 2nd nombre :"
        //Lire iNombre2
        iNombre2= $("#iNombre2").val();

        //SI iNombre1>=0 ET iNombre2 >=0 ou iNombre1<=0 ET iNombre2 <=0
		if (iNombre1 >=0 && iNombre2 >=0 || iNombre1 <=0 && iNombre2 <=0)
		{
            //Ecrire "Leur produit est positif"
            $("#sp_resultat_code").html("Leur produit est positif");
        }
        //SINON
        else
        {
            //Ecrire "Leur produit est négatif"
			$("#sp_resultat_code").html("Leur produit est négatif");
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

	// ALGORITHME Exo_3_3 JSPROMPT
	function Exo_3_3()
		//DEBUT
		{
			var sNom1, sNom2, sNom3;

			//Ecrire "Entrez le 1er nom :"
    		//Lire sNom1
			sNom1= iNombre=prompt("Entrez le 1er nom :");
			//Ecrire "Entrez le 2eme nom :"
    		//Lire sNom2
			sNom2= iNombre=prompt("Entrez le 2eme nom :");
    		//Ecrire "Entrez le 3eme nom :"
    		//Lire sNom3
			sNom3= iNombre=prompt("Entrez le 3eme nom :");

			//SI sLettreNom1 < sLettreNom2 ET sLettreNom2 < sLettreNom3 
			if ((sNom1 <= sNom2) && (sNom2 <= sNom3))
			{
				//Ecrire "Ils sont rangés par ordre alphabétique"
				alert("Ils sont rangés par ordre alphabétique");
			}
			//SINON
			else
			{
				//Ecrire "Ils ne sont pas rangés par ordre alphabétique"
				alert("Ils NE sont PAS rangés par ordre alphabétique");
			}
			//FINSI		
		//FIN	
		}
// ----------
// ----------

	// ALGORITHME Exo_3_3 JSFORM
	function Exo_3_3_jsform()
		//DEBUT
		{
			var sNom1, sNom2, sNom3;

			//Ecrire "Entrez le 1er nom :"
    		//Lire sNom1
			sNom1= document.getElementById("sNom1").value;
			//Ecrire "Entrez le 2eme nom :"
    		//Lire sNom2
			sNom2= document.getElementById("sNom2").value;
    		//Ecrire "Entrez le 3eme nom :"
    		//Lire sNom3
			sNom3= document.getElementById("sNom3").value;

			//SI sLettreNom1 < sLettreNom2 ET sLettreNom2 < sLettreNom3 
			if ((sNom1 <= sNom2) && (sNom2 <= sNom3))
			{
				//Ecrire "Ils sont rangés par ordre alphabétique"
				document.getElementById("sp_resultat_code").innerHTML=("Ils sont rangés par ordre alphabétique");
			}
			//SINON
			else
			{
				//Ecrire "Ils ne sont pas rangés par ordre alphabétique"
				document.getElementById("sp_resultat_code").innerHTML=("Ils NE sont PAS rangés par ordre alphabétique");
			}
			//FINSI		
		//FIN	
		}
// ----------
// ----------					

	// ALGORITHME Exo_3_3 JQUERY
	function Exo_3_3_jquery()
		//DEBUT
		{
			var sNom1, sNom2, sNom3, sLettreNom1, sLettreNom2, sLettreNom3;

			//Ecrire "Entrez le 1er nom :"
    		//Lire sNom1
			sNom1= $("#sNom1").val();
			//Ecrire "Entrez le 2eme nom :"
    		//Lire sNom2
			sNom2= $("#sNom2").val();
    		//Ecrire "Entrez le 3eme nom :"
    		//Lire sNom3
			sNom3= $("#sNom3").val();

			//SI sLettreNom1 < sLettreNom2 ET sLettreNom2 < sLettreNom3 
			if ((sNom1 <= sNom2) && (sNom2 <= sNom3))
			{
				//Ecrire "Ils sont rangés par ordre alphabétique"
				$("#sp_resultat_code").html("Ils sont rangés par ordre alphabétique");
			}
			//SINON
			else
			{
				//Ecrire "Ils ne sont pas rangés par ordre alphabétique"
				$("#sp_resultat_code").html("Ils NE sont PAS rangés par ordre alphabétique");
			}
			//FINSI		
		//FIN	
		}
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 4   --
// --------------------
// --------------------

	// ALGORITHME Exo_3_4 JSPROMPT
	function Exo_3_4()
	// DEBUT
	{
		var iNombre, bZero, bNegatif;

		//Ecrire "entrez un nombre"
		//Lire iNombre
		iNombre=prompt("Veuillez entrer un nombre");

		bZero=iNombre==0;
		bNegatif=iNombre<0;

		//SI iNombre =0
		if (bZero)
		{
			//Ecrire "Ce nombre vaut zéro"
			alert("Ce nombre vaut zéro");
		}
		//SINON SI iNombre <0
		else if (bNegatif)
		{
			//Ecrire Ce nombre est négatif"
			alert("Ce nombre est negatif");
		}
		//SINON
		else
		{
			//Ecrire "Ce nombre est positif"
			alert("Ce nombre est positif");
		}
		//FINSI		
	//FIN	
	}
// ----------
// ----------

	// ALGORITHME Exo_3_4 JSFORM
	function Exo_3_4_jsform()
		// DEBUT
		{
			var iNombre;
			var bZero, bNegatif;

			//Ecrire "entrez un nombre"
			//Lire iNombre
			iNombre= document.getElementById("iNombre").value;

			bZero=iNombre==0;
			bNegatif=iNombre<0;

			//SI iNombre =0
			if (bZero)
			{
				//Ecrire "Ce nombre vaut zéro"
				document.getElementById("sp_resultat_code").innerHTML="Ce nombre vaut zéro";
			}
			//SINON SI iNombre <0
			else if (bNegatif)
			{
				//Ecrire "Ce nombre est négatif"
				document.getElementById("sp_resultat_code").innerHTML="Ce nombre est négatif";
			}
			//SINON
			else
			{
				//Ecrire "Ce nombre est positif"
				document.getElementById("sp_resultat_code").innerHTML="Ce nombre est positif";
			}
			//FINSI		
		//FIN	
		}
// ----------
// ----------

	// ALGORITHME Exo_3_4 JQUERY
	function Exo_3_4_jquery()
		// DEBUT
		{
			var iNombre;
			var bZero, bNegatif;

			//Ecrire "entrez un nombre"
			//Lire iNombre
			iNombre= $("#iNombre").val();

			bZero=iNombre==0;
			bNegatif=iNombre<0;

			//SI iNombre =0
			if (bZero)
			{
				//Ecrire "Ce nombre vaut zéro"
				$("#sp_resultat_code").html("Ce nombre vaut zéro");
			}
			//SINON SI iNombre <0
			else if (bNegatif)
			{
				//Ecrire "Ce nombre est négatif"
				$("#sp_resultat_code").html("Ce nombre est négatif");
			}	
			//SINON
			else
			{
			//Ecrire "Ce nombre est positif"	
				$("#sp_resultat_code").html("Ce nombre est positif");
			}
			//FINSI		
		//FIN	
		}
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 5   --
// --------------------
// --------------------

	// ALGORITHME Exo_3_5 JSPROMPT
	function Exo_3_5()
	//DEBUT
	{
		var iNombre1, iNombre2;

		//Ecrire "Entrez le 1er nombre :"
		//Lire iNombre1
		iNombre1= prompt("Entrez le 1er nombre :");
		//Ecrire "Entrez le 2nd nombre :"
		//Lire iNombre2
		iNombre2= prompt("Entrez le 2nd nombre :");

		//SI iNombre1 ET iNombre2 >0 ou iNombre1 ET iNombre2 <0
		if (iNombre1 >0 && iNombre2 >0 || iNombre1 <0 && iNombre2 <0)
		{
			//Ecrire "Leur produit est positif"
			alert("Leur produit est positif");
		}
		//SINON
		else if (iNombre1 !=0 && iNombre2 !=0)
		{
			//Ecrire "Leur produit est négatif"
			alert("Leur produit est négatif");
		//FINSI
		}
		else
		{
			//Ecrire "Leur produit est nul"
			alert("Leur produit est nul");
		}
		//FINSI
	//FIN
	}


// ----------
// ----------

	// ALGORITHME Exo_3_5 JSFORM
	function Exo_3_5_jsform()
	//DEBUT
	{
		var iNombre1, iNombre2;

		//Ecrire "Entrez le 1er nombre :"
		//Lire iNombre1
		iNombre1= document.getElementById("iNombre1").value;
		//Ecrire "Entrez le 2nd nombre :"
		//Lire iNombre2
		iNombre2= document.getElementById("iNombre2").value;

		//SI iNombre1 ET iNombre2 >0 ou iNombre1 ET iNombre2 <0
		if (iNombre1 >0 && iNombre2 >0 || iNombre1 <0 && iNombre2 <0)
		{
			//Ecrire "Leur produit est positif"
			document.getElementById("sp_resultat_code").innerHTML="Leur produit est positif";
		}
		//SINON
		else if (iNombre1 !=0 && iNombre2 !=0)
		{
			//Ecrire "Leur produit est négatif"
			document.getElementById("sp_resultat_code").innerHTML="Leur produit est négatif";
		//FINSI
		}
		else
		{
			//Ecrire "Leur produit est nul"
			document.getElementById("sp_resultat_code").innerHTML="Leur produit est nul";
		}
		//FINSI
	//FIN
	}
// ----------
// ----------
	// ALGORITHME Exo_3_5 JQUERY
	function Exo_3_5_jquery()
	//DEBUT
	{
		var iNombre1, iNombre2;

		//Ecrire "Entrez le 1er nombre :"
		//Lire iNombre1
		iNombre1= $("#iNombre1").val();
		//Ecrire "Entrez le 2nd nombre :"
		//Lire iNombre2
		iNombre2= $("#iNombre2").val();

		//SI iNombre1 ET iNombre2 >0 ou iNombre1 ET iNombre2 <0
		if (iNombre1 >0 && iNombre2 >0 || iNombre1 <0 && iNombre2 <0)
		{
			//Ecrire "Leur produit est positif"
			$("#sp_resultat_code").html("Leur produit est positif");
		}
		//SINON
		else if (iNombre1 !=0 && iNombre2 !=0)
		{
			//Ecrire "Leur produit est négatif"
			$("#sp_resultat_code").html("Leur produit est négatif");
		//FINSI
		}
		else
		{
			//Ecrire "Leur produit est nul"
			$("#sp_resultat_code").html("Leur produit est nul");
		}
		//FINSI
	//FIN
	}
// ----------
// ----------
// --------------------
// --------------------
// --   EXERCICE 6   --
// --------------------
// --------------------

	// ALGORITHME Exo_3_6 JSPROMPT
	function Exo_3_6()
	//Début
	{
		var iAge;
		var bA, bB, bC, bD;

		//ECRIRE  "Veuillez saisir une valeur"
		//LIRE iNombreUtilisateur
		iAge=prompt("Indique ton age :");

		bA=iAge<6;
		bB=iAge==6 || iAge==7;
		bC=iAge==8 || iAge==9;
		bD=iAge==10 || iAge==11;

		//SI bA Alors
		if (bA)
		{
			//Ecrire "Tu es trop jeune pour jouer en club"
			alert("Tu es trop jeune pour jouer en club");
		}
		//SINON SI bB Alors
		else if (bB)
		{
			//Ecrire "Ta catégorie est : Poussin"
			alert("Ta catégorie est : Poussin");
		}
		//SINON SI bC Alors
		else if (bC)
		{
			//Ecrire "Ta catégorie est : Pupille"
			alert("Ta catégorie est : Pupille");
		}
		//SINON SI bD Alors
		else if (bD)
		{
			//Ecrire "Ta catégorie est : Minime"
			alert("Ta catégorie est : Minime");
		}
		//SINON
		else
		{
			//Ecrire "Ta catégorie est : Cadet"
			alert("Ta catégorie est : Cadet");
		}
		//FINSI
	//FIN
	}
// ----------
// ----------

// ALGORITHME Exo_3_6 JSFORM
function Exo_3_6_jsform()
//Début
{
	var iAge;
	var bA, bB, bC, bD;

	//ECRIRE  "Veuillez saisir une valeur"
	//LIRE iNombreUtilisateur
	iAge=document.getElementById("iAge").value;

	bA=iAge<6;
	bB=iAge==6 || iAge==7;
	bC=iAge==8 || iAge==9;
	bD=iAge==10 || iAge==11;

	//SI bA Alors
	if (bA)
	{
		//Ecrire "Tu es trop jeune pour jouer en club"
		document.getElementById("sp_resultat_code").innerHTML=("Tu es trop jeune pour jouer en club");
	}
	//SINON SI bB Alors
	else if (bB)
	{
		//Ecrire "Ta catégorie est : Poussin"
		document.getElementById("sp_resultat_code").innerHTML=("Ta catégorie est : Poussin");
	}
	//SINON SI bC Alors
	else if (bC)
	{
		//Ecrire "Ta catégorie est : Pupille"
		document.getElementById("sp_resultat_code").innerHTML=("Ta catégorie est : Pupille");
	}
	//SINON SI bD Alors
	else if (bD)
	{
		//Ecrire "Ta catégorie est : Minime"
		document.getElementById("sp_resultat_code").innerHTML=("Ta catégorie est : Minime");
	}
	//SINON
	else
	{
		//Ecrire "Ta catégorie est : Cadet"
		document.getElementById("sp_resultat_code").innerHTML=("Ta catégorie est : Cadet");
	}
	//FINSI
//FIN
}	
// ----------
// ----------

// ALGORITHME Exo_3_6 JQUERY
function Exo_3_6_jquery()
//Début
{
	var iAge;
	var bA, bB, bC, bD;

	//ECRIRE  "Veuillez saisir une valeur"
	//LIRE iNombreUtilisateur
	iAge=$("#iAge").val();

	bA=iAge<6;
	bB=iAge==6 || iAge==7;
	bC=iAge==8 || iAge==9;
	bD=iAge==10 || iAge==11;

	//SI bA Alors
	if (bA)
	{
		//Ecrire "Tu es trop jeune pour jouer en club"
		$("#sp_resultat_code").html("Tu es trop jeune pour jouer en club");
	}
	//SINON SI bB Alors
	else if (bB)
	{
		//Ecrire "Ta catégorie est : Poussin"
		$("#sp_resultat_code").html("Ta catégorie est : Poussin");
	}
	//SINON SI bC Alors
	else if (bC)
	{
		//Ecrire "Ta catégorie est : Pupille"
		$("#sp_resultat_code").html("Ta catégorie est : Pupille");
	}
	//SINON SI bD Alors
	else if (bD)
	{
		//Ecrire "Ta catégorie est : Minime"
		$("#sp_resultat_code").html("Ta catégorie est : Minime");
	}
	//SINON
	else
	{
		//Ecrire "Ta catégorie est : Cadet"
		$("#sp_resultat_code").html("Ta catégorie est : Cadet");
	}
	//FINSI
//FIN
}	