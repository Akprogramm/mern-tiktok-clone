import React from 'react'
import "../css/videoFooter.css"

import Ticker from 'react-ticker'

function VideoFooter({channel,description,song}) {
  return (
    <div className='videoFooter'>
      <div className="videoFooter_text">
      <h3>{channel}</h3> 
      <p>{description}</p>

      <i className="fa-brands fa-tiktok"></i>
       <div className="tickerBody">
      
       <Ticker mode='smooth' className="reactTicker">
        {() => (
              <h1>{song}</h1>
        )}
    </Ticker>
    </div>
      </div>
    </div>
  )
}

export default VideoFooter;
