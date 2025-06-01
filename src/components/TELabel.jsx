import styles from "../styles/TELabel.module.css";

export default function TextLabel(props) {
  return (
    <label>
      <div className={styles.labelText}>{props.name}</div>
      <input
        type={props.type}
        name={props.name}
        required
        placeholder={props.placeholder}
      />
    </label>
  );
}
