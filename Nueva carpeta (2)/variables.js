

// let arrays = ["dagger", "dagita1", "kikogunz", "kikogunz1"]



// setInterval(myfunction, 1000);

// function myfunction(){
//     let d = new Date();

// document.getElementById("holaa").innerHTML = 
//     d.getHours() + ":" + 
//     d.getMinutes() + ":" +
//     d.getSeconds();
// }



// setInterval(mytime1, 1000);

// function mytime1(){
//     let d = new Date();
    
//     document.getElementById("dos").innerHTML=
//     d.getHours() + ":" +
//     d.getMinutes() + ":" +
//     d.getSeconds();
// }


// function prueba1(nume1, numee2, cb1, cb2){
//     if (nume1 === numee2){
//         cb1()
//     } else{
//         cb2()
//     }
// }


// function fn1(){
//     console.log("soy la function #1");
// }


// function fn2(){
//     console.log("soy la function #2");;
// }


// prueba1(20,20, fn1, fn2)




// setTimeout(SetTMO, 3000);


// function SetTMO (){
//         console.log("hello world");
//         segundo();
// }


// function segundo (){
//     console.log("soy el dos")
// }













    

// function myName(aqui) {
//     document.getElementById("tres").innerHTML = aqui; 
// }


//  function sumaValue(nume1, nume2, callback) {
//     let result = nume1 + nume2;
//     callback(result);
// }


// sumaValue(10, 20, myName)











// function calAge1 (years){
//     const age =  2037 - years;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(calAge1(1994));


// const calAge2 = function (years1) {
//     const age1 = 2037 - years1;
//     const retirement1 = 65 - age1;
//     return retirement1;
// }

// console.log (calAge1(1994));

// const calAge3 = years2 => {
//     const age2 = 2037 - years2;
//     const retirement2 = 65 - age2;
//     return retirement2;
// }

// console.log(calAge3(1994));











































// let count = 0;

// document.getElementById("decreasebtn").onclick = function() {
//     count-=1; 
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("Reset").onclick = function() {
//     count=0; 
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("increasebtn").onclick = function() {
//     count+=1; 
//     document.getElementById("countLabel").innerHTML = count;
// }

















































// function puntajeGolf (par, golpe) {
//     if (golpe == 1) {
//         return "hole in one";
//     } else if (golpe <= par - 2){
//         return "eagle";
//     } else if (golpe == par - 1){
//         return "birdie";
//     } else if (golpe == par ){
//         return "par";
//     }else if (golpe <= par + 1){
//         return "bogey";
//     } else if (golpe == par + 2){
//         return "double gogey";
//     } else if (golpe >= par + 3 ) {
//         return "go home"
//     }
// }


// document.write(puntajeGolf(4, 4));












































// let free = false;

// const validar = (time)=>{
//     let edad = prompt(" Cual es la edad ?");
//     if( edad > 18) {
//         if(time >= 2 && time < 7 && free == false){
//         alert(" podes pasar gratis porque eres la prmera persona despues de las 2");
//         free = true;
//         } 
//         else {
//         alert(` son la ${time}:hrs y podes pasar, pero tienes que pagar`);
//         }
//     }


//    else {
//     alert ("eres menor no puedes entres");
//     }
// }


// validar(8)
// validar(9)
// validar(10)
// validar(12)
// validar(2)
// validar(4)
