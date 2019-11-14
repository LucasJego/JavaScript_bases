// Début des exos

// Exo n° 1
console.log("Exo n°1 :");
console.log("Bonjour monde");


// Exo n°1 bis
console.log("\nExo n°1 bis :");

// On demande le prénom de l'utilisateur et on le met dans la variable 'firstName'
let firstName = prompt("Quel est votre prénom ?");

// 1ère méthode : on met la phrase dans une variable avant de l'afficher
// let statement = 'Bonjour ${firstName} !'; -> Ne fonctionne pas! Il faut utiliser "`" (alt gr + touche 7) et pas "'"
// let statement = `Bonjour ${firstName} !`; -> Fonctionne !
// console.log(statement);

// 2ème méthode : on affiche directement la phrase
console.log(`Bonjour  ${firstName} !`);

