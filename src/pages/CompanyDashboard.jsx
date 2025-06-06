import { TbArrowNarrowUp } from 'react-icons/tb'
import NavBar from '../components/NavBar'
import styles from '../styles/companyDashboard.module.css'
import { FaPlus } from 'react-icons/fa6'
import { GoDotFill } from 'react-icons/go'
import { Link } from 'react-router'
import Man from '../images/man.png'
import Bar from '../components/Bar'
import { BarChart } from '@mui/x-charts'
import Graph from '../components/Graph'





export function Box(props) {
    return (
        <div className={styles.box} style={props.colored ? { backgroundColor: "var(--secondary-color)", color: 'white' } : { border: "1px solid #DBDCE2" }}>
            <div className={styles.boxTop}>
                <h1>{props.value}</h1> {props.stat ? <p> <TbArrowNarrowUp size={16} /> {props.stat} </p> : null}
            </div>
            <p>{props.label}</p>
        </div>
    )
}

export function EventCard(props) {
    return (
        <div className={styles.eventCard}>
            <h3>{props.tag}</h3>
            <div>
                <div className={styles.texts}>
                    <div>
                        <p>{props.event}</p>
                        <p className={styles.time}><span>{props.time}</span> <GoDotFill /> <span>{props.date}</span></p>
                    </div>

                    <Link>
                        View Reminder</Link>
                </div>
                <div className={styles.image}>
                    <img src={props.image} />
                </div>
            </div>

        </div>
    )
}

export function BarWithLabel(props) {
    return (
        <div className={styles.barWithLabel}>
            <div className={styles.left}>
                <p>{props.label}</p>
                <Bar value={props.value} variant='determinate' />
            </div>
            <p>{`${props.value}%`}</p>
        </div>
    )
}

export default function CompanyDashboard() {
    return (
        <div className={styles.container}>
            <NavBar isCorporate={true} />
            <div className={styles.content}>
                <h2>Welcome, Okiemute</h2>
                <div className={styles.cards}>
                    <div className={styles.left}>
                        <div className={styles.top}>
                            <h3>Employees Overview</h3>
                            <div className={styles.boxes}>
                                <Box
                                    label="Total Check-ins Today"
                                    value="20"
                                />

                                <Box
                                    label="Average mood score"
                                    value="4.2%"
                                    stat="24%"
                                    colored={true}
                                />

                                <Box
                                    label="Feature Usage"
                                    value="5"
                                    stat="24%"
                                />
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.overview}>
                                <h3>Employees wellness overview</h3>
                                <button> <FaPlus /> Export Report</button>
                            </div>
                            <div>
                                {/* Bar chart */}
                                <Graph />
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.checkIns}>
                            <h3>Daily Employees Check-Ins</h3>
                            <div className={styles.bars}>
                                <BarWithLabel
                                    label="Safe Room"
                                    value={60}
                                />
                                <BarWithLabel
                                    label="Scenarios"
                                    value={45}
                                />
                                <BarWithLabel
                                    label="Journal"
                                    value={60}
                                />
                                <BarWithLabel
                                    label="Webinars"
                                    value={50}
                                />
                            </div>
                        </div>
                        <div className={styles.events}>
                            <EventCard
                                image={Man}
                                tag="Upcoming Events"
                                event="Work place mental health peptalk with Ted Anjelo"
                                time="01:00 AM"
                                date="14th June, 2025"
                            />
                        </div>
                        <div className={styles.report}>
                            <h3>Top Report</h3>
                            <p>Export all reports</p>
                            <button>Export Report</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
