const $boardTasks = document.querySelectorAll('.board--task');
const $boards = document.querySelectorAll('.board');
const taskSet = {
    backlog: ["Release the course", "Sit back and relax"],
    progress: ["Work on projects", "Listen to music"],
    complete: ["Being cool", "Getting stuff done"],
    onhold: ["Being uncool"]
}
const sectionNames = ['backlog', 'progress', 'complete', 'onhold'];

let draggedItem;

function drag(event) {
    console.log("drag");
    draggedItem = event.target;
    const sectionName = event.currentTarget.querySelector('.board--title').textContent.split(" ").join("").toLowerCase();
    taskSet[sectionName] = taskSet[sectionName].filter((item) => item !== draggedItem.textContent);
}

function drop(event) {
    console.log("drop");
    const sectionName = event.currentTarget.querySelector('.board--title').textContent.split(" ").join("").toLowerCase();
    taskSet[sectionName].push(draggedItem.textContent);
    displayItems();
}

function dragLeave(event) {
    event.preventDefault();
    event.currentTarget.classList.remove("over")
}

function dragEnter(event) {
    console.log("dragenter");
}

function dragOver(event) {
    event.preventDefault();
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
        $task.innerHTML = null;
        const items = taskSet[sectionNames[index]];
        items.forEach((item) => {
            $task.appendChild(createItem(item));
        })
    })
}

$boards.forEach(($board) => {
    $board.addEventListener('drop', drop);
    $board.addEventListener('dragenter', dragEnter);
    $board.addEventListener('dragover', dragOver);
    $board.addEventListener('dragleave', dragLeave);
    $board.addEventListener('dragstart', drag);
    const $addContainer = $board.querySelector('.board--add');
    const $addBtn = $board.querySelector('.board__btn--add');
    $addBtn.addEventListener('click', (event) => {
        $saveBtn.style.visibility = 'visible';
        $addContainer.style.display = 'block';
        event.currentTarget.style.visibility = 'hidden';
    })
    const $saveBtn = $board.querySelector('.board__btn--save');
    $saveBtn.addEventListener('click', (event) => {
        $addBtn.style.visibility = 'visible';
        $addContainer.style.display = 'none';
        event.currentTarget.style.visibility = 'hidden';
        const $item = $addContainer.querySelector('.add__item');
        console.log($item.textContent);
        if ($item.textContent.trim()) {
            const inputItems = $item.textContent.split("\n");
            console.log(inputItems);
            const sectionName = $board.querySelector('.board--title').textContent.split(" ").join("").toLowerCase();
            taskSet[sectionName].push($item.textContent);
            $item.innerHTML=null;
        }
        displayItems();
    })
    $saveBtn.style.visibility = 'hidden';
    $addContainer.style.display = 'none';
})


displayItems();