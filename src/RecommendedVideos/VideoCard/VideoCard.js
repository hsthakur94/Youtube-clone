import React from 'react';
import './VideoCard.css';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

function VideoCard({image, title, channel, views, timeStamp, channelImage}) {
  return (
    <div className='videoCard'>
        <img className = "videoCard__thumbnail" src={image} alt = {"Video"}/>
        
        <div className='videoCard__info'>
            <AccountCircleSharpIcon className='videoCard__avatar'
            alt ={channel} src = {channelImage}/>

            <div className='videoCard__text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} <b><b>&#183;</b></b>   {timeStamp}
                </p>
            </div>

        
      </div>
    </div>
  )
}

export default VideoCard;
