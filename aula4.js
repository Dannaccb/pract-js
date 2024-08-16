/* 
Array ¿en orden ascendente?
En esta ocasión debes crear un script que lee una lista de números y debe decir si los elementos están ordenados de menor a mayor o no.
*/

function estaOrdenadoAscendente(lista) {
    // Recorremos la lista hasta el penúltimo elemento
    for (let i = 0; i < lista.length - 1; i++) {
        if (lista[i] > lista[i + 1]) {
            return false; // Encontramos un elemento mayor que el siguiente, no está ordenado
        }
    }
    return true; // Todos los elementos están en orden ascendente
}

const lista1 = [1, 2, 3, 4, 5];
const lista2 = [1, 3, 2, 4, 5];
const lista3 = [5, 4, 3, 2, 1];

console.log(estaOrdenadoAscendente(lista1)); 
console.log(estaOrdenadoAscendente(lista2));
console.log(estaOrdenadoAscendente(lista3)); 


/*
Anagramas
Un script nada difícil. Se trata de una función que debe comprobar sin dos palabras son anagrams una de la otra.
*/
function sonAnagramas(palabra1, palabra2) {
    // Normalizar las palabras: eliminar espacios y convertir a minúsculas
    const normalizar = palabra => palabra.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    
    // Comparar las versiones normalizadas
    return normalizar(palabra1) === normalizar(palabra2);
}

const palabra1 = "Listen";
const palabra2 = "Silent";
const palabra3 = "Hello";
console.log(sonAnagramas(palabra1, palabra2)); 
console.log(sonAnagramas(palabra1, palabra3));




/*
Cifrado César
Se trata de elaborar un para de funciones para cifrar y descifrar mensajes usando el algoritmo de César, o de desplazamiento de caracteres.
*/

