import React from 'react'
import "./Header.css";
import logo from '../../assets/react.svg';

const Header = () => {
  return (
    <div className='header-container'>
        <img className='header-logo' src={logo} alt="" />
    </div>
  )
}

export default Header