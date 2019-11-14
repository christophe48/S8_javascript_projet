{
  // je demande le nombre d'étage au l'utilisateur et je le force à me donner un chiffre
  let floor = prompt("Pour la pyramide de Mario combien d'étage tu veux?");
  while (floor != Number(floor)) {
    floor = prompt("Il me faut un chiffre pour définir le nombre d'étage");
  }

  let numberSpace = floor-1;
  let numberHashtag = 1;

  while(numberHashtag <= floor) {
    console.log(" " .repeat(numberSpace) + "#".repeat(numberHashtag));
    numberSpace --;
    numberHashtag ++;
  }
}
