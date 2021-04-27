/*
Scrivere una funzione che accetti tre argomenti, di cui uno è un array e gli altri due sono 2 numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
*/

var listaNumeri = [1, 7, 3, 9, 67, 43, 66];
const startIndex = 2;
const endIndex = 6;

function includedIndex (array, startIndex, endIndex) {
    return array.filter((element, index) =>  index > startIndex && index < endIndex)
} 
console.log(includedIndex(listaNumeri, startIndex, endIndex))