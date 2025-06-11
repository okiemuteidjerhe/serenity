import { GoDotFill } from 'react-icons/go';
import styles from '../styles/Webinar.module.css'
export default function Webinar(props) {
  return (
    <button className={styles.wCard} type="button" onClick={props.handleClick}>
      <div className={styles.wImg}>
        <img src={props.src} alt={props.alt} />
      </div>
      <h3>{props.heading}</h3>
      <div className={styles.row1}>
        <span>{props.type}</span>
        <span><GoDotFill/></span>
        <span>{props.host}</span>
      </div>
      <div className={styles.row2}>
        <span>{props.date}</span>
        <span><GoDotFill size={10}/></span>
        <span>{props.time}</span>
      </div>
    </button>
  );
}

export function Pdf(props) {
  return (
    <div className={styles.pCard}>
      <div className={styles.pImg}>
        <img src={props.src} alt={props.alt} />
      </div>
      <h3>{props.heading}</h3>
      <div className={styles.pr1}>
        <span>File type:</span>
        <span>PDF</span>
      </div>
      <div className={styles.pr2}>
        <span>Updated:</span>
        <span>{props.date}</span>
      </div>
    </div>
  );
}
