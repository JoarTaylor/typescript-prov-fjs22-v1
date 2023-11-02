// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng

// 1. Ge ett exempel på en funktion med en generiskt typ.

const getMyAge = <T>(age: T): T => {
  return age;
};
console.log(getMyAge("23"));

// 2. Ge ett exempel på en funktion med två generiska typer.

const getMyCar = <T, X>(color: T, built: X): { color: T; built: X } => {
  return {
    color,
    built,
  };
};
console.log(getMyCar("blue", 1990));

// 3. Ge ett exempel på ett interface med en generisk typ.
interface KeyPair<T, U> {
  key: T;
  value: U;
}

interface MyCar<T> {
  color: T;
}

const myCar: MyCar<string> = { color: "blue" };
console.log(myCar.color);
