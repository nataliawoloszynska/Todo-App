import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const DoneButton = ({ onDoneTodo }) => {
  const insideText = <FontAwesomeIcon icon={faCheck} />;
  return (
    <button className="d-btn done-btn" onClick={onDoneTodo}>
      {insideText}
    </button>
  );
};

export default DoneButton;
