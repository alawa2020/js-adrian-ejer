const numbers = document.getElementById("numbers");
const result = document.getElementById("result");

//PIDIENDO VALORES EN EL HTML
let a=prompt("Introduzca el número 1");
let b = prompt("Introduzca el número 2");
let c = prompt("Introduzca el número 3");

//SUMANDO
let su = parseInt(a)+parseInt(b)+parseInt(c);

//LOGICA PARA SUMAR
let n1,n2,n3;

if (a<b){
    if(b<c){
        n1=a;n2=b;n3=c;
    }
    else{
        if(a<c){
            n1=a;n2=c;n3=b;
        }
        else{
            n1=c;n2=a;n3=b;
        }
    }
}
else{
    if(c<b){
        n1=c;n2=b;n3=a;
    }
    else{
        if(a<c){
            n1=b;n2=a;n3=c;
        }
        else{
            n1=b;n2=c;n3=a;
        }
    }
}


//MOSTRANDO LOS RESULTADOS EN EL HTML
numbers.textContent = `Los números son: ${a}, ${b} y ${c}.`;
result.textContent=`Los números ordenados son : ${n1}, ${n2},${n3}`;