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

/**
 * *Podemos usar algo llamado "Notación de Corchetes" ([]), con esto podemos asignar a una variable el caracter ubicado en la posición que coloquemos dentro del corchete (cabe destacar, que en programación la numeracion comienza desde el 0).
 */
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
/**
 * *Una vezdeclarada un string, no podemos cambiar los valores individuales dentro de esta, la única forma posible es asignandole otro valor a la variable.
 * !NO
 * !let myStr = "Bob";
 * !myStr[0] = "J";
 * ?SI
 * ?let myStr = "Bob";
 * ?myStr = "Job";
 */

/**
 * *Una forma creativa de usar lo aprendido es determinar la última letra una cadena  usando la propiedad  .length.
 */
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

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
/**
 * *Podemos recorrer arrays multidimensionales usando notación de corchetes.
 */
 const arr = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [[10, 11, 12], 13, 14]
 ];
 
 arr[3];
 arr[3][0];
 arr[3][0][1];
 /**
  * arr[3] es [[10, 11, 12], 13, 14], 
  * arr[3][0] es [10, 11, 12] y 
  * arr[3][0][1] es 11.
  */
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
  /**
   * *La función pop se utiliza para extraer el ultimo valor del array, este valor se puede asignar a otra variable.
   */
   const threeArr = [1, 4, 6];
   const oneDown = threeArr.pop();
   console.log(oneDown);
   console.log(threeArr);