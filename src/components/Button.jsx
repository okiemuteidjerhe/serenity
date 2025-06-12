import styles from "../styles/Button.module.css";

export default function Button(props) {
  return (
    <button className={styles.button} /* onClick={props.doSum} */ type={props.type || "button"}>
      {props.text}
    </button>
  );
}
