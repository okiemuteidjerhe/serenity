import styles from '../styles/Question.module.css'


export default function Question(props){
    return(
        <form action="" className={styles.questionCard}>
                  <h3>{props.question}</h3>
                  <div className={styles.qImg}>
                    <img src={props.img} alt="Question image" />
                  </div>
                  <div className={styles.answer}>
                    <label>
                      <input
                        type="radio"
                        name="answer"
                        value={props.answer1}
                      />
                      <span>
                        {props.answer1}
                      </span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="answer"
                        value={props.answer2}
                      />
                      <span>{props.answer2}</span>
                    </label>
                  </div>
                  <div className={styles.message}>
                    <input type="text" placeholder="Message..."/>
                    <button type='button' onClick={props.handleNext}>Send</button>
                  </div>
                </form>
    )
}