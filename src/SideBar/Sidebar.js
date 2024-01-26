import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow.js';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import RestoreSharpIcon from '@mui/icons-material/RestoreSharp';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon = {HomeSharpIcon} title = "Home"/>
      <SidebarRow Icon = {WhatshotSharpIcon} title = "Trending"/>
      <SidebarRow Icon = {SubscriptionsSharpIcon} title = "Subscriptions"/>
      <hr/>
      <SidebarRow Icon = {VideoLibrarySharpIcon} title = "Library"/>
      <SidebarRow Icon = {RestoreSharpIcon} title = "History"/>
      <SidebarRow Icon = {OndemandVideoSharpIcon} title = "Your Videos"/>
      <SidebarRow Icon = {WatchLaterSharpIcon} title = "Watch later"/>
      <SidebarRow Icon = {ThumbUpAltSharpIcon} title = "Liked videos"/>
      <SidebarRow Icon = {ExpandMoreSharpIcon} title = "Show more"/>
      <hr/>
    </div>
  )
}

export default Sidebar;
