import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'
const Header = () => {
  return (
    <header className='header'>
        <h5 className='logo'>LOGO</h5>
    <nav>
        <NavLink className='navmenu' to={'./account'}>Account</NavLink>
        <NavLink className='navmenu' to={'./Master'}>Master Data</NavLink>
        <NavLink className='navmenu' to={'./'}>Patients</NavLink>
        <NavLink className='navmenu' to={'./user'}>Profile</NavLink>
    </nav>
    <div className='right'>
        <div className="user">
         <p style={{color: 'white'}}>Marvin McKinney</p>
          <p style={{color: 'rgb(200, 200, 180)'}}>admin</p>
         </div>
         <div className='img'>M</div>
    </div>
    </header>
  )
}

export default Header
