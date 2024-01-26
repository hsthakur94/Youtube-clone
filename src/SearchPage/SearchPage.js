import React from 'react'
import './SearchPage.css';
import ChannelRow from './ChannelRow/ChannelRow';
import VideoRow from './VideoRow/VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='recommendedVideos__headerTxt'>
      <p className='all'>All</p><p>Videos</p><p>Unwatched</p><p>Watched</p><p>Shorts</p><p>Recently Uploaded</p><p>Live</p>
     </div>
    <ChannelRow 
      image = "../images/Mr-Beast-Logo2.png"
      channel = "MrBeast"
      verified
      subs = "234m"
      noOfVideos = {382}
      description = "SUBSCRIBE FOR A COOKIE! Accomplishments:- Raised $20,000,000 To Plant 20,000,000 Trees      - Removed 30,000,000 pounds of trash from the ocean"
    />  
    <hr/>
    <VideoRow
    title = "Protect $500,000 Keep It!"
    views = "109m"
    timeStamp= "3 days ago"
    channel= "MrBeast"
    image= "../images/thumbnail6.jpg"
    description= "He spent so much money lol Grow your money with the Mighty ... "
    />

     <VideoRow
    title = "I Spent 7 Days In Solitary Confinement"
    views = "200m"
    timeStamp= "1 week ago"
    channel= "MrBeast"
    image= "../images/thumbnail7.jpg"
    description= "I started going insane at the end of this challenge Bet you..."
    />
     <VideoRow
    title = "I Rescued 100 Abandoned Dogs!"
    views = "108m"
    timeStamp= "1 month ago"
    channel= "MrBeast"
    image= "../images/thumbnail8.jpg"
    description= "I’m so happy all of these dogs will be going to great homes "
    />
     <VideoRow
    title = "Survive 100 Days Trapped, Win $500,000"
    views = "160m"
    timeStamp= "1 month ago"
    channel= "MrBeast"
    image= "../images/thumbnail9.jpg"
    description= "This video got crazier the longer we kept filming lol... "
    />
     <VideoRow
    title = "Protect $500,000 Keep It!"
    views = "2m"
    timeStamp= "3 days ago"
    channel= "MrBeast"
    image= "../images/thumbnail6.jpg"
    description= "He spent so much money lol Grow your money with the Mighty Oak debit card from Acorns. "
    />

    </div>
  )
}

export default SearchPage;
