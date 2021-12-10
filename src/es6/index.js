// -----------------------------------------------------Parametros por defecto ---------------------------------------------------
// Pre ecmaScript 6

function newFunction(name, age, country) {
  let name = name || "Fabian";
  let age = age || 29;
  let country = country || "Vzl";
  console.log(name, age, country);
}

newFunction();
newFunction("Pablo", 20, "Mx");

// ecmaScript 6

function newFunction2(name = "Fabian", age = 29, country = "Vzl") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Pablo", 20, "Mx");

// -----------------------------------------------------Concatenacion ---------------------------------------------------

let hello = "Hello";
let world = "World";

// Pre ecmaScript 6

let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// ecmaScript 6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// -------------------------------------------- Multi lineas --------------------------------------

// Pre ecmaScript 6

let lorem =
  "Lorem Ipsum es simplemente el texto de relleno de las \n" +
  "imprentas y archivos de texto.";

console.log(lorem);

// ecmaScript 6

let lorem2 = `Lorem Ipsum es simplemente el texto de relleno de las
 imprentas y archivos de texto.`;

console.log(lorem2);

// -------------------------------------------- Desestructuracion --------------------------------------

let person = {
  name: "Fabian",
  age: 29,
  country: "Vzl",
};

// Pre ecmaScript 6

console.log(person.name, person.age, person.country);

// ecmaScript 6

let { name, age, country } = person;
console.log(name, age, country);

// -------------------------------------------- Operador de propagacion de elementos --------------------------------------

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];
let education = ["David", ...team1, ...team2];

console.log(education);

// -------------------------------------------- Parametros en objeto --------------------------------------

let name = "Fabian";
let age = 29;

// Pre ecmaScript 6

let obj = { name: name, age: age };

// ecmaScript 6

let obj2 = { name, age };

// -------------------------------------------- Arrow function --------------------------------------

let names = [
  { name: "Fabian", age: 29 },
  { name: "Katy", age: 25 },
];

// Pre ecmaScript 6

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

// ecmaScript 6

let listOfNames2 = names.map((item) => console.log(item.name));

// -------------------------------------------- Promesas --------------------------------------

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Todo chevere");
      }, 4);
    } else {
      reject("Ocurrio un error");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// -------------------------------------------- Clasese --------------------------------------

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 3));

// -------------------------------------------- Modulos --------------------------------------

import { hello } from "./module";

console.log(hello());

// -------------------------------------------- Generadores --------------------------------------

function* helloWord(){
    if (true){
        yield 'Hello, ';
    }

    if (true){
        yield 'word';
    }
}

console.log(helloWord().next().value);
console.log(helloWord().next().value);
console.log(helloWord().next().value);
