const input = document.querySelector('#input');
const add = document.querySelector('#add');
const toDo = document.querySelector('#toDo');
const clean = document.querySelector('#clean');   

add.addEventListener('click', () => {
toDo.value;
if (input.value != "") {
toDo.innerHTML += '<br>' + '<div id="containerTask">' + '<input type="checkbox" id="task">' + input.value + '<br>' + '</div>';
clean.disabled = false;
} else if (input.value === "") {
toDo.innerHTML = '<p id="noTask">Создайте новую задачу</p>';
clean.disabled = true;    
};
});

clean.addEventListener('click', () => {
toDo.value;
toDo.innerHTML = '<p id="noTask">Новых задач пока нет</p>';
});





