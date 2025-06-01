import { FaCircleMinus, FaCirclePlus, FaMinus, FaPlus } from "react-icons/fa6";
import styles from "../styles/FaqItem.module.css";

export default function FaqItem(props) {
  return (
    <div className={props.isOpen? `${styles.open}`: `${styles.item}`}>
      <button onClick={() => props.handleClick(props.id)}>
        <p>{props.question}</p>

        {props.isOpen ? (
          <FaMinus size={16} /* color="var(--primary-color)" */ />
        ) : (
          <FaPlus size={12} /* color="var(--primary-color)" */ />
        )}
      </button>
      {props.isOpen ? <p> {props.answer}</p> : null}
    </div>
  );
}
