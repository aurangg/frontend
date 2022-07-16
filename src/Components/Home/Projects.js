import React from "react";
import Headings from "../../Common/Headings";
import {projects} from '../../Data/Data'



function Projects(){
    const projectsArray = projects.slice(0).reverse()
    return(
        <section className="section-start">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Headings heading="Projects" />
                    </div>
                    <div className="col-lg-10 offset-lg-1">
                        {projectsArray.map((i) => (
                            <div className="projects flex-all-center-col" key={i.id}>
                                <h3 className="project-name">
                                    {i.projectName}
                                </h3>
                                <div className="flex-all-center">
                                    <p className="project-description">
                                        {i.description}
                                    </p>
                                </div>
                                <div className="flex-space-evenly" style={{width:"50%"}}>
                                    {i.github !== "" ? <a className="main-button" href={i.github}>Github</a> : <></>}
                                    <a className="main-outline-button" href={i.url} >View</a>
                                </div>
                                <img className="project-img" src={process.env.PUBLIC_URL + `/img/${i.img}`} alt={i.img} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;