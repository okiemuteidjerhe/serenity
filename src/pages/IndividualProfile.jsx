import styles from "../styles/IndividualProfile.module.css"
import { Link } from "react-router";
import { TfiAngleRight } from "react-icons/tfi";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import Avatar from '../images/Avatar.png'
import { useState } from "react";

export default function IndividualProfile(){
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    function handleAvatar(e){
        if(e.target.files[0]){
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const [wantNotification, setWantNotification] = useState(false)
  
    const [wantAccountPrivate, setWantAccountPrivate] = useState(false)

    function handleWantNotification(){
      setWantNotification(prev => !prev)
    }
    
    function handleWantAccountPrivate(){
      setWantAccountPrivate(prev => !prev)
    }

    return (
        <div className={styles.body}>
            <header className={styles.pHeader}>
                    <nav className={styles.miniNav}>
                      <ul>
                        <li>
                          <Link to="/dashind">Dashboard</Link>
                        </li>
                        <li>
                          <TfiAngleRight color="#9EA2AE" size={13} />
                        </li>
                        <li>
                          <Link to="/profile">Profile Setting</Link>
                        </li>
                      </ul>
                    </nav>
            </header>    

            <form className={styles.pSection}>
                <h3>Profile settings</h3>    
                <div className={styles.upload}>
                    <div className={styles.profileImage}>
                        <img src={avatar.url||Avatar} alt="" />
                    </div>
                    <label className={styles.selector}>                        
                        <div className={styles.labelText}>Upload Image</div>
                        <input type="file" name="Avatar" onChange={handleAvatar}/>
                    </label>
                </div>
                <div className={styles.inputFields}>
                    <div className={styles.R}>
                        <label>
                            <div className={styles.labelText}>First Name</div>
                            <input type="text" name="First-name" placeholder="John"/>
                        </label>
                        <label>
                            <div className={styles.labelText}>Last Name</div>
                            <input type="text" name="Last-name" placeholder="Doe"/>
                        </label>
                    </div>
                    <div className={styles.R}>
                        <label>
                            <div className={styles.labelText}>Email</div>
                            <input type="email" name="Email" placeholder="joe@gmail.com"/>
                        </label>
                        <label>
                            <div className={styles.labelText}>Role</div>
                            <input type="text" name="Role" placeholder="HR intern"/>
                        </label>
                    </div>
                    <label>
                        <div className={styles.labelText}>Password</div>
                        <input type="password" name="Password" placeholder="Password"/>
                    </label>        
                </div>
                
                <div className={styles.toggles}>
                    <label className={styles.noti}>
                        <input type="checkbox" name='Notification' checked={wantNotification} onChange={handleWantNotification}/>
                        <p>Notification</p>
                        <span>{wantNotification ? <MdToggleOn size={50} color="var(--button-color)"/> : <MdToggleOff size={50} color="#E5E7EA"/>}</span>
                    </label>
                    <label className={styles.private}>
                        <input type="checkbox" name="Account Private" checked={wantAccountPrivate} onChange={handleWantAccountPrivate}/>
                        <p>Account Private</p>
                        <span>{wantAccountPrivate ? <MdToggleOn size={50} color="var(--button-color)"/> : <MdToggleOff size={50} color="#E5E7EA"/>}</span>
                    </label>
                </div>
                <button>Update Payment</button>

                <div className={styles.btnGrp}>
                    <button>Cancel</button>
                    <button>Save Changes</button>
                </div>
            </form>    
        </div>
    )
}