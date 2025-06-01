import styles from "../styles/SelectLabel.module.css";

export default function SelectLabel(props) {
  return (
    <label className={styles.afterButton}>
      <input type={props.type} name={props.name} required value={props.value} />
      <div className={props.textSize}>{props.text}</div>
    </label>
  );
}
