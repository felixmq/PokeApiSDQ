// const imgs = document.getElementById('imgs')
// const leftBtn = document.getElementById('left')
// const rightBtn = document.getElementById('right')

// const img = document.querySelectorAll('#imgs img')

// let idx = 0

// // let interval = setInterval(run, 2000)

// // function run() {
// //     idx++
// //     changeImage()
// // }


// function changeImage() {
//     if(idx > img.length - 1) {
//         idx = 0
//     } else if(idx < 0) {
//         idx = img.length - 1
        
//     }
    
//     console.log(imgs.style.transform = `translateX(${-idx * 500}px)`)
    
// }

// // function resetInterval() {
// //     clearInterval(interval)b 
// //     interval = setInterval(run, 2000)
// // }

// rightBtn.addEventListener('click', () => {
//     idx++
//     changeImage()
//     // resetInterval()
// })

// leftBtn.addEventListener('click', () => {
//     idx--
//     changeImage()
//     // resetInterval()
// })



const array = [ "hola", "dagger", "Carro", "rojo", ["gato", "perro", "conejo", "raton", ["gallina", {nombre: "Leche", Apellido: "RD"}]]]


console.log(array[4][4][1]["nombre"])


const obj = {nombre: "dagger", ID: 440, hijos: ["niña", "niño", {nombrePerro: "bobi", edad: 50}]};
console.log()