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
import { useRef, useState } from "react";

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

    const [isOpen, setIsOpen] = useState(false)
    const [indLogOutOpen, setIndLogOutOpen] = useState(false)

    const dialogRef = useRef(null)
    const indDialogRef = useRef(null)

    function handleCompLogOutOpen(){
      dialogRef.current.showModal()
      setIsOpen(true)
    }

    function handleCompLogOutClose(){
      dialogRef.current.close()
      setIsOpen(false)
    }

    function handleIndLogOutOpen(){
      indDialogRef.current.showModal()
      setIndLogOutOpen(true)
    }

    function handleIndLogOutClose(){
      indDialogRef.current.close()
      setIndLogOutOpen(false)
    }

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
    <>
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
            <NavLink to={props.isCorporate? "/comp-profile" : "/profile"}>
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
            <button onClick={props.isCorporate ? handleCompLogOutOpen : handleIndLogOutOpen}>
              <img src={Avatar} alt="Avatar" /> <TfiAngleDown size={14}/>
            </button>
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


     <dialog ref={props.isCorporate ? dialogRef : indDialogRef} open={props.isCorporate ? isOpen : indLogOutOpen}>
        <form action="" className={styles.Dialog}>
          <button type="button" onClick={props.isCorporate ? handleCompLogOutClose : handleIndLogOutClose}><LiaTimesSolid size={23} color="var(--primary-color)"/></button>
          <div className={styles.modalImage}>
            <img src={Avatar} alt="" />
          </div>
          <div className={styles.inputs}>
            <label>
              <div className={styles.labelText}>{props.isCorporate ? 'Company Name' : 'Name'}</div>
              <input type="text" value={props.isCorporate ? "Tech Pro" : "Alexi Jane"} readOnly/>
            </label>
            <label>
              <div className={styles.labelText}>{props.isCorporate ? "Description" : "Role"}</div>
              <input type="text" value={props.isCorporate ? "A company that provides tech solutions for pros" : 'Product Designer'} readOnly/>
            </label>
            <label>
              <div className={styles.labelText}>Email</div>
              <input type="text" value={props.isCorporate ? "Tech4pro@gmail.com" : "alexisjane@gmail.com"} readOnly/>
            </label>
          </div>
          <button>Log Out</button>
        </form>
     </dialog>

     <dialog className={styles.LogOut}>
        <form action="" className={styles.Confirmation}>
          <h2>Log Out</h2>
          <p>Are you sure you want to log out of this account?</p>
          <div className={styles.BtnsR}>
            <button>Yes</button>
            <button>No</button>
          </div>
        </form>
     </dialog>
    </>
  );
}
