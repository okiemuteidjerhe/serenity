import { Link } from 'react-router'
import logo from "../images/serenity.svg"
import Avatar from '../images/Avatar.png'
import styles from '../styles/Reminder.module.css'
import { PiGearSixLight } from 'react-icons/pi'
import { BsBell } from 'react-icons/bs'
import { TfiAngleDown } from 'react-icons/tfi'
import { GoDotFill } from 'react-icons/go'
import man from '../images/man.png'

export default function Reminder(){
    return (
        <div className={styles.body}>
            <header className={styles.rHeader}>
                <div className={styles.logoCtn}>
                                    <img src={logo} alt="Serenity logo" />
                                </div>
                                <nav className={styles.primary}>
                                    <ul>
                                        <li><Link to="/dashind">Dashboard</Link></li>
                                        <li><Link to="/vsr">Safe Room</Link></li>
                                        <li><Link to="/journal">Journal</Link></li>
                                        <li><Link to="/message">Message</Link></li>
                                        <li><Link to='/reminder'>Reminder</Link></li>
                                    </ul>
                                </nav>
                
                                <nav className={styles.secondary}>
                                    <ul>
                                        <li><Link to=''><PiGearSixLight/></Link></li>
                                        <li><Link to=''><BsBell/></Link></li>
                                        <li><Link to=''><img src={Avatar} alt="Avatar" /> <TfiAngleDown/></Link></li>
                                    </ul>
                                </nav>
            </header>
            <section className={styles.rSection}>
                <div className={styles.top}>
                    <div className={styles.topLeft}>
                        <h3>Upcoming Events</h3>
                        <div className={styles.tlBox}>
                            <div className={styles.tlTexts}>
                                <p>Work place mental health peptalk with Ted Anjelo</p>
                                <div className={styles.row}>
                                        <span>01:00 AM</span>
                                        <span><GoDotFill size={10}/></span>
                                        <span>Webinar</span>
                                </div>
                                <p>14th June, 2025</p>
                            </div>
                            <div className={styles.tlImg}>
                                <img src={man} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.topRight}></div>
                </div>
                <div className={styles.bottom}></div>
            </section>
        </div>
    )
}