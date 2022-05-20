import React from "react";

import './about.scss'

const About = () => {
  return (
    <>
      <div id="aboutus" className="container about-us d-flex ">
        <div className="row justify-content-center align-content-center ">
          <div className="col-7 text-center">
            <h3 className="about-title bg-primary text-white">
              About us
            </h3>
            <p>
              Suspendisse nec sagittis ante. <b><em>Nulla eu ultrices ligula.</em></b> Praesent sodales libero eget dui varius faucibus. Nunc imperdiet ac quam id bibendum.
            </p>
            <p>
              Maecenas eu justo aliquet ante pulvinar <b>blandit laoreet eget ex.</b> Duis ipsum ipsum, volutpat sed ex ut, finibus volutpat urna. Praesent et volutpat ex.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default About