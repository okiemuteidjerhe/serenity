import { useState } from "react";
import styles from "../styles/Password.module.css";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";

export default function Password(props) {
  const [visible, setVisible] = useState(false);
  const visiblityToggle = () => {
    setVisible((prev) => {
      return !prev;
    });
  };
  return (
    <label>
      <div className={styles.labelText}>{props.name}</div>
      <div className={styles.inputBox}>
        <input
          type={visible ? "text" : "password"}
          name="password"
          required
          placeholder="Password"
        />
        {visible ? (
          <PiEyeSlashLight
            size={24}
            onClick={visiblityToggle}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <PiEyeLight
            size={24}
            onClick={visiblityToggle}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      <p className={styles.p}>Must be at least 8 characters</p>
    </label>
  );
}
