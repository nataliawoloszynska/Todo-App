import DeleteButton from "./DeleteButton";

const DoneTodos = ({ doneTodos, onDelete }) => {
  const doneTodoList = doneTodos.map((doneTodo) => (
    <div className="doneTodo" id={doneTodo.id} key={doneTodo.id}>
      <li>{doneTodo.text}</li>
      <div className="function-btn">
        <DeleteButton onDelete={onDelete} />
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
