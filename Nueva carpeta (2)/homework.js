function btn1() {
    let text = " ";
    const num = prompt ("Escribe un numero y sera retonado una escala desde el 1 hasta el numero introducido");
    for (let i = 1; i < num; i++ ) {
        text = text + "," + i;
    } alert(text);
}


function btn2() {
    let text = " ";
    const num = prompt ("Escribe un numero y sera retonado una escala desde el introducido al 1");
    for (let i = num; i >= 1; i-- ) {
        text = text + "," + i;
    } alert(text);
}


function btn3() {
    let text = " ";
    let text1 =" ";
    const num = prompt ("Escribe un numero y sera retonado una escala desde el 1 hasta el numero introducido");
    for (let i = 1; i < num; i++ ) {
        if(i % 2 == 0){
            text = text + "," + i;
        } else {
            text1 = text1 + "," + i;
        }
    } alert(`Los numero pares son ${text} y los numeros impares son ${text1}`);
}


function btn4() {
    let text = " ";
    let text1 =" ";
    const num = prompt ("Escribe un numero y sera retonado una escala desde el 1 hasta el numero introducido");
    for (let i = num; i >= 1; i-- ) {
        if(i % 2 == 0){
            text = text + "," + i;
        } else {
            text1 = text1 + "," + i;
        }
    } alert(`Los numero pares son ${text} y los numeros impares son ${text1}`);
}



function fibonacci(limit){
    const arrib = [0,1];
    for(let i = 2; i <+ limit; i++){
        arrib.push(arrib[i - 1] +  arrib[i - 2]);
    }
    return arrib;
}

console.log(fibonacci(20));



 