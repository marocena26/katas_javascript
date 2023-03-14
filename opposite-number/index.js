"use strict";

// DESCRIPTION:
// Very simple, given an integer or a floating-point number, find its opposite.

const ft_opposite = (number) => {
  if (number > 0) {
    return "-" + number;
  } else {
    number = number * -1;
    return number;
  }
};

console.log(ft_opposite(-1));
