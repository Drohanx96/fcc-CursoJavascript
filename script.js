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
 * *Usando la notación de corchetes podemos modificar los datos dentro del array, a diferencia del caso con las string, adicionalmete supueden modificar arrays aunque estos sean de tipo const.
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

//?---Estructuras Condicionnales---
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