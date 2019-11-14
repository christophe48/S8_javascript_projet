{
  let nom = "" ;
  // je force l'utilisateur a rentré un champ
  while (nom == "" ) {
  nom = prompt("Qu'elle est ton nom?");
    let bonjour = `2.1 Hello world! Bonjour à toi ${nom}`;
    console.log(bonjour);
  }
  alert(`2.1 Hello world! Bonjour à toi ${nom}`)
}
