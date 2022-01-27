import React from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import { pageData } from "../data-source/data";
import ProjectItem from "../components/projectItem/projectItem";

// gsap.registerPlugin(ScrollTrigger);

export default function Ongoing() {
    // useEffect(() => {
    //     gsap.to(".on-hyphen", {
    //         width: "30%",
    //         scrollTrigger: {
    //             trigger: ".ongoing-title",
    //             start: "top bottom",
    //             scrub: 1,
    //         }
    //     })

    // }, [])

    return (
        <div className="ongoing-proj" style={{  }}>
            <h1 className="ongoing-title">
                ON <span className="on-hyphen"></span> GOING
            </h1>
            
            

            <div className="main-containter">
                <ul className="project-item">
                    {pageData.map((project, index) => (
                        <ProjectItem key={project.title} project={project} itemIndex={index} />
                    ))}
                </ul>
            </div>
        </div>

    )
}