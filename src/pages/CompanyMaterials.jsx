import styles from '../styles/CompanyMaterials.module.css'
import Webinar, {Pdf} from '../components/Webinar'
import { TfiAngleRight } from 'react-icons/tfi'
import { Link } from 'react-router'
import { useRef, useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import pod from '../images/pod.png'
import pdf from '../images/pdf.png'
import { GoCopy, GoDotFill, GoLink } from 'react-icons/go'

const webinarData = [
    {
        heading:'Dealing with depression',
        type: "Podcast",
        host: "Austin & Leo",
        src: pod,
        alt: "Talking",
        url: "https://serenity.com",
        date: "2nd June, 2025",
        time: "11:00 AM"
    },
    {
        heading:"Work place mental health peptalk",
        type: "Webinar",
        host: "Austin & Leo",
        src: pod,
        alt: "Talking",
        url: "https://Jenandthepen.org",
        date: "2nd June, 2025",
        time: "11:00 AM"
    },
    {
        heading:"Dealing with work related stress",
        type: 'Audio',
        host: "Austin & Leo",
        src: pod,
        alt: "Talking",
        url: "https://serenity.com",
        date: "2nd June, 2025",
        time: "11:00 AM"
    }
]
const pdfData =[
    {
        heading:"Company Mental Well Policy",
        date: "March 2025",
        src: pdf,
        alt: "pdf folder"

    }
]

export default function CompanyMaterials(){
    const dialogRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const [trigger, setTrigger] = useState(null)
    function handleClose(){
        dialogRef.current.close();
        setIsOpen(false)
    }
    function handleOpen(selectedWebinar){ //Pass index to tell modal which information to show. Modal should also map through webinarData
        setTrigger(selectedWebinar)
        dialogRef.current.showModal();
        setIsOpen(true)
    }

    async function handleCopy(){
        if(!trigger||!trigger.url){
            return;
        }
        try{
            await navigator.clipboard.writeText(trigger.url)
        }catch(e){
            console.log('Failed to copy')
        }
    }
    
const webinars = webinarData.map((item, index)=>{
    return(
        <Webinar
        key={index}
        heading={item.heading}
        type={item.type}
        host={item.host}
        src={item.src}
        alt={item.alt}
        date={item.date}
        time={item.time}
        handleClick={()=>handleOpen(item)}
        />
    )
})

const pdfs = pdfData.map(item=>{
    return(
        <Pdf
        key={item.heading}
        heading={item.heading}
        date={item.date}
        src={item.src}
        alt={item.alt}
        />
    )
})
    return(
        <div className={styles.body}>
            <header className={styles.cHeader}>
                <nav className={styles.miniNav}>
                    <ul>
                        <li>
                        <Link to="/dashind">Dashboard</Link>
                        </li>
                        <li>
                        <TfiAngleRight size={14} />
                        </li>
                        <li>
                        <Link to="/companyresources">Company Materials</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className={styles.cSection}>
                <div className={styles.webinar}>
                    <h2>Upcoming webinars</h2>
                    <div className={styles.cardCnt} >
                        {webinars}
                    </div>
                </div>

                <div className={styles.pdf}>
                    <h2>Internal Guides</h2>
                    <div className={styles.pdfCnt}>
                        {pdfs}
                    </div>
                </div>
            </section>
            { 
                <dialog ref={dialogRef} open={isOpen}>
                <div className={styles.dialog}>
                    <button type='button' onClick={handleClose}><LiaTimesSolid size={23} color="var(--primary-color)"/></button>
                    <div className={styles.dImg}>
                        <img src={trigger? trigger.src : ""} alt="" />
                    </div>
                    <div className={styles.dTexts}>
                        <p>Details:</p>
                        <div className={styles.dRows}>
                            <span>Host:</span>
                            <span>{trigger? trigger.host : ""}</span>
                        </div>
                        <div className={styles.dRows}>
                            <span>Topic:</span>
                            <span> {trigger?trigger.heading: ""}</span>
                        </div>
                        <div className={styles.dRows}>
                            <span>{trigger?trigger.date : ""}</span>
                            <span><GoDotFill size={10}/></span>
                            <span>{trigger ? trigger.time : ""}</span>
                        </div>
                        <div className={styles.dRows}>
                            <div className={styles.link}>
                                <span><GoLink/></span>
                                <span>{trigger ? trigger.url : ''}</span>
                            </div>
                            <button type='button' onClick={handleCopy}>
                            <GoCopy size={16} color='var(--primary-color)'/>
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
            
            }
        </div>
    )
}