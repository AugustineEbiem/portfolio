import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { withRouter } from 'react-router-dom';

import IntroOverlay from "../components/introOverlay";
import Banner from "../components/banner";
import Cases from "../components/cases";
import Categories from "../components/categories";

let tl = gsap.timeline();

const homeAnimation = (completeAnimation, firstLoad) => {
  if(firstLoad === 'POP') {
    console.log(firstLoad)
    tl
    // .to("body", 0, { css: { overflow: "hidden" } })
    // Loading starts
    // .to(".animate", {
    //   delay: 2,
    //   duration: .5,
    //   opacity: 0
    // })
    // .to(".animation", {
    //   delay: 0.5,
    //   duration: 1,
    //   y: "100%",
    //   ease: "power4.out",
    //   zIndex: -1,
    //   autoAlpha: 0 
    // })
    //hide preloader and preloader-container
    // .to("animation", {
    //   zIndex: -1,
    // })
    // Loading stops
    // .to("body", 0, { css: { overflow: "hidden" } })
    .from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    })
    .to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4
    })
    .to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4
      }
    })
    .to(".intro-overlay", 0, {
      css: { display: "none" },
      // autoAlpha: 0
    })
    .from(".case-image img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4
      },
      onComplete: completeAnimation
    });
  }
  // else {
  //   tl
  //   .to(".intro-overlay", 0, {
  //     css: { display: "none" },
  //     // autoAlpha: 0
  //   })
  // }
};

const Home = ({ dimensions, history }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    var firstLoad = history.action
    homeAnimation(completeAnimation, firstLoad);
  }, [history.action]);

  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [dimensions.width, dimensions.height]);

  return (
    <>
    {(history.action === "POP") && console.log('true')}
      
      
      {(animationComplete === false && history.action === "POP") ? <IntroOverlay /> : ""}
      <Banner />
      <Cases />
      <Categories />
      {/* <div style={{height: "500px", background: "grey"}}>Hallo</div> */}
    </>
  );
};

export default withRouter(Home);
