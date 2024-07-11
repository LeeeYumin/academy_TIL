/* 1. 사용자에게 식료품 입력 받기
- 입력받는 form(입력버튼)
2. 식료품 리스트에 추가하기/삭제하기
- 입력된 상품을 배열이나 Map 같은 자료구조에 담기 / 프로그램 종료시 삭제 됨
- 입력된 상품을 Storage에 저장하기 / 오래보관 (브라우저 종료 후에도 유지 됨)
3. 입력 받은 내용을 화면에 보여주기
- 입력 받은 값을 바로 보여주기 / 입력 받은 값을 Storage에서 가져오기
- 입력 창 아래부분에 입력받은 값을 보여주기
4. 입력된 식료품을 삭제 / 수정하기
- 입력된 제품명을 수정하는 버튼
- 입력된 제품명을 삭제하는 버튼
5. 전체 식료품을 삭제하기
- 전체 리스트를 삭제하기
- Storage에 저장된 내용 삭제하기, 자료구조에 담은 내용 삭제 */

const $form = document.querySelector(".grocery-form");
const $input = document.querySelector("#grocery");
const $submitBtn = document.querySelector(".submit-btn");
const $grocerOl = document.querySelector(".grocery-list");
const $clearBtn = document.querySelector(".clear-btn");
const $alert = document.querySelector(".alert")
const groceryBud = new Map();

let editFlag = false;
let editElement;
let editId = '';
// ****** local storage **********

// add to local storage
function addToLocalStrage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function getItemFromLocalStorage(id) {
  const items = getLocalStorage();

  const filteredItems = items.filter((item) => item.id === id);
  return filteredItems[0]
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter((item) => item.id !== id);
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();

  const newItems = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function removeAllItemFromLocalStorage(key) {
  localStorage.removeItem(key);
}

function deleteItem(event) {
  const $parent = event.currentTarget.parentElement;
  const id = $parent.dataset.id;
  if (!editFlag) {
    $grocerOl.removeChild($parent);
  }

  removeFromLocalStorage(id);
  
  setBackToDefault();
  
  alertMessage("아이템이 삭제되었습니다.");
}

function editItem(event) {
  const $parent = event.currentTarget.parentElement;
  const id = $parent.dataset.id;
  editId = id;

  editElement = event.currentTarget.previousElementSibling;
  $input.value = editElement.textContent;
  editFlag = true;
  
  $submitBtn.textContent = "수정";
}

function clearItems() {
  const child = document.querySelectorAll(".grocery-item");
  child.forEach((item) => $grocerOl.removeChild(item));

  removeAllItemFromLocalStorage("list");

  setBackToDefault();

  alertMessage("전체 아이템이 삭제되었습니다.");
}

function alertMessage(message) {
  $alert.textContent = message;
  setTimeout(() => $alert.textContent = '', 1000);
}

// set back to defaults
function setBackToDefault() {
  $input.value = "";
  editFlag = false;
  editId = "";
  $submitBtn.textContent = "입력";
}

function addItem(event) {
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
    $edit.addEventListener("click", editItem);
    const $delete = document.createElement("button");
    $delete.setAttribute("id", "delete-item");
    $delete.textContent = "삭제";
    $delete.addEventListener("click", deleteItem);
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

$form.addEventListener("submit", addItem);
$clearBtn.addEventListener('click', clearItems);