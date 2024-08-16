/*
Sistema de recuento simple
En este desafío se trata de hacer un recuento de los valores que aparecen en una lista, donde cada elemento se puede repetir varias veces. Al final tendremos que tener el recuento de los valores y una lista ordenada de los mismos por número de apariciones.
*/

function contarYOrdenarValores(lista) {
    const conteo = {};

    // Contar las apariciones de cada valor
    for (const valor of lista) {
        conteo[valor] = (conteo[valor] || 0) + 1;
    }

    // Convertir el objeto de conteo a una matriz de pares [valor, conteo]
    const pares = Object.entries(conteo);

    // Ordenar los pares por el número de apariciones, de mayor a menor
    pares.sort((a, b) => b[1] - a[1]);

    return pares;
}

const lista = [3, 1, 4, 1, 2, 2, 2, 3, 4, 4, 4, 4];
const resultado = contarYOrdenarValores(lista);
console.log(resultado); 




/*
Insertar ceros en una lista
Practicando con arrays, en este reto se pide que crees una lista de números a partir de otra, pero insertando un cero después de cada número par.
*/

function insertarCeros(lista) {
    const nuevaLista = [];

    for (const numero of lista) {
        nuevaLista.push(numero);
        if (numero % 2 === 0) {
            nuevaLista.push(0); // Insertar un cero después de cada número par
        }
    }

    return nuevaLista;
}

const listaOriginal = [1, 2, 3, 4, 5, 6];
const listaModificada = insertarCeros(listaOriginal);

console.log(listaModificada); 



/*
Permutaciones de caracteres
En este reto te animo a crear un script para generar permutaciones de un grupo de caracteres, o sea, como combinarlos todos.
*/

function permutar(str) {
    const resultados = [];

    function generarPermutaciones(arr, longitud) {
        if (longitud === 1) {
            resultados.push(arr.join(''));
            return;
        }
        
        for (let i = 0; i < longitud; i++) {
            generarPermutaciones(arr, longitud - 1);
            const j = longitud % 2 === 0 ? i : 0;
            [arr[j], arr[longitud - 1]] = [arr[longitud - 1], arr[j]]; // Intercambiar
        }
    }

    generarPermutaciones(str.split(''), str.length);
    return resultados;
}

const caracteres = "abc";
const permutaciones = permutar(caracteres);

console.log(permutaciones); 


/*
Combinaciones de caracteres
Este reto consiste en crear un script para generar combinaciones de los caracteres presentes en una cadena, sin importar el orden.
*/

function combinaciones(str) {
    const resultados = [];

    function generarCombinaciones(comb, start) {
        if (comb.length > 0) {
            resultados.push(comb);
        }

        for (let i = start; i < str.length; i++) {
            generarCombinaciones(comb + str[i], i + 1);
        }
    }

    generarCombinaciones('', 0);
    return resultados;
}


const caracter = "abc";
const combinacionesGeneradas = combinaciones(caracter);

console.log(combinacionesGeneradas); 



/*vConjunto para Evitar Duplicados */

function combinacionesSinDuplicados(str) {
    const resultados = new Set();

    function generarCombinaciones(comb, start) {
        if (comb.length > 0) {
            resultados.add(comb);
        }

        for (let i = start; i < str.length; i++) {
            generarCombinaciones(comb + str[i], i + 1);
        }
    }

    generarCombinaciones('', 0);
    return Array.from(resultados);
}


const caracters = "aab";
const combinacionesGenerada = combinacionesSinDuplicados(caracters);

console.log(combinacionesGenerada); 


/* 
Paréntesis, llaves, corchetes ¿correctos?
En este reto te animo acomprobar mediante un script que los signos de cierre (corchetes, parénteis y llaves) están bien anidados y equilibrados
*/

function sonSignosEquilibrados(cadena) {
    const pila = [];
    const pares = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of cadena) {
        if (char === '(' || char === '{' || char === '[') {
            pila.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (pila.length === 0 || pila[pila.length - 1] !== pares[char]) {
                return false; // Signos desbalanceados o mal anidados
            }
            pila.pop();
        }
    }

    return pila.length === 0; // Verificar si la pila está vacía
}

const cadena1 = "{[()]}";
const cadena2 = "{[(])}";
const cadena3 = "({[)}]";

console.log(sonSignosEquilibrados(cadena1)); 
console.log(sonSignosEquilibrados(cadena2)); 
console.log(sonSignosEquilibrados(cadena3)); 

