let tasks = [];


function addTask(){
    let input = document.getElementById("taskInput");
    let value = input.value.trim();

    if(value === "") return;

    tasks.push(value);
    input.value = "";
    renderTasks();
}

function renderTasks(){
    const taskList = document.getElementById("taskList");
    const searchQuery = document.getElementById("taskInput").value.toLowerCase();

    taskList.innerHTML = "";

    tasks.forEach((task, index)=>{
        if(task.toLowerCase().includes(searchQuery)){
            let li = document.createElement("li");

            li.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>`;
            taskList.appendChild(li)
        }
    })
}


function editTask(index){
    const newTask = prompt("edit your task:", tasks[index]);

    if(newTask !== null && newTask.trim() !== ""){
        tasks[index] = newTask.trim();
        renderTasks();
    }
}

function deleteTask(index){
    tasks.splice(index,1);
    renderTasks();
}

document.getElementById("taskInput").addEventListener("input", renderTasks)