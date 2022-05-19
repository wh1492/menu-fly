import React, { useState } from "react";

import heroImage from '../../assets/images/logo.svg';
import './header.scss'

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)



  function openMenu() {
    setMenuActive(!menuActive)
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
            <li><a href="#" title="Back Home">Back Home</a></li>
            <li><a href="#" title="About us">About us</a></li>
            <li><a href="#" title="What we do">What we do</a></li>
            <li><a href="#" title="Our Work">Our Work</a></li>
            <li><a href="#" title="Contact us">Contact us</a></li>
          </ul>
        </div>
      </div>
    </>
  )

}

export default Header