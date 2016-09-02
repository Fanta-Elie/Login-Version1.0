/*Ici j'ai fais une fonction qui englobe d'autre fonction*/
/*Dans la fonction id, je définit une variable avec un email en tant que valeur de base*/
/*Ensuite, avec indexOf() je vérifie si la chaine de caractere entrez par l'utilisateur contient un "@"*/
function id() {
	var identifiant = "joe@gmail.com";
	var question1 = prompt("Entrez votre identifiant: ");
	function signe() {
		if(question1.indexOf("@") === -1) { /*La méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.*/
			alert("Email invalide");
		}
	};
	signe();
	/*Ici une simple vérification que la réponse donné correspond bien à l'email voulus*/
		alert("Email correct");
		caractere(question1);
		mdp();
	} 
	else {
		alert("Entrez vos bon identifiant"); 
		id();
	}
	/* Cette fonction ci fais en sorte de définir dans un 1er temps un mot de passe puis le vérifie lorsque l'utilisateur l'entre*/
	function mdp() {
		var password = "12345";
		var question2 = prompt("Entrez votre mot de passe : ");
		if (password === question2) {
			alert("Mot de passe correct");
			caractere(question2);
		}
		else {
			alert("Mot de passe invalide.");
			mdp();
		}
	};
	/* Et enfin cette fonction ci ne fais que vérifié en console.log si votre mot de passe contient ou pas plus de 4 caratères*/ 
	/* J'aurais pu améliorer ceci avec des alert et en faisant recommencer la saisie dans le cas ou il y aurais eu moins de 4 caractères*/
	function caractere($ch) {
		if ($ch.length > 4) {
			console.log("Votre mot de passe contient au minimum quatre caractères");
		}
		else {
			console.log("Votre mot de passe ne contient pas au minimum quatre caractères");
		}
	}
};
id(); 