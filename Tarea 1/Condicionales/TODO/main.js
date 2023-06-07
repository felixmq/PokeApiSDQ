const mylist = document.getElementById('mylist');
const btnSend = document.getElementById('btnSend');
const taskInput = document.getElementById('taskInput');
const btnDelete =document.getElementById('btnDelete');
const taskArray = [];

function toDo(){
      let cont = taskInput.value;
      taskArray.push(cont);
      const li = document.createElement("li");
      li.innerHTML = `<li class="collection-item"><div>${cont}<a href="#" class="secondary-content"><i class="btnDelete" >Delete</i></a></div></li>`;
      mylist.appendChild(li);
      li.querySelector(".btnDelete").addEventListener('click', () => li.classList.add("d-none"));
}

// function dele(){

//     const btnDelete = document.getElementById('btnDelete');
//     btnDelete.style.display = "none";
// }


btnSend.addEventListener('click', toDo)
// btnDelete.addEventListener('click', dele)
