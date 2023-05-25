import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

import DeleteButton from "./DeleteButton";
import DoneButton from "./DoneButton";

const ToDoList = ({ toDoList, onDoneTodo, onDelete }) => {
  const todoList = toDoList.map((todo) => (
    <div className="todo" id={todo.id} key={todo.id}>
      {" "}
      <li>
        {todo.priority === true ? (
          <FontAwesomeIcon className="priority-todo" icon={faExclamation} />
        ) : null}
        {todo.text}
        <span className="todo-date"> {`termin ${todo.date}`}</span>
      </li>{" "}
      <div className="function-btn">
        <DoneButton onDoneTodo={onDoneTodo} />
        <DeleteButton onDelete={onDelete} />
      </div>
    </div>
  ));
  return (
    <div className="todo-list">
      <h2 className="list-header">Lista zadań:</h2>
      {todoList}
    </div>
  );
};

export default ToDoList;
