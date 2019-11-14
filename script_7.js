/*
Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;
*/
​
//je pose la question aléa
question = prompt("Pose une question brow.")
​
​
​// Si ce qu'il met fini par un ? ca répondra un truc
if (question[question.length - 1] == "?"){
console.log("Ouais, ouais....")
}
​
​
// Si le mec ne met rien​
else if (question == "") {
  console.log("Bah quoi ? Kestah ? T'es en PLS ?")
}
​
​
​// Si le mec écrit que en UPCASE
else if (question === question.toUpperCase()) {
console.log("Pwa, calme-toi... Wesh.")
}
​
​
​
// Si ca inclue fortine dans ce qu'il dit ​
else if (question.includes("fortnite") || question.includes("Fortnite")) {
console.log("Starfoulilahhhh !!! On se fait une partie soum-soum brow ?")
}
​
​
​// si il met nimporte quoi pas prévu
else {
  console.log("Eh ! Tu sais quoi ? Jm'en BALEK.")
}
