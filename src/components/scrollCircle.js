import React, { useEffect, useState } from "react";
import { gsap } from 'gsap';

import ScrollInner from "./scrollInner";

const ScrollCircle = () => {

  const [offset, setOffset] = useState(0);
  const [reachBottom, setReachBottom] = useState(0);

  const radius = 65
  var scrollText = "Scoll-Down-Scroll-Down-Scroll-Down-";
  var scrollTextCount = scrollText.split('').length
  
  var splitScrollText = scrollText.split('').map((item, index) => {
    return <span className={`char scroll-item-${index}`} key={index}>{item}</span>;
  })
  useEffect(() => {
    scrollText.split('').map((item, index) => {
      let rotation = index * (360/scrollTextCount);
      let temp = `.scroll-item-${index}`
      gsap.set(temp, {
        transformOrigin: `0px ${radius}px`,
        x: radius,
        rotate: rotation
      })
      gsap.set('.cursor', {
        transformOrigin: 'center center',
        rotation: 0,
        width: radius * 2,
        height: radius * 2
      })
    })

    // let rotate = gsap.timeline({repeat: -1})
    // rotate.to('.cursor', {
    //   rotation: 360,
    //   duration: 5,
    //   ease: 'none'
    // })

    const onScroll = () =>  setOffset(document.documentElement.scrollTop * 2);
  
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollText, scrollTextCount])
  return (
    <div 
      className="scroll-wrap"
        style={{
          display: `${(reachBottom === 100) ? "none":"block" }`
        }} 
    >
      <div 
        className="cursor"
        style={{
          transform: `rotate(${offset}deg)`,
          msTransform: `rotate(${offset}deg)`,
          OTransform: `rotate(${offset}deg)`,
          WebkitTransform: `rotate(${offset}deg)`,
        }} 
      >
        <div className='cursor-text'>{splitScrollText}</div>
      </div>
      <div className="arrow">
        <ScrollInner setReachBottom={setReachBottom} />
      </div>
    </div>
  );
};

export default ScrollCircle;
