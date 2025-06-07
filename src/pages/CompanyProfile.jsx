import { TfiAngleRight } from "react-icons/tfi";
import { Link } from "react-router";
import styles from "../styles/CompanyProfile.module.css";
import Avatar from "../images/Avatar.png";
import { MdToggleOff, MdToggleOn } from "react-icons/md";

export default function CompanyProfile() {
  return (
    <div className={styles.body}>
      <header className={styles.cpHeader}>
        <nav className={styles.miniNav}>
          <ul>
            <li>
              <Link to="/comp-dash">Dashboard</Link>
            </li>
            <li>
              <TfiAngleRight color="#9EA2AE" size={13} />
            </li>
            <li>
              <Link to="/comp-profile">Profile Setting</Link>
            </li>
          </ul>
        </nav>
      </header>
      <form action="" className={styles.cpForm}>
        <h3>Company Profile</h3>
        <div className={styles.upload}>
          <div className={styles.profileImage}>
            <img src={Avatar} alt="" />
          </div>
          <label className={styles.selector}>
            <div className={styles.labelText}>Upload Logo</div>
            <input type="file" name="Avatar" />
          </label>
        </div>
        <div className={styles.inputs}>
            <div className={styles.Rws}>
                <label>
                    <div className={styles.labelText}>Company Name</div>
                    <input type="text" name='Name' placeholder="Serenity Wellness Inc."/>
                </label>
                <label>
                    <div className={styles.labelText}>Title</div>
                    <input type="text" name="Title" placeholder="Title"/>
                </label>
            </div>
            <div className={styles.Rws}>
                <label>
                    <div className={styles.labelText}>Email</div>
                    <input type="text" name='Email' placeholder="info@sernitywellness.com"/>
                </label>
                <label>
                    <div className={styles.labelText}>About</div>
                    <input type="text" name="About Company" placeholder="About Company"/>
                </label>
            </div>
        </div>
        <div className={styles.toggles}>
                            <div className={styles.noti}>
                                <p>Notification</p>
                                <button><MdToggleOff size={50} color="#E5E7EA"/></button>
                            </div>
                            <div className={styles.private}>
                                <p>Account Private</p>
                                <button><MdToggleOff size={50} color="#E5E7EA"/></button>
                            </div>
                        </div>
                        <button>Update Payment</button>
        
                        <div className={styles.btnGrp}>
                            <button>Cancel</button>
                            <button>Save Changes</button>
                        </div>
      </form>
    </div>
  );
}
