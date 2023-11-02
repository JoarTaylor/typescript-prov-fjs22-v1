"use strict";
// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng
// 1. Ge ett exempel på en funktion med en generiskt typ.
const getMyAge = (age) => {
    return age;
};
console.log(getMyAge("23"));
// 2. Ge ett exempel på en funktion med två generiska typer.
const getMyCar = (color, built) => {
    return {
        color,
        built,
    };
};
console.log(getMyCar("blue", 1990));
const myCar = { color: "blue" };
console.log(myCar.color);
