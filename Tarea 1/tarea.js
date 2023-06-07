const btnPt = document.getElementById('btnPt');
const btnAt = document.getElementById('btnAt');
const btnCt = document.getElementById('btnCt');
const btnCa = document.getElementById('btnCa');
const btnRt = document.getElementById('btnRt');
const btnRa = document.getElementById('btnRa');
const btnCi = document.getElementById('btnCi');
const btnCia = document.getElementById('btnCia');
const tri1 = document.getElementById('tri1');
const tri2 = document.getElementById('tri2');
const cual = document.getElementById('cua1');
const cua2 = document.getElementById('cua2');
const ci1 = document.getElementById('ci1');
const ci2 = document.getElementById('ci2');
const rect1 = document.getElementById('rect1');
const rect2 = document.getElementById('rect2');


function triangulo(){
    let num1 = parseInt(prompt("cual es el perimetro 1 ?"));
    let num2 = parseInt(prompt("cual es el perimetro 2 ?"));
    let num3 = parseInt(prompt("cual es el perimetro 3 ?"));

    let result = num1 + num2 + num3;
    tri1.innerHTML = ` ${result}cm`;
    
}

function trianguloA(){
    let num1 = parseInt(prompt("cual es la base del triangulo ?"));
    let num2 = parseInt(prompt("cual es la altura de un triangulo ?"));

    let result = (num1 * num2) / 2;
    tri2.innerHTML = ` ${result}`;
}

function cuadrado(){
    let num1 = parseInt(prompt("cual es el valor de los 4 lados ?"));

    let result = num1 + num1 + num1 + num1;
    cual.innerHTML = ` ${result}`;
}

function cuadradoA(){
    let num1 = parseInt(prompt("cual es el area ?"));
    let result = num1 * num1;
    cua2.innerHTML = ` ${result}`;
}


function circulo(){
    let num1 = parseInt(prompt("cual es el diametro ?"));
    let result = num1 * 3.14;

    ci1.innerHTML = ` ${result}`;
}

function circuloA(){
    let num1 = parseInt(prompt("cual es el radio ?"));
    let result = 3.14 * num1;
    let result1 = result * result;

    ci2.innerHTML = ` ${result}`;
}

function rectanguloA(){
    let num1 = parseInt(prompt("cual es el Perimetro A ?"));
    let num2 = parseInt(prompt("cual es el Perimetro B ?"));

    let result = num2 * num1;
    rect2.innerHTML = ` ${result}`;

}

function rectangulo(){
    let num1 = parseInt(prompt("cual es la base del rectangulo ?"));
    let num2 = parseInt(prompt("cual es la altura del rectangulo ?"));

    let result = num1 + num1 + num2 + num2;
    rect1.innerHTML = `" "${result}`;
}