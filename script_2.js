{
//Je crée une fonction pour définir ce qu'est un factorielle
  function factorielle(n) {
    if(n==0) return 1;
    else return n*factorielle(n-1);
  }
// je demande à l'user de dire un chiffre en 1 et 10
  let n = prompt("choisissez un nombre entre 1 et 10");
// je met mes conditions afin de respecter les règles
  while(n != Number(n) || n < 1 || n > 10) {
    n = prompt("J'ai dis un nombre en 1 et 10!")
  }
// j'affiche le résultat
  let result = factorielle(n);
  console.log("2.2. factorielle(" + n + ")=" + result)
  alert("2.2. factorielle(" + n + ")=" + result);
}
