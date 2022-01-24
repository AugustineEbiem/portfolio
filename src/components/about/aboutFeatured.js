import React, { useEffect } from 'react';
import ftImage from "../../assets/img3.jpg";

const AboutFeatured = () => {
    return(
        <div className="about-featured">
            <div className="container">
                <div className="img-wrap">
                    <img className="abt-feat-img" src={ftImage} alt="Back Futured" />
                </div>
            </div>
        </div>
    )
}

export default AboutFeatured;