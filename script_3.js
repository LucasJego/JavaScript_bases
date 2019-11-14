// Exo n°3
console.log("Exo n°3 :")

// On demande à l'utilisateur un nombre d'étage pour la pyramide.
// On met cette valeur dans la variable 'numberFloors'
numberFloors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// On initialise le nombre de dièses à 1 (pour la 1ère ligne)
let numberDieses = 1
// On initialise le nombre d'espaces qui vaut le nombre d'étages moins 1 pour la 1ère ligne
let numberSpaces = numberFloors - 1

// Tant que m est inférieur ou égal au nombre d'étages,
while (numberDieses <= numberFloors) {
	console.log(" ".repeat(numberSpaces) + "#".repeat(numberDieses));
	numberDieses += 1;
	numberSpaces -= 1
}