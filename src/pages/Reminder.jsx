import styles from '../styles/Reminder.module.css'
import { GoDotFill } from 'react-icons/go'
import man from '../images/man.png'
import { FiSearch } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import NavBar from '../components/NavBar'
import { useEffect, useRef, useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import pod from '../images/pod.png'
import prescription from '../images/prescription.png'
import { TfiAngleRight } from 'react-icons/tfi'
import { FaPlus } from 'react-icons/fa6'


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

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);
    const [activePage, setActivePage] = useState('table')
    
    useEffect(()=>{
        const handleResize = () =>{
            setIsMobile(window.innerWidth <= 768)
        }
    
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])



    const dialogRef = useRef(null)
    const dialogRef2 = useRef(null)
    const dialogRef3 = useRef(null)


    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)

    const [time, setTime] = useState("")
    const [deleteItem, setDeleteItem] = useState(null)

    const [detailsObj, setDetailsObj] = useState(null) //For the first modal
    const[reminderList, setReminderList] = useState(data)
    const[searchTerm, setSearcTerm] = useState("")

    function handleOpen(details){
        setDetailsObj(details)
        dialogRef.current.showModal()
        setIsOpen(true)
    }
    function handleClose(){
        dialogRef.current.close();
        setIsOpen(false)
    }

    function handleOpen2(reminderTime){
        setTime(reminderTime)
        dialogRef2.current.showModal();
        setIsOpen2(true)
    }
    function handleClose2(){
        dialogRef2.current.close()
        setIsOpen2(false)
    }

    function handleOpen3(deleteEvent){
        setDeleteItem(deleteEvent)
        dialogRef3.current.showModal()
        setIsOpen3(true)
    }
    function handleClose3(){
        dialogRef3.current.close()
        setIsOpen3(false)
        setDeleteItem(null)
    }

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
            /* alert("Invalid Input") */ return
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
            /* alert("Invalid Input") */  return
         }
       }

       const reminderDayDate = checkDay(theDate, month, year);
    
       const newReminderObj = {...reminder, date: `${reminderDayDate} ${reminderMonth} ${reminderYear}`, isActive: true}
    
        setReminderList(prev=>{
            const nRO = {...newReminderObj, id: prev.length + 1}
            return [...prev, nRO]
        })

        handleOpen2(reminder.time)
    }

    function handleDelete(event){
        setReminderList(prev=>{
    return prev.filter(item=>{
      return item.event !== event
    })
  })
  dialogRef3.current.close()
  setIsOpen3(false)
  
  setDeleteItem(null)
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
                            <div className={styles.rb}>
                            <div className={styles.rg}>
                            <p>{r.time}</p>
                            <p>{r.date}</p>
                            </div>
                            <p className={r.isActive? `${styles.active}` : `${styles.inActive}`}>{r.isActive? `Active` : `Inactive`}</p>
                            <button onClick={()=>handleOpen3(r.event)}><RiDeleteBin6Line size={25}/></button>
                            </div>
                        </div>
        )
    })

    return (
        <div className={styles.body}>
            {activePage === "table" ? <NavBar/> :
            <header className={styles.jHeader}>
                                <nav className={styles.miniNav}>
                                  <ul>
                                    <li>
                                      <button onClick={()=>setActivePage("entries")}>Reminder</button>
                                    </li>
                                    <li>
                                      <TfiAngleRight size={14} />
                                    </li>
                                    <li>
                                      <p>New Reminder</p>
                                    </li>
                                  </ul>
                                </nav>
                                </header>
            }
            
            <section className={styles.rSection}>
                <div className={`${styles.top} ${isMobile ? styles.diff : undefined}`}>
                {isMobile && <div className={styles.searchBar}>
                            <FiSearch size={24}/>
                            <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch}/>
                        </div>}

                 {(!isMobile || activePage === 'table') &&   
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
                                <button 
                                onClick={()=>handleOpen(filteredReminders[1])} //A placeholder for now
                                >View Details</button>
                            </div>
                            <div className={styles.tlImg}>
                                <img src={man} alt="" />
                            </div>
                        </div>
                    </div>   
}

{(!isMobile || activePage === 'newReminder') &&
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
}                    
                </div>                
 
 {(!isMobile || activePage === 'table') &&
                <div className={styles.bottom}>
                    <div className={styles.topBottom}>
                        <h2>Reminder</h2>
                       { !isMobile ? <div className={styles.searchBar}>
                            <FiSearch size={24}/>
                            <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch}/>
                        </div> : <FaPlus/>}
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
}                
            </section>

            {/* detailsObj should be used here */}
            <dialog ref={dialogRef} open={isOpen}>
                <div className={styles.dialog}>
                    <div className={styles.dbtn}>
                        <h2>Details</h2>
                        <button onClick={handleClose}><LiaTimesSolid size={18}/></button>
                    </div>
                    <div className={styles.modalDets}>
                        <div className={styles.modalImg}>
                            <img src={pod} alt="" />
                        </div>
                        <div className={styles.dets}>
                            <h3>Dealing with depression</h3>
                            <p>Debugging the Mind: Mental Health in the Tech Era</p>
                            <p>Tag: Tools, Tactics, and Conversations for Building Psychological Resilience in Tech Teams.</p>
                            <div className={styles.dRows}>
                                <span>Host</span>
                                <span><GoDotFill size={8}/></span>
                                <span>Austin & Leo</span>
                            </div>
                            <div className={styles.dRows}>
                                <span>Event</span>
                                <span><GoDotFill size={8}/></span>
                                <span>Podcast</span>
                            </div>
                            <div className={styles.dRows}>
                                <span>2nd June, 2025</span>
                                <span><GoDotFill size={5}/></span>
                                <span>11:00 AM</span>
                            </div>
                        </div>
                    </div>
                    </div>
            </dialog>

            <dialog className={styles.dialog2} ref={dialogRef2} open={isOpen}>
                <div className={styles.dialogSuccess}>
                    <div className={styles.dbt}>
                        <h2>Reminder</h2>
                        <button onClick={handleClose2}><LiaTimesSolid size={18}/></button>
                    </div>
                    <p>Your reminder has been set for {time}</p>
                </div>
            </dialog>

            <dialog ref={dialogRef3} open={isOpen3}>
                <div className={styles.dialogDelete}>
                    <div className={styles.deleteImg}>
                        <img src={prescription} alt="" />
                    </div>
                    
                    <div className={styles.deleteDets}>
                        <div className={styles.ddT}>
                            <h2>Delete Reminder</h2>
                            <p>Are you sure you want to delete this reminder?</p>
                        </div>
                        <div className={styles.dbtns}>
                            <button onClick={()=>{handleDelete(deleteItem)}}>Yes</button>
                            <button onClick={handleClose3}>No</button>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}