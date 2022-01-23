import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import {TimelineLite, Power3} from 'gsap';

// import Header from '../components/about/header';
import AboutBanner from '../components/about/aboutBanner';
import AboutBlurb from '../components/about/aboutBlurb';
import AboutFeatured from '../components/about/aboutFeatured';
import AboutTech from '../components/about/aboutTech';

gsap.registerPlugin();
gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger);
    
const About = ({history}) => {    
    var imageRvl = CSSRulePlugin.getRule(".banner .row .main-image:after");

    const blurbTextRef = useRef(null);
    
    
    useEffect(() => {
        var delay = { delay: 0 }
        const historyAction = history.action
        var heroDelay = 0
        if (historyAction !== "POP") {
            delay = { delay: 0.4 }
            heroDelay = 0.4
        }

        const tlc = gsap.timeline();
        let tl = new TimelineLite(delay);
        const elBText = blurbTextRef.current;
        const tlv = gsap.timeline({
            scrollTrigger: {
                trigger: elBText,
                start: "top 95%",
            }
        });

        //Hero Side Images Animation
        tl.from(".side-image.right", 1.2, {y: 1280, ease: Power3.easeOut})
        .from(".side-image.right img", 2, {scale: 1.6, ease: Power3.easeOut}, .2)
        .from(".side-image.left", 1.4, {y: 1280, ease: Power3.easeOut}, .2)
        .from(".side-image.left img", 2, {scale: 1.6, ease: Power3.easeOut}, .2)
        .from(".abt-line span", 1.8, {y: 140, ease: "power4.out", skewY: 7 }, 1)
        
        //Hero Main Image Animation
        if(historyAction !== "POP") {
            tlc.set(imageRvl, {width: "100%"})
        }

        tlc
        .to(imageRvl, {duration: 1.4, cssRule: { width: "0%" }, ease: "power2.easeInOut"}, heroDelay)
        .from(".banner .row .main-image img", 1.4, {
            scale: 1.6,
            ease: "expo.inOut",
            delay: -1.6
            });

        tlv
        .from(".blurb-content-title", 1, {y: 44, opacity: 0, ease:Power3.easeOut})
        .from(elBText, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 0.4)
        .from(".blurb-btn-row", 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 0.6)
        

        gsap.set(".about-blurb .black-box", {transformOrigin: "0% 50%"})
        gsap.from(".about-blurb .black-box", 1, {scaleX: 0, duration: 1, ease:Power3.easeInOut, scrollTrigger: {
            trigger: ".about-blurb .black-box",
            start: "top 95%",
        }});
        
        
    }, [])

    return(
        <div>
            <AboutBanner />
            <AboutTech blurbTextRef={blurbTextRef} />
            <AboutFeatured />
            <AboutBlurb />
        </div>
    )
}

export default withRouter(About);