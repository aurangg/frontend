import React from "react";


function HeroSection(){
    return(
        <section className="second-hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h2 className="second-hero-heading">
                            Andrew Garnett
                        </h2>
                        <h3 className="second-hero-subheading">
                            Creating magic on the web.
                        </h3>
                    </div>
                    <div className="col-lg-6 offset-lg-3">
                        <p className="second-hero-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div className="flex-all-center">
                            <a href="mailTo:aurangzebbbk@gmail.com" className="second-main-button">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;