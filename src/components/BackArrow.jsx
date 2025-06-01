import { Link } from "react-router";
import styles from "../styles/BackArrow.module.css";
import { IoArrowBack } from "react-icons/io5";

export default function BackArrow(props) {
  return (
    <Link to={props.linkTo} className={styles.backArrow}>
      <IoArrowBack size={24} />
      Back
    </Link>
  );
}
