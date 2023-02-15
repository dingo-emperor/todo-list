import React from 'react';
import List from "./List";
import Form from "./Form";
import { useSelector, useDispatch } from "react-redux";
import { updateMessage } from "./features/message/messageSlice";
import { addTodoList, addDoneList, removeTodoList } from "./features/list/listSlice";
import stateType from "./app/stateType";

export function App() {
    const message = useSelector((state: stateType) => state.message.message);
    const todo_list = useSelector((state: stateType) => state.list.todo_list);
    const done_list = useSelector((state: stateType) => state.list.done_list);
  const dispatch = useDispatch();
  const createItem = () => {
    if (todo_list.indexOf(message) > -1) {
      alert("This task is already in Todo List.");
    } else if (done_list.indexOf(message) > -1) {
      alert("This task is already done.");
    } else {
      dispatch(addTodoList(message));
    }
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (done_list.indexOf(event.currentTarget.innerText) === -1) {
      dispatch(removeTodoList(event.currentTarget.innerText));
      dispatch(addDoneList(event.currentTarget.innerText));
    }
  }

  return (
      <div>
        <h2> TODO LIST </h2>
        <Form
            message={message}
            handleChange={(event: React.KeyboardEvent<HTMLInputElement>) => dispatch(updateMessage((event.target as HTMLInputElement).value))}
            handleSubmit={createItem}
        />
        <h3> Todo List </h3>
        <List list={todo_list} handleClick={handleClick} />
        <h3> Completed List </h3>
        <List list={done_list} handleClick={handleClick} />
      </div>
  );
}

export default App;