/**
 * *Formas de crear variables:
 * *var: metodo común.
 * *let: metodo recomendado para evitar errores de sobreescritura de la misma variable, let mostrará un    mensaje de error si se intenta sobreescribir una variable.
 * *const: metodo de crear variables constantes (se suelen nombrar con todas las letras en mayuscula).
 */
//! La forma recomendada para crear nombres de variables es siguiendo camelCase.
let a = 5;
let b = 10;
let c = "I am a";
/** Suma, Resta y Concatenación */
a += 1;
b -= 5;
/**
 * *Podemos usar la barra invertida (\) para omitir la comilla doble o simple que le siga, de esta forma podemos poner comillas dentro de una string.
 */
c += ' "String."';

console.log(a, b, c);

/**
 * *La barra invertida tiene otros usos ademas de servir de escape para simbolos reservados.
 *  \'	comilla simple
    \"	comilla doble
    \\	barra invertida
    \n	línea nueva
    \r	retorno de carro
    \t	tabulación
    \b	límite de palabra
    \f	fuente de formulario
 */

/**
 * *Podemos usar variables de tipo string y con el operador de adición (+ o +=) concatenar e el texto.
 */

//?---Length---
/**
 * *La propiedad .length se usa para contar los caracteres, hay que tener en cuenta que los espacios en blanco tambien son contados.
 */
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength);
/**
 * En el ejemplo anterior, se asigno a la variable lastNameLength el valor de la variable lastName con la propiedad .length para guardar la cantidad de caracteres que tiene la variables lastName. Finalmente, se ejecuta un console.log en la variable lastNameLength donde muestra el número de caracteres.
 */

//?---Notación de Corchetes---
/**
 * *Podemos usar algo llamado "Notación de Corchetes" ([]), con esto podemos asignar a una variable el caracter ubicado en la posición que coloquemos dentro del corchete (cabe destacar, que en programación la numeracion comienza desde el 0).
 */
let firstLetterOfLastName = "";
const lastName1 = "Lovelace";
firstLetterOfLastName = lastName1[0];

/**
 * *Una vezdeclarada un string, no podemos cambiar los valores individuales dentro de esta, la única forma posible es asignandole otro valor a la variable.
 * NO
 * let myStr = "Bob";
 * myStr[0] = "J";
 *
 * SI
 * let myStr = "Bob";
 * myStr = "Job";
 */

/**
 * *Una forma creativa de usar lo aprendido es determinar la última letra una cadena  usando la propiedad  .length.
 */
const lastName2 = "Lovelace";
const lastLetterOfLastName = lastName2[lastName2.length - 1];
console.log(lastLetterOfLastName);

//?---Arrays---
/**
 * *Veremos los vectores, arreglos o Arrays, estas son esrtructuras de datos que pueden contener más de un tipo de dato.
 */
const myArray = ["Johan Rodriguez", 25];
/**
 * Como observamos, el array tiene una cadena de caracteres y un valor numerico.
 */

/**
 * *Podemos crear vectores anidados, esto lo que hace es que se vuelvan multidimensionales, son llamadas matrices.
 */
const teams = [
  ["Bulls", 23],
  ["White Sox", 45],
];

/**
 * *La notación de corchetes, usada anteriormente para seleccionar un caracter dentro de una cadena, también es usada para seleccionar datos guardados en el array.
 */
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];

/**
 * *Usando la notación de corchetes podemos modificar los datos dentro del array, a diferencia del caso con las string, adicionalmete se pueden modificar arrays aunque estos sean de tipo const.
 */
const ourArray = [50, 40, 30];
ourArray[0] = 15;

//?---Arrays Multidimensionales---
/**
 * *Podemos recorrer arrays multidimensionales usando notación de corchetes.
 */
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

arr[3];
arr[3][0];
arr[3][0][1];
/**
 * arr[3] es [[10, 11, 12], 13, 14],
 * arr[3][0] es [10, 11, 12] y
 * arr[3][0][1] es 11.
 */

//?---Push---
/**
 * *La función push se utiliza en los vectores para ingresar valores al final de estos.
 */
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
/**
 * arr1 ahora tiene el valor [1, 2, 3, 4]
 * y arr2 tiene el valor ["Stimpson", "J", "cat", ["happy", "joy"]].
 */

//?---Pop---
/**
 * *La función pop se utiliza para extraer el ultimo valor del array, este valor se puede asignar a otra variable.
 */
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

//?---Shift---
/**
 * *La función push hace lo mismo que la función pop, con la diferencia que en lugar de extraer el ultimo valor del array, extrae el primero.
 */
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

//?---Unshift---
/**
 * *La función unshift funciona de igual manera que la función push, con la diferencia de que esta ingresa valores al principio del array.
 */
const ourArray = ["Stimpson", "J", "cat"];
ourArray.unshift("Happy");

//?---Funciones---
/**
 * *Las funciones son fragmentos de código que pueden ser reusadas cuando son llamadas.
 */
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();
/**
 * Como vemos en el ejemplo, se declara la función y luego es invocada para correr el codigo que lleva dentro.
 */

//?---Parametros y Argumentos---
/**
 * *Los Parametros son las variables que funcionan como marcadores, se colocán cuando se crea la función para indicar las posiciones de los valores reales.
 * *Los Argumentos son entonces, los vcalores reales que son pasados a la función.
 */
function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
}

functionWithArgs(1, 2);
functionWithArgs(7, 9);

//?---Return---
/**
 * *La declaración de devolución o Return, se usa para enviar valores fuera de una función.
 */
function timesFive(num) {
  return num * 5;
}

const res1 = timesFive(5);
console.log(res1);

const res2 = timesFive(2);
console.log(res2);

//?---Ambito---
/**
 * *Se refiere a donde serán validas las variables creadas.
 * *Al crear variables fuera de bloques, estas serán de "Ambito Global", de igual manera, si se crean variables de otra forma que no sea usando "let" y "const" también serán variables globales.
 * *Por lo tanto, se recomienda siempre crearlas a través del uso de let y const.
 */
/**
 * !Las declaraciones var tienen un ámbito global o un ámbito función/local, mientras que let y const tienen un ámbito de bloque.
 * !Las variables var pueden ser modificadas y re-declaradas dentro de su ámbito; las variables let pueden ser modificadas, pero no re-declaradas; las variables const no pueden ser modificadas ni re-declaradas.
 * !Todas ellas se elevan a la parte superior de su ámbito. Pero mientras que las variables var se inicializan con undefined, let y const no se inicializan.
 * !Mientras que var y let pueden ser declaradas sin ser inicializadas, const debe ser inicializada durante la declaración.
 */
const myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1();
fun2();

/**
 * *Se puede tener una variable global y local con el mismo nombre, cuando esto sucede la variable con el valor local tendra mayor importancia.
 */
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
/**
 * La función myFun devolverá la cadena Head porque está presente la versión local de la variable.
 */

//?---Funciones sin return---
/**
 * *Se pueden declarar funciones sin la declaración de devolución, esto da como resultado que se ejecute el código y modifique las variables globales, pero la función da como resultado "undefined".
 */
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5;
}

addThree();
addFive();
console.log(sum);

//?---Asignando el resultado de una función a una variable---
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

console.log(processed);

//?---Filas o queue---
/**
 * *Es una estructura que permite que los valores recien ingresados se posicionen al final, y los valores más antiguos sean extraídos primero.
 */
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

const testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine([2], 1));
console.log("After: " + JSON.stringify(testArr));
/**
 * Un algoritmo que muestra el funcionamiento de una cola, un valor es agragado al final y seguido de eso, el primer valor es retirado y retornado de la función.
 * !JSON.stringify()
 * Se usa para mostrar de forma más entendible los arrays.
 */

//?---Valores Booleanos---
/**
 * *Los valores booleanos son true y false. Estos funcionan como interruptores y no deben escribirse entre comillas.
 */

//?---Estructuras Condicionnales if---
/**
 * *Las estructuras condicionales son sentancias que se basan en la lógica y a través de condiciones  toman valores booleanos. Se entrará a la estructura cuando el valor sea "true", sin embargo, si es "false", saltará el bloque de instrucciones.
 */
function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

console.log(test(true));

//?---Operadores de Comparación---

//?---Operadore de Igualdad---
/**
 * *Podemos comparar si dos valores son equivalentes usando el operador de igualdad "==", de esta forma podemos evaluar si dos valores son equivalentes y obtener como resultado un true o un false.
 * !Hay que tener en cuenta que a la hora de comparar usando este método se hace una coerción de valores, es decir, cambia el tipo de dato de uno de los valores al del otro.
 */
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

//?---Operadore de Estricta Igualdad---
/**
 * *Tenemos el operador de estricta igualdad "===", el cual a diferencia del de igualdad, no convierte los tipos de datos a uno en común.
 */
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

//?---Operadore de  Desigualdad---
/**
 * *El operador de desigualdad "!=" es lo opuesto al de igualdad. Devolverá un true cuando sean diferentes y un false cuando sean iguales. Este operador hace una coerción de valores, como el operador de igualdad.
 */
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

//?---Operadore de Estricta Desigualdad---
/**
 * *Operador de estricta desigualdad "!==".
 */
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

//?---Operador Mayor que---
/**
 * *Este operador ">" compara si el valor posicionado a la izquierda es mayor que el de la derecha, de ser cierto devolverá un true, y un false de lo contrario. Hace coerción de valores.
 */
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

//?---Operador Mayor igual que---
/**
 * *Este operador ">=" compara si el número de la izquierda es mayor o igual que el de la derecha, de ser cierto devolverá un true, y un false de lo contrario. Hace coerción de valores.
 */
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//?---Operador Menor que---
/**
 * *Este operador "<" compara si el número de la izquierda es menor que el de la derecha, de ser cierto devolverá un true, y un false de lo contrario. Hace coerción de valores.
 */
function testLessThan(val) {
  if (val < 25) {
    //
    return "Under 25";
  }

  if (val < 55) {
    //
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

//?---Operador Menor igual que---
/**
 * *El operador "<=" compara si el valor de la izquierda es menor o igual que el de la derecha,de ser cierto devolverá un true, y un false de lo contrario. Hace coerción de valores.
 */
function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

//?---Operadores Lógicos---

//?---Operador AND---
/**
 * *Este operador "&&" evalua que se cumplan tanto la condición que este a la izquierda como la que esta a la derecha. En caso de que se cumplan, devuelve un true y en caso contrario un false.
 */
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  return "No";
}

testLogicalAnd(10);

//?---Operador OR---
/**
 * *Este operador "||" evalua que la condición de la izquierda o la de la derecha se cumpla. En caso de que se cumplan, devuelve un true y en caso contrario un false.
 */
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}

testLogicalOr(15);

//?---Else---
/**
 * *La sentencia "else", da la opción a que se ejecute un bloque de código en caso de que la condición no se cumpla.
 */
function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  return result;
}

testElse(4);

//?---Else if---
/**
 * *Las estructuras condicionales múltiples "else if", nos permiten evaluar muchas más condiciones.
 */
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

/**
 * !El orden a la hora de evaluar condicioneses imporatante, un mal orden podría hacer que ciertas condiciones que debería cumplirse no lo hagan.
 */
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  } else {
    return "Change Me";
  }
}

golfScore(5, 4);
/**
 * Ejercicio de ejemplo.
 */

//?---Estructura Switch---
/**
 * *Las sentencias "switch-case", se usan cuando existen muchas sentencias posibles, entonces se usa esta estructura para ejecutar únicamente la que coincide.
 * !Esta estrucutra hace uso de la comparación de estricta igualdad "===".
 * !Cada case debe tener un "break", para evitar que se sigan ejecutando todas las instrucciones.
 */
function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

caseInSwitch(1);

//?---Default---
/**
 * *Es una opción de "case" que se coloca al final, como opción predeterminada en caso de que se ingresen valores no establecidos.
 */
function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }

  return answer;
}

switchOfStuff(1);

/**
 * *En ocaciones, cuando las respuestas dentro de un rango sean las mismas, se puede implementar un algoritmo como el siguiente:
 */
function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  return answer;
}

sequentialSizes(1);

//!Podemos usar en el mismo switch diferentes tipos de datos (numbers y strings).

/**
 * *Podemos ahorrar mucho código usando un pequeño truco de validación como el siguiente.
 */
//Metodo 1
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

//Metodo 2
function isEqual(a, b) {
  return a === b;
}
/**
 * Ambos son equivalentes, y dan el mismo resultado. En el segundo método nos valemos de que todos los operadores de comparación devuelven "true" o "false", de esta forma logramos ahorrar mucho.
 */
//!Las funciones terminan en el momento en que se encuentran con un return, esto quiere decir que las instrucciones que aparezcan despues del return y sigan dentro de la función, no se ejecutarán.

let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
/**
 * Ejercicio de una funcion para contar cartas en el juego de blackjack.
 */

//?---Objetos---
/**
 * *Es una construcción, similar a un array, con la dijerencia de que no accedemos a sus datos a través de indices, sino usando sus properties. Se usan principalmente para establecer una estructura a la hora de representar objetos del mundo real.
 */
//!Usar SIEMPRE comillas en las propiedades de los objetos.
//!Preferir notación de corchetes sobre notación de puntos.
const cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"],
};

//?---Notación de Puntos---
/**
 * *La notación de puntos es la forma a la que accedemos a laa propiedades de los objetos, si conocemos el nombre de la propiedad a la que queremos acceder. También podemos usar la notación de corchetes.
 */
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

//?---Notación de Corchetes---
/**
 * *Es la segunda forma de acceder a las propiedades de un objeto, esta notación se usa, principalmente, cuando el nombre de la propiedad tiene espacios intermedios.
 */
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  NoSpace: "USS Enterprise",
};

myObj["Space Name"];
myObj["More Space"];
myObj["NoSpace"];
//!Cuando se usa esta notación SIEMPRE deben usarse comillas dobles o simples.

/**
 * *Otro uso de la notación de corchetes es para acceder a propiedades dentro de una variable.
 */
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle",
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
/**
 * Aqui lo que se esta haciendo es usar una variable para guardar el nombre de una propiedad, para luego usar la notación de corchetes para asignar a otra variable el valor de la propiedad llamando al objeto usando la variables. Finalmente, se muestra en pantalla la variable final que mostrará el valor de la propiedad declarada en un principio.
 */

const someObj = {
  propName: "John",
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);
/**
 * Podemos usar esta notación para acceder de forma dinamica a las propiedades. En este ejemplo observamos como a travésde una función que nos retorna un valor podemos asignarselo a una variable, la cual usaremos para acceder a la propiedad de un objeto.
 */
//!Cuando usamos la notación de corchetes en variables, no las encerramos entre comillas, debido a que deseamos el valor que esta dentro de la variable, no el nombre de la variable en si.

/**
 * *Para actualizar las propiedades de los objetos, se hace de la siguiente forma. Podemos usar tanto notación de puntos como de corchetes.
 */
const myDogs = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDogs.name = "Happy Coder";

/**
 * *Se pueden añadir nuevas propiedades a los objetos exactamente de la forma en la que modificabamos las propiedades existentes.
 */

const myDogo = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDogo.bark = "hee hee";

/**
 * *Para eliminar propiedades.
 */
const myDogi = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};

delete myDogi.tails;

/**
 * *Podemos usar los objetos como almacenamientos también, cuando tenemos un rango limitado de valores. Podemos entonces, sustituir sentencias switch e if-else gracias a esta funcionalidad.
 */
function phoneticLookup(val) {
  let result = "";

  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = lookup[val];

  return result;
}

phoneticLookup("charlie");
/**
 * En esta ocación, sustituimos una sentencia switch. Explicaré el funcionamiento del algoritmo. Empecemos desde el final, desde el momento en que es llamada la función phoneticLookup. Esta es invocada y se le pasa un parámetro; edentro de la función, encontamos la variable result declarada e inicializada, el objeto que servirá como nuestro almacenamiento de datos y una operación de asignación donde introducimos dentro de la variable result el valor de la propiedad que se encuentra dentro del objeto; para finalmente devolver ese valor a través del return.
 */

//?---Verificar las propiedades de un objeto---
/**
 * *Usando el metodo ".hasOwnProperty(propName)", podemos determinar si un objeto posee dicha propiedad. El método devuelve true o false si existe o no.
 */
function checkObj(obj, checkProp) {
  const answer = obj.hasOwnProperty(checkProp);

  if (answer == true) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
/**
 * El anterior ejemplo es sobre una función que toma un objeto y se evalua si la propiedad existe en el objeto.
 */

//?---Objetos Complejos---
/**
 * *Son estructuras de datos basadosen objetos, donde se aprovecha la capacidad de los objetos de poder almacenar diferentes tipos de datos (num, strings, boolean, arrays, functions, etc).
 */
const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    "release year": 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Daddy Yankee",
    title: "Legendaddy",
    release_year: 2022,
    formats: ["CD", "Spotify", "Apple Music"],
  },
];
/**
 * Procedo a explicar un poco el algoritmo. Como podemos observar tenemos un array compuesto por dos objetos. Un solo objeto es capaz< de almacenar muchos datos de diferentes tipos, por lo tanto, obtenemos un array bastante complejo con más de un tipo de dato e incluso, arrays anidados.
 */

//?---Objetos Anidados---
/**
 * *Como acceder a subpropiedades. Pdemos usar tanto notación de puntos como de corchetes, o incluso ambas.
 */
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

let gloveBoxContents = undefined;

gloveBoxContents = myStorage.car.inside["glove box"];

//?---Arreglos Anidados---
/**
 * *Buscamos acceder a ciertos valores dentrode un arreglo que esta dentro de un objeto. Debemos combinar lo que hemos visto de notación de puntos y corchetes para trazar una ruta hacia los valores.
 */
const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];

/**
 * *Ejercicio: Se te da un objeto literal que representa una parte de tu colección de álbumes musicales. Cada álbum tiene un número de id único como clave y varias otras propiedades. No todos los álbumes tienen una información completa.
 * *Empiezas con una función updateRecords la cual toma un objeto literal, records, que contiene el álbum musical de la colección, un id, prop (como artist o tracks), y value. Completa la función usando las reglas siguientes para modificar el objeto pasado a la función.
 * *Tu función siempre debe devolver el objeto de colección de registros completo.
 * *Si prop no es tracks y value no es una cadena vacía, actualiza o establece la propiedad prop del album a value.
 * *Si prop es tracks pero el álbum no tiene una propiedad tracks, crea un arreglo vacío y agrégale value a él.
 * *Si prop es tracks y value no es una cadena vacía, agrega value al final del arreglo de tracks existentes del álbum.
 * *Si value es una cadena vacía, elimina esa propiedad prop del álbum.
 * *Nota: Se usa una copia del objeto recordCollection para las pruebas.
 */
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  let exist = 0;
  exist = records[id].hasOwnProperty(prop);

  if (exist == false) {
    switch (prop) {
      case "artist":
        if (exist == false) {
          records[id][prop] = value;
        }
        break;
      case "tracks":
        if (exist == false) {
          records[id][prop] = [value];
        }
        break;
      case "albumTitle":
        if (exist == false) {
          records[id][prop] = value;
        }
        break;
    }
  } else {
    if (value == "") {
      delete records[id][prop];
    } else {
      records[id][prop].push(value);
    }
  }

  return records;
}
updateRecords(recordCollection, 5439, "artist", "ABBA");
/**
 * A continuación, una solución más optima.
 */
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (
    prop === "tracks" &&
    records[id].hasOwnProperty("tracks") === false
  ) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}
/**
 * Es literalmente, la interpretación de los requerimientos del ejercicio... ¿Qué no es eso lo que se pide?
 */

//?---Bucles---

/**
 * *Los bucles se usan para repetir bloques de codigo un numero determinado de veces.
 */

//?---while---

/**
 * *Este bucle se repite siempre que la sentencia escrita al principio sea verdadera, una vez sea falsa terminara el bucle.
 */

const myArray1 = [];
let i = 0;

while (i <= 5) {
  myArray1.unshift(i);
  i++;
}

//?---for---

/**
 * *El ciclo for es el usualmente más usado debido a su estructura de tres sentencias "for (a;b;c)", donde "a" se usa como una sentencia de inicialización que se ejecuta normalmente antes de que el bucle comience y lo hace una sola vez, generalmente se usa para definir y configurar la variable del bucle; la sentencia "b" se usa como una sentencia condicional que es evaluada al principio de cada bucle, mientras esta sea "true" y al momento en que la condicion sea "false", al principio del bucle, se saldra de este; y la "c" es una sentenciaque se ejecuta al final de cada iteracion justo antes de la proxima comprobacion de la condicion y se usa comunmente para incrementar o reducir el contador.
 */
//!Podemos inicializar la variable de contador con cualquier numero

const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
  console.log(total);
}

/**
 * *Podemos anidadar bucles for para acceder a arrays multidimensionales.
 */

function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return console.log(product);
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

//?---do while---

/**
 * *Este tipo de bucle primero ejecuta el bloque de instrucciones y luego evalua la condición. Mientras esta sea "true" seguira ejecutando el bloque. Es decir, lo que caracteriza a este bucle de otros es que siempre se ejecutará almenos una vez.
 */

const ourArraya = [];
let ia = 0;

do {
  ourArraya.push(ia);
  ia++;
} while (ia < 5);

//?---Recursividad---

/**
 * *La recursión es el concepto que una función puede expresarse en términos de sí misma, es decir, una función que se llama a si misma un número determinado de veces. Algo fundamental en las funciones recursivas, es la definición de un caso base. Este caso base es como una parada a la recursividad, para evitar bucles infinitos.
 */

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

console.log(sum([2, 3, 4], 2));

//!Ejercicio pendiente

//?---Números aleatorios---

//?---Decimales---

/**
 * *Podemos generar numeros aleatorios en js usando la funcion Math.random(). Esta funcion solo devolverá numeros decimales entre 0 y 1. Algo que acotar, es que podrá obtenerse 0 como valor aleatorio, pero jamas un 1.
 */

function randomFraction() {
  return Math.random();
}

console.log(randomFraction());

//?---Enteros---

/**
 * *Para lograr obtener numeros enteros, debemos hacer uso de unos trucos.
 * *1. Usa Math.random() para generar un decimal aleatorio.
 * *2. Multiplica ese decimal aleatorio por 20 (u otro numero dependiendode que rango desees).
 * *3. Utiliza otra función, Math.floor() para redondear el número hacia abajo a su número entero más cercano.
 */

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

//?---Números aleatorios entre un rango---

/**
 * *Para hacer esto, se requiere que se defina un numero maximo y un numero minimo para acotarlo.
 */

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

//?---parseInt---

/**
 * *Esta función transforma una cadena en un numero entero, pero, en caso de que el primer caracter no pueda transformarse a un entero devolvera NaN.
 */

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

//?---radix (base)---

/**
 * *La función parseInt puede admitir dos parametros, parseInt(string, radix), radix se refiere a la base, que va desde 2 hasta 36.
 */

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

//?---Operador condicional ternario---

/**
 * *Es una forma simplificada de usar operadores condicionales, la sintaxis es la siguiente:
 * *a ? b : c, donde "a" es la condicion a valuar, "b" son las instrucciones que se ejecutaran en caso de que la condicion sea "true" y "c" es el codigo a ejecutar cuando la condicion devuelva "false".
 */

 function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}

/**
 * *Podemos usar condicionales ternarios en casos de if-else/if-else de la siguiente forma.
 */

 function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}