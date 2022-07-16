import React from "react";
import Headings from "../../Common/Headings";
import {experience} from '../../Data/Data'


function Experience(){
    const experienceArray = experience.slice(0).reverse()
    return(
        <section className="section-end">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Headings heading="Experience" />
                    </div>
                    <div className="col-lg-10 offset-lg-1">
                        <div className="experience-main">
                            <div className="pulse-main">
                                <div className="circle pulse green"></div>
                            </div>
                            <div className="center-img">
                                <img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="hero" />
                            </div>
                            <h6 className="my-company-name">
                                My Company Name
                            </h6>
                            <p className="duration">
                                2020 - Present
                            </p>
                            <div className="flex-all-center-col">
                                <p className="my-company-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <a className="main-button" href="https://google.com" target="_blank">
                                    Link
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-3">
                        <h4 className="small-heading">
                            Previous Experience<span className="green-span">.</span>
                        </h4>
                    </div>
                    <div className="col-lg-6 offset-lg-3">
                        <div className="experience-head">
                            {experienceArray.map((i) => (
                                <div className="experience-box" key={i.id}>
                                    <h3 className="company-name">
                                        {i.company}
                                    </h3>
                                    <div className="flex-space-between">
                                        <p className="work-duration">
                                            {i.startTime} - {i.endTime}
                                        </p>
                                        <p className="work-role">
                                            {i.role}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;