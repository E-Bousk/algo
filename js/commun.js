	function loadExo(url)	{
		self.location.href= "../" + url;
	}

// =====================================================================
// ================= script pour le texte (auto-)typed =================
	document.addEventListener('DOMContentLoaded', function()
	{
	  var typed = new Typed('#typed',
	  {
		stringsElement: '#typed-strings',
		typeSpeed: 100,
		backSpeed: 50,
		startDelay: 100,
		loop: true,
		loopCount: Infinity,
	  });
	});
// =====================================================================



	function showCorrection(){
		document.getElementById("to_hide").style.display= "block";
	}
	
	function showCode_phpOnly(div_name, btn_name, img_name)
	{
		// hide all code's divs
		document.getElementById("div_php").style.display= "none";
		// hide all code's buttons
		document.getElementById("btn_php").style.display= "none";
		// hide all code's images
		document.getElementById("img_php").style.display= "none";
		// show the one clicked 
		document.getElementById(div_name).style.display= "block";
		document.getElementById(btn_name).style.display= "block";
		document.getElementById(img_name).style.display= "block";
		// show the form and the results if div_jsprompt is disabled
		document.getElementById("div_form_resultat").style.display= "block";
	}

	function showCode_noPrompt(div_name, btn_name, img_name)
	{
		// hide all code's divs
		document.getElementById("div_jsform").style.display= "none";
		document.getElementById("div_jquery").style.display= "none";
		document.getElementById("div_php").style.display= "none";
		// hide all code's buttons
		document.getElementById("btn_jsform").style.display= "none";
		document.getElementById("btn_jquery").style.display= "none";
		document.getElementById("btn_php").style.display= "none";
		// hide all code's images
		document.getElementById("img_jsform").style.display= "none";
		document.getElementById("img_jquery").style.display= "none";
		document.getElementById("img_php").style.display= "none";
		// show the one clicked 
		document.getElementById(div_name).style.display= "block";
		document.getElementById(btn_name).style.display= "block";
		document.getElementById(img_name).style.display= "block";
		// show the form and the results if div_jsprompt is disabled
		document.getElementById("div_form_resultat").style.display= "block";
	}
	
	function showCode(div_name, btn_name, img_name)
	{
		// hide all code's divs
		document.getElementById("div_jsprompt").style.display= "none";
		document.getElementById("div_jsform").style.display= "none";
		document.getElementById("div_jquery").style.display= "none";
		document.getElementById("div_php").style.display= "none";
		// hide all code's buttons
		document.getElementById("btn_jsprompt").style.display= "none";
		document.getElementById("btn_jsform").style.display= "none";
		document.getElementById("btn_jquery").style.display= "none";
		document.getElementById("btn_php").style.display= "none";
		// hide all code's images
		document.getElementById("img_jsprompt").style.display= "none";
		document.getElementById("img_jsform").style.display= "none";
		document.getElementById("img_jquery").style.display= "none";
		document.getElementById("img_php").style.display= "none";
		// show the one clicked 
		document.getElementById(div_name).style.display= "block";
		document.getElementById(btn_name).style.display= "block";
		document.getElementById(img_name).style.display= "block";
		// show the form and the results if div_jsprompt is disabled
		document.getElementById("div_form_resultat").style.display= "block";
	}