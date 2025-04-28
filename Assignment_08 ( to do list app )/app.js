inputAdd = document.getElementById('input');
ul = document.getElementById('ul');
form = document.getElementById('form');
mainBox = document.getElementById('main');
tasks = document.getElementById('tasks');

// Add

form.addEventListener('submit' , (e) => {
    if(inputAdd.value !== ''){
        e.preventDefault();
        const li = document.createElement('li');
        li.innerHTML = `${inputAdd.value.trim()}
        <span id="edit"><i class="fa-solid fa-pen"></i></span>
        <span id="delete"><i class="fa-solid fa-trash"></i></span>
        `;
        ul.appendChild(li);
        inputAdd.value = '';
        inputAdd.focus()
        textUpdate()
    } else {
        alert('Please Enter Some Value');
    };
});

// Delete

ul.addEventListener('click' , (e) => {
    if (e.target.classList.contains('fa-trash')) {
        e.target.closest('li').remove();
        textUpdate()
    }
});

const textUpdate = () => {
   const text = mainBox.querySelectorAll('li').length;
    tasks.textContent = `Total Tasks is: ${text}`;
}
