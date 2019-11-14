const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];



// -------------------------------------------
// Est-ce que tous les livres ont été au moins empruntés une fois ?

let nonRentedBooksArray = []
for (const book of books) {
  if (book.rented == 0) {
    nonRentedBooksArray.push(book);
  }
}

if (nonRentedBooksArray.length == 0) {
  console.log("Tous les livres ont été empruntés au moins une fois.")
} else {
  console.log("Tous les livres n'ont pas été empruntés au moins une fois.")
}


// -------------------------------------------
// Quel est le livre le plus emprunté ?
let maxRented = 0
let titleMaxRented = ""


// On parcourt le tableau 'books'
for (const book of books) {

  if (book.rented > maxRented) {
    maxRented = book.rented;
    titleMaxRented = book.title
  }
}

console.log(`Le livre le plus emprunté est ${titleMaxRented} (emprunté ${maxRented} fois).`)



// -------------------------------------------
// Quel est le livre le moins emprunté ?

let titleMinRented = "";
// On initialise la variable minRented.
let minRented = books[0].rented;

for (const index in books) {
  if (books[index].rented < minRented) {
    minRented = books[index].rented;
    titleMinRented = books[index].title;
  }
}

console.log(`Le livre le moins emprunté est ${titleMinRented} (emprunté ${minRented} fois).`)

// Deuxième possiblité :
//for (const book of books) {
//  if (book.rented < minRented) {
//    minRented = book.rented;
//    titleMinRented = book.title;
//  }
//}



// -------------------------------------------
// Quel est le livre avec l'ID 873495 ?
for (const book of books) {
  if (book.id == 873495) {
    console.log(book.id);
    console.log(typeof book.id)
    console.log(`Le livre dont l'ID est ${book.id} est ${book.title}.`);
  }
}


// -------------------------------------------
// Suppression du livre avec l'ID 133712
for (const index in books) {
  if (books[index].id == 133712) {
    delete books[index];
    }
}




// -------------------------------------------
// Trier les livres par ordre alphabétique
