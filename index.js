function verifierPairImpair(nombre) {
    if (nombre % 2 === 0) {
        return "Ce nombre est pair";
    } else {
        return "C’est un nombre impair";
    }
}


console.log(verifierPairImpair())





var tableauNombres = [7, 54, 93, 2, -45]
var autreTableauNombres = [84, 6, 13, -71, 100]

function calculerSomme(tableau) {
    var somme = 0;
    for (var i = 0; i < tableau.length; i++) {
        somme = tableau[i] + somme;
    }
    return somme;
}

console.log(calculerSomme(tableauNombres));
console.log(calculerSomme(autreTableauNombres));