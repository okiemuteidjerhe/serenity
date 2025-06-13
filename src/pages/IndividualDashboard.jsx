import styles from "../styles/IndividualDashboard.module.css"
import logo from "../images/serenity.svg"
import { Link } from "react-router"
import Avatar from '../images/Avatar.png'
import zen from '../images/zen.png'
import journal from '../images/journal.png'
import happy from '../images/Happy.png'
import neutral from '../images/Neutral.png'
import confused from '../images/Confused.png'
import tired from '../images/Tired.png'
import anxious from '../images/Anxious.png'
import angry from '../images/Angry.png'
import sad from '../images/Sad.png'
import focused from '../images/focused.png'
import focusedballoon from '../images/focused-balloon.png'
import { PiGearSixLight } from "react-icons/pi"
import { BsBell } from "react-icons/bs"
import { TfiAngleDown } from "react-icons/tfi"
import { GoArrowRight, GoFile, GoVideo } from "react-icons/go"
import { useContext, useRef, useState } from "react"
import NavBar from "../components/NavBar"
import { AuthContext } from "../context/AuthContext"

export default function IndvidualDashboard(){
 const [mood, setMood] = useState(null);
 const [isOpen, setIsOpen] = useState(false)
 const dialogRef = useRef(null);

 const token = useContext(AuthContext)
 console.log(token)

 function handleMood(selectedMood){
    setMood(selectedMood);
    dialogRef.current.close();
 }
 function handleOpen(){
    setIsOpen(true);
    dialogRef.current.showModal();
 }

 const moods = [
    {
        src: happy,
        alt: "Happy"
    },
    {
        src: neutral,
        alt: "Neutral"
    },
    {
        src: confused,
        alt: "Confused"
    },
    {
        src: angry,
        alt: "Angry"
    },
    {
        src: tired,
        alt: "Tired"
    },
    {
        src: anxious,
        alt: "Anxious"
    },
    {
        src: sad,
        alt: "Sad"
    },
 ]
    return(
        <div className={styles.body}>
            <NavBar/>
            <section className={styles.mainS}>
                <div className={styles.top}>
                    <div className={styles.topRight}>
                        <div className={styles.trTexts}>
                            <h1>Virtual Safe Room</h1>
                            <p>Take a breath. You're safe here.</p>
                            <Link to='/vsr'>Visit Safe Room</Link>
                        </div>
                        <div className={styles.trImg}><img src={zen} alt="" /></div>
                    </div>
                    <div className={styles.topLeft}>
                        <h2>Hi {token.firstName}, how are you feeling?</h2>
                        <div className={styles.tlImg}><img src={mood? mood.src : happy} alt={mood ? mood.alt : "happy"} /></div>
                        <button onClick={handleOpen}>Change Mood</button>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.bottomR}>
                        <Link to='/journal'>
                            <div className={styles.journal}>
                            <h2>Journal</h2>
                            <p>What's been on your mind today? Let it out.</p>
                            <div className={styles.jImg}>
                                <img src={journal} alt="" />
                            </div>
                        </div>
                        </Link>
                        
                            <div className={styles.scenarios}>
                            <h2>Scenarios</h2>
                            <p>"What Would You Do?"</p>
                            <div className={styles.posi}><img src={focusedballoon} alt="" /></div>
                            <div className={styles.sImg}>
                                <img src={focused} alt="" />
                            </div>
                            <Link to='/scenarios'>Start Interaction</Link>
                        </div>
                        
                    </div>
                    <div className={styles.bottomL}>
                        <div className={styles.therapy}>
                            <h2>Therapy Sessions</h2>
                            <p>Book 1 on 1 therapy sessions</p>
                            <Link to='/book-appointment'>Chat with therapist</Link>
                        </div>
                        <div className={styles.materials}>
                            <h2>Company materials <Link to='/companyresources'><GoArrowRight/></Link></h2>
                            <p><GoVideo/> Mental Health Webinars</p>
                            <p><GoFile/> Health and mental well-being PDFs</p>
                        </div>
                    </div>
                </div>
            </section>
            <dialog ref={dialogRef} open={isOpen}>
                <div className={styles.dialog}>
                    <div className={styles.dialogTexts}>
                        <h2>Hello, <span>Alexis</span></h2>
                    <p>How are you feeling?</p>
                    </div>
                    <div className={styles.emojiList}>
                        {moods.map(m=>{
                            return(
                                
                                    <button
                                    key={m.alt}
                                    onClick={()=>{handleMood(m)}}>
                                        <div className={styles.emojiCnt}>
                                            <img src={m.src} alt={m.alt} />
                                        </div>
                                        <p>{m.alt}</p>
                                    </button>
                                
                            )
                        })}
                    </div>
                </div>
            </dialog>
        </div>
    )
}