const squadreCalcio = [
    {
        nome: 'Juventus',
        // punti: 0,
        // falli: 0
    },
    {
        nome: 'Inter',
        // punti: 0,
        // falli: 0
    },
    {
        nome: 'Roma',
        // punti: 0,
        // falli: 0

    }
];

for( let i = 0; i < squadreCalcio.length; i++){
    let squadreFalliPunti = squadreCalcio[i];  
    squadreFalliPunti.falli = parseInt (Math.floor(Math.random() *100))
    squadreFalliPunti.punti = parseInt (Math.floor(Math.random() *100))
}
   
console.log(squadreCalcio)
 

const nuovaLista = [];

for(let i = 0; i < squadreCalcio.length; i++){
    const {nome, falli} = squadreCalcio[i];
    nuovaLista[i] = [
    nome,
    falli
];
}


console.log(nuovaLista)









