// const url = "https://jsonplaceholder.typicode.com/users"

// async function getUsers(){
//     try{ 
//         const response = await fetch(url)
//         const datos1 = await response.json();

//         datos1.forEach(datos1=> console.log(datos1.email))

//     }catch(error){

//     }
// }

// getUsers()



const pokeUrl = ('https://pokeapi.co/api/v2/pokemon/150')
fetch(pokeUrl).then(resp => resp.json()).then(pokeDatos => pokeDatos.forEach(pokeDatos.name))