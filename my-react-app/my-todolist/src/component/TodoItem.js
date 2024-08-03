import { useEffect } from "react";
import "./TodoItem.css";

const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };

  // const didMountRef = useRef(false);
  // useEffect(() => {
  //   if(!didMountRef.current) {
  //     didMountRef.current = true;
  //     return;
  //   }
  //   console.log("컴포넌트 업데이트");
  // })

  //   useEffect(() => {
  //     console.log("컴포넌트 마운트");
  //     return () => {
  //       console.log("컴포넌트 언마운트");
  //     }     
  //   }, [])
  
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};
export default TodoItem;
