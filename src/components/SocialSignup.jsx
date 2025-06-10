import google from "../images/google.svg";
import apple from "../images/apple-mac.svg";
import { Link } from "react-router";
import styles from "../styles/SocialSignup.module.css";

export default function SocialSignup(props) {
  return (
    <div className={styles.div}>
      <h2 className={styles.h2Txt}>{props.h2text}</h2>
      <p className={styles.hidden}>{props.hidden}</p>
      <div className={styles.altLinks}>
        <Link to="/">
          <div className={styles.logos}>
            <img src={google} alt="google logo" />
          </div>
          Sign up with Google
        </Link>
        <Link to="/">
          <div className={styles.logos}>
            <img src={apple} alt="apple logo" />
          </div>
          Sign up with Apple
        </Link>
      </div>
      <p className={styles.p}>Or continue with</p>
    </div>
  );
}
