import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Summary = ({ onMenu, isVisible, countTodo, countDone }) => {
  return (
    <div className={isVisible ? "summary show-summary" : "hide-summary"}>
      {" "}
      {isVisible ? (
        <FontAwesomeIcon className="menu" icon={faXmark} onClick={onMenu} />
      ) : null}
      <div className="user">
        <div className="user-photo"></div>
        <p>Uzytkownik</p>
      </div>
      <p>Oczekujące: {countTodo} </p>
      <p>Wykonane: {countDone}</p>
    </div>
  );
};

export default Summary;
