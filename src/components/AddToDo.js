const AddToDo = ({
  onToDo,
  onAddToDo,
  onDate,
  onPriority,
  isActive,
  disableDate,
}) => {
  return (
    <div className={isActive ? "show-add-panel" : "hide-add-panel"}>
      <div className="add-to-do">
        <div className="input-container">
          <label className="input-label" htmlFor="text">
            Zadanie:
          </label>
          <input
            className="input input-text"
            type="text"
            id="text"
            onChange={onToDo}
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="date">
            Termin:
          </label>
          <input
            className="input input-date"
            type="date"
            id="date"
            min={disableDate()}
            onChange={onDate}
          ></input>
        </div>
        <div className="input-container priority">
          <label className="input-label" htmlFor="priority">
            Priorytet
          </label>
          <input
            className="input-checkbox"
            type="checkbox"
            id="priority"
            onChange={onPriority}
          />
        </div>
      </div>
      <div className="btn-container">
        <button className="btn add-btn" onClick={onAddToDo}>
          Zatwierdź
        </button>
      </div>
    </div>
  );
};

export default AddToDo;
