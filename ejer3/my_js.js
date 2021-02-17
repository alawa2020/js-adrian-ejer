let n = parseInt(prompt("Introduce un numero: "));

const resultado = document.getElementById("resultado");
let result="";
for(let i = 1 ;i <= n ; i++){
    if (i%2==0) result=result+`${i} es par \n /` ;
    else result=result+`${i} es impar \n /` ;
}
resultado.textContent=result;