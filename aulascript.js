/* 
Mínimo Común Múltiplo
común múltiplo de un par de números enteros positivos.
*/
function mcm(a, b) {// minimo comun multiplo
    function mcd(x, y) { // maximo comun divisor
        if (y === 0) {
            return x;
        }
        return mcd(y, x % y);
    }
    return (a * b) / mcd(a, b);
}

console.log(mcm(28, 0));
console.log(mcm(15, 5));
console.log(mcm(7,5)); 



/* 
Items repetidos en un array
Un reto para manejar arrays. Se trata de una función que a partir de una lista de números enteros devuelve otra lista con los números que están repetidos en la lista original.
*/
function findDuplicates(nums) {
    let counts = {};
    let duplicates = [];

    // Contar las apariciones de cada número
    nums.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });
    console.log(counts)

    // Encontrar los números que aparecen más de una vez
    for (let num in counts) {
        if (counts[num] > 1) {
            duplicates.push(parseInt(num));
        }
    }
    

    return duplicates;
}

const numbers = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 8];
const duplicates = findDuplicates(numbers);
console.log(duplicates); 


/*
Un generador de passwords
Un reto para quienes están empezando, se trata de crear un script que genere una password seguros, es decir, eu contengo al menos una letra mayúscula, un número y un caracter especial de entre un conjunto dado.
*/
function generatePassword(length) {// length es la longitud de la contraseña
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/~`";

    // Asegurarse de que la longitud de la contraseña sea al menos 4
    if (length < 4) {
        throw new Error("La longitud de la contraseña debe ser al menos 4 caracteres.");
        //throw es una excepción y new es un constructor 
    }
    console.log([Math.floor(Math.random() * uppercaseChars.length)]);
    // Seleccionar un carácter de cada conjunto requerido
    const getRandomChar = (charset) => charset[Math.floor(Math.random() * charset.length)]; //charset.length es la longitud de la cadena
    let password = [
        getRandomChar(uppercaseChars),
        getRandomChar(lowercaseChars),
        getRandomChar(numberChars),
        getRandomChar(specialChars)
    ];
    console.log(password);

    // Completar la contraseña con caracteres aleatorios de todos los conjuntos combinados
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    console.log(allChars);

    for (let i = 4; i < length; i++) {
        password.push(getRandomChar(allChars));
    }
    console.log(password);

    // coloca en aleatorio los caracteres de la contraseña
    password = password.sort(() => Math.random() - 0.5); 
    //console.log(Math.random() - 0.5);
    // Une los caracteres en una cadena y devolverla
    return password.join('');
}

const passwordLength = 15;
const password = generatePassword(passwordLength);
console.log(password); 


/*
Dividir frases sin guiones
En este reto te planteo que crees una función capaz de ajustar una frase a un ancho determinado sin usar guiones para romper palabras.  
*/

function adjustPh(phrase, maxWidth) {
    const words = phrase.split(' '); 
    let lines = [];
    let currentLine = '';

    words.forEach(word => {
        // Comprobar si la palabra cabe en la línea actual
        if ((currentLine + word).length <= maxWidth) {
            // Agregar la palabra a la línea actual
            if (currentLine.length > 0) {
                currentLine += ' ';
            }
            currentLine += word;
        } else {
            // Agregar la línea actual al array de líneas y comenzar una nueva línea
            if (currentLine.length > 0) {
                lines.push(currentLine);
            }
            currentLine = word;
        }
    });

    // Agregar la última línea al array de líneas
    if (currentLine.length > 0) {
        lines.push(currentLine);
    }

    return lines;
}

const phrase = "este es un ejemplo de la funcion de ajustar una frase";
const maxWidth = 12;
const adjustedLines = adjustPh(phrase, maxWidth);
console.log(adjustedLines); 



/*
Area de un rectángulo
Debes escribir una función que calcule el area de un rectángulo a paritr de sus cuatro esquinas que se pasan a la función en cualquier orden, no neseriamente como esquinas contiguas. Recuerda que el area del rectángulo es el producto base*altura
*/

function calculateRectangleArea(corner1, corner2, corner3, corner4) {
    const x1 = corner1.x, y1 = corner1.y;
    const x2 = corner2.x, y2 = corner2.y;
    const x3 = corner3.x, y3 = corner3.y;
    const x4 = corner4.x, y4 = corner4.y;

    const area = 0.5 * Math.abs(x1*y2 + x2*y3 + x3*y4 + x4*y1 - (y1*x2 + y2*x3 + y3*x4 + y4*x1));
    return area;
}

// Ejemplo de uso
const corner1 = { x: 0, y: 0 };
const corner2 = { x: 4, y: 0 };
const corner3 = { x: 4, y: 3 };
const corner4 = { x: 0, y: 3 };

const area = calculateRectangleArea(corner1, corner2, corner3, corner4);
console.log(area);



const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  items.sort(function (a, b) {
    return b.value - a.value;
  });
  console.log(items)  



  let passwords = ['a', 'b', 'c', 'd', 'e'];
  passwords.sort(() => Math.random() - 5);
  console.log(passwords);  // Los elementos del array estarán en un orden aleatorio.
  