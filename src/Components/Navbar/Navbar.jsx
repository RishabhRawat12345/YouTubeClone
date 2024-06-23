import React from 'react';
import './Navbar.css';
import menuIcon from '../../assets/menu.png';
import logo from '../../assets/myicon.png';
import searchIcon from '../../assets/search.png';
import uploadIcon from '../../assets/upload.png';
import moreIcon from '../../assets/more.png';
import notificationIcon from '../../assets/notification.png';
import profile from '../../assets/jack.png';
import { Link } from 'react-router-dom';

const Navbar = ({ setSidebar }) => {
  return (
    <nav className='flex-div'>
      <div className="nav-left flex-div">
        <img 
          src={menuIcon} 
          onClick={() => setSidebar(prev => !prev)} 
          alt="Menu icon" 
        />
        <Link to="/"><img  className='icon'src={logo} alt="Logo" /></Link>
        
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder='Search' />
          <img src={searchIcon} alt="Search icon" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={uploadIcon} alt="Upload icon" />
        <img src={moreIcon} alt="More icon" />
        <img src={notificationIcon} alt="Notification icon" />
        <img className="user-icon" src={profile} alt="Profile" />
      </div>
    </nav>
  );
}

export default Navbar;
