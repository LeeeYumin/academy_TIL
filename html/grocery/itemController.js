import { alertMessage } from "./alert.js";
import { addToLocalStrage,
         removeFromLocalStorage,
         removeAllItemFromLocalStorage,
         getItemFromLocalStorage,
         editLocalStorage } from "./localStorage.js";

let editFlag = false;
let editElement;
let editId = '';

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
    editId = id;

    editElement = event.target.previousElementSibling;
    $input.value = editElement.textContent;
    editFlag = true;

    $submitBtn.textContent = "수정";
}

export function deleteItem(event) {
    const $parent = event.target.parentElement;
    const id = $parent.dataset.id;
    if (!editFlag) {
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
    if (value !== "" && !editFlag) {
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
        editLocalStorage(editId, value);
        console.log(editId);
        // 가져와서 수정
        editElement.textContent = getItemFromLocalStorage(editId).value;
        message = value + ' 수정 ' + message;
        // alertMessage(`${value} 수정 ${message}`);
    }
    setBackToDefault();
    alertMessage(message);
}

// set back to defaults
function setBackToDefault() {
    $input.value = "";
    editFlag = false;
    editId = "";
    $submitBtn.textContent = "입력";
}