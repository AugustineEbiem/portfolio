import React, { useEffect } from "react";
import hoverEffect from 'hover-effect';
import luxy from "luxy.js";

import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import Ongoing from "./ongoing"
import Languages from "./languages"

import imperiumDisplay from '../assets/projects/imperium/1.jpg';
import imperium from '../assets/projects/imperium/2.jpg';
import goMoneyDisplay from '../assets/projects/gomoney/1.jpg';
import goMoney from '../assets/projects/gomoney/2.jpg';
import prachProDisplay from '../assets/projects/prachpro/1.jpg';
import prachPro from '../assets/projects/prachpro/2.jpg';
import virtualClosetsDisplay from '../assets/projects/virtual-closets/1.jpg';
import virtualClosets from '../assets/projects/virtual-closets/2.jpg';
import fundmylaptopDisplay from '../assets/projects/fundmylaptop/1.jpg';
import fundmylaptop from '../assets/projects/fundmylaptop/2.jpg';
import jaizDisplay from '../assets/projects/jaiz/1.jpg';
import jaiz from '../assets/projects/jaiz/2.jpg';


import overlay from '../assets/displacement.png';

// gsap.registerPlugin(ScrollTrigger);

const Categories = ({pageWidth}) => {

    var scrollText = "STYLE";

	var splitScrollText = scrollText.split('').map((item, index) => {
	  return <span style={{ transitionDelay: `calc(0ms + ${index} * 20ms)` }} className="char" key={index}>{item}</span>;
	})

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

    // const handlePhotoOneClick = () => {
    //     alert ('cool')
    // }

  useEffect(() => {
      luxy.init();
      var image_animate = new hoverEffect({
          parent: document.querySelector('#photo1'),
          intensity: 0.5,
          image1: imperiumDisplay,
          image2: imperium,
          displacementImage: overlay,
          imagesRatio: 1.7
      })

      var image_animate2 = new hoverEffect({
          parent: document.querySelector('#photo2'),
          intensity: 0.5,
          image1: goMoneyDisplay,
          image2: goMoney,
          displacementImage: overlay,
          imagesRatio: 1.7
      })

      var image_animate3 = new hoverEffect({
          parent: document.querySelector('#photo3'),
          intensity: 0.5,
          image1: prachProDisplay,
          image2: prachPro,
          displacementImage: overlay,
          imagesRatio: 1.7
      })

      var image_animate4 = new hoverEffect({
          parent: document.querySelector('#photo4'),
          intensity: 0.5,
          image1: virtualClosetsDisplay,
          image2: virtualClosets,
          displacementImage: overlay,
          imagesRatio: 1.7
      })

      var image_animate5 = new hoverEffect({
          parent: document.querySelector('#photo5'),
          intensity: 0.5,
          image1: fundmylaptopDisplay,
          image2: fundmylaptop,
          displacementImage: overlay,
          imagesRatio: 1.7
      })

      var image_animate6 = new hoverEffect({
          parent: document.querySelector('#photo6'),
          intensity: 0.5,
          image1: jaizDisplay,
          image2: jaiz,
          displacementImage: overlay,
          imagesRatio: 1.7
      })

      gsap.timeline({
        delay: 1,
        defaults: {
            duration: 1.25,
            stagger: 0.125,
            ease: "expo.inOut",
        },
    })
    .fromTo(".card__image--wrapper", { yPercent: 110 }, { yPercent: 0 }, 0)
    .fromTo(".card__image--outer", { yPercent: -110 }, { yPercent: 0 }, 0)
    .set(".cards__wrapper, .card", { pointerEvents: "all" }, "-=1");

  }, []);

  return(

    <div id="luxy" className="luxy-wrap">
        {/* <a className="photo-1-link" style={{color: "white"}} href="">In My Mis</a> */}
        <Languages />
    	
        <div className="cat-container">
            <h1 className="cat-text text-1 luxy-el" data-speed-y="45" >Port</h1>
            <h1 className="cat-text text-2 luxy-el" data-speed-y="45" >Folio</h1>
            
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
            
            <div className="container">
                <div className="port-row">

                    <div className="photo-row" style={{ marginTop: 0 }}>
                        <a href="#" className="photo-wrap">
                            <div className="photo" id="photo1">
                                <span className="stack">
                                    <h2>ReactJs, NodeJS</h2>
                                </span>
                                <div className="card__text">
                                    <span className="card__text--inner" data-splitting>
                                        <span className="word">
                                            {splitScrollText}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <div className="photo-wrap">
                            <div className="photo" id="photo2">
                                <span className="stack">
                                    <h2>Python, MySQL</h2>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="photo-row">
                        <div className="photo-wrap">
                            <div className="photo" id="photo3">
                                <span className="stack">
                                    <h2>ReactJs, Gsap</h2>
                                </span>
                            </div>
                        </div>
                        <div className="photo-wrap">
                            <div className="photo" id="photo4">
                                <span className="stack">
                                    <h2>ReactJs Python</h2>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="photo-row"  style={{ marginBottom: 0 }}>
                        <div className="photo-wrap">
                            <div className="photo" id="photo5">
                                <span className="stack">
                                    <h2>NextJs Firebase</h2>
                                </span>
                            </div>
                        </div>  
                        <div className="photo-wrap">
                            <div className="photo" id="photo6">
                                <span className="stack">
                                    <h2>Php, MySql</h2>
                                </span>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>

        </div>

        <h1 className="ongoing-title">
                ON <span className="on-hyphen"></span> GOING
            </h1>
        <Ongoing />

    </div>    
      
    )
}

export default Categories