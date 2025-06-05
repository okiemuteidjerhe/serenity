import styles from '../styles/Journal.module.css'
import { FiSearch } from "react-icons/fi"
import { useState } from "react"
import NavBar from '../components/NavBar';
import { LiaTimesSolid } from 'react-icons/lia';
import prescription from '../images/prescription.png'
import prescription1 from '../images/prescription1.png'

const journalEntries = [
    {
        date:"10th May, 2025",
        entry: "Today at work, something really embarrassing happened—one of my colleagues yelled at me...."
    },
    {
        date:"11th May, 2025",
        entry: "Today at work, something really embarrassing happened—one of my colleagues yelled at me...."
    },
    {
        date:"13th May, 2025",
        entry: "Today at work, something really embarrassing happened—one of my colleagues yelled at me...."
    },
    {
        date:"15th May, 2025",
        entry: "Today at work, something really embarrassing happened—one of my colleagues yelled at me...."
    }
]
export default function Journal(){
const[entries, setEntries] = useState(journalEntries);
const[searchWord, setSearchWord] = useState('')
const[selectedEntry, setSelectedEntry] = useState(null);

function handleSearch(e){
    const search = e.target.value;
    setSearchWord(search);
}

function handleSelection(item){
    setSelectedEntry(item)
}
const filteredSearch = entries.filter(item=>{
    if(searchWord){
        return item.entry.toLowerCase().includes(searchWord.toLowerCase())
    }else{
        return true
    }
})
const entriesArr = filteredSearch.map((e,index)=>{
    return(
        <div 
        key={index}
        className={styles.entry}
        onClick={()=>{
            handleSelection(e)
        }}
        >
            <h3>{e.date}</h3>
            <p>{e.entry.slice(0,83)}...</p>
        </div>
    )
})

function handleDiaryEntry(formData){
    const entry = Object.fromEntries(formData);
    const journalEntryDate =  new Date()
    const year = journalEntryDate.getFullYear();
    const theDate = journalEntryDate.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[journalEntryDate.getMonth()];

    function getOrdinalSuffix(day){
        if(day > 3 && day < 21){
            return 'th';
        }
        if(day%10 === 1){
            return 'st';
        }else if(day%10 === 2){
            return 'nd';
        }else if(day%10 === 3){
            return 'rd';
        }else{
            return 'th'
        }
    }

    const ordinal = getOrdinalSuffix(theDate);
    let newArrayEntry = {date: `${theDate}${ordinal} ${month}, ${year}`, ...entry};
    setEntries(prev=>{
        return [...prev, newArrayEntry]
    })
    
}

    return (
        <div className={styles.body}>
            <NavBar/>
            <section className={styles.jSection}>
                <div className={styles.left}>
                    <div className={styles.box}>
                        <div className={styles.inputB}>
                            <FiSearch size={24}/>
                            <input type="text" placeholder="Search" value={searchWord} onChange={handleSearch}/>
                        </div>
                    </div>
                    <div className={`${styles.journalEntries} ${filteredSearch.length > 5 ? styles.scrollArea : undefined}`}>
                        {entriesArr}
                    </div>
                </div>
                
            {selectedEntry ? <div className={styles.right}>
                                <div className={styles.topH}>
                                    <h2>{selectedEntry.date}</h2>
                                    <button onClick={()=>setSelectedEntry(null)}><LiaTimesSolid size={25}/></button>
                                </div>
                                <p>{selectedEntry.entry}</p>
                            </div> 
                            :   <form action={handleDiaryEntry} className={styles.right}>
                    <h2>Private Journal</h2>
                    <textarea name="entry"></textarea>
                    <div className={styles.container}><img src={prescription} alt="" /></div>
                    <div className={styles.container}><img src={prescription1} alt="" /></div>
                    <button className={styles.save}>Save</button>
                </form> 
        }
                
            </section>
        </div>
    )
}