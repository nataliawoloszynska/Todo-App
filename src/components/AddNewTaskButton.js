const AddNewTaskButton = ({ onNewTask, isActive }) => {
  return (
    <button className="btn add-new-task-btn" onClick={onNewTask}>
      {isActive ? "Anuluj" : "Dodaj zadanie"}
    </button>
  );
};

export default AddNewTaskButton;
