let names = prompt("tu nombre: ");
let age = prompt("tu edad: ");

const user_info=document.getElementById("user_info");

user_info.textContent = `Hola ${names}, tienes ${age} años y el año que viene tendras ${parseInt(age)+1} años `