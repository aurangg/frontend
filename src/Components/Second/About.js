import React from "react";
import Headings from "../../Common/Headings";


function About(){
    return(
        <section className="section-start">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Headings heading="About Me" />
                    </div>
                </div>
                <div className="row" style={{marginTop:"50px"}}>
                    <div className="col-lg-6 flex-all-center-col">
                        <p className="second-about-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        </p>
                        <p className="second-about-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <div className="center-img">
                            <img style={{width:"100%"}} src={process.env.PUBLIC_URL + '/img/second-hero-img-2.png'} alt="about-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;