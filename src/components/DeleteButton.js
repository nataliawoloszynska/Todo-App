import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const DeleteButton = ({ onDeleteTodo }) => {
  return (
    <button className="d-btn delete-btn" onClick={onDeleteTodo}>
      <FontAwesomeIcon icon={faXmark} />
    </button>
  );
};

export default DeleteButton;
