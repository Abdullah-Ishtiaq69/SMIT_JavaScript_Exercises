
const addForm = document.querySelector(".add");
const search = document.querySelector(".search input");
const list = document.querySelector(".todos");

let editIndex = null;

addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = e.target.add.value.trim();
    console.log(editIndex);

    if (editIndex !== null) {
        list.children[editIndex].querySelector("span").textContent = text;
        console.log();
    } else {
        list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${text}</span>
        <div>
          <i class="fas fa-edit edit"></i>
          <i class="far fa-trash-alt delete"></i>
        </div>
      </li>`;
    }

    addForm.reset();
});

list.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }

    if (e.target.classList.contains("edit")) {
        const li = e.target.parentElement.parentElement;
        const text = li.querySelector("span").textContent;

        console.log(text);

        console.log();

        addForm.add.value = text;

        editIndex = Array.from(list.children).indexOf(li);

        console.log(editIndex);
    }
});

function filterTodos(searchText) {
    for (let i = 0; i < list.children.length; i++) {
        const li = list.children[i];
        if (!li.textContent.includes(searchText)) {
            li.classList.add("filtered");
        } else {
            li.classList.remove("filtered");
        }
    }
}

search.addEventListener("keyup", function (e) {
    const searchText = e.target.value.trim();
    filterTodos(searchText);
});
