import React from 'react'
import './RecommendedVideos.css';
import VideoCard from './VideoCard/VideoCard';
function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
     <div className='recommendedVideos__headerTxt'>
      <p className='all'>All</p><p>Live</p><p>News</p><p>Gaming</p><p>Comedy</p><p>Pop Music</p><p>Recently Uploaded</p>
     </div>
     <div className='recommendedVideos__videos'>
      <VideoCard
        title = "JavaScript Full Course | JavaScript Tutorial For Beginners |"
        views = "1.6m views"
        timeStamp= "3 years ago"
        channelImage= ""
        channel= "edureka"
        image= "./images/thumbnail2.jpg"
      />
       <VideoCard
        title = "Asking Rich People for a House Tour !"
        views = "2m views"
        timeStamp= "3 days ago"
        channelImage= ""
        channel= "Nishu Tiwari vlogs"
        image= "./images/thumbnail.jpg"
      />
       <VideoCard
        title = "Kurulus Osman Urdu| Season - 5 | Ep-48"
        views = "2m views"
        timeStamp= "3 days ago"
        channelImage= ""
        channel= "Kurulus Osman Urdu by atv"
        image= "./images/thumbnail1.jpg"
      />
       <VideoCard
        title = "The Perfect Workout Routine For Teens (Science-Based)"
        views = "200k views"
        timeStamp= "10 days ago"
        channelImage= ""
        channel= "Brett Maverick"
        image= "./images/thumbnail3.jpg"
      />
       <VideoCard
        title = "Unlimited Food Buffet at Rs 179/- | Street Food India | Best in Budget"
        views = "1.2m views"
        timeStamp= "3 years ago"
        channelImage= ""
        channel= "Official Sahi hai"
        image= "./images/thumbnail4.jpg"
      />
       <VideoCard
        title = "Official Video: Humnava Mere Song | Jubin Nautiyal | Manoj Muntashir | Rocky - Shiv | Bhushan Kumar"
        views = "250m views"
        timeStamp= "4 years ago"
        channelImage= ""
        channel= "T-Series"
        image= "./images/thumbnail5.jpg"
      />
       <VideoCard
        title = "Asking Rich People for a House Tour !"
        views = "2m views"
        timeStamp= "3 days ago"
        channelImage= ""
        channel= "Nishu Tiwari vlogs"
        image= "./images/thumbnail.jpg"
      />
      <VideoCard
        title = "Kurulus Osman Urdu| Season - 5 | Ep-48"
        views = "2m views"
        timeStamp= "3 days ago"
        channelImage= ""
        channel= "Kurulus Osman Urdu by atv"
        image= "./images/thumbnail1.jpg"
      />
       <VideoCard
        title = "JavaScript Full Course | JavaScript Tutorial For Beginners |"
        views = "1.6m views"
        timeStamp= "3 years ago"
        channelImage= ""
        channel= "edureka"
        image= "./images/thumbnail2.jpg"
      />
     </div>
     
    </div>
  )
}

export default RecommendedVideos;
