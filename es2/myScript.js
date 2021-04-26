/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

var squadre = [
    {
        nome: "squadra1",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "squadra2",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "squadra3",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "squadra4",
        puntiFatti: 0,
        falliSubiti: 0
    },
]
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var specificheSquadra = [];

for (let i = 0; i < squadre.length; i++) {
    const squadraDaAnalizzare = squadre[i];
    squadraDaAnalizzare.puntiFatti = getRandomInt(1, 50)
    squadraDaAnalizzare.falliSubiti = getRandomInt(1, 50);

    //destructuring di un object
    var { nome, falliSubiti } = squadraDaAnalizzare
    //array di oggetti 
    specificheSquadra.push({ nome, falliSubiti })
    console.log(` ${nome} e i falli subiti sono ${falliSubiti} `);

}
console.log(squadre)
console.log(specificheSquadra)





