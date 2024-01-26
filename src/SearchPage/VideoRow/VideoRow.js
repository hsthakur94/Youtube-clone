import React from 'react'
import './VideoRow.css';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
function VideoRow({views, subs, description, timeStamp, channel, title, image}) {
  return (
    <div className='videoRow'>
      <img src={image} alt=''/>

      <div className='videoRow__text'>
        <p>{title}</p>
        <div className='views_timestamp'>
          <span>{views} views &nbsp;</span> 
          <span><b><b>&#183;</b></b>&nbsp;{timeStamp}</span>
        </div>
        <div className='channel'>
          <span><AccountCircleSharpIcon sx={{ fontSize: 30 }}/></span> 
          <span className='channel_name'>{channel}</span>
          <span><CheckCircleSharpIcon className='verify_logo' sx={{ fontSize: 15 }}/></span>
        </div>
        <div className='description'>{description}</div>
      </div>
    </div>
  )
}

export default VideoRow;
