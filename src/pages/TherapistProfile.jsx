import { FaStar } from "react-icons/fa6";
import BackArrow from "../components/BackArrow";
import styles from "../styles/TherapistProfile.module.css";
import { FaCheckCircle } from "react-icons/fa";
import bgCover from '../images/bgCover.png'
import Avatar from '../images/Avatar.png'

export default function TherapistProfile() {
  return (
    <div className={styles.body}>
      <BackArrow linkTo="/book-appointment" />
      <section className={styles.tp}>
        <div className={styles.bgcover}>
          <img src={bgCover} alt="background cover" />
        </div>
        <div className={styles.therapistPfp}>
          <img src={Avatar} alt="avatar" />
        </div>
        <div className={styles.profileDetails}>
          <div className={styles.nameRating}>
            <div className={styles.nameCerts}>
              <h2>Dr. Happy Martins</h2>
              <p>MCMHC, LPC, NCC</p>
            </div>
            <p>
              <FaStar size={16} /> 4.5 Ratings
            </p>
          </div>
          <div className={styles.bio}>
            <h3>Doctor's Profile</h3>
            <p>
              I’m a licensed therapist passionate about supporting individuals
              on their journey to healing and growth. I specialize in working
              with clients experiencing anxiety, depression, trauma, grief and
              loss, life transitions, and relationship challenges. I also
              provide support for self-esteem issues, stress management, and
              emotional regulation. <br/><br/>My approach is integrative and
              client-centered, drawing from evidence-based modalities such as
              Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy
              (DBT), mindfulness practices, and trauma-informed care.
            </p>
          </div>
          <div className={styles.treatments}>
            <h3>Treatments</h3>
            <div className={styles.treatmentList}>
                <p>
                    <FaCheckCircle color="var(--button-color)"/> Stress Management
                </p>
                <p>
                    <FaCheckCircle color="var(--button-color)"/> Bipolar Disorder
                </p>
                <p>
                    <FaCheckCircle color="var(--button-color)"/> Anxiety Disorders
                </p>
                <p>
                    <FaCheckCircle color="var(--button-color)"/> Personality Disorders
                </p>
                <p>
                    <FaCheckCircle color="var(--button-color)"/> Anger Management
                </p>
                <p>
                    <FaCheckCircle color="var(--button-color)"/> Depression
                </p>
            </div>
          </div>
        </div>
        <div className={styles.tpBtns}>
            <button>Book Appointment</button>
            <button>Send a Message</button>
        </div>
      </section>
    </div>
  );
}
