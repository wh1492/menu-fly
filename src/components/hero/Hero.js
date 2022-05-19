import React from "react";

import graph from '../../assets/images/graph.svg';

import './hero.scss'

const Hero = () => {
  return (
    <>
      <div className='site-hero  '>
        <div className='container d-flex justify-content-between align-items-lg-center'>
          <div className='col-lg-6 '>
            <h1>
              <span>Pellentesque consequat</span>
              <b className="bg-primary text-white">blandit blandit.</b>
              <span>posuere eros</span>
            </h1>
            <p>
              Interdum et malesuada fames ac ante ipsum primis in faucibus. <br />
              Orci varius natoque penatibus et <b>magnis dis parturient</b> montes, nascetur ridiculus mus.
            </p>
            <button type="button" className="btn btn-primary text-white rounded-0">Know more about</button>
          </div>
          <div className="col-lg-5 text-center">
            <img src={graph} alt="grap" className="img-fluid image-hero" />
          </div>
        </div>
      </div>
    </>
  )

}

export default Hero