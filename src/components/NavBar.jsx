import styles from "../styles/NavBar.module.css";
import logo from "../images/serenity.svg";
import Avatar from "../images/Avatar.png";
import { PiGearSixLight } from "react-icons/pi";
import { BsBell } from "react-icons/bs";
import { TfiAngleDown } from "react-icons/tfi";
import { LiaTimesSolid } from "react-icons/lia";
import { NavLink, useLocation, useNavigate } from "react-router";
import { GoDotFill } from "react-icons/go";
import checked from "../images/checked.png";
import exclamation from "../images/exclamation.png";
import { useContext, useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext, AuthReducerContext } from "../context/AuthContext";
import { UserInformationContext } from "../context/UserInfoContext";

const data = [
  {
    src: Avatar,
    isNew: true,
    heading: "Dr. Rainbow Health",
    text: "2 New Messages",
    timeSent: "3 minutes ago",
  },
  {
    src: exclamation,
    isNew: true,
    heading: "Payment Update",
    text: "Please update your payment",
  },
  {
    src: Avatar,
    isNew: false,
    heading: "Dr. Rainbow Health",
    text: "2 New Messages",
    timeSent: "3 minutes ago",
  },
  {
    src: checked,
    isNew: false,
    heading: "Payment Update",
    text: "Your payment was successful",
  },
  {
    src: exclamation,
    isNew: false,
    heading: "Payment Update",
    text: "Please update your payment",
  },
  {
    src: exclamation,
    isNew: false,
    heading: "Payment Update",
    text: "Please update your payment",
  },
  {
    src: exclamation,
    isNew: false,
    heading: "Payment Update",
    text: "Please update your payment",
  },
  {
    src: exclamation,
    isNew: false,
    heading: "Payment Update",
    text: "Please update your payment",
  },
];

export default function NavBar(props) {

  const dispatch = useContext(AuthReducerContext)
  const token = useContext(AuthContext)
  console.log(token)

  //Trying out userInfoContext
const info = useContext(UserInformationContext)
console.log(info)






  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen(true);
  }
  function handleCloseMenu() {
    setMenuOpen(false);
  }

  const location = useLocation()
  const prevPath = useRef(location.pathname)

  useEffect(()=> {
    if(location.pathname !== prevPath.current){
      setMenuOpen(false)
    document.body.style.overflow = ""
    prevPath.current = location.pathname
    }
}, [location.pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen]);

  const [messages, setMessages] = useState(data);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [indLogOutOpen, setIndLogOutOpen] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const dialogRef = useRef(null);
  const indDialogRef = useRef(null);
  const confirmationRef = useRef(null);


  function handleCompLogOutOpen() {
    dialogRef.current.showModal();
    setIsOpen(true);
  }

  function handleCompLogOutClose() {
    dialogRef.current.close();
    setIsOpen(false);
  }

  function handleIndLogOutOpen() {
    indDialogRef.current.showModal();
    setIndLogOutOpen(true);
  }

  function handleIndLogOutClose() {
    indDialogRef.current.close();
    setIndLogOutOpen(false);
  }

  function indConfirmationOpen() {
    confirmationRef.current.showModal();
    setConfirmationOpen(true);
    indDialogRef.current.close();
    setIndLogOutOpen(false);
  }

  function compConfirmationOpen() {
    confirmationRef.current.showModal();
    setConfirmationOpen(true);
    dialogRef.current.close();
    setIsOpen(false);
  }

  function handleYes() {
    confirmationRef.current.close();
    setConfirmationOpen(false);
    dispatch({
      type: false,
      token: null
    })
  }

  function confirmationClose() {
    setConfirmationOpen(false);
    confirmationRef.current.close();
  }

  function handleMarkAsRead() {
    setMessages((prev) => {
      return prev.map((x) => {
        return { ...x, isNew: false };
      });
    });
  }

  function handleOpening() {
    setNotificationOpen(true);
    setMenuOpen(false)
  }

  function handleClosing() {
    setNotificationOpen(false);
  }

  const newNotification = messages.some((x) => {
    return x.isNew === true;
  });

  const dropdownContent = messages.map((element, index) => {
    return (
      <div key={index} className={styles.msg}>
        <div className={styles.msgB}>
          <div className={styles.msgImg}>
            <img src={element.src} alt="" />
          </div>
          <div className={styles.msgTexts}>
            <p>{element.heading}</p>
            <div className={styles.msgRow}>
              <span>{element.text}</span>

              {element.timeSent ? (
                <>
                  <span>
                    <GoDotFill size={4} color="#9EA2AE" />
                  </span>
                  <span>{element.timeSent}</span>
                </>
              ) : null}
            </div>
          </div>
        </div>
        {element.isNew ? (
          <span>
            <GoDotFill color=" #43B75D" />
          </span>
        ) : null}
      </div>
    );
  });

  return (
    <>
      <header className={styles.Header}>
        <div className={styles.logoCtn}>
          <img src={logo} alt="Serenity logo" />
        </div>
        <nav className={styles.primary}>
          {props.isCorporate ? (
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : undefined
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/employees"
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : undefined
                  }
                >
                  Employees
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resources"
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : undefined
                  }
                >
                  Resources
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <NavLink
                  to="/"
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
          )}
        </nav>

        <nav className={styles.secondary}>
          <ul>
            <li>
              <NavLink to={props.isCorporate ? "/comp-profile" : "/profile"}>
                <PiGearSixLight size={20} />
              </NavLink>
            </li>
            <li>
              <button onClick={handleOpening}>
                <BsBell size={18} />
                {newNotification ? (
                  <span>
                    <GoDotFill size={16} color=" #43B75D" />
                  </span>
                ) : null}
              </button>
            </li>
            <li>
              <button
                onClick={
                  props.isCorporate ? handleCompLogOutOpen : handleIndLogOutOpen
                }
              >
                <img src={(token.avatar?.url) || (token.logo?.url) || Avatar} alt="Avatar" /> <TfiAngleDown size={14} />
              </button>
            </li>
          </ul>
        </nav>
        <button
          onClick={handleMenuOpen}
          className={`${styles.hamburger} ${
            menuOpen ? styles.hidebtn : undefined
          }`}
          type="button"
        >
          <GiHamburgerMenu size={24} color="var(--primary-color)" />
        </button>



{notificationOpen && (
          <div
            className={`${styles.backdrop} ${
              notificationOpen ? styles.backdropOpen : undefined
            }`}
          >
            <div
              className={`${styles.notifications} ${
                notificationOpen ? styles.open : undefined
              }`}
            >
              <div className={styles.topSide}>
                <div className={styles.tt}>
                  <h3>Notification</h3>
                  <button onClick={handleClosing}>
                    <LiaTimesSolid size={24} />
                  </button>
                </div>
                <div className={styles.tb}>
                  <button>General</button>
                  <button onClick={handleMarkAsRead}>Mark all as read</button>
                </div>
              </div>
              <div
                className={`${styles.dropdown} ${
                  messages.length < 5 ? undefined : styles.scrollArea
                }`}
              >
                {dropdownContent}
              </div>
            </div>
          </div>
        )}


        <nav
          className={`${styles.mobileNav} ${
            menuOpen ? styles.open : undefined
          }`}
        >
          {props.isCorporate ? (
            <ul>
              <li>
                <button onClick={handleCloseMenu}>
                  <LiaTimesSolid size={30} />
                </button>
              </li>
              <li className={styles.logoC}><img src={Avatar} alt="User Avatar" /></li>
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
            </ul>
          ) : (
            <ul>
              <li>
                <button onClick={handleCloseMenu}>
                  <LiaTimesSolid size={30} />
                </button>
              </li>
              <li className={styles.logoC}><img src={Avatar} alt="Company Logo" /></li>
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

              <li>
              <NavLink to={props.isCorporate ? "/comp-profile" : "/profile"}>
                Profile Settings
              </NavLink>
            </li>
            <li>
              <button className={styles.navBtn} onClick={handleOpening}>
                Notification
                {newNotification ? (
                  <span>
                    <GoDotFill size={16} color=" #43B75D" />
                  </span>
                ) : null}
              </button>
            </li>
            <li>
              <button
              className={styles.navBtn}
                onClick={
                  props.isCorporate ? handleCompLogOutOpen : handleIndLogOutOpen
                }
              >
                Log Out
              </button>
            </li>

            </ul>
          )}
        </nav>

      </header>

      <dialog
        className={styles.first}
        ref={props.isCorporate ? dialogRef : indDialogRef}
        open={props.isCorporate ? isOpen : indLogOutOpen}
      >
        <form action="" className={styles.Dialog}>
          <button
            type="button"
            onClick={
              props.isCorporate ? handleCompLogOutClose : handleIndLogOutClose
            }
          >
            <LiaTimesSolid size={23} color="var(--primary-color)" />
          </button>
          <div className={styles.modalImage}>
            <img src={(token.avatar?.url)|| (token.logo?.url) || Avatar} alt="" />
          </div>
          <div className={styles.inputs}>
            <label>
              <div className={styles.labelText}>
                {props.isCorporate ? "Company Name" : "Name"}
              </div>
              <input
                type="text"
                name="Name"
                value={props.isCorporate ? token.companyName : `${info.first_name} ${info.last_name}`}
                readOnly
              />
            </label>
            <label>
              <div className={styles.labelText}>
                {props.isCorporate ? "Description" : "Role"}
              </div>
              <input
                type="text"
                name={props.isCorporate ? "Description" : "Role"}
                value={
                  props.isCorporate
                    ? token.aboutCompany
                    : info.role
                }
                readOnly
              />
            </label>
            <label>
              <div className={styles.labelText}>Email</div>
              <input
                type="text"
                name="Email"
                value={
                  props.isCorporate
                    ? token.companyEmail
                    : info.email
                }
                readOnly
              />
            </label>
          </div>
          <button
            type="button"
            onClick={
              props.isCorporate ? compConfirmationOpen : indConfirmationOpen
            }
          >
            Log Out
          </button>
        </form>
      </dialog>

      <dialog
        ref={confirmationRef}
        open={confirmationOpen}
        className={styles.LogOut}
      >
        <form action="" className={styles.Confirmation}>
          <h2>Log Out</h2>
          <p>Are you sure you want to log out of this account?</p>
          <div className={styles.BtnsR}>
            <button type="button" className={styles.Yes} onClick={handleYes}>
              Yes
            </button>
            <button
              type="button"
              className={styles.No}
              onClick={confirmationClose}
            >
              No
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
