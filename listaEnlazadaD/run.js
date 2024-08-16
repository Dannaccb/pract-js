import { ListaEnlazadaD } from "./ListaEnlazadaDoble";

// Crear una nueva lista enlazada doble
const lista = new ListaEnlazadaD();

// Agregar elementos
lista.agregarAlFinal(1);
lista.agregarAlFinal(2);
lista.agregarAlFinal(3);
lista.agregarAlPrincipio(0);

// Imprimir lista desde el principio
console.log("Imprimir desde el principio:");
lista.imprimirDesdePrincipio(); // 0, 1, 2, 3
// Imprimir lista desde el final
console.log("Imprimir desde el final:");
lista.imprimirDesdeFinal(); 

// Eliminar elementos
lista.eliminarDelPrincipio();
lista.eliminarDelFinal();


console.log("Imprimir después de eliminar:");
lista.imprimirDesdePrincipio(); 
