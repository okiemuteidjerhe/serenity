import styles from "../styles/Generic.module.css";

export default function Created(props) {
  return (
    <dialog ref={props.ref} open={props.isOpen}>
      <div className={`${styles.dialog} ${props.pad}`}>{props.children}</div>
    </dialog>
  );
}
