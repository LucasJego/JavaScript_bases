// On demande à l'utilisateur de rentrer une phrase pour discuter avec le bot
let answer = prompt("Vous pouvez vous adresser au chat-bot :")


// Si la phrase est une question (si elle se termine par "?")
if (answer.slice(-1) == "?") {
	console.log("Ouais Ouais...");
	// Si la phrase ne comporte que des majuscules
} else if (answer == answer.toUpperCase() && answer != "") {
	console.log("Pwa, calme-toi...")
	// Si la phrase contient le mot "Fortnite"
} else if (answer.includes("Fortnite")) {
	console.log("on s'fait une partie soum-soum ?")
	// Si l'utilisateur ne rentre rien
} else if (answer == "") {
	console.log("t'es en PLS ?")
	// Pour tous les autres cas
} else {
	console.log("balek.")
}

