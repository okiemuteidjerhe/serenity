import styles from "../styles/CompanySignUp.module.css";
import BackArrow from "../components/BackArrow";
import LeftPanel from "../components/LeftPanel";
import Focused from "../images/focused.png";
import TextLabel from "../components/TELabel";
import Password from "../components/Password";
import SelectLabel from "../components/SelectLabel";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router";

export default function CompanySignUp() {

  const navigate = useNavigate()

  function handleNext(formData) {
    const dataFromForm = Object.fromEntries(formData);
    console.log(dataFromForm)
    const role = dataFromForm.role.toLowerCase()
    console.log(role)
    navigate("/signupnext", { state: {...dataFromForm, role} /* { usertype: "Company", ...dataFromForm } */ })
  }

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
        <form className={styles.right} action={handleNext}>
          <h2>Account Creation</h2>
          <p className={styles.hidden}>Balance work and life with ease. Unlock a calmer, more focused mind with personalized mental wellness tools.</p>
          <div className={styles.inputField}>
            <TextLabel
              nameL=/* "Admin" */ "Role"
              name=/* 'admin' */ 'role'
              type="text"
              placeholder=/* "Kate (Hr department)" */ 'Admin'
            />
            <TextLabel
              nameL="Email"
              name='email'
              type="email"
              placeholder="kate@serenity.com"
            />
            <Password name="Password" />
            {/* <Password name="Confirm Password" /> */}
            <TextLabel
            nameL='Company Code'
            name='company_code'
            type='text'
            />
            <SelectLabel
              text="Agree to Terms of Service & Data Privacy Policy."
              type="checkbox"
              name="T&C"
              value="Agree"
              textSize={styles.textSize}
            />
          </div>

          <Button text="Continue" type="submit" />

        </form>
      </section>
    </div>
  );
}
