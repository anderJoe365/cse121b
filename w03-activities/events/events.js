let task = [];

function renderTasks(tasks)
{
    const listElement = document.querySelector("#todoList");
    listElement.innerHTML = "";
    tasks.forEach(task => {
        listElement.innerHTML += `
        <li ${task.completed ? 'class="strike"' : ""}>
            <p> ${task.detail}</p>
            <div>
                <span data-function="delete">x</span>
                <span data-function="complete">o</span>
            </div>
        </li>`;

    });
}

function newTask()
{
    const task = document.querySelector("#todo").ariaValueMax;
    task.push({detail: task, completed: false});
    renderTasks(tasks)
}

function removeTask(taskElement) 
{
    tasks = tasks.filter(
        (task) => task.detail != taskElement.childNodes[0].innerText
    );

    taskElement.remove();
}

function completeTask(taskElement)
{
    const taskIndex = tasks.findIndex(
        (task) => task.detail === taskElement.childNodes[0].innerText
    );

    tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
    
    taskElement.classList.toggle("strike");
    console.log(tasks);
}

function manageTasks(event)
{
    console.log(event.target);
    const parent = event.target.closest("li");
    if (event.target.dataset.function === "delete")
    {
        completeTask(parent);
    }
}

document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

renderTasks(tasks);
