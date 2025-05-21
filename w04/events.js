const but_el = document.getElementById('submitTask');
const list_el = document.getElementById('todoList');

function newTask() {
    console.log("Task handled");
    const input_el = document.getElementById('todo');
    const task = input_el.value;
    // Alternatively this could be done:
    // const task = document.querySelector('#todo').value;
    // const list_el = document.querySelector('#todoList');
    list_el.innerHTML += `
    <li> ${task}
    <div>
    <span data-function="delete" tabindex="0" role="button" aria-label="Delete task">❎</span>
    <span data-function="complete" tabindex="0" role="button" aria-label="Complete task">✅</span>
    </div>
    </li>
    `;
}

function manageTasks(e) {
    const parent = e.target.closest("li");
    if(e.target.getAttribute('data-function') === "delete") {
        parent.remove();
    }
    if (e.target.getAttribute('data-function') === "complete") {
        parent.classList.toggle('strike');
    }
}

but_el.addEventListener("click", newTask);
list_el.addEventListener("click", (event) => {
    manageTasks(event); 
})

// Alternatively this could have been done
// document.querySelector('#submitTask').addEventListener('click', newTask);
// document.querySelector('#todoList').addEventListener('click', manageTasks);