const numbers = document.getElementById("numbers");
const suma= document.getElementById("suma");
const result = document.getElementById("result");

//PIDIENDO VALORES EN EL HTML
let a=prompt("Introduzca el número 1");
let b = prompt("Introduzca el número 2");
let c = prompt("Introduzca el número 3");

//SUMANDO
let su = parseInt(a)+parseInt(b)+parseInt(c);


//MOSTRANDO LOS RESULTADOS EN EL HTML
numbers.textContent = `Los números son: ${a}, ${b} y ${c}.`
suma.textContent = `La suma de estos números es: ${su}`