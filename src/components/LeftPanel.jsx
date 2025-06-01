import styles from "../styles/LeftPanel.module.css";

export default function LeftPanel(props) {
  return (
    <div className={styles.ldiv}>
      <div className={props.wrapper}>
        <img src={props.src} alt={props.alt} />
      </div>
      <p className={styles.lp}>{props.text}</p>
    </div>
  );
}
