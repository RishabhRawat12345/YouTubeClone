import React, { useState } from 'react';
import './Sidebar.css';
import home from '../../assets/home.png';
import gameIcon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import entertainment from '../../assets/entertainment.png';
import technology from '../../assets/tech.png';
import cameron from '../../assets/cameron.png';

const Sidebar = ({ sidebar, category, setCategory }) => {
  
  const handleLinkClick = (linkName) => {
    setCategory(linkName);
  };

  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => handleLinkClick(0)}>
          <img src={home} alt="Home" />
          {sidebar && <p>Home</p>}
        </div>
        <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => handleLinkClick(20)}>
          <img src={gameIcon} alt="Gaming" />
          {sidebar && <p>Gaming</p>}
        </div>
        <div className={`side-link ${category === 2 ? 'active' : ''}`} onClick={() => handleLinkClick(2)}>
          <img src={automobiles} alt="Automobiles" />
          {sidebar && <p>Automobiles</p>}
        </div>
        <div className={`side-link ${category === 17 ? 'active' : ''}`} onClick={() => handleLinkClick(17)}>
          <img src={sports} alt="Sports" />
          {sidebar && <p>Sports</p>}
        </div>
        <div className={`side-link ${category === 24 ? 'active' : ''}`} onClick={() => handleLinkClick(24)}>
          <img src={entertainment} alt="Entertainment" />
          {sidebar && <p>Entertainment</p>}
        </div>
        <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => handleLinkClick(28)}>
          <img src={technology} alt="Technology" />
          {sidebar && <p>Technology</p>}
        </div>
        <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={() => handleLinkClick(10)}>
          <img src={music} alt="Music" />
          {sidebar && <p>Music</p>}
        </div>
        <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={() => handleLinkClick(22)}>
          <img src={blogs} alt="Blogs" />
          {sidebar && <p>Blogs</p>}
        </div>
        <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={() => handleLinkClick(25)}>
          <img src={news} alt="News" />
          {sidebar && <p>News</p>}
        </div>
      </div>
      <hr />
      <div className="subscribed-list">
        <h3>{sidebar && 'Subscribed'}</h3>
        <div className={`side-link ${category === 'pewdiepie' ? 'active' : ''}`} onClick={() => handleLinkClick('pewdiepie')}>
          <img src={jack} alt="PewDiePie" />
          {sidebar && <p>PewDiePie</p>}
        </div>
        <div className={`side-link ${category === 'mrbeast' ? 'active' : ''}`} onClick={() => handleLinkClick('mrbeast')}>
          <img src={simon} alt="MrBeast" />
          {sidebar && <p>MrBeast</p>}
        </div>
        <div className={`side-link ${category === 'justin' ? 'active' : ''}`} onClick={() => handleLinkClick('justin')}>
          <img src={tom} alt="Justin Bieber" />
          {sidebar && <p>Justin Bieber</p>}
        </div>
        <div className={`side-link ${category === 'nasdaily' ? 'active' : ''}`} onClick={() => handleLinkClick('nasdaily')}>
          <img src={cameron} alt="Nas Daily" />
          {sidebar && <p>Nas Daily</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
