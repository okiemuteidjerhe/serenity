import { TfiAngleRight } from "react-icons/tfi";
import { Link } from "react-router";
import styles from "../styles/CompanyProfile.module.css";
import Avatar from "../images/Avatar.png";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import { useState } from "react";

export default function CompanyProfile() {
  const [logo, setLogo] = useState({
    file: null,
    url: "",
  });

  const [wantNotification, setWantNotification] = useState(false);

  const [wantAccountPrivate, setWantAccountPrivate] = useState(false);

  function handleLogo(e) {
    if (e.target.files[0]) {
      setLogo({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  }

  function handleWantNotification() {
    setWantNotification((prev) => !prev);
  }

  function handleWantAccountPrivate() {
    setWantAccountPrivate((prev) => !prev);
  }

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
            <img src={logo.url || Avatar} alt="Company Logo" />
          </div>
          <label className={styles.selector}>
            <div className={styles.labelText}>Upload Logo</div>
            <input type="file" name="Avatar" onChange={handleLogo} />
          </label>
        </div>
        <div className={styles.inputs}>
          <div className={styles.Rws}>
            <label>
              <div className={styles.labelText}>Company Name</div>
              <input
                type="text"
                name="Name"
                placeholder="Serenity Wellness Inc."
              />
            </label>
            <label>
              <div className={styles.labelText}>Title</div>
              <input type="text" name="Title" placeholder="Title" />
            </label>
          </div>
          <div className={styles.Rws}>
            <label>
              <div className={styles.labelText}>Email</div>
              <input
                type="text"
                name="Email"
                placeholder="info@sernitywellness.com"
              />
            </label>
            <label>
              <div className={styles.labelText}>About</div>
              <input
                type="text"
                name="About Company"
                placeholder="About Company"
              />
            </label>
          </div>
        </div>
        <div className={styles.toggles}>
          <label className={styles.noti}>
            <input
              type="checkbox"
              name="Notification"
              checked={wantNotification}
              onChange={handleWantNotification}
            />
            <p>Notification</p>
            <span>
              {wantNotification ? (
                <MdToggleOn size={50} color="var(--button-color)" />
              ) : (
                <MdToggleOff size={50} color="#E5E7EA" />
              )}
            </span>
          </label>
          <label className={styles.private}>
            <input
              type="checkbox"
              name="Account Private"
              checked={wantAccountPrivate}
              onChange={handleWantAccountPrivate}
            />
            <p>Account Private</p>
            <span>
              {wantAccountPrivate ? (
                <MdToggleOn size={50} color="var(--button-color)" />
              ) : (
                <MdToggleOff size={50} color="#E5E7EA" />
              )}
            </span>
          </label>
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
