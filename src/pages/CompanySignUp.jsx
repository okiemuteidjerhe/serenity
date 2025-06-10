import styles from "../styles/CompanySignUp.module.css";
import BackArrow from "../components/BackArrow";
import LeftPanel from "../components/LeftPanel";
import Focused from "../images/focused.png";
import TextLabel from "../components/TELabel";
import Password from "../components/Password";
import SelectLabel from "../components/SelectLabel";
import Button from "../components/Button";
import { Link } from "react-router";

export default function CompanySignUp() {
  return (
    <div className={styles.body}>
      <BackArrow linkTo="/choose" />
      <section className={styles.section}>
        <div className={styles.left}>
          <div className={styles.pagination}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          <LeftPanel
            src={Focused}
            alt="A characters staring at each other"
            text="Balance work and life with ease. Unlock a calmer, more focused mind with personalized mental wellness tools."
            wrapper={styles.ctn}
          />
        </div>
        <form className={styles.right} action="">
          <h2>Account Creation</h2>
          <p className={styles.hidden}>Balance work and life with ease. Unlock a calmer, more focused mind with personalized mental wellness tools.</p>
          <div className={styles.inputField}>
            <TextLabel
              name="Admin"
              type="text"
              placeholder="Kate (Hr department)"
            />
            <TextLabel
              name="Email"
              type="email"
              placeholder="kate@serenity.com"
            />
            <Password name="Password" />
            <Password name="Confirm Password" />
            <SelectLabel
              text="Agree to Terms of Service & Data Privacy Policy."
              type="checkbox"
              name="T&C"
              value="Agree"
              textSize={styles.textSize}
            />
          </div>
          <Link to="/signupnext">
            <Button text="Continue" />
          </Link>
        </form>
      </section>
    </div>
  );
}
