import styles from "../styles/TELabel.module.css";

export default function TextLabel(props) {
  return (
    <label>
      <div className={styles.labelText}>{props.nameL}</div>
      <input
        type={props.type}
        name={props.name}
        required = {props.required !== false}
        placeholder={props.placeholder}
      />
    </label>
  );
}
