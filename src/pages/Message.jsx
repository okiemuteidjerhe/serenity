import { Link } from 'react-router'
import styles from '../styles/Message.module.css'
import { PiGearSixLight } from 'react-icons/pi'
import { BsBell } from 'react-icons/bs'
import { TfiAngleDown } from 'react-icons/tfi'
import logo from "../images/serenity.svg"
import Avatar from '../images/Avatar.png'
import { FiSearch } from 'react-icons/fi'
import { BiCheckDouble } from 'react-icons/bi'

const allMessages = [
    {
        name:"Dr.  Happy Martins",
        message: "Good Morning Doctor, how are..."
    },
    {
        name:"Dr.  Happy Martins",
        message: "Good Morning Doctor, how are..."
    },
    {
        name:"Dr.  Happy Martins",
        message: "Good Morning Doctor, how are..."
    },
    {
        name:"Dr.  Happy Martins",
        message: "Good Morning Doctor, how are..."
    }
]
export default function Message(){
    const messageArr = allMessages.map(e=>{
        return(
            <div className={styles.message}>
                <div className={styles.avatarCtn}>
                    <img src={Avatar} alt="" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.top}>
                        <h3>{e.name}</h3>
                        <p>Monday</p>
                    </div>
                    <div className={styles.bottom}>
                        <p>{e.message}</p>
                        <BiCheckDouble color='#DBDCE2'/>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className={styles.body}>
            <header className={styles.mHeader}>
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
            <section className={styles.messageSection}>
                            <div className={styles.left}>
                                <div className={styles.box}>
                                    <div className={styles.inputB}>
                                        <FiSearch size={24}/>
                                        <input type="text" placeholder="Search"/>
                                    </div>
                                    <p>All Messages</p>
                                </div>
                                <div className={styles.allMessages}>
                                    {messageArr}
                                </div>
                            </div>
                            
                        </section>
        </div>
    )
}