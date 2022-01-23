import React from 'react';

import ftImage from "../../assets/img3.jpg";

const AboutFeatured = () => {
    return(
        <div className="about-featured">
            <div className="container">
                <div
                    style={{ 
                        height: '600px',
                        overflow: 'hidden'
                     }}
                >
                    <img src={ftImage} alt="Futured" />
                </div>
            </div>
        </div>
    )
}

export default AboutFeatured;