import React from "react"
import language from "../../assets/languages.png";

const AboutTech = ({blurbTextRef}) => {
  
  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div style={{height: '700px'}} className="images">
            <img className="lang-stack" src={language} alt='einlanguage' />
          </div>
          <div className="content">
            <h3 className="blurb-content-title">The ability to create</h3>
            <p className="blurb-content-text" ref={blurbTextRef}>
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
            <div className="blurb-btn-row btn-row">
              <a href="/work">View Series</a>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default AboutTech
