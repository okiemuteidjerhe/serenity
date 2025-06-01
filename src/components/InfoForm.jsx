import styles from "../styles/InfoForm.module.css";

export default function InfoForm(props) {
  return (
    <div className={styles.infoForm}>
      {props.children}
    </div>
  );
}
