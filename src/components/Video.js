import React from 'react'
import "../css/video.css"
import tiktok from './videos/tiktok.mp4'
import r2h from './videos/r2h.mp4'
import VideoFooter from "./VideoFooter.js"
import VideoSidebar from './VideoSidebar'

import { useState,useRef } from 'react'

function Video({url,channel,description,song,likes,comment,share}) {

  const videoRef=useRef(null);
  const [playing,setPlaying]=useState(false);

  const handleClick=()=>{
   if(playing){
    videoRef.current.pause();
    setPlaying(false);
   }
   else{
    videoRef.current.play();
    setPlaying(true);
   }
  }

  return (
    <div className='videoBody'>
     <video ref={videoRef} onClick={handleClick}>
     <source src={tiktok} type="video/mp4"/> 
     </video>

     <VideoFooter channel={channel} description={description} song={song}/>
     <VideoSidebar likes={likes} comment={comment} share={share}/>
    </div>

  )
}

export default Video;
