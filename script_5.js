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


console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
{ //je crée un tableau de livre jamais emprunté
  let bookNeverRented = []
  for(let index in books) { // pour chaque livre si il a été emprunté 0 fois il se mettra dans le tableau
    if(books[index].rented == 0) {
      bookNeverRented.push(books[index]);
    }
  } // ensuite si le tableau est vide ca veut dire qu'il n'y a pas de bouquin jamais emprunté sinon il y en a donc je link le tbaleau
  if (bookNeverRented.length !== 0) {
      console.log("Non tous les livres n'ont pas été emprunté voici la liste:")
      console.log(bookNeverRented);
    } else {
      console.log("Tous les livres ont bien été emprunté au moins une fois");
    }
}



console.log("----------------------------------------------------------")
console.log("Quel est livre le plus emprunté ?")
{
let max=0;
// je crée une variable qui va me permettre de récupérer la position du livre max dans le tableau
let position=0
	for(index in books) { //en parcourant le tableau je cherche si le premier livre a été rented, ensuite ca va comparer avec le livre 2 etc..
    if(books[index].rented>max) {
      max=books[index].rented;
      position = index
    }
  }
  console.log("Le livre le plus emprunté est " + books[position].title + " car il a été emprunté " + max + " fois");
}


console.log("----------------------------------------------------------")
console.log("Quel est le livre le moins emprunté ?")
{
let min=99999999999;
// je crée une variable qui va me permettre de récupérer la position du livre max dans le tableau
let position=0
	for(index in books) { //en parcourant le tableau je cherche si le premier livre a été rented, ensuite ca va comparer avec le livre 2 etc..
    if(books[index].rented<min) {
      min=books[index].rented;
      position = index
    }
  }
  console.log("Le livre le moins emprunté est " + books[position].title + " car il a été emprunté " + min + " fois");
}

console.log("----------------------------------------------------------")
console.log("Trouve le livre avec l'ID: 873495 ;")
{
  for(let index in books) {
    if (books[index].id == 873495) {
    console.log(books[index].title + " --> ID 873495");
    }
  }
}
console.log("----------------------------------------------------------")
console.log("Supprime le livre avec l'ID: 133712 ;")
{
  for(let index in books){
    if (books[index].id == 133712) {
    books.splice(index, 1);
    }
    console.log(books[index])
  }
}
console.log("----------------------------------------------------------")
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).")
{
// je fais une fonction de trie:
function tri(a,b)
{
if (a.title < b.title) return -1; // si a<b il sera mis une position en dessous
else if (a.title == b.title) return 0; // si a == b il sera laissé à la position
else return 1; // si a>b il sera mis 1 position au dessus
}

  console.log(books.sort(tri))
}
