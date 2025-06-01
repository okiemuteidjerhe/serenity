import { Link, useNavigate } from "react-router";
import BackArrow from "../components/BackArrow";
import LeftPanel from "../components/LeftPanel";
import TextLabel from "../components/TELabel";
import styles from "../styles/CompanySignUp2.module.css";
import Chaos from "../images/chaos.png";
import Button from "../components/Button";
import { useRef, useState } from "react";
import GenericModal from "../components/GenericModal";
import Sunshine from "../images/sunshine.png";

export default function CompanySignUp2() {
  const dialogRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();
  const handleOpen = () => {
    window.scrollTo(0, 0);
    setIsOpen(true);
    dialogRef.current.showModal();
  };
  const handleClose = () => {
    setIsOpen(false);
    dialogRef.current.close();
    navigate("/compay");
  };

  return (
    <div className={styles.body}>
      <BackArrow linkTo="/signupcomp" />
      <section className={styles.section}>
        <div className={styles.left}>
          <div className={styles.pagination}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>

          <LeftPanel
            src={Chaos}
            alt="A characters looking away from each other"
            text="Achieve work life harmony. Discover tailored strategies for mental well being and a 
healthier mind."
            wrapper={styles.wrapper}
          />
        </div>
        <form className={styles.right} action="">
          <h2>Company Information</h2>
          <div className={styles.inputField}>
            <TextLabel name="Company Name" type="text" placeholder="Serenity" />
            <TextLabel
              name="Number of Employees"
              type="text"
              placeholder="1297"
            />
            <TextLabel
              name="Country/Region"
              type="text"
              placeholder="Nigeria"
            />
            <TextLabel
              name="Company Email"
              type="email"
              placeholder="help@serenity.com"
            />
          </div>
          <Button text="Create Account" doSum={handleOpen} />
        </form>
      </section>
      <GenericModal ref={dialogRef} isOpen={isOpen} pad={styles.pad}>
        <div className={styles.box}>
          <div className={styles.ctn}>
            <img src={Sunshine} alt="A smiling sun" />
          </div>
          <h2 className={styles.h}>Account Created</h2>
          <p className={styles.p}>Your account has been created successfully</p>
          <Button text="Continue" doSum={handleClose} />
        </div>
      </GenericModal>
    </div>
  );
}
