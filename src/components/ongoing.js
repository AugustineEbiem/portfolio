import React from 'react';
import { pageData } from "../data-source/data";
import ProjectItem from "../components/projectItem/projectItem";

// import "../css/style.scss";

export default function Ongoing() {

    return (
        <div style={{ background: "black" }}>
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