/*
Frecuencia de caracteres
Debes escribir una función que encuentre la frecuencia con que aparecen los distintos caracteres dentro de una cadena de texto. El resultado se devuelve como una matriz de objetos. Cada uno de estos objetos tiene 2 campos: carácter (caracter) y número de veces que aparece (veces).
*/
function calcularFrecuenciaDeCaracteres(cadena) {
    const frecuencia = {};

    // Contar la frecuencia de cada carácter en la cadena
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        if (frecuencia[caracter]) {
            frecuencia[caracter]++;
        } else {
            frecuencia[caracter] = 1;
        }
    }

    // Convertir el objeto de frecuencias en una matriz de objetos
    const resultado = [];
    for (const caracter in frecuencia) {
        resultado.push({ caracter: caracter, veces: frecuencia[caracter] });
    }

    return resultado;
}


const cadena = "ejemplo de cadena de texto";
const frecuencias = calcularFrecuenciaDeCaracteres(cadena);
console.log(frecuencias);


/*
De objeto a Array
En este reto se trata de escribir una función de nombre toArray() que recibe como parámetro un objeto y debe devolver un array cuyos elementos serán los pares clave valor del objeto. Por ejemplo si el objeto es {dia:1, mes: 4, año: 23} la función devolverá el array[ ['dia',1], ['mes',4], ['año', 23] ]
*/

function toArray(obj) {
    return Object.entries(obj);// entries transforma el objeto en un array de pares clave valor
}


const objeto = { dia: 1, mes: 4, año: 23 };
const array = toArray(objeto);
console.log(array); 


/*
Suma de subconjuntos. Recursiva
Este reto no es nada nuevo, es la suma de conjuntos pero en esta ocasión se pida que la solución se mediante una fundión recursiva
*/

function subsetSum(nums, target) {
    const result = [];

    function findSubsets(currentSet, currentIndex, currentSum) {
        // Si la suma actual es igual al objetivo, agregamos el conjunto actual al resultado
        if (currentSum === target) {
            result.push([...currentSet]);
            return;
        }

        // Si el índice actual está fuera del rango o la suma actual excede el objetivo, terminamos la recursión
        if (currentIndex >= nums.length || currentSum > target) {
            return;
        }

        // Incluir el número actual en el conjunto y continuar la recursión
        currentSet.push(nums[currentIndex]);
        findSubsets(currentSet, currentIndex + 1, currentSum + nums[currentIndex]);

        // No incluir el número actual en el conjunto y continuar la recursión
        currentSet.pop();
        findSubsets(currentSet, currentIndex + 1, currentSum);
    }

    findSubsets([], 0, 0);
    return result;
}

const numems = [1, 2, 3, 4, 5];
const target = 5;
const subsets = subsetSum(numems, target);
console.log(subsets); 



/* 
Suma de subconjuntos
El reto de la semana se base en el conocido problema de la suma de subconuntos: encontrar si en un conjunto de números enteros positivos existe algún subconjunto cuyos elementos sumen un valor dado.
*/
function sumaSubconjunto(nums, objetivo) {
    // Función recursiva para verificar la existencia de un subconjunto
    function puedeFormarSubset(indice, sumaRestante) {
        // Caso base: la suma restante es 0
        if (sumaRestante === 0) {
            return true;
        }
        // Caso base: sin elementos o suma restante negativa
        if (indice >= nums.length || sumaRestante < 0) {
            return false;
        }
        
        // Incluir el elemento actual en el subconjunto y verificar
        if (puedeFormarSubset(indice + 1, sumaRestante - nums[indice])) {
            return true;
        }
        
        // Excluir el elemento actual y verificar
        return puedeFormarSubset(indice + 1, sumaRestante);
    }
    return puedeFormarSubset(0, objetivo);
}

const nums = [3, 34, 4, 12, 5, 2];
const objetivo = 9;
const resultado = sumaSubconjunto(nums, objetivo);
console.log(resultado); 


/* 
Una calculadora simple
Un reto no demasiado difícil, se trata de crear una función calculadora que recibirá como argumentos dos valores numéricos y un signo que inidca la operación a realizar
*/

function calculadora(valor1, valor2, signo) {
    let resultado;
    
    // Usar un switch para seleccionar la operación basada en el signo
    switch (signo) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            // Comprobar si el divisor es 0 para evitar división por cero
            if (valor2 === 0) {
                return 'Error: División por cero';
            }
            resultado = valor1 / valor2;
            break;
        default:
            return 'Error: Operación no válida';
    }
    
    return resultado;
}

console.log(calculadora(10, 5, '+')); 
console.log(calculadora(10, 5, '-')); 
console.log(calculadora(10, 5, '*')); 
console.log(calculadora(10, 5, '/'));
console.log(calculadora(10, 0, '/')); 
console.log(calculadora(10, 5, '%')); 


/*
Encontrar una cadena dentro de otra
En este reto pondrás a prueba tu habilidad en el manejo de cadenas o strings. Se trata de encontrar la subcadena mínima de una cadena de caracteres que contiene todas las letras de otra cadena.
*/

function encontrarSubcadenaMinima(cadena, objetivo) {
    if (cadena.length === 0 || objetivo.length === 0) {
        return "";
    }

    // Crear un mapa de frecuencia para la cadena objetivo
    const frecuenciaObjetivo = {};
    for (const char of objetivo) {
        frecuenciaObjetivo[char] = (frecuenciaObjetivo[char] || 0) + 1;
    }

    let izquierda = 0;
    let derecha = 0;
    let caracteresNecesarios = Object.keys(frecuenciaObjetivo).length;
    let minLength = Infinity;
    let subcadenaMinima = "";

    // Mantener un mapa de frecuencia para la ventana actual
    const frecuenciaVentana = {};
    
    while (derecha < cadena.length) {
        const charDerecha = cadena[derecha];
        if (frecuenciaObjetivo[charDerecha]) {
            frecuenciaVentana[charDerecha] = (frecuenciaVentana[charDerecha] || 0) + 1;
            if (frecuenciaVentana[charDerecha] === frecuenciaObjetivo[charDerecha]) {
                caracteresNecesarios--;
            }
        }
        derecha++;

        while (caracteresNecesarios === 0) {
            if (derecha - izquierda < minLength) {
                minLength = derecha - izquierda;
                subcadenaMinima = cadena.slice(izquierda, derecha);
            }

            const charIzquierda = cadena[izquierda];
            if (frecuenciaObjetivo[charIzquierda]) {
                frecuenciaVentana[charIzquierda]--;
                if (frecuenciaVentana[charIzquierda] < frecuenciaObjetivo[charIzquierda]) {
                    caracteresNecesarios++;
                }
            }
            izquierda++;
        }
    }

    return subcadenaMinima;
}


const cadenas = "ADOBECODEBANC";
const objetivos = "ABC";
const resultados = encontrarSubcadenaMinima(cadenas, objetivos);
console.log(resultados); 

