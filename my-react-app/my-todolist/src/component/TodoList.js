import { useContext, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { TodoStateContext } from "../App"

// const TodoList = ({ todo, onUpdate, onDelete }) => {
//   const [search, setSearch] = useState("");
//   const onChangeSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const getSearchResult = () => {
//     //영어 대소문자 구별하지 않게
//     return search === ""
//       ? todo
//       : todo.filter((it) =>
//           it.content.toLowerCase().includes(search.toLowerCase())
//         );
//   };

function Todolist() {
  const todo = useContext(TodoStateContext);
}
const getSearchResult = (e) => {
  
}

const getSearchResult = () => {

}
  return (
    <div className="TodoList">
      <h4>To do List 🌱</h4>
      <div>총 할 일 : {totalCount}</div>
      <div>완료된 할 일 : {doneCount}</div>
      <div>아직 완료하지 않은 할 일 : {notDoneCount}</div>
      <input
        value={search}
        className="searchbar"
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}       
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;