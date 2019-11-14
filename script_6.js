function changeARN(arn) {
//je divise en 12 mon arn
  arn.split("")
  let index = 0
//je crée un tableau pour récupéré ma boucle ci dessous
  let tableauArn = []
//toutes les 3 valeurs je rajoute un -
    while(index<arn.length) {
      tableauArn.push(arn[index] + arn[index+1] + arn[index+2])
      index += 3;
    }
console.log(tableauArn)
//je crée un tableau modifier
  let tableauChangeARN = []
  let index2 = 0
//je remplace chaque élément de mon tableau
  while(index2<tableauArn.length) {
    if (tableauArn[index2] === "UCU" || tableauArn[index2] === "UCC" || tableauArn[index2] === "UCA" || tableauArn[index2] === "UCG" || tableauArn[index2] === "AGU" || tableauArn[index2] === "AGC") {
      tableauChangeARN.push("Sérine");
    } else if (tableauArn[index2] === "CCU" || tableauArn[index2] === "CCC" || tableauArn[index2] === "CCA" || tableauArn[index2] === "CCG" ) {
      tableauChangeARN.push("Proline");
    } else if (tableauArn[index2] === "UUA" || tableauArn[index2] === "UUG") {
      tableauChangeARN.push("Leucine");
    } else if (tableauArn[index2] === "UUU" || tableauArn[index2] === "UUC") {
      tableauChangeARN.push("Phénylalanine");
    } else if (tableauArn[index2] === "CGU" || tableauArn[index2] === "CGC" || tableauArn[index2] === "CGA" || tableauArn[index2] === "CGG" || tableauArn[index2] === "AGA" || tableauArn[index2] === "AGG") {
      tableauChangeARN.push("Arginine");
    } else  {
      tableauChangeARN.push("Tyrosine");
    }
    index2 += 1;
  }

//je crée le style d'écriture demandé dans l'exo
 console.log(tableauChangeARN[0] + "-" + tableauChangeARN[1] + "-" +tableauChangeARN[2] + "-" + tableauChangeARN[3] + "-" +tableauChangeARN[4] + "-" + tableauChangeARN[5])

}

console.log("CCGUCGUUGCGCUACAGC")
{
  let change = changeARN("CCGUCGUUGCGCUACAGC")
  console.log(change)
}
console.log("----------------------------------------------------------");
console.log("CCUCGCCGGUACUUCUCG");
{
  let change = changeARN("CCUCGCCGGUACUUCUCG")
  console.log(change)
}
