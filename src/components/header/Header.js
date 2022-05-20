import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


import heroImage from '../../assets/images/logo.svg';
import './header.scss'

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)

  function openMenu() {
    if (menuActive) {
      document.body.classList.remove('menu-open');
    } else {
      document.body.classList.add('menu-open');
    }
    setMenuActive(!menuActive)
  }

  function clickMenu() {
    if (menuActive) {
      document.body.classList.remove('menu-open');
    } else {
      document.body.classList.add('menu-open');
    }
    setMenuActive(false)
  }

  return (
    <>
      <header className="site-header py-4 fixed-top">
        <div className="container">
          <div className=" row justify-content-between d-flex align-items-center">
            <div className="col-3">
              <img src={heroImage} className="img-fluid" alt="yokohama" />
            </div>
            <div className="col-3 text-end">
              <button className="btn-burger" onClick={() => openMenu()}>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={menuActive ? 'menu-fly bg-primary text-white active' : 'menu-fly bg-primary text-white'}>
        <div className="container d-flex  align-items-center">
          <button className="btn-burger mt-4" onClick={() => openMenu()}><span></span></button>
          <ul className="menu-list">
            <li><Link to="./#backhome" title="Back Home" onClick={() => { clickMenu() }}>Back Home</Link></li>
            <li><Link to="./#aboutus" title="About us" onClick={() => { clickMenu() }}>About us</Link></li>
            <li><Link to="./#whatwedo" title="What we do" onClick={() => { clickMenu() }}>What we do</Link></li>
            <li><Link to="./#ourwork" title="Our Work" onClick={() => { clickMenu() }}>Our Work</Link></li>
            <li><Link to="./#contactus" title="Contact us" onClick={() => { clickMenu() }}>Contact us</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header