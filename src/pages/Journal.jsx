import logo from "../images/serenity.svg"
import Avatar from '../images/Avatar.png'
import { PiGearSixLight } from "react-icons/pi"
import { BsBell } from "react-icons/bs"
import { TfiAngleDown } from "react-icons/tfi"
import { Link } from "react-router"
import styles from '../styles/Journal.module.css'
import { FiSearch } from "react-icons/fi"
import { useState } from "react"

const journalEntries = [
    {
        date:"10th May, 2025",
        entry: "Today at work, something really embarrassing happened—one of my colleagues yelled at me...."
    },
    {
        date:"11th May, 2025",
        entry: "Today at work, something really embarrassing happened—one of my colleagues yelled at me...."
    },
    {
        date:"13th May, 2025",
        entry: "Today at work, something really embarrassing happened—one of my colleagues yelled at me...."
    },
    {
        date:"15th May, 2025",
        entry: "Today at work, something really embarrassing happened—one of my colleagues yelled at me...."
    }
]
export default function Journal(){
const[entries, setEntries] = useState(journalEntries);
const[diaryEntry, setDiaryEntry] = useState('');

const entriesArr = entries.map((e,index)=>{
    return(
        <div 
        key={index}
        className={styles.entry}>
            <h3>{e.date}</h3>
            <p>{e.entry}</p>
        </div>
    )
})

function handleDiaryEntry(formData){
    const entry = Object.fromEntries(formData);
    const journalEntryDate =  new Date()
    const year = journalEntryDate.getFullYear();
    const theDate = journalEntryDate.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[journalEntryDate.getMonth()];

    function getOrdinalSuffix(day){
        if(day > 3 && day < 21){
            return 'th';
        }
        if(day%10 === 1){
            return 'st';
        }else if(day%10 === 2){
            return 'nd';
        }else if(day%10 === 3){
            return 'rd';
        }else{
            return 'th'
        }
    }

    const ordinal = getOrdinalSuffix(theDate);
    let newArrayEntry = {date: `${theDate}${ordinal} ${month}, ${year}`, ...entry};
    setEntries(prev=>{
        return [...prev, newArrayEntry]
    })
    
}
console.log(entries)
    return (
        <div className={styles.body}>
            <header className={styles.jHeader}>
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
            <section className={styles.jSection}>
                <div className={styles.left}>
                    <div className={styles.box}>
                        <div className={styles.inputB}>
                            <FiSearch size={24}/>
                            <input type="text" placeholder="Search"/>
                        </div>
                    </div>
                    <div className={styles.journalEntries}>
                        {entriesArr}
                    </div>
                </div>
                <form action={handleDiaryEntry} className={styles.right}>
                    <h2>Private Journal</h2>
                    <textarea name="entry"></textarea>
                    <button>Save</button>
                </form>
            </section>
        </div>
    )
}