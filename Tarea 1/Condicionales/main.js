
// Ejercicio para calcular la distancia

function distancia(velocidad, tiempo){
    let distancia1 =  velocidad * tiempo;
    return distancia1;

}
console.log(distancia(20,30));

// Ejercicio par calcular el tiempo

function tiempo(distancia, velocidad){
    let tiempo = distancia / velocidad;
    return tiempo;

}

console.log(tiempo(30,50));

// Ejercicio par calcular el velocidad

function velocidad(distancia, tiempo){
    let velocidad = distancia / tiempo;
    return velocidad;

}

console.log(velocidad(40,80));


// Algoritmo que me permita escribir un numero y muestre la multiplicacion del ese mismo numero (1 - 12)

let num = prompt("Cual es el numero a multiplicar ?");
for(let i = 0; i <= 12; i++){
    console.log(`${num} X ${i} : ${num * i}`);
}