import styles from "../styles/Landing.module.css";
import hero from "../images/hero.png";
import logo from "../images/serenity.svg";
import yoga from '../images/yoga.png'
import focused from "../images/focused.png"
import emoji from "../images/Happy.png"
import journal from "../images/journal.png"
import person from "../images/person.png"
import company from "../images/company.png"
import { Link } from "react-router";
import FaqItem from "../components/FaqItem";
import { useState } from "react";
import Feature from "../components/Feature";
import { FaStar } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import vsrVector from '../images/vsrVector.png';
import wwoVector from '../images/wwoVector.png';
import wwo2 from '../images/wwo2.png';
import ctaVector from '../images/ctaVector.png'

/*This will come from api */
let data = [
  {
    id: 1,
    question: "What is Serenity?",
    answer:
      "Serenity is your private, personalized mental health and wellness space at work. Serenity is not a performance tracker. It supports your mental health, not monitor it.",
    isOpen: false,
  },
  {
    id: 2,
    question: "What is Serenity?",
    answer:
      "Serenity is your private, personalized mental health and wellness space at work. Serenity is not a performance tracker. It supports your mental health, not monitor it.",
    isOpen: false,
  },
  {
    id: 3,
    question: "What is Serenity?",
    answer:
      "Serenity is your private, personalized mental health and wellness space at work. Serenity is not a performance tracker. It supports your mental health, not monitor it.",
    isOpen: false,
  },
  {
    id: 4,
    question: "What is Serenity?",
    answer:
      "Serenity is your private, personalized mental health and wellness space at work. Serenity is not a performance tracker. It supports your mental health, not monitor it.",
    isOpen: false,
  },
];


const content = [
  {
    featureHeading:"Interactive Role-Play Scenarios",
    information:"Serenity helps you learn how others handle burnout, anxiety and stigma, and build empathy.",
    src: focused,
    alt: "logo"
  },
  {
    featureHeading: "Daily Mood Check-ins",
    information:"Serenity provides quick mood tracking that helps build emotional awareness over time.",
    src: emoji,
    alt: "logo"
  },
  {
    featureHeading: "Journal",
    information: "Serenity helps you reflect, release and reconnect with yourself. The journal is designed to be confiental and visible only to you.",
    src: journal,
    alt: "logo"
  },
]

const otherF = content.map(cnt=>{
  return(
    <Feature
    key={cnt.featureHeading}
    featureHeading={cnt.featureHeading}
    information={cnt.information}
    src={cnt.src}
    alt={cnt.alt}
    />
  )
})
export default function Landing() {
  const [copyOfData, setCopyOfData] = useState(data);

  function handleCopy(id) {
    setCopyOfData((prevDataCopy) => {
      return prevDataCopy.map((x) => {
        if (x.id === id) {
          return { ...x, isOpen: !x.isOpen };
        } else {
          return { ...x, isOpen: false };
        }
      });
    });
  }

  const items = copyOfData.map((datum) => {
    return (
      <FaqItem
        key={datum.id}
        id={datum.id}
        isOpen={datum.isOpen}
        question={datum.question}
        answer={datum.answer}
        handleClick={handleCopy}
      />
    );
  });

  return (
    <div className={styles.body}>
      <header className={styles.lHeader}>
        <div className={styles.logoCtn}>
          <img src={logo} alt="Serenity logo" />
        </div>
        <nav className={styles.middleNav}>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">Features</Link>
            </li>
            <li>
              <Link to="">Pricing</Link>
            </li>
            <li>
              <Link to="">FAQs</Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.rightNav}>
          <ul>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link className={styles.getStarted} to="/choose">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className={styles.section}>
        <div className={styles.heroTexts}>
          <h1>
            Harmonize your work and <span>well-being.</span>
          </h1>
          <div className={styles.t}>
            <p>
              Transform your work-life balance. Prioritize your mental health
              with resources and support.
            </p>
          </div>
          <Link to="" className={styles.book}>
            Book an Appointment
          </Link>
        </div>
        <div className={styles.heroImgCtn}>
          <img src={hero} alt="A character meditating" />
        </div>
      </section>

      <section className={styles.features}>
        <article className={styles.vs}>
          <div className={styles.vsTexts}>
            <h2>Virtual Safe Room</h2>
            <p>
              Serenity provides a peaceful, digital space where you can take
              mindful break, reset emotionally and breathe.
            </p>
          </div>
          <div className={styles.vsrVector}>
            <img src={vsrVector} alt="squigglies" />
          </div>
          <div className={styles.fImg}>
            <img src={yoga} alt="yoga pose" />
          </div>
        </article>
        <div className={styles.others}>
          {otherF}
        </div>
      </section>
      <section className={styles.offerings}>
        <div className={styles.wwo1}>
          <img src={wwoVector} alt="squiggles" />
        </div>
        <div className={styles.wwo2}>
          <img src={wwo2} alt="" />
        </div>
        <h2>What We Offer?</h2>
        <div className={styles.offerInfo}>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src={person} alt="Individual" />
            </div>
            <div className={styles.text}>
              <h3>For Individuals:</h3>
            <ul>
              <li><FaStar size={13} />A calm and private space to manage your mental health.</li>
              <li><FaStar size={13}/>Tools for daily reflection and emotional regulation.</li>
              <li><FaStar size={13}/>Access to therapy and group support.</li>
            </ul>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src={company} alt="Company" />
            </div>
            <div className={styles.text}>
              <h3>For Companies:</h3>
            <ul>
              <li> <FaStar size={13}/> Anonymized well-being reports.</li>
              <li> <FaStar size={13}/>Mental health leave tracking and program scheduling.</li>
              <li> <FaStar size={13}/>Tools to support all employees</li>
            </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.faq}>
        <h2>Frequently asked questions</h2>
        <div className={styles.content}>
          {items}
        </div>
      </section>
      <section className={styles.cta}>
          <div className={styles.mainCta}>
            <div className={styles.ctaVector}>
              <img src={ctaVector} alt="squiggles" />
            </div>
            <div className={styles.texts}>
              <h2>Take a step toward a healthier workplace</h2>
              <p>
                Discover how Serenity empowers individuals and teams through
                meaningful support.
              </p>
            </div>
            <Link to="/choose">Start your journey</Link>
          </div>
        </section>
      <footer className={styles.lfoot}>
        
          <div className={styles.footerLogo}>
            <div className={styles.logoCtn}>
              <img src={logo} alt="Serenity logo" />
            </div>
            <p>Your Mental Health Wellness Company</p>
            <div className={styles.smIcons}>
              <Link to="">
                <FiInstagram size={25}/>
              </Link>
              <Link to="">
                <CiLinkedin size={25}/>
              </Link>
              <Link to="">
                <CiTwitter size={25}/>
              </Link>
            </div>
          </div>
          <div className={styles.footerTexts}>
            <div className={styles.footerText}>
              <h3>Company</h3>
              <ul>
                <li>
                  <Link to="">Contact us</Link>
                </li>
                <li>
                  <Link to="">About us</Link>
                </li>
                <li>
                  <Link to="">Pricing</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerText}>
              <h3>Account</h3>
              <ul>
                <li>
                  <Link to="">Privacy Policies</Link>
                </li>
                <li>
                  <Link to="">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="">Help Center</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerText}>
              <h3>FAQ</h3>
              <ul>
                <li>
                  <a href="mailto:info@serenitywellness.org">
                    info@serenitywellness.org
                  </a>
                </li>
                <li>
                  <a href="tel:+2349012545678">+2349012545678</a>
                </li>
              </ul>
            </div>
          </div>
        
      </footer>
    </div>
  );
}
