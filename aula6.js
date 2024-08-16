//cifrado César
function cifrar(frase, clave) {
    const abecedario = 'abcdefghijklmnopqrstuvwxyz';// cadena del abecedario
    let fraseCifrada = '';//cadena vacia

    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i];
        //buchle for que recorre cada caracter de la frase
        if (letra === ' ') {
            fraseCifrada += ' ';
            //manejo de espacios
        } else {
            let index = abecedario.indexOf(letra);//obtine la posicion de la letra
            let nuevoIndex = (index - clave + abecedario.length) % abecedario.length;
            /*
            Calcula la nueva posición de la letra restando la clave, 
            sumando la longitud del abecedario para manejar desplazamientos negativos,
            y usando el operador módulo % para asegurarse de que la posición esté dentro
            del rango del abecedario.
            */
            fraseCifrada += abecedario[nuevoIndex];//Se agrega la nueva letra cifrada a la frase cifrada
        }
    }
    //console.log(fraseCifrada);
    return fraseCifrada;
    
}

function descifrar(frase, clave) {
    const abecedario = 'abcdefghijklmnopqrstuvwxyz';
    let fraseDescifrada = '';

    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i];
        if (letra === ' ') {
            fraseDescifrada += ' ';
        } else {
            let index = abecedario.indexOf(letra);
            let nuevoIndex = (index + clave) % abecedario.length;
            fraseDescifrada += abecedario[nuevoIndex];
        }
    }

    return fraseDescifrada;
}

console.log(cifrar("casa blanca", 3));  
console.log(cifrar("hola", 3)); 
console.log(descifrar("zxpx yixkzx", 3)); 


