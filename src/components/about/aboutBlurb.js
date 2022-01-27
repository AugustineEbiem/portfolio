import React from "react"
import fist from "../../assets/fist.png";
import flower from "../../assets/flower-mouth.png";

const AboutBlurb = () => {
  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>The ability to create</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for ‘lorem ipsum’ will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <div className="btn-row">
              <a href="/work">View Series</a>
            </div>
          </div>
          <div className="images">
            <div className="top-right">
                <img src={fist} alt='zefist' />
            </div>
            <div className="bottom-left">
                <img src={flower} alt='zeflower' />
            </div>
          </div>
        </div>
      </div>

      
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
  )
}

export default AboutBlurb
