/*
Snack 1:
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/
var biciDaCorsa = [
    {
        nome: "Van Rysel",
        peso: 1020
    },
    {
        nome: "Triban",
        peso: 890
    },
    {
        nome: "Triban",
        peso: 790
    }
]


function check(array) {
    //recupero il primo oggetto dell'array con uno specifico peso 
    var pesoMinore = biciDaCorsa[0].peso
  
    var biciPiuLeggera;

    for (var i = 0; i < array.length; i++) {
        var biciSingola = array[i];

        if (biciSingola.peso < pesoMinore) {
            
            biciPiuLeggera = biciSingola
            pesoMinore = biciPiuLeggera.peso
        }
    }
    //mi ritornerà un oggetto
    return biciPiuLeggera
}

//risultato della funzione lo salvo in una var 
var laPiuLeggera = check(biciDaCorsa);
console.log(laPiuLeggera)

//destructuring di un object
var { nome, peso } = laPiuLeggera
// template literal
console.log(`La ${nome} è la bici più leggera, pesa ${peso} kg`);

