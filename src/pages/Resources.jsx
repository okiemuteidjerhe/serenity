import styles from '../styles/resources.module.css'
import NavBar from '../components/NavBar'
import { GoDotFill, GoPlus } from 'react-icons/go'
import Document from '../images/pdf.png'

function WebinarCard(props) {
    return (
        <div className={styles.webinar}>
            <div className={styles.image}>

            </div>
            <div className={styles.details}>
                <h5>{props.title}</h5>
                <p className={styles.type}><span>{props.type}</span> <GoDotFill /> <span>{props.author}</span> </p>
                <p className={styles.date}><span>{props.date}</span> <GoDotFill size={8} /> <span>{props.time}</span> </p>
            </div>
        </div>
    )
}

export function Doc(props) {
    return (
        <div className={styles.doc}> 
            <div className={styles.icon}>
                <img src={Document} />
            </div>
            <div className={styles.details}>
                <h5>{props.title}</h5>
                <p className={styles.docType}> File type: <span>{props.type}</span></p>
                <p className={styles.docDate}>Updated: <span>{props.date}</span></p>
            </div>
        </div>
    )
}

export default function Resources() {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.content}>
                <div>
                    <div className={styles.heading}>
                        <h3>Webinars</h3>
                        <button>
                            <GoPlus size={20} />
                            Create Webinar
                        </button>
                    </div>

                    <div className={styles.webinars}>
                        <WebinarCard
                            title="Dealing with depression"
                            type="Podcast"
                            author="Austin & Leo"
                            date="2nd June 2025"
                            time="11:00 AM"
                        />
                    </div>

                </div>

                <div>
                    <div className={styles.heading}>
                        <h3>Internal Guides</h3>
                        <button>
                            <GoPlus size={20} />
                            Upload
                        </button>
                    </div>

                    <div className={styles.documents}>
                        <Doc 
                            title="Company Mental Well Policy"
                            type="PDF"
                            date="March 2025"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
