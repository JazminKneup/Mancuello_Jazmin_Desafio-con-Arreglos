//1.Siempre hambriento
//Escribe una función a la que se le asigne un arreglo, y cada vez que el valor sea "comida" 
//debería mostrar "delicioso"en la consola. Si "comida" no estaba presente en el arreglo, 
//que la consola registre "Tengo hambre" una vez.
function siempreHambriento(arr) {
    let hayComida = false;  // Iniciamos par ver si hay "comida" en el arreglo
    for (let i = 0; i < arr.length; i++) {  // Iteramos sobre cada elemento del arreglo
        if (arr[i] === "comida") {  // Comprobamos si el elemento actual es "comida"
            console.log("delicioso");  // Si es "comida", mostramos "delicioso" en la consola
            hayComida = true;  // Establecemos true porque encontramos "comida"
        }
    }
    if (!hayComida) {  // Si no encontramos "comida", seguirá siendo falso
        console.log("Tengo hambre");  // Mostramos "Tengo hambre" en la consola
    }
}

// Pruebas de la función con los ejemplos proporcionados
alwaysHungry([3.14, "comida", "pastel", true, "comida"]);// Acá debería mostrar "delicioso, delicioso"

alwaysHungry([4, 1, 5, 7, 2]);// Acá debería mostrar "Tengo hambre"


//2.Filtro paso alto
//Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo que contenga solo los valores mayores a cutoff.

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {  // Iteramos sobre cada elemento del arreglo
        if (arr[i] > cutoff) {  // Comprobamos si el elemento actual es mayor que el valor cutoff
            filteredArr.push(arr[i]);  // Si es mayor, añadimos al nuevo arreglo filteredArr
        }
    }
    return filteredArr;  // Devolvemos el nuevo arreglo con los valores filtrados
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]


//3.Mejor que el promedio
//Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio.
function betterThanAverage(arr) {
    var sum = 0;
     // Calcula la suma de todos los elementos del arreglo
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // Calcula el promedio
    var average = sum / arr.length;
    
    var count = 0;
    // Cuenta cuántos valores son mayores que el promedio
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }
    }
    
    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta


//4.Arreglo invertido
//Escribe una función que invierta los valores de un arreglo y los devuelva.
function reverse(arr) {
    var left = 0;
    var right = arr.length - 1;
    
    while (left < right) {
        // Intercambiamos los elementos en las posiciones left y right
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        
        // Esto sirve para mover los índices hacia el centro
        left++;
        right--;
    }
    
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]


//5.Arreglo de Fibonacci
//Los números de Fibonacci se han estudiado durante años y aparecen a menudo en la naturaleza. 
//Escribe una función que devuelva un arreglo de números de Fibonacci hasta una longitud dada n. 
//Los números de Fibonacci se calculan sumando los dos últimos valores de la secuencia. Entonces, 
//si el cuarto valor es 2 y el quinto valor es 3 entonces el siguiente valor en la secuencia es 5.
function fibonacciArray(n) {
    // [0, 1] son los valores iniciales del arreglo para calcular el resto
    var fibArr = [0, 1];
    
    // Verificamos si n es mayor que 2 para calcular más valores
    while (fibArr.length < n) {
        // Calculamos el siguiente número de Fibonacci sumando los dos últimos valores
        var nextFib = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
        // Añadimos el siguiente número de Fibonacci al arreglo
        fibArr.push(nextFib);
    }
    
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
