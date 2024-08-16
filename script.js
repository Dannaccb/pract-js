const saludo = 'Hola mundo';
console.log(saludo);

const a= 10;
const b= 20;
const suma = a + b;
console.log(suma);

function partcasa(){
    return{
        sala: 'mesa',
        cocina: 'estufa',
        cuarto: 'cama'
    };
}
const casa = partcasa();
console.log(casa.cuarto);

let frutas= ['manzana', 'pera', 'fresa'];// crea el array
console.log(frutas.length);

let primero = frutas[2]; //accede a un elemnento de array
let ultimo = frutas[frutas.length-1];
console.log({primero, ultimo});


const otrasFrutas = [];
frutas.forEach( function (elemento, indice) { //recorre un array
    if(indice > 0) {
        otrasFrutas.unshift(elemento)
    }
    console.log(elemento, indice);
});
console.log(otrasFrutas)

let newfruts = frutas.push('naranja'); // añadir un elemento al array
console.log(frutas);

let ultimos = frutas.pop();// elimina el ultimo elemento
console.log({ultimos, frutas});

let primeros = frutas.shift();// elimina el primer elemento
console.log(primeros);

frutas.push("manzana");
console.log(frutas);

//encuentra el indice de un elemento array
let posicion = frutas.indexOf("fresa"); 
let position2 = frutas.findIndex(elemento => elemento == 'fresa')
console.log(posicion, position2);



let vegetales = ["Repollo", "Nabo", "Rábano", "Zanahoria"];
console.log(vegetales);

let pos = 1,
numElementos = 2;

let elementosEliminados = vegetales.splice(pos, numElementos); //splice es para eliminar elementos
console.log(vegetales);

//map para recorrer


var s = 5; 
console.log(s);