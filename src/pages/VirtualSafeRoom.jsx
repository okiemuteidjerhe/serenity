import styles from "../styles/VirtualSafeRoom.module.css";
import scene from "../images/scene.png";
import breathe from "../images/breathe.png";
import nature from "../images/nature.png";
import waterfall from "../images/waterfall.png";
import whitenoise from "../images/white-noise.png";
import raindrops from "../images/raindrops.png";
import cover from "../images/cover.png";
import { AiOutlineExpand } from "react-icons/ai";
import { CiPlay1 } from "react-icons/ci";
import { MdQueueMusic } from "react-icons/md";
import { IoMdPause, IoMdPlay, IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import music from '../media/Jaden_Smith_-_Cabin_Fever.mp3'
import music1 from '../media/Kendrick_Lamar_ft_SZA_-_luther.mp3'
import NavBar from "../components/NavBar";
import ReactPlayer from "react-player";

const data = [
  {
    src: waterfall,
    artist: "Jess",
    title: "Ball",
    audio: music
  },
  {
    src: waterfall,
    artist: "Jess",
    title: "Rivers",
    audio: music1
  },
  {
    src: waterfall,
    artist: "Jess",
    title: "Water Fall",
    audio: music
  },
  {
    src: waterfall,
    artist: "Jess",
    title: "Water Fall",
    audio: music
  },
  {
    src: waterfall,
    artist: "Jess",
    title: "Water Fall",
    audio: music
  },
  {
    src: waterfall,
    artist: "Jess",
    title: "Water Fall",
    audio: music
  },
  {
    src: waterfall,
    artist: "Jess",
    title: "Water Fall",
    audio: music
  },
  {
    src: waterfall,
    artist: "Jess",
    title: "Water Fall",
    audio: music
  },
  {
    src: waterfall,
    artist: "Jess",
    title: "Water Fall",
    audio: music
  },
  {
    src: waterfall,
    artist: "Jess",
    title: "Water Fall",
    audio: music
  },
  {
    src: raindrops,
    artist: "Jess",
    title: "Water Fall",
    audio: music
  },
  {
    src: raindrops,
    artist: "Jess",
    title: "Water Fall",
    audio: music
  },
]

const videos = [
  {
    id: 1,
    videoUrl : 'https://youtu.be/2a8TQiCqEaA?si=biGC_LM8yvkdo_ll',
    videoName:"Nature",
    imageSrc: nature,
    videoThumbnail: scene,
    paragraph: "Water's gentle dance and soothing sounds offer a peaceful escape,calming the mind and refreshing the spirit.",
  },
  {
    id: 2,
    videoUrl : 'https://youtu.be/H5v3kku4y6Q?si=3dvaw1JLiTgTLuE3',
    videoName:"White noise",
    imageSrc: whitenoise,
    videoThumbnail: scene,
    paragraph: "Water's gentle dance and soothing sounds offer a peaceful escape,calming the mind and refreshing the spirit.",
  },
  {
    id: 3,
    videoUrl : 'https://youtu.be/2a8TQiCqEaA?si=biGC_LM8yvkdo_ll',
    videoName:"Water fall",
    imageSrc: waterfall,
    videoThumbnail: scene,
    paragraph: "Water's gentle dance and soothing sounds offer a peaceful escape,calming the mind and refreshing the spirit.",
  },
  {
    id: 4,
    videoUrl : 'https://youtu.be/2a8TQiCqEaA?si=biGC_LM8yvkdo_ll',
    videoName:"Rain drops",
    imageSrc: raindrops,
    videoThumbnail: scene,
    paragraph: "Water's gentle dance and soothing sounds offer a peaceful escape,calming the mind and refreshing the spirit.",
  }
]

function Scene(props){
  return(
    <button onClick={props.handleClick} className={styles.group}>
      <div className={`${styles.sceneImg} ${props.isActive ? styles.activeGroup : undefined}`}>
        <img src={props.imageSrc} alt={props.videoName} />
      </div>
      <p>{props.videoName}</p>
    </button>
  )
}



export default function VirtualSafeRoom() {
  const [song, setSong]= useState(null)
  const[isPlayListOpen, setIsPlaylistOpen] = useState(false)
  const[searchMusic, setSearchMusic] = useState('')
  
  const [playing, setPlaying] = useState(false)
const [currentTime, setCurrentTime] = useState(0)
const [duration, setDuration] = useState(0)
const audioRef = useRef(null)


//For Scenes
const [video, setVideo] = useState(videos[0])
const [isVideoPlaying, setIsVideoPlaying] = useState(false)

function handleVideo(selectedVideoIndex){
  setVideo(videos[selectedVideoIndex])
  setIsVideoPlaying(false)
}

//Breathing exercise

const [breathing, setBreathing] = useState(false)

useEffect(()=>{
  let intervalId;

  if(breathing){
    intervalId = setInterval(()=>{
      const img = document.getElementById("breathingImg");
      img.classList.toggle(styles.grow)
    }, 4000)
  }
  return () => clearInterval(intervalId)
}, [breathing])

function handleToggleBreathing(){
  setBreathing(prev => !prev)
}

const scenesArr = videos.map((vid, index)=>{
  return(
    <Scene
    key={vid.id}
    imageSrc={vid.imageSrc}
    videoName={vid.videoName}
    handleClick={()=>handleVideo(index)}
    isActive={vid === video}
    />
  )
})



  function handleOpenPlaylist(){
    setIsPlaylistOpen(true)
  }
  function handleClosePlaylist(){
    setIsPlaylistOpen(false)
    setSearchMusic("")
  }
  
  function handleSetSong(selectedSong){
    setSong(selectedSong);
    setIsPlaylistOpen(false);
    setCurrentTime(0);
    setPlaying(false);
    /* progress = 0 */
    
    if(audioRef.current){
      audioRef.current.load()
    }
  }

  const filteredSongs = data.filter(item=>{
    if(searchMusic){
      /* return item.title.toLowerCase() === searchMusic.toLowerCase() */
      return item.title.toLowerCase().includes(searchMusic.toLowerCase())
    } else{
      return true
    }
  })

  const songList = filteredSongs.map((datum, index)=>{
  return(
    <div key={index} className={styles.song}>
        <div className={styles.main}>
          <div className={styles.mImg}>
            <img src={datum.src} alt={`${datum.title} by ${datum.artist}`} />
          </div>
          <div className={styles.mTexts}>
            <p>{datum.title}</p>
            <p>{datum.artist}</p>
          </div>
        </div>
        <button onClick={()=>handleSetSong(datum)}><IoPlayCircleOutline color="var(--primary-color)" size={23}/></button>
    </div>
  )
})

function handleSearch(e){
      const search = /* formData.get("searchMusic")  */ e.target.value;
      setSearchMusic(search)
}



function togglePlayPause(){
  if(playing){
    audioRef.current.pause()
  }else{
    audioRef.current.play()
  }
  setPlaying(!playing)
}

function skipForward(){
  audioRef.current.currentTime +=8
}

function skipBackward(){
  audioRef.current.currentTime -=8
}

function handleTimeUpdate(){
  setCurrentTime(audioRef.current.currentTime)
}

function handleLoadedMetadata(){
  setDuration(audioRef.current.duration)
}

function handleSeek(e){
  const newTime = e.target.value;
  audioRef.current.currentTime = newTime;
  setCurrentTime(newTime);
}

let progress = (currentTime/duration) * 100;


  return (
    <div className={styles.body}>
      <NavBar/>
      <section className={styles.mainSide}>
        <div className={styles.leftS}>
          <div className={styles.chng}>
                <h3>Change Scenes</h3>
                <div className={styles.sceneCtn}>
                    {scenesArr}
                </div>
            </div>
          <div className={styles.topLeft}>
            <h3>{video.videoName} scene</h3>
            <p>
              {video.paragraph}
            </p>
            <div className={styles.tlImg}>
              {/* <img src={scene} alt="" /> {video.url} */}
              <ReactPlayer 
              /* className={styles.reactPlayer} */
              key={video.videoName}
              url={video.videoUrl}
              controls 
              width="100%" 
              height="100%" 
              light={video.videoThumbnail}
              playIcon={
                <div className={styles.play}><CiPlay1 size={24} /></div>
              }
              playing={isVideoPlaying}
              onPlay={()=>setIsVideoPlaying(true)}
              />
            </div>
            {/* <button className={styles.play}><CiPlay1 size={24} /></button>
            <button className={styles.resizer}><AiOutlineExpand size={24} /></button> */}
          </div>
          <div className={styles.bottomLeft}>
            <div className={styles.blLeft}>
              <h3>Breathing Exercise</h3>
              <div className={`${styles.bllImg} ${breathing ? styles.grow : undefined}`}
                id="breathingImg"
              >
                <img 
                src={breathe} 
                alt="GROWING AND SHRINKING BREATHING IMAGE" 
                />
              </div>
              <button onClick={handleToggleBreathing}>{breathing ? "Stop Exercise" : "Start Exercise"}</button>
            </div>
            <div className={styles.blRight}>
              <h3>Affirmation Quotes</h3>
              <p>
                “You are worthy of love, care and compassion from yourself and
                others. Every step you take towards mental wellness is a step in
                the right direction.”
              </p>
              <p>&#8212; Omolola</p>
            </div>
          </div>
        </div>
        <div className={styles.rightS}>
            <div className={styles.change}>
                <h3>Change Scenes</h3>
                <div className={styles.sceneCtn}>
                    {scenesArr}
                </div>
            </div>
            <div className={styles.music}>
                <div className={styles.title}>
                    <h3>Soothing sounds</h3>
                    <button onClick={handleOpenPlaylist}><MdQueueMusic size={25} color="var(--primary-color)"/></button>
                </div>
                <div className={styles.cover}>
                    <img src={song? song.src : cover} alt={song ? `${song.title} by ${song.artist}` : "Cabin fever by Jaden"} />
                </div>
                <div className={styles.queue}>
                  <p>{song ? song.title : 'Cabin Fever'}</p>
                  <p>{song ? song.artist : "Jaden Smith"}</p>
                </div>
                <audio 
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                >
                    <source src={song ? song.audio : music} type="audio/mpeg"/>
                </audio >
                <input type="range" value={currentTime} min="0" max={duration} onChange={handleSeek} className={styles.slider} style={{backgroundImage: `linear-gradient(to right, var(--primary-color) ${progress}%, #fff ${progress}%)`}}/>
                <div className={styles.control}>
                <button onClick={skipBackward}>
                    <IoMdSkipBackward size={24}/>
                </button>

                <button onClick={togglePlayPause}>
                    {playing ? <IoMdPause size={24}/> : <IoMdPlay size={24}/>}
                </button>

                <button onClick={skipForward}>
                    <IoMdSkipForward size={24}/>
                </button>
                <div className={`${styles.songList} ${isPlayListOpen? styles.open : undefined}`}>
        <div className={styles.topBar}>
          <div /* action={handleSearch} */ className={styles.search}>
            <FiSearch size={30}/>
            <input type="text"placeholder="Search" name="searchMusic" value={searchMusic} onChange={handleSearch}/>
          </div>
          <button onClick={handleClosePlaylist}><LiaTimesSolid size={23} color="var(--primary-color)"/></button>
        </div>
        <div className={filteredSongs.length < 7 ? undefined : `${styles.list}`}>
          {/* filteredSongs.length===0? <h3 className={styles.noResult}>Sorry. Nothing was found. Press Enter</h3> : */ songList}
        </div>
      </div>
            </div>
            </div>
        </div>
      </section>
    </div>
  );
}
