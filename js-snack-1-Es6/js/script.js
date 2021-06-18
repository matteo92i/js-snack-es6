// var listaBiciCorsa =[
//     {
//         nome: 'Lombardo',
//         peso: 20
//     },
//     {
//         nome: 'Graziella',
//         peso: 30
//     },
//     {
//         nome: 'cletta',
//         peso: 25
//     }
// ]

// var biciPeso;  
// var biciMenoPesante = 1000; 

// for (var x = 0; x < listaBiciCorsa.length; x++) {
//     var pesoLegero = listaBiciCorsa[x].peso;

    
//     if (pesoLegero < biciMenoPesante) {
//         biciPeso = listaBiciCorsa[x];
//         biciMenoPesante = pesoLegero;
//     }
// }
// console.log(biciPeso)



const listaBiciCorsa =[
    {
        nome: 'Lombardo',
        peso: 20
    },
    {
        nome: 'Graziella',
        peso: 30
    },
    {
        nome: 'cletta',
        peso: 25
    }
];

let biciPeso;  
let biciMenoPesante = 1000;

for (let x = 0; x < listaBiciCorsa.length; x++) {

    const { peso } = listaBiciCorsa[x];
    
    if (peso < biciMenoPesante) {
        biciPeso = listaBiciCorsa[x];
        biciMenoPesante = peso;
    }



}
const { nome } = biciPeso;

console.log(`La bici più leggiadra è ${nome}`)
