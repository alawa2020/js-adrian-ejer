
let continuar = true;
while(continuar){
    let figure = prompt("Su figura: ");
    const figura = document.getElementById("figura");


    if (figure=="triangulo"){
        let b= prompt("La base del triangulo: ");
        let h = prompt("La altura del trigulo: ");
        let area = parseInt(b)*parseInt(h)*0.5;
        figura.textContent = `El area del triangulo es: ${area}`;
        continuar=false;
    }

    else if(figure=="rectangulo"){
        let b= prompt("La base del rectangulo: ");
        let h = prompt("La altura del rectangulo: ");
        let area = parseInt(b)*parseInt(h);
        figura.textContent = `El area del rectangulo es: ${area}`;
        continuar=false;
    }

    else if (figure == "circulo"){
        let r = prompt("El radio del circulo: ");
        area = Math.PI * Math.pow(parseFloat(r),2)
        figura.textContent = `El area del cirulo es : ${area}`
        continuar=false;
    }


}

