import React, { useRef, useReducer } from 'react';

import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import BannerHero from "../assets/banner-hero2.png";

const initialState = {
  parallaxPos: {x: 0, y: -20}
}

function reducer(state, action) {
  switch(action.type) {
      case "MOUSE_POS_COORDINATES": {
          return {
              ...state,
              parallaxPos: action.payload
          }
      }
      default: {
          throw new Error();
      }
  }
}

const Banner = () => {

  const listItem = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const parallax = (event) => {
      const speed = -5;
      const x = (window.innerWidth - event.pageX * speed) / 100;
      const y = (window.innerHeight - event.pageY * speed) / 100;

      dispatch({type: 'MOUSE_POS_COORDINATES', payload: {x, y}})
  }

  const handleMouseEnter = () => {

      listItem.current.addEventListener('mousemove', parallax)
  }

  const handleMouseLeave = () => {
      listItem.current.removeEventListener('mousemove', parallax)
  }

  const parallaxPos=state.parallaxPos;  

  return (
    <section 
      className='main banner-hero'
      ref={listItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>A UI and Full Stack Developer</span>
            </div>
            <div className='line'>
              <span>from <i className="location">South Shields</i>
              
              {/* <iframe
                title={"src"}
                className='resp-iframe' 
                src={
                  "https://player.vimeo.com/video/91284753?autoplay=1&loop=1&autopause=0&muted=1"
                }
                width="640"
                height="360"
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                allow="autoplay; fullscreen"
                controls="0"
              ></iframe> */}
              </span>
            </div>
          </h2>


          <div className='btn-row'>
            <a href='/'>
              More about me <RightArrow />
            </a>
          </div>
        </div>
      </div>
      <img 
        style={{
            transform: `translate3d(${parallaxPos.x}px, ${parallaxPos.y}px, 0px)`
        }}
        src={BannerHero} 
        alt="dir" 
      />
    </section>
  );
};

export default Banner;
