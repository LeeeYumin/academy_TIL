/*
2. 식료품 리스트에 추가하기 / 삭제하기
    - 입력 된 상품을 배열이나 Map 같은 자료구조에 담기 / 프로그램 종료시 삭제 됨.
    - 입력 된 상품을 Storage에 저장하기 / 오래보관(브라우저 종료 후에도 유지가 됨.)
3. 입력 받은 내용을 화면에 보여주기
    - 입력 받은 값을 바로 보여주기 / 입력 받은 값을 Storage에서 가져오기.
    - 입력 창 아랫 부분에 입력받은 값을 보여주기.
4. 입력된 식료품을 삭제 / 수정하기
    - 입력된 제품명을 수정하는 버튼
    - 입력된 제품명을 삭제하는 버튼
5. 전체 식료품을 삭제하기
    - 전체 리스트를 삭제하기.
    - Storage에 저장된 내용 삭제하기, 자료구조에 담아놓은 것을 삭제하기.
*/

const $form = document.querySelector(".grocery-form");
const $input = document.querySelector("#grocery");
const $submitBtn = document.querySelector(".submit-btn");
const $grocerOl = document.querySelector(".grocery-list");
const groceryBud = new Map();

let editFlag = false;
let editElement;

function deleteItem(event) {
    const $parent = event.currentTarget.parentElement;
    const id = $parent.dataset.id;
    groceryBud.delete(id);
    if (!editFlag) {
        $grocerOl.removeChild($parent);
    }
}

$form.addEventListener("submit", event => {
  event.preventDefault();

  // 입력값에 대한 검증은 필요시 구현.
  // console.log($input.value);

  // 처음 또는 신규 입력 시
  const value = $input.value;
  const id = new Date().getTime().toString();
  console.log(id, value);
  groceryBud.set(id, value);
  if (!editFlag) {
    const $li = document.createElement("li");
    $li.setAttribute("data-id", id);
    const $groceryName = document.createElement("p");
    $groceryName.textContent = groceryBud.get(id);
    const $edit = document.createElement("button");
    $edit.setAttribute("id", "edit-item");
    $edit.textContent = "수정";
    $edit.addEventListener("click", event => {
      editElement = event.currentTarget.previousElementSibling;
      $input.value = editElement.textContent;
      $submitBtn.textContent = "수정";
      editFlag = true;
      // 수정사항의 반영 필요.
      const $parent = event.currentTarget.parentElement;
      const id = $parent.dataset.id;
      groceryBud.delete(id);
    });
    const $delete = document.createElement("button");
    $delete.setAttribute("id", "delete-item");
    $delete.textContent = "삭제";
    $delete.addEventListener("click", deleteItem);
    $li.appendChild($groceryName);
    $li.appendChild($edit);
    $li.appendChild($delete);
    $grocerOl.appendChild($li);
  } else {
    editElement.textContent = value;
    editFlag = false;
    editElement = '';
    $submitBtn.textContent = "입력";
  }
});