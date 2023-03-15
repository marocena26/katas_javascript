"use strict";

// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

const   ft_reverse = (string) => {
    let reverseWord = "";
    for (let i = string.length - 1; i >= 0; i--){
        reverseWord += reverseWord + string[i];
    }
    return reverseWord;
}
ft_reverse("Hola a todos")
