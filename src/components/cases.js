import React from "react";

const caseStudies = [
  {
    id: 1,
    subtitle: "Web Development",
    title: "I develop full-blown web apps",
    img: "curology-min"
  },
  {
    id: 2,
    subtitle: "Design to HTML",
    title: "I concert designs into pixel-perfect websites",
    img: "yourspace-min"
  },
  {
    id: 3,
    subtitle: "Mentorship",
    title: "You can book a session with me",
    img: "lumin-min"
  }
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='row'>
          {caseStudies.map(caseItem => (
            <div className='case' key={caseItem.id}>
              <div className='case-details'>
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className='case-image'>
                <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
