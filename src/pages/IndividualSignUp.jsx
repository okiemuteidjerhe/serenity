import BackArrow from "../components/BackArrow";
import { Link, useNavigate } from "react-router";
import styles from "../styles/IndividualSignUp.module.css";
import Stretch from "../images/stretch.png";
import SocialSignup from "../components/SocialSignup";
import TextLabel from "../components/TELabel";
import Password from "../components/Password";
import SelectLabel from "../components/SelectLabel";
import Button from "../components/Button";
import LeftPanel from "../components/LeftPanel";
import GenericModal from "../components/GenericModal";
import { useContext, useRef, useState } from "react";
import Sunshine from "../images/sunshine.png";

import { RegisterContext } from "../contexts/RegisterContext";



export default function IndividualSignUp() {
const {registerData, setRegisterData} = useContext(RegisterContext);
/* const navigate = useNavigate(); */

/* const [form, setForm] = useState({
  usertype: "Individual",
  firstName: "",
  lastName: "",
  email: "",
  Password: "",
  companyCode: ""
}) */


  const dialogRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();

  const handleOpen = () => {
    window.scrollTo(0, 0);
    /* console.log(Object.fromEntries(formData)) */
    setIsOpen(true);
    dialogRef.current.showModal();
  };
  const handleClose = () => {
    setIsOpen(false);
    dialogRef.current.close();
    navigate("/register/questions");
  };

  function handleForm (formData){
    console.log(Object.fromEntries(formData))
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
            wrapper={styles.wrap}
            src={Stretch}
            alt="A character stretching"
            text="Let's get started on your path to wellness"
          />
        </div>
        <div className={styles.right}>
          <SocialSignup h2text="Sign Up with Serenity" hidden="Let's get started on your path to wellness"/>
          <form className={styles.form} action={handleForm}>
            <div className={styles.inputField}>
              <div className={styles.name}>
                <TextLabel type="text" nameL="First Name" name='firstName' placeholder="Jane" />
                <TextLabel type="text" nameL="Last Name" name='lastName' placeholder="Doe" />
              </div>
              <TextLabel
                type="email"
                nameL="Email"
                name="email"
                placeholder="janedoe@yahoo.com"
              />

              <Password name="Password" />
              <TextLabel type="text" nameL="Company Code" name='companyCode' placeholder="445098" required={false}  />
              {/* <TextLabel type="text" name="Role" placeholder="HR Intern" /> */}
            </div>
            <Button text="Sign Up" type='submit' /* doSum={handleOpen} */  />
            


            <SelectLabel
              text="Agree to Terms of Service & Data Privacy Policy."
              type="checkbox"
              name="T&C"
              value="Agree"
              textSize={styles.textSize}
            />
          </form>
          <p className={styles.p}>
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </section>
      {/* <GenericModal ref={dialogRef} isOpen={isOpen} pad={styles.pad}>
        <div className={styles.box}>
          <div className={styles.ctn}>
            <img src={Sunshine} alt="A smiling sun" />
          </div>
          <h2 className={styles.h}>Account Created</h2>
          <p className={styles.pr}>
            Your account has been created successfully
          </p>
          <Button text="Continue" doSum={handleClose} />
        </div>
      </GenericModal> */}
    </div>
  );
}
