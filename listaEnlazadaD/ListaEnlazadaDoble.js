import { Nodo } from "./Nodo";
export class ListaEnlazadaD {
    constructor() {
        this.primero = null;    // Primer nodo de la lista
        this.ultimo = null;     // Último nodo de la lista
        this.tamano = 0;        // Tamaño de la lista
    }

    // Agrega un nodo al final de la lista
    agregarAlFinal(valor) {
        const nuevoNodo = new Nodo(valor);
        
        if (this.ultimo) {
            // Si la lista no está vacía, ajustar los punteros
            this.ultimo.siguiente = nuevoNodo;
            nuevoNodo.anterior = this.ultimo;
            this.ultimo = nuevoNodo;
        } else {
            // Si la lista está vacía, el nuevo nodo es el primero y el último
            this.primero = nuevoNodo;
            this.ultimo = nuevoNodo;
        }
        
        this.tamano++;
    }

    // Agrega un nodo al principio de la lista
    agregarAlPrincipio(valor) {
        const nuevoNodo = new Nodo(valor);
        
        if (this.primero) {
            // Si la lista no está vacía, ajustar los punteros
            nuevoNodo.siguiente = this.primero;
            this.primero.anterior = nuevoNodo;
            this.primero = nuevoNodo;
        } else {
            // Si la lista está vacía, el nuevo nodo es el primero y el último
            this.primero = nuevoNodo;
            this.ultimo = nuevoNodo;
        }
        
        this.tamano++;
    }

    // Elimina el primer nodo de la lista
    eliminarDelPrincipio() {
        if (!this.primero) {
            return; // Lista vacía, no hay nada que eliminar
        }
        
        if (this.primero === this.ultimo) {
            // Solo había un nodo
            this.primero = null;
            this.ultimo = null;
        } else {
            // Ajustar punteros
            this.primero = this.primero.siguiente;
            this.primero.anterior = null;
        }
        
        this.tamano--;
    }

    // Elimina el último nodo de la lista
    eliminarDelFinal() {
        if (!this.ultimo) {
            return; // Lista vacía, no hay nada que eliminar
        }
        
        if (this.primero === this.ultimo) {
            // Solo había un nodo
            this.primero = null;
            this.ultimo = null;
        } else {
            // Ajustar punteros
            this.ultimo = this.ultimo.anterior;
            this.ultimo.siguiente = null;
        }
        
        this.tamano--;
    }

    // Imprime la lista desde el principio
    imprimirDesdePrincipio() {
        let actual = this.primero;
        while (actual) {
            console.log(actual.valor);
            actual = actual.siguiente;
        }
    }

    // Imprime la lista desde el final
    imprimirDesdeFinal() {
        let actual = this.ultimo;
        while (actual) {
            console.log(actual.valor);
            actual = actual.anterior;
        }
    }
}
