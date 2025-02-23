// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];                          // (for ...in) itera en propiedades de un objeto
  for (prop in objeto) {
    array.push([prop, objeto[prop]])
  };
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  for (let i = 0; i < string.length; i++) {
    var cantidad = 0;
    if (!objeto[string[i]]) {                         // No existe la propiedad "a" (i=0) dentro del objeto?
      for (let j = 0; j < string.length; j++) {       //recorro el string para chequear y cuento las veces que aparece
        if (string[i] === string[j]) {
          cantidad ++;
        }
      }
      objeto[string[i]] = cantidad;
    }
  } 
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  
  var Mayuscula = '';
  var Minuscula = '';
  for (i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      Mayuscula = Mayuscula + s[i];
      }
    else {
      Minuscula = Minuscula + s[i];
      }
  }
  return (Mayuscula + Minuscula)
  }

//let object = {};
//for (str in string) {
//  object[string[str]] = (object[string[str]]||0) +1
//}
//return object;

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
 /* var palabra = ""
  var fraseEspejo = ''
  for ( i = 0 ; i < str.length; i++) {
      if (str[i] === " " || i === str.length) {
        palabraEspejo = "";
      for ( var j = palabra.length - 1; i >= 0; i--) {
        palabraEspejo = palabraEspejo + palabra[j];
      }
      palabra = "";
      if (i === str.length) {
        fraseEspejo = fraseEspejo + palabraEspejo;
      } else {
        fraseEspejo = fraseEspejo + palabraEspejo + ' ';
      } 
    } else {
      palabra = palabra + str[i];  //guardo la ultima palabra caracter por caracter
     }
}
return fraseEspejo;  */
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroStr = numero.toString()
  var numAlReves = ''
for (var j = numeroStr.length - 1; j >= 0; j--) {
    numAlReves = numAlReves + numeroStr.charAt(j);
}
  if (numAlReves === numeroStr) {
   return "Es capicua";
  }
  else {
   return "No es capicua";
  }
}
// var = string = numero.toString();     // "103" 
// var arrayNum = string.split('');      // ["1" , "0" , "3"]
// var inv = arrayNum.reverse();         // ["3" , "0" , "1"]

// if (string === inv.join('')) {
//return "Es capicua";]
//return "No es capicua";

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadsinABC = ""
  for (var i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) !== "a" &&  cadena.charAt(i) !== "b" && cadena.charAt(i) !== "c") {
      cadsinABC = cadsinABC + cadena.charAt(i);
    }
  }
    return cadsinABC;
}

// var newStr = cadena;   //se puede obviar este paso...es solo para no trabajar en el valor q nos estan pasando
// newStr = newStr.replace("a" , '');   // .replace("lo q queremos replazar", "por lo q queremos remplazar")
// newStr = newStr.replace("b" , '');
// newStr = newStr.replace("c" , '');
// return newStr;


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1 ; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        var aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;
      }
    }
  }
  return arr;
}

// var OrderArr = arr.sort(funcion(elemento; elemProx)) {
  // return elemento.length - elemProx.length
  // })
  // return ordenArr;



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var nuevoArray = [];

  for (var i = 0; i < arreglo1.length; i++) {
    for (var j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        nuevoArray.push(arreglo1[i]);
      }
    }
  }  
  return nuevoArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

