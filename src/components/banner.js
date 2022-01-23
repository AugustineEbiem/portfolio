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
              <span>Creating unique brands is</span>
            </div>
            <div className='line'>
              <span>what we do.</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='/'>
              More about us <RightArrow />
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
