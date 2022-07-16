import React from "react";
import Headings from "../../Common/Headings";
import {experience} from '../../Data/Data';

function Experience(){
    const experienceArray = experience.slice(0).reverse()
    return(
        <section className="section-start experience-bg">
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
                                <a className="second-main-button" href="https://google.com" target="_blank">
                                    Link
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 offset-lg-1">
                        {experienceArray.map((i => (
                            <div className="experience-list" key={i.id}>
                                <div className="experience-overlay"></div>
                                <div className="experience-container">
                                    <div className="second-experience-box">
                                        <h6 className="experience-name">
                                            {i.role} - <span className="experience-company">{i.company}</span>
                                        </h6>
                                        <h6 className="experience-duration">
                                            {i.startTime} - {i.endTime}
                                        </h6>
                                    </div>
                                    {i.responsibilities.map((k => (
                                            <div className="experience-detail" key={k.id}>
                                                <img style={{width:"18px", marginTop:"5px"}} src={process.env.PUBLIC_URL + '/img/roles.svg'} alt="roles" />
                                                <p className="experience-roles">
                                                    {k.description}
                                                </p>
                                            </div>
                                    )))}
                                </div>
                            </div>
                        )))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;