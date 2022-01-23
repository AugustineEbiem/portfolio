import React, { useEffect } from "react";
import hoverEffect from 'hover-effect';
import luxy from "luxy.js";

import Ongoing from "./ongoing"

import image1 from '../assets/photo1.jpg';
import image2 from '../assets/photo2.jpg';
import image3 from '../assets/photo3.jpg';
import image4 from '../assets/photo4.jpg';
import image5 from '../assets/photo5.jpg';
import image6 from '../assets/photo6.jpg';
import overlay from '../assets/displacement.png';


const Categories = () => {
  useEffect(() => {
    //   luxy.init();
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
      
    <div id="luxy">
        <h1 className="cat-text text-1 luxy-el" data-speed-y="40" data-offset="-200">Cata</h1>
        <h1 className="cat-text text-2 luxy-el" data-speed-y="40" data-offset="-510">Logue</h1>

        <div className="cat-container">
            <div className="photo-row">
                <div className="photo" id="photo1">
                    <span>
                        <h2>Avery Caldwell</h2>
                    </span>
                </div>
                <div className="photo" id="photo2">
                    <span>
                        <h2>Toni Jefferson</h2>
                    </span>
                </div>
            </div>
            <div className="photo-row">
                <div className="photo" id="photo3">
                    <span>
                        <h2>Spencer Mcdonnell</h2>
                    </span>
                </div>
                <div className="photo" id="photo4">
                    <span>
                        <h2>Danial Spencer</h2>
                    </span>
                </div>
            </div>
            <div className="photo-row">
                <div className="photo" id="photo5">
                    <span>
                        <h2>Annabell Bautista</h2>
                    </span>
                </div>
                <div className="photo" id="photo6">
                    <span>
                        <h2>Aizah Thatcher</h2>
                    </span>
                </div>
            </div>
        </div>

        <Ongoing />

    </div>    
      
    )
}

export default Categories