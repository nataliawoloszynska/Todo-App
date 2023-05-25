import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const DeleteButton = ({ onDelete }) => {
  return (
    <button className="d-btn delete-btn" onClick={onDelete}>
      <FontAwesomeIcon icon={faXmark} />
    </button>
  );
};

export default DeleteButton;
