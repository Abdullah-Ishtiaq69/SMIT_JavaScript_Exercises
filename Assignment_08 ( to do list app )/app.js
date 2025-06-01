const input = document.getElementById("addTask");
const button = document.querySelector("button");
const list = document.getElementById("list");

function addTask() {

    if (input.value === "") {
        alert("Please Enter Something");
        return;
    } else {
        const li = document.createElement("li");
        li.innerText = input.value;
        list.appendChild(li);

        const deleteButton = document.createElement("i");
        deleteButton.setAttribute("class", "fa-solid fa-trash");
        li.appendChild(deleteButton);
    }

    input.value = ""

    saveData()
}

list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
        saveData()
    } else if (e.target.tagName === "I") {
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

button.addEventListener("click", addTask);