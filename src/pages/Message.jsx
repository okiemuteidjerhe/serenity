import styles from "../styles/Message.module.css";
import Avatar from "../images/Avatar.png";
import { FiSearch } from "react-icons/fi";
import { BiCheckDouble } from "react-icons/bi";
import NavBar from "../components/NavBar";
import { BsEmojiSmile } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoMicOutline } from "react-icons/io5";
import EmojiPicker from 'emoji-picker-react'
import { useState } from "react";

const allMessages = [
  {
    id:1,
    name: "Dr.  Happy Martins",
    message: "Good Morning Doctor, how are...",
  },
  {
    id:2,
    name: "Dr.  Happy Martins",
    message: "Good Morning Doctor, how are...",
  },
  {
    id:3,
    name: "Dr.  Happy Martins",
    message: "Good Morning Doctor, how are...",
  },
  {
    id:4,
    name: "Dr.  Happy Martins",
    message: "Good Morning Doctor, how are...",
  },
  {
    id:5,
    name: "Dr.  Happy Martins",
    message: "Good Morning Doctor, how are...",
  },
  {
    id:6,
    name: "Dr.  Happy Martins",
    message: "Good Morning Doctor, how are...",
  },
  {
    id:7,
    name: "Dr.  Happy Martins",
    message: "Good Morning Doctor, how are...",
  },
  {
    id:7,
    name: "Dr.  Happy Martins",
    message: "Good Morning Doctor, how are...",
  },
];
export default function Message() {
const[isOpen, setIsOpen] = useState(false)
const[chatInput, setChatInput] = useState("")

function handleShowEmojiPicker(){
    setIsOpen(prev=>!prev)
}

function handleChatInput(e){
    const text = e.target.value;
    setChatInput(text);
}

function handleEmoji(emojiObj){
    setChatInput(prev=>prev + emojiObj.emoji)
}

  const messageArr = allMessages.map((e) => {
    return (
      <div 
      key={e.id}
      className={styles.message}>
        <div className={styles.avatarCtn}>
          <img src={Avatar} alt="" />
        </div>
        <div className={styles.texts}>
          <div className={styles.top}>
            <h3>{e.name}</h3>
            <p>Monday</p>
          </div>
          <div className={styles.bottom}>
            <p>{e.message}</p>
            <BiCheckDouble color="#DBDCE2" />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.body}>
      <NavBar />
      <section className={styles.messageSection}>
        <div className={styles.left}>
          <div className={styles.box}>
            <div className={styles.inputB}>
              <FiSearch size={24} />
              <input type="text" placeholder="Search" />
            </div>
            <p>All Messages</p>
          </div>
          <div className={styles.allMessages}>{messageArr}</div>
        </div>

        <div className={styles.right}>
            <div className={styles.user}>
                <div className={styles.userAvatar}>
                    <img src={Avatar} alt="" />
                </div>
                <h3>Dr. Moon Health</h3>
            </div>
            <div className={styles.chatArea}>
                <div className={`${styles.chat} ${styles.otherPerson}`}>
                    <span>Dr. Moon Health</span>
                    <div className={styles.actualChat}>
                        <p>Tell me how you feel?</p>
                        <span>11:50</span>
                    </div>
                </div>
                <div className={`${styles.chat} ${styles.own}`}>
                    <span>Me</span>
                    <div className={styles.actualChat}>
                        <p>
                        Alot is going on at work and I feel overwhelmed. I have this presentation coming up and everyone expects alot from me.
                        </p>
                        <span>11:51</span>
                    </div>
                </div>
                <div className={`${styles.chat} ${styles.otherPerson}`}>
                    <span>Dr. Moon Health</span>
                    <div className={styles.actualChat}>
                        <p>Tell me how you feel?</p>
                        <span>11:50</span>
                    </div>
                </div>
                <div className={`${styles.chat} ${styles.own}`}>
                    <span>Me</span>
                    <div className={styles.actualChat}>
                        <p>
                        Alot is going on at work and I feel overwhelmed. I have this presentation coming up and everyone expects alot from me.
                        </p>
                        <span>11:51</span>
                    </div>
                </div>
                <div className={`${styles.chat} ${styles.otherPerson}`}>
                    <span>Dr. Moon Health</span>
                    <div className={styles.actualChat}>
                        <p>Tell me how you feel?</p>
                        <span>11:50</span>
                    </div>
                </div>
                <div className={`${styles.chat} ${styles.own}`}>
                    <span>Me</span>
                    <div className={styles.actualChat}>
                        <p>
                        Alot is going on at work and I feel overwhelmed. I have this presentation coming up and everyone expects alot from me.
                        </p>
                        <span>11:51</span>
                    </div>
                </div>
            </div>

            <div className={styles.inputArea}>
                <div className={styles.emoji}>
                    <button onClick={handleShowEmojiPicker}><BsEmojiSmile size={24}/></button>
                    <div className={styles.pickerCtn}>
                        <EmojiPicker open={isOpen} onEmojiClick={handleEmoji} className={styles.EmojiPicker}/>
                    </div>
                </div>
                <label className={styles.iLabel}>
                  <FaPlus size={16}/>
                  <input type="file" name="Media"/>
                </label>
                <div className={styles.input}>
                    <input type="text" name="chatMessage" placeholder="Type your message" value={chatInput} onChange={handleChatInput}/>
                    <button><IoMicOutline size={24}/></button>
                </div>
                <button>Send</button>
            </div>
        </div>
      </section>
    </div>
  );
}
