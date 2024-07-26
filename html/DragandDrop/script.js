const $boardTasks = document.querySelectorAll('.board--task');
const taskSet = {
    backlog: ["Release the course", "Sit back and relax"],
    progress: ["Work on projects", "Listen to music"],
    complete: ["Being cool", "Getting stuff done"],
    onhold : ["Being uncool"]
}
const sectionNames = ['backlog', 'progress', 'complete', 'onhold'];

let draggedItem;

function drag(event) {
    console.log("drag");
    draggedItem = event.target;
}

function drop(event) {
    console.log("drop");
    event.preventDefault();
    $boardTasks.forEach(($task) => $task.classList.remove("over"));
    event.currentTarget.appendChild(draggedItem);
    displayItems();
}

function allowDrop(event) {
    // console.log("dragover");
    event.preventDefault();
}

function dragEnter(event) {
    console.log("dragenter");
    event.currentTarget.classList.add("over");
}

function createItem(item) {
    const $li = document.createElement('li');
    $li.textContent = item;
    $li.classList.add('board--task--item');
    $li.draggable = true;
    return $li;
}

function displayItems() {
    $boardTasks.forEach(($task, index) => {
        const items = taskSet[sectionNames[index]];
        items.forEach((item) => {
            $task.appendChild(createItem(item));
        })
        $task.addEventListener('drop', drop);
        $task.addEventListener('dragenter', dragEnter);
        $task.addEventListener('dragover', allowDrop);
        $task.addEventListener('dragstart', drag);
    })
    
    
}

displayItems();