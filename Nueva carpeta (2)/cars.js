const btnRojo = document.getElementById('btnRojo');
const btnAmarillo = document.getElementById('btnAmarillo');
const btnNegrop = document.getElementById('btnNegro');
const cars = document.getElementById('cars');

btnRojo.addEventListener('click', function() {
    cars.src = "foto/Jeep-red-.png";
    
})

btnAmarillo.addEventListener('click', function(){
    cars.src = "foto/jeep-yellow.png";
})

btnNegrop.addEventListener('click', function(){
    cars.src = "foto/Jeep-black.png";
})

