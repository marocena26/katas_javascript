"use strict";

// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

const   ft_reverse = (string) => {
    let reverseWord = "";
    for (let i = string.length - 1; i >= 0; i--){
        reverseWord = reverseWord + string[i];
    }
    return reverseWord;
}
ft_reverse("Hola a todos");

/*
LÓGICA DEL EJERCICIO:
const   ft_reverse = (string) => {

    Paso 1. Crear una cadena vacía que almacenará la nueva cadena creada
    let reverseWord = "";

    Paso 2. Crear el bucle FOR. 
    El punto de partida del bucle será (cad.length - 1) que corresponde al último caracter de la cadena, "a"
    Mientras i sea mayor que o igual a 0, el bucle se ejecutará
    Decrementamos i después de cada iteración
    
    for (let i = string.length - 1; i >= 0; i--){
        reverseWord = reverseWord + string[i];
    }

    Aquí la longitud de hola es igual a 4
    Por cada iteración: i = cad.length - 1 y nuevaCadena = nuevaCadena + cad[i]
    Primera iteración:   i = 4 - 1 = 3, nuevaCadena = "" + "a" = "a"
    Segunda iteración:   i = 3 - 1 = 2, nuevaCadena = "a" + "l" = "al"
    Tercera iteración:   i = 2 - 1 = 1, nuevaCadena = "al" + "o" = "alo"
    Cuarta iteración:   i = 1 - 1 = 0,  nuevaCadena = "alo" + "h" = "aloh"
    
    Paso 3. Devolver la cadena invertida
    return reverseWord;
}
ft_reverse("Hola a todos");
*/