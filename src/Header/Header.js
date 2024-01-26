import React, { useState } from 'react';
import './Header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Link } from 'react-router-dom';

function Header() {
 
  const [inputField, setInputField] = useState("");
 
  return (
    <div className='header'>
      
      <div className='header__left'>
      <MenuSharpIcon/>
      <Link to={"/"}>
      <img className='header__logo' src= "https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg" alt=""/>
      </Link>
        </div>

      <div className='header__input'>
      <input type='text' placeholder='Search'
      value={inputField}
      onChange={e => setInputField(e.target.value)}
      />
      <Link to={`/search/${inputField}`}>
      <SearchSharpIcon className='header__inputButton'/>
      </Link>
     
      </div>

      <div className='header__icons'>
      <VideoCallSharpIcon className= "header_icon"/>
      <AppsSharpIcon className="header_icon"/>
      <NotificationsSharpIcon className="header_icon"/>
      <AccountCircleSharpIcon />
      </div>
    
    
    
    </div>
  )
}

export default Header;
