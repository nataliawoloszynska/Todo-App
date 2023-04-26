import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import AddToDo from "./components/AddToDo";
import DoneTodos from "./components/DoneTodos";
import ToDoList from "./components/ToDoList";
import AddNewTaskButton from "./components/AddNewTaskButton";
import Summary from "./components/Summary";

import "./App.css";
import "./Reset.css";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [todo, setTodo] = useState({ text: "", date: "", priority: false });
  const [toDoList, setToDoList] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  const [countTodoElements, setCountTodoElements] = useState(0);
  const [countDoneElements, setCountDoneElements] = useState(0);

  const handleNewTask = () => {
    setIsActive((current) => !current);
  };

  const handleSummaryMenu = () => {
    setIsVisible((current) => !current);
  };

  const handleToDo = (e) => {
    const text = e.target.value;
    setTodo({ text: text, id: uuidv4() });
  };

  const handleAddToDo = () => {
    setToDoList([...toDoList, todo]);
    document.querySelector(".input-text").value = "";
    document.querySelector(".input-date").value = "";
    document.querySelector(".input-checkbox").checked = false;
    setCountTodoElements(toDoList.length + 1);
  };

  const handleDoneTodo = (e) => {
    const done = e.target.parentNode.parentNode.parentNode;
    const doneTask = toDoList.find((listItem) => listItem.id === done.id);
    setDoneTodos([...doneTodos, { text: doneTask.text, id: uuidv4() }]);
    toDoList.splice(doneTask, 1);
    setToDoList(toDoList);
    setCountDoneElements(doneTodos.length + 1);
    setCountTodoElements(toDoList.length);
  };

  const handleDeleteTodo = (e) => {
    const deleteItem = e.target.parentNode.parentNode.parentNode;
    toDoList.splice(deleteItem, 1);
    doneTodos.splice(deleteItem, 1);
    setToDoList(toDoList);
    setDoneTodos(doneTodos);
    deleteItem.remove();
    setCountTodoElements(toDoList.length);
    setCountDoneElements(doneTodos.length);
  };

  const handleTodayDate = () => {
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    const minDate = yyyy + "-" + mm + "-" + dd;
    return minDate;
  };

  const handleDate = (e) => {
    todo.date = e.target.value;
  };

  const handlePriority = (e) => {
    todo.priority = e.target.checked;
  };

  return (
    <div className="App">
      {" "}
      {isVisible ? null : (
        <FontAwesomeIcon
          className="menu"
          icon={faBars}
          onClick={handleSummaryMenu}
        />
      )}
      <div className="app-content">
        <h1 className="app-header">Czas jest zbyt cenny - zaplanuj go!</h1>
        <AddToDo
          onToDo={handleToDo}
          onAddToDo={handleAddToDo}
          onDate={handleDate}
          disableDate={handleTodayDate}
          onPriority={handlePriority}
          isActive={isActive}
        />
        <ToDoList
          toDoList={toDoList}
          onDoneTodo={handleDoneTodo}
          onDeleteTodo={handleDeleteTodo}
        />
        <DoneTodos doneTodos={doneTodos} onDeleteTodo={handleDeleteTodo} />
        <AddNewTaskButton onNewTask={handleNewTask} isActive={isActive} />
      </div>
      <Summary
        onMenu={handleSummaryMenu}
        isVisible={isVisible}
        countTodo={countTodoElements}
        countDone={countDoneElements}
      />
    </div>
  );
}

export default App;
