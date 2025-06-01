import styles from '../styles/CompanyMaterials.module.css'
import Webinar, {Pdf} from '../components/Webinar'
import { TfiAngleRight } from 'react-icons/tfi'
import { Link } from 'react-router'
import { useRef, useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'

const webinarData = [
    {
        heading:'Dealing with depression',
    },
    {
        heading:1,
    },
    {
        heading:1,
    }
]
const pdfData =[
    {
        a:2
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

    
const webinars = webinarData.map((item, index)=>{
    return(
        <Webinar
        key={index}
        heading={item.heading}
        handleClick={()=>handleOpen(item)}
        />
    )
})

const pdfs = pdfData.map(item=>{
    return(
        <Pdf/>
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
                        <img src="" alt="" />
                    </div>
                    <div className={styles.dTexts}>
                        <p>Details:</p>
                        <div className={styles.dRows}>
                            <span>Host:</span><span>Ted Anjelo</span>
                        </div>
                        <div className={styles.dRows}>
                            <span>Topic:</span><span>{/* Work place mental health */} {trigger?trigger.heading: ""}</span>
                        </div>
                        <div className={styles.dRows}>
                            <span>14th June,2025</span>
                            <span>dot</span>
                            <span>01:00PM</span>
                        </div>
                        <div className={styles.dRows}>
                            <span>link icon</span>
                            <a href=''>Workplacementalhealth/pop</a>
                        </div>
                    </div>
                </div>
            </dialog>
            
            }
        </div>
    )
}