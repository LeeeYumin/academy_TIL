import { alertMessage } from "./alert.js";
import { addToLocalStrage,
         removeFromLocalStorage,
         removeAllItemFromLocalStorage,
         getItemFromLocalStorage,
         editLocalStorage } from "./localStorage.js";

// let editFlag = false;
const editMode = new EditMode();
// let editElement;
// let editId = '';

const $input = document.querySelector("#grocery");
const $submitBtn = document.querySelector(".submit-btn");
const $grocerOl = document.querySelector(".grocery-list");

export function clearItems() {
    const child = document.querySelectorAll(".grocery-item");
    child.forEach((item) => $grocerOl.removeChild(item));

    removeAllItemFromLocalStorage("list");

    setBackToDefault();

    alertMessage("전체 아이템이 삭제되었습니다.");
}

export function editItem(event) {
    const $parent = event.target.parentElement;
    const id = $parent.dataset.id;
    // editId = id;
    editMode.setEditId(id);

    const editElement = event.target.previousElementSibling;
    editMode.setEditElement(editElement);
    $input.value = editMode.getEditElement().textContent;
    editMode.setEditMode(true);
    // editFlag = true;

    $submitBtn.textContent = "수정";
}

export function deleteItem(event) {
    const $parent = event.target.parentElement;
    const id = $parent.dataset.id;
    if (!editMode.isEditMode()) {
        $grocerOl.removeChild($parent);
    }

    removeFromLocalStorage(id);

    setBackToDefault();

    alertMessage("아이템이 삭제되었습니다.");
}

export function addItem(event) {
    event.preventDefault();
    // 처음 또는 신규 입력 시
    const value = $input.value;
    const id = new Date().getTime().toString();
    let message = ' 되었습니다.'

    if (value !== "" && !editMode.isEditMode()) {
        addToLocalStrage(id, value);
        const $li = document.createElement("li");
        $li.setAttribute("data-id", id);
        $li.classList.add('grocery-item');
        const $groceryName = document.createElement("p");
        // storage에서 저장하고 받아오도록 수정
        $groceryName.textContent = getItemFromLocalStorage(id).value;
        const $edit = document.createElement("button");
        $edit.setAttribute("id", "edit-item");
        $edit.textContent = "수정";
        // $edit.addEventListener("click", editItem);
        const $delete = document.createElement("button");
        $delete.setAttribute("id", "delete-item");
        $delete.textContent = "삭제";
        // $delete.addEventListener("click", deleteItem);
        $li.appendChild($groceryName);
        $li.appendChild($edit);
        $li.appendChild($delete);
        $grocerOl.appendChild($li);

        message = value + ' 추가 ' + message;
        // alertMessage(`${value} 추가 ${message}`);
    } else {
        console.log(editMode.isEditMode());
        const id = editMode.getEditId();
        editLocalStorage(id, value);
        console.log(editMode.getEditId());
        // 가져와서 수정
        editMode.getEditElement().textContent = getItemFromLocalStorage(id).value;
        // editElement.textContent = getItemFromLocalStorage(id).value;
        message = value + ' 수정 ' + message;
        // alertMessage(`${value} 수정 ${message}`);
    }
    setBackToDefault();
    alertMessage(message);
}

// set back to defaults
function setBackToDefault() {
    $input.value = "";
    editMode.setEditMode(false);
    // editFlag = false;
    // editId = "";
    editMode.setEditId("");
    editMode.setEditElement(null);
    $submitBtn.textContent = "입력";
}

// Modal 과제 추가
function EditMode() {
    var editMode = false;
    var editId = '';
    var editElement;

    this.setEditMode = function(isEditMode) {
        editMode = isEditMode;
    }

    this.isEditMode = function() {
        return editMode;
    }

    this.setEditId = function(id) {
        editId = id;
    }

    this.getEditId = function(id) {
        return editId
    }

    this.setEditElement = function(element) {
        editElement = element;
    }

    this.getEditElement = function(element) {
        return editElement;
    }
}