import React from 'react';

import diamonds from '../../assets/diamonds.png';
import poppinShades from '../../assets/poppin-shades.png';
import sexyOrange from '../../assets/sexy-orange.png';

// import '../../css/anim-style.scss';

const Banner = () => {
  


   return (
    <div className="banner">
      <div className="abt-container">
        <div className="row">
          <div className="side-image left">
              <img src={diamonds} alt="diamond" />
          </div>

          <div className="main-text">
            <div className="abt-line">
              <span>
                AUGUSTINE EBIEM
              </span>
            </div>
          </div>
          
          <div className="main-image">
              <img src={poppinShades} alt="shade" />
          </div>
          <div className="side-image right">
              <img src={sexyOrange} alt="orange" />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll down</span>
        </div>
      </div>
      <div className="fixed-misc">UI Design and Full Stack Developer</div>
    </div>
  )
}

export default Banner;
