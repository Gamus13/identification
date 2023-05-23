$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
});
$(window).trigger("hashchange");

function validateLoginForm() {
	var name = document.getElementById("logName").value;
	var password = document.getElementById("logPassword").value;

	if (name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Veuillez remplir les champs requis"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Votre mot de passe doit comporter au moins 8 caractères"
		return false;
	}
	else {
		alert("Connexion réussie");
		return true;
	}
}
function validateSignupForm() {
	var mail = document.getElementById("signEmail").value;
	var name = document.getElementById("signName").value;
	var password = document.getElementById("signPassword").value;
	var password2 = document.getElementById("signPassword2").value;

	if (mail == "" || name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Veuillez remplir les champs requis"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Votre mot de passe doit comporter au moins 8 caractères"
		return false;
	}

	else if (password2 !== password) {
		document.getElementById("errorMsg").innerHTML = "Votre mot de passe ne correspond pas"
		return false;
	}

	else {
		alert("Inscription réussie");
		return true;
	}
}