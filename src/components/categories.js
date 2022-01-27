import React, { useEffect } from "react";
import hoverEffect from 'hover-effect';
import luxy from "luxy.js";

// import { gsap } from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import Ongoing from "./ongoing"
import Languages from "./languages"

import image1 from '../assets/photo1.jpg';
import image2 from '../assets/photo2.jpg';
import image3 from '../assets/photo3.jpg';
import image4 from '../assets/photo4.jpg';
import image5 from '../assets/photo5.jpg';
import image6 from '../assets/photo6.jpg';
import overlay from '../assets/displacement.png';

// gsap.registerPlugin(ScrollTrigger);

const Categories = () => {

    // useEffect(() => {
    //     gsap.to(".on-hyphen", {
    //         width: "30%",
    //         scrollTrigger: {
    //             trigger: ".on-hyphen",
    //             start: "top bottom",
    //             scrub: 1,
    //             markers: true
    //         }
    //     })

    // }, [])

  useEffect(() => {
      luxy.init();
      var image_animate = new hoverEffect({
          parent: document.querySelector('#photo1'),
          intensity: 0.5,
          image1: image6,
          image2: image1,
          displacementImage: overlay,
          imagesRatio: 1.7
      })

      var image_animate2 = new hoverEffect({
          parent: document.querySelector('#photo2'),
          intensity: 0.5,
          image1: image2,
          image2: image5,
          displacementImage: overlay,
          imagesRatio: 1.7
      })

      var image_animate3 = new hoverEffect({
          parent: document.querySelector('#photo3'),
          intensity: 0.5,
          image1: image3,
          image2: image6,
          displacementImage: overlay,
          imagesRatio: 1.7
      })

      var image_animate4 = new hoverEffect({
          parent: document.querySelector('#photo4'),
          intensity: 0.5,
          image1: image4,
          image2: image2,
          displacementImage: overlay,
          imagesRatio: 1.7
      })

      var image_animate5 = new hoverEffect({
          parent: document.querySelector('#photo5'),
          intensity: 0.5,
          image1: image5,
          image2: image2,
          displacementImage: overlay,
          imagesRatio: 1.7
      })

      var image_animate6 = new hoverEffect({
          parent: document.querySelector('#photo6'),
          intensity: 0.5,
          image1: image1,
          image2: image6,
          displacementImage: overlay,
          imagesRatio: 1.7
      })
  }, []);

  return(
      
    <div id="luxy" className="luxy-wrap">
        <Languages />

        <div className="cat-container">
            <h1 className="cat-text text-1 luxy-el" data-speed-y="35" >Port</h1>
            <h1 className="cat-text text-2 luxy-el" data-speed-y="35" >Folio</h1>
            
            <div className="cat-bg-text-wrap">
                <p className="luxy-el cat-bg-text"
                    data-speed-x="15" data-speed-y="35" data-horizontal="100"  
                    data-offset="-800"
                >
                    lorem ipsum is the shit that i also say i will be the man or who whants to be the lady man
                </p>
                <p className="luxy-el cat-bg-text"
                    data-speed-x="-10" data-speed-y="35" data-horizontal="100" 
                    data-offset="-800"
                >
                    lorem ipsum is the shit that i also say i will be the man or who whants to be the lady man
                </p>
                <p className="luxy-el cat-bg-text cat-bg-text-stroke cat-bg-text-margin" 
                    data-speed-x="-15" data-speed-y="35" data-horizontal="100"  
                    data-offset="-800"
                >
                    lorem ipsum is the shit that i also say i will be the man or who whants to be the lady man
                </p>
                <p className="luxy-el cat-bg-text " 
                    data-speed-x="10" data-speed-y="35" data-horizontal="100"  
                    data-offset="-800"
                >
                    lorem ipsum is the shit that i also say i will be the man or who whants to be the lady man
                </p>
                <p className="luxy-el cat-bg-text cat-bg-text-margin" 
                    data-speed-x="-25" data-speed-y="35" data-horizontal="100"  
                    data-offset="-800"
                >
                    lorem ipsum is the shit that i also say i will be the man or who whants to be the lady man
                </p>
                <p className="luxy-el cat-bg-text cat-bg-text-stroke cat-bg-text-margin" 
                    data-speed-x="10" data-speed-y="35" data-horizontal="100"  
                    data-offset="-800"
                >
                    lorem ipsum is the shit that i also say i will be the man or who whants to be the lady man
                </p>
                <p className="luxy-el cat-bg-text" 
                    data-speed-x="-5" data-speed-y="35" data-horizontal="100"  
                    data-offset="-800"
                >
                    lorem ipsum is the shit that i also say i will be the man or who whants to be the lady man
                </p>
                <p className="luxy-el cat-bg-text cat-bg-text-stroke" 
                    data-speed-x="-20" data-speed-y="35" data-horizontal="100"  
                    data-offset="-800"
                >
                    lorem ipsum is the shit that i also say i will be the man or who whants to be the lady man
                </p>
                <p className="luxy-el cat-bg-text cat-bg-text-margin" 
                    data-speed-x="-10" data-speed-y="35" data-horizontal="100"  
                    data-offset="-800"
                >
                    lorem ipsum is the shit that i also say i will be the man or who whants to be the lady man
                </p>
                <p className="luxy-el cat-bg-text" 
                    data-speed-x="5" data-speed-y="35" data-horizontal="100"  
                    data-offset="-800"
                >
                    lorem ipsum is the shit that i also say i will be the man or who whants to be the lady man
                </p>
                <p className="luxy-el cat-bg-text" 
                    data-speed-x="-15" data-speed-y="35" data-horizontal="100"  
                    data-offset="-800"
                >
                    lorem ipsum is the shit that i also say i will be the man or who whants to be the lady man
                </p>
            </div>
            
            <div className="photo-row" style={{ marginTop: 0 }}>
                <div className="photo" id="photo1">
                    <span>
                        <h2>ReactJs, NodeJS</h2>
                    </span>
                </div>
                <div className="photo" id="photo2">
                    <span>
                        <h2>Python, MySQL</h2>
                    </span>
                </div>
            </div>
            <div className="photo-row">
                <div className="photo" id="photo3">
                    <span>
                        <h2>ReactJs, Gsap</h2>
                    </span>
                </div>
                <div className="photo" id="photo4">
                    <span>
                        <h2>ReactJs Python</h2>
                    </span>
                </div>
            </div>
            <div className="photo-row"  style={{ marginBottom: 0 }}>
                <div className="photo" id="photo5">
                    <span>
                        <h2>NextJs Firebase</h2>
                    </span>
                </div>
                <div className="photo" id="photo6">
                    <span>
                        <h2>Php, MySql</h2>
                    </span>
                </div>
            </div>
        
        </div>

        <h1 className="luxy-el" data-speed-y="35" className="ongoing-title">
                ON <span className="on-hyphen"></span> GOING
            </h1>
        <Ongoing />

    </div>    
      
    )
}

export default Categories