import { Link } from "react-router";
import styles from "../styles/Scenarios.module.css";
import { TfiAngleRight } from "react-icons/tfi";
import Question from "../components/Question";
import questionImg from "../images/questionImg.png";
import { useState } from "react";

const data = [
  {question:'A teammate has withdrawn lately. What do you do?',
    answer: ['Hey, I’ve noticed you seem a withdraw  lately. Is everything okay?', 'How can I support you?'],
    img: questionImg
  },
  {question:'What is your name?',
    answer: ['Okiemute', 'Martin'],
    img: questionImg
  }
]
export default function Scenarios() {

  const[current, setCurrent] = useState(0)

  function handleNext(){
    setCurrent(prev=>{
      return prev + 1
    })
  }
const last = current >= data.length

  return (
    <div className={styles.body}>
      <header className={styles.sHeader}>
        <nav className={styles.miniNav}>
          <ul>
            <li>
              <Link to="/dashind">Dashboard</Link>
            </li>
            <li>
              <TfiAngleRight size={14} />
            </li>
            <li>
              <Link to="/scenarios">Scenarios</Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.chat}>
          <ul>
            <li>
              <Link to="">Chat with therapist</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className={styles.qS}>
        <h2>"What would you do?" Scenarios</h2>
        {last ? <p>That's all</p>
         : <Question
        key={current}
        question={data[current].question}
        answer1={data[current].answer[0]}
        answer2={data[current].answer[1]}
        img={data[current].img}
        handleNext={handleNext}
        />
        }
      </section>
    </div>
  );
}
