import styles from '../styles/Message.module.css'
import Avatar from '../images/Avatar.png'
import { FiSearch } from 'react-icons/fi'
import { BiCheckDouble } from 'react-icons/bi'
import NavBar from '../components/NavBar'

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
            <NavBar/>
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