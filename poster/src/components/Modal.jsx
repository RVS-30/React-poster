import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

export default function Modal({ children }) {
  const navigate = useNavigate();
  function handleclosePost(event) {
    // Check if the event target is the backdrop element
    if (event.target.classList.contains(classes.backdrop)) {
      // If it is, close the modal
      navigate('/');
    }
  }
  return (
    <div className={classes.backdrop} onClick={handleclosePost}>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </div>
  );
}
