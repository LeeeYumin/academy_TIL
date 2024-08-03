import "./App.css";
import { useState, useRef, useReducer } from "react";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
//import TodoList from "./component/TestComp";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "맛있는 밥 먹기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "달달한 디저트 먹기",
    createdDate: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.newItem, ...state];
    case "UPDATE":
      return state.map((it) =>
      it.id === action.targetId ? {...it, isDone: it.isDone} : it
      );
    default:
      return state;
  }
}

function App() {
  //할 일 추가 함수
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  //const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type:"CREATE",
      newItem: {
        id : idRef.current,
        content,
        isDone: false,
        createDate: new Date().getTime(),
      }
    })
    // const newItem = {
    //   id: idRef.current,
    //   content,
    //   isDone: false,
    //   createdDate: new Date().getTime(),
    // };
    // setTodo([newItem, ...todo]);
        idRef.current += 1;
  };

  const onUpdate = useCallback ((targetId) => {
    //할 일 수정
    dispatch({
      type:"UPDATE",
      targetId,
    })
    // setTodo(
    //   todo.map((it) =>
    //     it.id === targetId ? { ...it, isDone: !it.isDone } : it
    //   )
    // );
  }, []);

  const onDelete = useCallback((targetId) => {
    //할 일 삭제
    dispatch({
      type:"DELETE",
      targetId,
    })
    // setTodo(
    //   todo.filter((it) => it.id !== targetId));
  }, []);

  const memoizedDispatches = useMemo(() => {
    return {onCreate, onUpdate, onDelete}
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={code}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
            <TodoList />  {/* todo={todo} onUpdate={onUpdate} onDelete={onDelete} */}
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;