import styles from "../styles/IndividualProfile.module.css"
import { Link, useNavigate } from "react-router";
import { TfiAngleRight } from "react-icons/tfi";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import Avatar from '../images/Avatar.png'
import { useContext, useState } from "react";
import { AuthContext, AuthReducerContext } from "../context/AuthContext";

export default function IndividualProfile() {

    const navigate = useNavigate()

    const dispatch = useContext(AuthReducerContext)
    const token = useContext(AuthContext)

    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    function handleAvatar(e) {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const [wantNotification, setWantNotification] = useState(false)

    const [wantAccountPrivate, setWantAccountPrivate] = useState(false)

    function handleWantNotification() {
        setWantNotification(prev => !prev)
    }

    function handleWantAccountPrivate() {
        setWantAccountPrivate(prev => !prev)
    }


    const defaultValues = {
        firstName : token.firstName,
        lastName: token.lastName,
        email: token.email
    }

    const [formValues, setFormValues] = useState(defaultValues);

    function handleChangeOfFormValues(e){
        const {name, value} = e.target;
        setFormValues((prev) => {
            return {...prev, [name] : value}
        })
    }

    function handleUpdate(formData) {
        const data = (Object.fromEntries(formData))
        dispatch({
            type: true,
            token: { ...token, ...data, avatar }
        })
        navigate('/')
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

            <form action={handleUpdate} className={styles.pSection}>
                <h3>Profile settings</h3>
                <div className={styles.upload}>
                    <div className={styles.profileImage}>
                        <img src={avatar.url || Avatar} alt="User Avatar" />
                    </div>
                    <label className={styles.selector}>
                        <div className={styles.labelText}>Upload Image</div>
                        <input type="file" name="avatar" onChange={handleAvatar} />
                    </label>
                </div>
                <div className={styles.inputFields}>
                    <div className={styles.R}>
                        <label>
                            <div className={styles.labelText}>First Name</div>
                            <input type="text" name="firstName" placeholder="John" value={formValues.firstName} onChange={handleChangeOfFormValues}/>
                        </label>
                        <label>
                            <div className={styles.labelText}>Last Name</div>
                            <input type="text" name="lastName" placeholder="Doe" value={formValues.lastName} onChange={handleChangeOfFormValues} />
                        </label>
                    </div>
                    <div className={styles.R}>
                        <label>
                            <div className={styles.labelText}>Email</div>
                            <input type="email" name="email" placeholder="joe@gmail.com" value={formValues.email} onChange={handleChangeOfFormValues}/>
                        </label>
                        <label>
                            <div className={styles.labelText}>Role</div>
                            <input type="text" name="role" placeholder="HR intern" />
                        </label>
                    </div>
                    <label>
                        <div className={styles.labelText}>Password</div>
                        <input type="password" name="password" placeholder="Password" value={token.password}/>
                    </label>
                </div>

                <div className={styles.toggles}>
                    <label className={styles.noti}>
                        <input type="checkbox" name='notification' checked={wantNotification} onChange={handleWantNotification} />
                        <p>Notification</p>
                        <span>{wantNotification ? <MdToggleOn size={50} color="var(--button-color)" /> : <MdToggleOff size={50} color="#E5E7EA" />}</span>
                    </label>
                    <label className={styles.private}>
                        <input type="checkbox" name="accountPrivate" checked={wantAccountPrivate} onChange={handleWantAccountPrivate} />
                        <p>Account Private</p>
                        <span>{wantAccountPrivate ? <MdToggleOn size={50} color="var(--button-color)" /> : <MdToggleOff size={50} color="#E5E7EA" />}</span>
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