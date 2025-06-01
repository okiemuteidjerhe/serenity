import styles from '../styles/Webinar.module.css'
export default function Webinar(props) {
  return (
    <div className={styles.wCard} onClick={props.handleClick}>
      <div className={styles.wImg}>
        <img src="" alt="" />
      </div>
      <h3>{props.heading}</h3>
      <div className={styles.row1}>
        <span>Podcast</span>
        <span>dot</span>
        <span>Austin & Leo</span>
      </div>
      <div className={styles.row2}>
        <p>2nd June, 2025</p>
        <span>dot</span>
        <p>11:00 AM</p>
      </div>
    </div>
  );
}

export function Pdf() {
  return (
    <div className={styles.pCard}>
      <div className={styles.pImg}>
        <img src="" alt="" />
      </div>
      <h3>Company Mental Well Policy</h3>
      <div className={styles.pr1}>
        <span>File:</span>
        <span>PDF</span>
      </div>
      <div className={styles.pr2}>
        <span>Updated:</span>
        <span>March 2025</span>
      </div>
    </div>
  );
}
