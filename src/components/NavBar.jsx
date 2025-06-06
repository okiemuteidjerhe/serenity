import styles from "../styles/NavBar.module.css";
import logo from "../images/serenity.svg";
import Avatar from "../images/Avatar.png";
import { PiGearSixLight } from "react-icons/pi";
import { BsBell } from "react-icons/bs";
import { TfiAngleDown } from "react-icons/tfi";
import { LiaTimesSolid } from "react-icons/lia";
import { NavLink } from "react-router";
import { GoDotFill } from "react-icons/go";
import checked from '../images/checked.png'
import exclamation from '../images/exclamation.png'
import { useState } from "react";

const data = [
    {
        src: Avatar,
        isNew: true,
        heading: 'Dr. Rainbow Health',
        text: "2 New Messages",
        timeSent: "3 minutes ago"
    },
    {
        src: exclamation,
        isNew: true,
        heading: 'Payment Update',
        text: "Please update your payment",
    },
    {
        src: Avatar,
        isNew: false,
        heading: 'Dr. Rainbow Health',
        text: "2 New Messages",
        timeSent: "3 minutes ago"
    },
    {
        src: checked,
        isNew: false,
        heading: 'Payment Update',
        text: "Your payment was successful",
    },
    {
        src: exclamation,
        isNew: false,
        heading: 'Payment Update',
        text: "Please update your payment",
    },
    {
        src: exclamation,
        isNew: false,
        heading: 'Payment Update',
        text: "Please update your payment",
    },
    {
        src: exclamation,
        isNew: false,
        heading: 'Payment Update',
        text: "Please update your payment",
    },
    {
        src: exclamation,
        isNew: false,
        heading: 'Payment Update',
        text: "Please update your payment",
    },
]



export default function NavBar(props) {
    const[messages, setMessages] = useState(data)
    const [notificationOpen, setNotificationOpen] = useState(false)

    function handleMarkAsRead(){
        setMessages(prev=>{
            return prev.map(x =>{
                return {...x, isNew: false }
            })
        })
    }

    function handleOpening(){
        setNotificationOpen(true);
    }

    function handleClosing(){
        setNotificationOpen(false);
    }

    const newNotification = messages.some(x=>{
        return x.isNew === true
    })

    const dropdownContent = messages.map((element, index)=>{
    return (
        <div 
        key={index}
        className={styles.msg}>
            <div className={styles.msgB}>
                <div className={styles.msgImg}>
              <img src={element.src} alt="" />
            </div>
            <div className={styles.msgTexts}>
              <p>{element.heading}</p>
              <div className={styles.msgRow}>
                <span>{element.text}</span>
                
             {element.timeSent ? <><span>
                  <GoDotFill size={4} color="#9EA2AE" />
                </span>
                <span>{element.timeSent}</span></> : null}   
                
              </div>
            </div>
          </div>
          {element.isNew? <span><GoDotFill color=" #43B75D"/></span> : null}
          </div>
    )
})
    
  return (
    <header className={styles.Header}>
      <div className={styles.logoCtn}>
        <img src={logo} alt="Serenity logo" />
      </div>
      <nav className={styles.primary}>

        {
          props.isCorporate ?       <ul>
          <li>
            <NavLink
              to="/comp-dash"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : undefined
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : undefined
              }
            >
             Employees
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : undefined
              }
            >
             Resources
            </NavLink>
          </li>
    
        </ul>  :
                <ul>
          <li>
            <NavLink
              to="/dashind"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : undefined
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/vsr"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : undefined
              }
            >
              Safe Room
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/journal"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : undefined
              }
            >
              Journal
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/message"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : undefined
              }
            >
              Message
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reminder"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : undefined
              }
            >
              Reminder
            </NavLink>
          </li>
        </ul>
        }
  
      </nav>

      <nav className={styles.secondary}>
        <ul>
          <li>
            <NavLink to="">
              <PiGearSixLight size={20}/>
            </NavLink>
          </li>
          <li>
            <button onClick={handleOpening}>
              <BsBell size={18}/>
              {newNotification ? <span><GoDotFill size={16} color=" #43B75D"/></span> : null}
            </button>
          </li>
          <li>
            <NavLink to="">
              <img src={Avatar} alt="Avatar" /> <TfiAngleDown size={24}/>
            </NavLink>
          </li>
        </ul>
      </nav>
     
     {notificationOpen && (
        <div className={`${styles.backdrop} ${notificationOpen ? styles.backdropOpen : undefined}`}>
            <div className={`${styles.notifications} ${notificationOpen ? styles.open : undefined}`}>
        <div className={styles.topSide}>
          <div className={styles.tt}>
            <h3>Notification</h3>
            <button onClick={handleClosing}>
              <LiaTimesSolid size={24}/>
            </button>
          </div>
          <div className={styles.tb}>
            <button>General</button>
            <button onClick={handleMarkAsRead}>Mark all as read</button>
          </div>
        </div>
        <div className={`${styles.dropdown} ${messages.length < 5 ?  undefined : styles.scrollArea}`}>
          {dropdownContent}
        </div>
      </div>
        </div>
     )}
      
    </header>
  );
}
