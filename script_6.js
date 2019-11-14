arn1 = "UUACGCAGUAGA"
arn2 = "CCGUCGUUGCGCUACAGC"
arn3 = "CCUCGCCGGUACUUCUCG"


// On découpe les chaînes de caractères en chaînes de 3 caractères consécutifs.
// La méthode 'match' renvoie un tableau contenant ces chaînes de 3 caractères
var result1 = arn1.match(/.{1,3}/g)
var result2 = arn2.match(/.{1,3}/g)
var result3 = arn3.match(/.{1,3}/g)

console.log(result1)
console.log(result2)
console.log(result3)

// On définit un tableau qui contiendra les noms des acides aminés
codeProteinArray = []

// On parcourt chaque élément du tableau contenant les chaînes de 3 caractères
for (var arn of result3) {
	if (arn == "UCU" || arn == "UCC" || arn == "UCA" || arn == "UCG" || arn == "AGU" || arn == "AGC") {
		codeProteinArray.push("Sérine");
	} else if (arn == "CCU" || arn == "CCC" || arn == "CCA" || arn == "CCG") {
		codeProteinArray.push("Proline");
	} else if (arn == "UUA" || arn == "UUG") {
		codeProteinArray.push("Leucine");
	} else if (arn == "UUU" || arn == "UUC") {
		codeProteinArray.push("Phénylalanine");
	} else if (arn == "CGU" || arn == "CGC" || arn == "CGA" || arn == "CGG" || arn == "AGA" || arn == "AGG") {
		codeProteinArray.push("Arginine");
	} else {
		codeProteinArray.push("Tyrosine");
	}
}

console.log(codeProteinArray)

// On forme la chaîne de caractère finale correspondante à la protéine à partir des noms des acides aminés contenus dans le tableau
console.log(`L'ARN ${arn3} correspond à la suite d'acides aminés suivante : ${codeProteinArray.join("-")}.`)

