"use strict";

// DESCRIPTION:
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

const ft_transform = (number) => {
  if (number > 0 || number <= 0) {
    const numberChar = number.toString();
    return numberChar;
  } else {
    return "Introduce un número válido";
  }
};

console.log(ft_transform(15));
