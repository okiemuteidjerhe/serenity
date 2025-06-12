import { useNavigate } from "react-router";
import BackArrow from "../components/BackArrow";
import Button from "../components/Button";
import LeftPanel from "../components/LeftPanel";
import SelectLabel from "../components/SelectLabel";
import well from "../images/well.png";
import styles from "../styles/Questionnaire.module.css";

export default function Questionnaire() {
  const navigate = useNavigate()

  function handleNext(){
    navigate("/register/indpay")
  }
  
  return (
    <div className={styles.body}>
      <BackArrow linkTo="/register/signupind" />
      <div className={styles.pagination}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      <section className={styles.section}>
        <LeftPanel
          wrapper={styles.ctn}
          src={well}
          alt="A character saying positive words to their self"
          text="Your Journey to better mental health starts here"
        />

        <form className={styles.right}>
          <p className={styles.hidden}>Your Journey to better mental health starts here</p>
          <div className={styles.qtns}>
            <div className={styles.work}>
              <h2>Work Environment</h2>
              <div className={styles.radio}>
                <SelectLabel
                  type="radio"
                  name="Work Environment"
                  value="Remote"
                  text="Remote"
                  textSize={styles.textSize}
                />
                <SelectLabel
                  type="radio"
                  name="Work Environment"
                  value="Hybrid"
                  text="Hybrid"
                  textSize={styles.textSize}
                />
                <SelectLabel
                  type="radio"
                  name="Work Environment"
                  value="On-site"
                  text="On-site"
                  textSize={styles.textSize}
                />
              </div>
            </div>
            <div className={styles.work}>
              <h2>Personal Challenges</h2>
              <div className={styles.radio}>
                <SelectLabel
                  type="checkbox"
                  name="Personal Challenges"
                  value="Sleep"
                  text="Sleep"
                  textSize={styles.textSize}
                />
                <SelectLabel
                  type="checkbox"
                  name="Personal Challenges"
                  value="Focus"
                  text="Focus"
                  textSize={styles.textSize}
                />
                <SelectLabel
                  type="checkbox"
                  name="Personal Challenges"
                  value="Anxiety"
                  text="Anxiety"
                  textSize={styles.textSize}
                />
                <SelectLabel
                  type="checkbox"
                  name="Personal Challenges"
                  value="Loneliness"
                  text="Loneliness"
                  textSize={styles.textSize}
                />
                <SelectLabel
                  type="checkbox"
                  name="Personal Challenges"
                  value="Burnout"
                  text="Burnout"
                  textSize={styles.textSize}
                />
              </div>
            </div>
          </div>
          <Button text="Continue" doSum={handleNext}/>
        </form>
      </section>
    </div>
  );
}
