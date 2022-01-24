import React from "react";
import { photos } from "../data-source/lang-data";


const Languages = () => {
  return (
          
    <div className="main-container menu-list">
        {photos.map(({ title, url }, index) => (
        <div key={url} className="menu-item">
            <h1 className="menu-title">
            <span className="counter">{index + 1}. </span>
            {title}
            </h1>
            <h1 className="menu-title clone">
            <span className="counter">{index + 1}. </span>
            {title}
            </h1>

            <div className='menu-image-container'>
            <div
                className="menu-image"
                style={{
                backgroundImage: `url(${url})`,
                }}
            />
            </div>
        </div>
        ))}
    </div>
          
  );
};

export default Languages;
