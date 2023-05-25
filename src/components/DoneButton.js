import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const DoneButton = ({ onDoneTodo }) => {
  return (
    <button className="d-btn done-btn" onClick={onDoneTodo}>
      <FontAwesomeIcon icon={faCheck} />
    </button>
  );
};

export default DoneButton;
