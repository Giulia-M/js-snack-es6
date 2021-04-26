/*
Snack 1:
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
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

