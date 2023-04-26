import DeleteButton from "./DeleteButton";

const DoneTodos = ({ doneTodos, onDeleteTodo }) => {
  const doneTodoList = doneTodos.map((doneTodo) => (
    <div className="doneTodo" id={doneTodo.id} key={doneTodo.id}>
      <li>{doneTodo.text}</li>
      <div className="function-btn">
        <DeleteButton onDeleteTodo={onDeleteTodo} />
      </div>
    </div>
  ));
  return (
    <div className="done-todos">
      <h2 className="list-header">Wykonane:</h2>
      {doneTodoList}
    </div>
  );
};

export default DoneTodos;
