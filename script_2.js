// Exo n° 2
console.log("Exo n°2 :")

// On demande un entier à l'utilisateur et on le met dans la variable 'number'
number = prompt("De quel nombre veux-tu calculer la factorielle ?")
let n = 1

// On initialise la variable 'factorial' à 1
factorial = 1

// Tant que n est inférieur ou égal au nombre rentré par l'utilisateur
while (n <= number) {
	factorial = factorial * n
	n += 1
}

// Affichage du résultat
console.log(`La factorielle de ${number} est ${factorial}.`)
