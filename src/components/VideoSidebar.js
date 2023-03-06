import React, { useState } from 'react'
import "../css/videoSidebar.css"


function VideoSidebar({likes,comment,share}) {

 const [like,setLike]=useState(true);


  return (
    <div className='videoSidebarbody'>
 
<div className="box">{like?<i onClick={(e)=>{setLike(false)}} className=" fa-2x fa-regular fa-heart"></i>:<i onClick={(e)=>{setLike(true)}} className="fa-2x fa-solid fa-heart"></i>} <span>{likes}</span></div>

      <div className="box"><i className=" fa-2x fa-solid fa-comment-dots"></i><span>{comment}</span></div>
      <div className="box"><i className=" fa-2x fa-sharp fa-solid fa-share-nodes"></i><span>{share}</span></div>
      <div className="box"><i className=" fa-3x fa-solid fa-compact-disc"></i></div>
     </div>
  )
}

export default VideoSidebar
