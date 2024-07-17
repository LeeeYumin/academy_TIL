$grocerOl.addEventListener("click", (event) => {
    console.log("Event delegation.");
    if (event.target.textContent === '수정') {
      console.log(event.target.textContent);
      editItem(event);
    } else if (event.target.textContent === '삭제') {
      console.log(event.target.textContent);
      deleteItem(event);
    } else {
      console.log("잘못된 이벤트 입니다.!");
      // throw new TypeError("잘못된 이벤트 입니다.!");
    }
  });