import React from 'react'
import './ChannelRow.css';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
  return (
    <div className='channelRow'>
      <img className='channelRow__logo'
      alt = {channel} src = {image}/>
      <div className='channelRow__text'>
      
        <h4>{channel}{verified && <CheckCircleSharpIcon sx={{ fontSize: 15 }} className='verified__logo'/>}</h4>
        <p>{subs} subscribers . {noOfVideos} videos</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow
