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

import { clearItems, addItem, editItem, deleteItem } from "./itemController.js";

export function initListContainer(event) {
  console.log("Event delegation.");
  if (event.target.textContent === '수정') {
      console.log(event.target.textContent);
      editItem(event);
  } else if (event.target.textContent === '삭제') {
      console.log(event.target.textContent);
      deleteItem(event);
  } else {
      //   console.log("잘못된 이벤트 입니다.!");
      throw new TypeError("잘못된 이벤트 입니다.!");
  }
}


function startGroceryBud() {
  const $form = document.querySelector(".grocery-form");
  const $clearBtn = document.querySelector(".clear-btn");
  const $grocerOl = document.querySelector(".grocery-list");
  try {
    $form.addEventListener("submit", addItem);
    $clearBtn.addEventListener('click', clearItems);
    $grocerOl.addEventListener('click', initListContainer);
  } catch (error) {
    console.error(error);
  }
}

startGroceryBud();