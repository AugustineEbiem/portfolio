import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { withRouter } from 'react-router-dom';
import Loading from "../components/loading";

import IntroOverlay from "../components/introOverlay";
import Banner from "../components/banner";
import Cases from "../components/cases";
import Categories from "../components/categories";

let tl = gsap.timeline();

const homeAnimation = (completeAnimation, firstLoad) => {
  // html {
  //   // overflow: hidden;
  // }
  // #root {
  //   // overflow: hidden;
  //   // position: fixed;
  //   width: 100%;
  // }
  if(firstLoad === 'POP') {
    
    tl
    .to("#luxy", 0, 
      { css: { zIndex: "-4" } 
    })
    .to("html", 0, {
      css: { overflow: "hidden" },
    })
    // .to(".header", 0, {
    //   css: { visibility: "hidden" },
    // })
    .to("#root", 0, 
      { css: { overflow: "hidden", position: "fixed" } 
    })
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
          //   display: "none" 
          // })
    // .to(".header", 0, {
    //   css: { visibility: "visible" },
    // })
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
    })
    .from(".case-image img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4
      },
      onComplete: completeAnimation
    })
    .to(".scroll-wrap", 0, 
      { css: { visibility: "visible" } 
    })
    .to("html", 0, 
      { css: { overflow: "visible" } 
    })
    .to("#root", 0, 
      { css: { overflow: "visible", position: "relative" } 
    })
    .to("#luxy", 0, 
      { css: { zIndex: "4" } 
    })
  } else {
    gsap.to(".scroll-wrap", 0, 
      { css: { visibility: "visible" } 
    })
  }
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
    <div style={{ background: "black" }}>

      {/* {(history.action === 'POP') && <Loading />} */}
      {(animationComplete === false && history.action === "POP") ? <IntroOverlay /> : ""}
      <Banner />
      <Cases />
      <Categories pageWidth={dimensions.width} />
    </div>
  );
};

export default withRouter(Home);
