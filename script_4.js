const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


// ------------------------------------------------
// Liste des entrepreneurs qui sont nés dans les années 70
// ------------------------------------------------

console.log("Liste des entrepreneurs nés dans les années 70 : ")
// On parcourt chaque objet du tableau 'entrepreneurs'
for (const entrepreneur of entrepreneurs) {

  // Si l'année de naissance de l'entrepreneur est dans les années 70,
  if (entrepreneur.year >= 1970 && entrepreneur.year < 1980) {
    // On affiche son prénom et son nom
    console.log(entrepreneur.first + " " + entrepreneur.last + " (" + entrepreneur.year + ")");
  }
}


// ------------------------------------------------
// Array contenant le nom et le prénom des entrepreneurs
// ------------------------------------------------
// on fait une boucle sur tous les éléments du tableau
// on affiche le premier élément et le second (nom et prénom)

entrepreneursNamesArray = []

for (const entrepreneur of entrepreneurs) {
  entrepreneursNamesArray.push(entrepreneur.first + " " + entrepreneur.last);
}

console.log(entrepreneursNamesArray)

// ------------------------------------------------
// Quel âge aurait chaque inventeur aujourd'hui ?
// ------------------------------------------------
// on parcourt le tableau
for (const entrepreneur of entrepreneurs) {
  console.log(`${entrepreneur.first} ${entrepreneur.last} aurait ${2019 - entrepreneur.year} ans aujourd'hui.`);
}



// ------------------------------------------------
// Entrepreneurs triés par ordre alphabétique
// ------------------------------------------------
lastNameArray = []
for (const entrepreneur of entrepreneurs) {
  lastNameArray.push(entrepreneur.last);
}

console.log(lastNameArray.sort())