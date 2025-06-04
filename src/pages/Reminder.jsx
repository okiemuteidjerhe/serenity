import styles from '../styles/Reminder.module.css'
import { GoDotFill } from 'react-icons/go'
import man from '../images/man.png'
import { FiSearch } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import NavBar from '../components/NavBar'
import { useState } from 'react'


const data = [
    {
        id: 1,
        event: "Finding your calm: Work place mental health peptalk with Ted Anjelo",
        time: "10:00 AM",
        date: "10 June,2025",
        isActive: true
    },
    {
        id: 2,
        event: "Finding your calm: Work place mental health peptalk with T",
        time: "1:10 PM",
        date: "10 June,2025",
        isActive: false
    },
    {
        id: 3,
        event: "Finding your calm: Work place mental health peptalk with Te",
        time: "12:00 PM",
        date: "10 June,2025",
        isActive: false
    },
    {
        id: 4,
        event: "Finding your calm: Work place mental health peptalk with Ted ",
        time: "4:10 PM",
        date: "10 June,2025",
        isActive: false
    }
]


export default function Reminder(){
    const[reminderList, setReminderList] = useState(data)
    const[searchTerm, setSearcTerm] = useState("")

    function handleNewReminder(formData){
        const reminder = Object.fromEntries(formData);
        
        const dateArr = reminder.date.split('/');
        const year = dateArr[0];
        const month = dateArr[1];
        const theDate = dateArr[2];


        function checkYear(year){
            const currentYear = new Date().getFullYear();
            const yyyy = Number(year)
            if(yyyy < currentYear){
                return
            }
            return yyyy;
        }

        const reminderYear = checkYear(year)

       function checkMonth(month){
         const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
         const mm = Number(month)
         if (mm > 13 || mm < 1){
            return
         }else{
           const wordMonth = months[mm - 1];
           return wordMonth; 
         }
       }

       const reminderMonth = checkMonth(month)
        
       function checkDay(dayDate, month, year){
         const dd = Number(dayDate);
         const yyyy = Number(year)
         const mm = Number(month-1)
         const date = new Date(yyyy, mm, dd);

         if(date.getFullYear() === yyyy && date.getMonth() === mm && date.getDate() === dd){
            return dd
         }else{
            return 
         }
       }

       const reminderDayDate = checkDay(theDate, month, year);
    
       const newReminderObj = {...reminder, date: `${reminderDayDate} ${reminderMonth} ${reminderYear}`, isActive: true}
    
        setReminderList(prev=>{
            const nRO = {...newReminderObj, id: prev.length + 1}
            return [...prev, nRO]
        })
    }

    function handleDelete(event){
        setReminderList(prev=>{
    return prev.filter(item=>{
      return item.event !== event
    })
  })
}

function handleSearch(e){
    let word = e.target.value;
    setSearcTerm(word);
}

const filteredReminders = reminderList.filter(item=>{
    if(searchTerm){
        return item.event.toLowerCase().includes(searchTerm.toLowerCase())
    }else{
        return true
    }
})

    const reminders = filteredReminders.map(r=>{
        return(
            <div 
            key={r.id}
            className={styles.row2}>
                            <p>{r.event}</p>
                            <p>{r.time}</p>
                            <p>{r.date}</p>
                            <p className={r.isActive? `${styles.active}` : `${styles.inActive}`}>{r.isActive? `Active` : `Inactive`}</p>
                            <span onClick={()=>{handleDelete(r.event)}}><RiDeleteBin6Line size={25}/></span>
                        </div>
        )
    })

    return (
        <div className={styles.body}>
            <NavBar/>
            
            <section className={styles.rSection}>
                <div className={styles.top}>
                    <div className={styles.topLeft}>
                        <h3>Upcoming Events</h3>
                        <div className={styles.tlBox}>
                            <div className={styles.tlTexts}>
                                <div className={styles.topT}>
                                    <p>Work place mental health peptalk with Ted Anjelo</p>
                                    <div className={styles.row}>
                                        <span>01:00 AM</span>
                                        <span><GoDotFill size={10}/></span>
                                        <span>Webinar</span>
                                    </div>
                                    <p>14th June, 2025</p>
                                </div>
                                <button>View Details</button>
                            </div>
                            <div className={styles.tlImg}>
                                <img src={man} alt="" />
                            </div>
                        </div>
                    </div>
                    <form action={handleNewReminder} className={styles.topRight}>
                        <h3>Set Reminder</h3>
                        <div className={styles.inputField}>
                            <label className={styles.lab}>
                                <span className={styles.labelText}>Event</span>
                                <input type="text" name='event' required/>
                            </label>
                            <div className={styles.inputRow}>
                                <label className={styles.lab}>
                                <span className={styles.labelText}>Date</span>
                                <input type="datetime" name='date' placeholder='YYYY/MM/DD' required/>
                            </label>
                                <label className={styles.lab}>
                                <span className={styles.labelText}>Time</span>
                                <input type="datetime" name='time' placeholder='10:00 AM' required/>
                            </label>
                                <label className={styles.lab}>
                                <span className={styles.labelText}>Duration</span>
                                <input type="text" name='duration' placeholder='2hrs'/> 
                            </label>
                            </div>
                        </div>
                        <button>Set Reminder</button>
                    </form>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.topBottom}>
                        <h2>Reminder</h2>
                        <div className={styles.searchBar}>
                            <FiSearch size={24}/>
                            <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch}/>
                        </div>
                    </div>
                    <div className={styles.reminderTable}>
                        <div className={styles.row1}>
                            <h3>Events</h3>
                            <h3>Time</h3>
                            <h3>Date</h3>
                            <h3>Status</h3>
                            <h3>Action</h3>
                        </div>
                        {reminders}
                    </div>
                </div>
            </section>
        </div>
    )
}