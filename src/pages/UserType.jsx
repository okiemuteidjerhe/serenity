import styles from "../styles/UserType.module.css";
import person from "../images/person.png";
import company from "../images/company.png";
import { Link } from "react-router";
/* import { IoArrowBack } from "react-icons/io5" */
import BackArrow from "../components/BackArrow.jsx";

export default function UserType() {
  return (
    <div className={styles.body}>
      {/* <Link to="/" className={styles.backArrow}><IoArrowBack />Back</Link> */}
      <BackArrow linkTo="/" />
      <section className={styles.sectionCtn}>
        <h2>Select Account Type</h2>
        <div className={styles.ctn}>
          <Link to="/signupcomp">
            <figure>
              <div className={styles.imgCtn}>
                <img src={company} alt="Company" />
              </div>
              <figcaption>Company</figcaption>
            </figure>
          </Link>

          <Link to="/signupind">
            <figure>
              <div className={styles.indCtn}>
                <img src={person} alt="Individual" />
              </div>
              <figcaption>Individual</figcaption>
            </figure>
          </Link>
        </div>
      </section>
    </div>
  );
}
