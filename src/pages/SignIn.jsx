import styles from "../styles/SignIn.module.css";
import { Link } from "react-router";
import Button from "../components/Button";
import Password from "../components/Password";
import SocialSignup from "../components/SocialSignup";
import TextLabel from "../components/TELabel";
import SelectLabel from "../components/SelectLabel";
import BackArrow from "../components/BackArrow";
import LeftPanel from "../components/LeftPanel";
import Reading from "../images/reading.png";
import GenericModal from "../components/GenericModal";
import React, { useRef, useState } from "react";
import OtpInput from "react-otp-input";

export default function SignIn() {
 
  //Modal
  const dialogRef = useRef(null);
  const dialog2Ref = useRef(null);
  const dialog3Ref = useRef(null);

  const refs = [dialogRef, dialog2Ref, dialog3Ref];
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (index) => {
    refs.map((ref) => {
     return ref.current.close();
    });
    const currentRef = refs[index];
    window.scrollTo(0, 0);
    currentRef.current.showModal();
    setIsOpen(true);

  };

  const closeModal = () => {
    refs.map((ref) => {
     return ref.current.close();
    });
    setIsOpen(false);
  };

  //OTP
  const [otp, setOtp] = useState("");
 
  

  return (
    <div className={styles.body}>
      <BackArrow linkTo="/" />

      <section className={styles.section}>
        <div className="left">
          <LeftPanel
            text="Let's personalize your experience"
            src={Reading}
            alt="A character reading a book"
            wrapper={styles.ctn}
          />
        </div>
        <div className={styles.right}>
          <SocialSignup h2text="Welcome Back!" />

          <form className={styles.form} action="">
            <div className={styles.inputField}>
              <TextLabel
                name="Email"
                type="email"
                placeholder="johndoe@gmail.com"
              />
              <Password name="Password" />
            </div>
            <a to="#" onClick={() => handleOpen(0)}>
              Forgot Password?
            </a>
            
            <Link to="/dashind"><Button text="Sign In" /></Link>
            
            <SelectLabel
              type="checkbox"
              name="Remember Me"
              value="Remember"
              text="Remember Me"
              textSize={styles.textSize}
            />
          </form>
        </div>
      </section>
      <GenericModal ref={dialogRef} isOpen={isOpen} pad={styles.pad}>
        <div className={styles.cov} onClick={closeModal}>
          <BackArrow />
        </div>
        <form action="" className={styles.fg}>
          <h2>Forgot Password</h2>
          <p>A code will be sent to your Email</p>
          <TextLabel type="email" placeholder="jane@gmail.com" name="Email"/>
          <Button text="Submit" doSum={() => handleOpen(1)} />
        </form>
      </GenericModal>
      <GenericModal ref={dialog2Ref} isOpen={isOpen} pad={styles.padd}>
        <form className={styles.codeForm}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              width: "80px",
              height: "80px",
              textAlign: "center",
              border: "1px solid var(--border-color)",
              margin: "0 24px",
            }}
            inputType="tel"
          />
          <p>
            Didn't receive code? <span>Resend code</span>
          </p>
          <Button text="Submit" doSum={() => handleOpen(2)} />
        </form>
      </GenericModal>
      <GenericModal ref={dialog3Ref} isOpen={isOpen} pad={styles.paddd}>
        <form className={styles.resetForm}>
          <h2>Reset Password</h2>
          <div className={styles.inputField}>
            <Password name="Enter new password" />
            <Password name="Confirm new password" />
          </div>
          <Button text="Reset Password" doSum={closeModal} />
        </form>
      </GenericModal>
    </div>
  );
}
