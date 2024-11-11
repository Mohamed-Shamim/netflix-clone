import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import { FaUserCircle } from "react-icons/fa";
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'

import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {

  const navRaf = useRef()

useEffect(()=>{

    window.addEventListener('scroll', ()=>{
      if(window.scrollY >=80){
        navRaf.current.classList.add('nav-dark')
      }else{
        navRaf.current.classList.remove('nav-dark')
      }
    })
    
 

}, [])

  return (
    <div ref={navRaf} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className=" icons" />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />
        <div className="navbar-profile">
          <FaUserCircle className='profile' />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p>Sign Out Of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar