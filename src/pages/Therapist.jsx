import BackArrow from '../components/BackArrow'
import styles from '../styles/Therapist.module.css'
import { FiSearch } from "react-icons/fi"
import background from '../images/background.png'
import Avatar from '../images/Avatar.png'
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router'

const data = [
    {   
        id:1,
        src: background,
        pfp: Avatar,
        name: "Dr. Happy Martins",
        certifications: "MA, LPC",
        rating: 4.5,
    },
    {
        id:2,
        src: background,
        pfp: Avatar,
        name: "Dr. Happy Martins",
        certifications: "MA, LPC",
        rating: 4.5,
    },
    {
        id:3,
        src: background,
        pfp: Avatar,
        name: "Dr. Happy Martins",
        certifications: "MA, LPC",
        rating: 4.5,
    },
    {
        id:4,
        src: background,
        pfp: Avatar,
        name: "Dr. Happy Martins",
        certifications: "MA, LPC",
        rating: 4.5,
    },
    {
        id:5,
        src: background,
        pfp: Avatar,
        name: "Dr. Happy Martins",
        certifications: "MA, LPC",
        rating: 4.5,
    },
    {
        id:6,
        src: background,
        pfp: Avatar,
        name: "Dr. Happy Martins",
        certifications: "MA, LPC",
        rating: 4.5,
    },
    {
        id:7,
        src: background,
        pfp: Avatar,
        name: "Dr. Happy Martins",
        certifications: "MA, LPC",
        rating: 4.5,
    },
    {
        id:8,
        src: background,
        pfp: Avatar,
        name: "Dr. Happy Martins",
        certifications: "MA, LPC",
        rating: 4.5,
    }
]

function TherapistCard(props){
    return(
        <div className={styles.theBox}>
            <div className={styles.bg}>
                <img src={props.src} alt="background cover" />
            </div>

            <div className={styles.middleAvatar}>
                <img src={props.pfp} alt="profile picture" />
            </div>

            <div className={styles.personalInfo}>
                <div className={styles.dets}>
                    <div className={styles.name}>
                        <p>{props.name}</p>
                        <p>{props.certifications}</p>
                    </div>
                    <p><FaStar size={16}/> {props.rating}</p>
                </div>
                <Link to="/therapist-profile">View Profile</Link> {/* This is not a link but a button with a function that will pass an something (object?) to the next page for rendering. So we will use navigate inside the function */}
            </div>
        </div>
    )
}

export default function Therapist(){
    const serenityTherapists  = data.map(e=>{
        return(
            <TherapistCard
                key={e.id}
                src = {e.src}             
                pfp = {e.pfp}
                name = {e.name}
                certifications = {e.certifications}
                rating = {e.rating}
            />
        )
    })

    return (
        <div className={styles.body}>
            <BackArrow linkTo="/dashind"/>
            <h2>Book Appointment</h2>
            <section className={styles.tSection}>
                <div className={styles.searchTop}>
                    <h3>Therapists</h3>
                    <div className={styles.searchInput}>
                        <FiSearch size={24}/>
                        <input type="text" placeholder='Find therapist'/>
                    </div>
                </div>

                <div className={styles.therapists}>
                    {serenityTherapists}
                </div>
            </section>
        </div>
    )
}