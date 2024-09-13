import React, { useState } from 'react';
import logo from "../assets/logo.png"
import '../App.css'; // Import your CSS file

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isSticky ? 'sticky' : ''}>
      <a href="index.html" className="logo">
        <img src={logo} alt="Flavor Fusion" />
      </a>
      <ul className="navbar">
        <li><a href="index.html">Home</a></li>
        <li><a href="#Courses">Recipes</a></li>
        <li><a href="#meet">Meal-Planner</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="header-icons">
        <a href="#"><i className='bx bx-user'></i></a>
        <div className="bx bx-menu" id="menu-icon"></div>
      </div>
    </header>
  );
};

export default Header;
