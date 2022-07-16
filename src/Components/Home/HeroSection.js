import React from "react";


function HeroSection(){
    return(
        <section className="hero-section">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <div className="align-with-hero">
                            <h6 className="hero-section-hello">
                                Hello! <div className="floating-hand">👋</div>
                            </h6>
                            <h2 className="introduction">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </h2>
                          <a href="mailTo:aurangzebbbk@gmail.com" className="main-button">
                            Get in Touch
                          </a>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6">
                        <div className="center-img">
                            <img src={process.env.PUBLIC_URL + '/img/hero-img-2.png'} alt="hero" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;