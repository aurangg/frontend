import React from "react";
import Headings from "../../Common/Headings";

function Awards(){
    return(
        <section className="awards-section section-start">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Headings heading="Awards & Honors" />
                    </div>
                    <div className="col-lg-4 offset-lg-4">
                        <div className="flex-all-center">
                            <div className="awards flex-all-center-col">
                                <img className="one" src={process.env.PUBLIC_URL + '/img/one.svg'}></img>
                                <div className="center-img">
                                    <img className="medal-picture" src={process.env.PUBLIC_URL + '/img/medal.png'}></img>
                                </div>
                                <p className="winner">
                                    Winner!
                                </p>
                                <p className="award-name">
                                    Hackathon - 1
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row awards-2">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-4">
                        <div className="awards flex-all-center-col">
                            <div className="center-img">
                                <img className="medal-picture" src={process.env.PUBLIC_URL + '/img/medal2.png'}></img>
                            </div>
                            <p className="winner">
                                2nd Place!
                            </p>
                            <p className="award-name">
                                Hackathon - 2
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="awards flex-all-center-col">
                            <div className="center-img">
                                <img className="medal-picture" src={process.env.PUBLIC_URL + '/img/medal2.png'}></img>
                            </div>
                            <p className="winner" style={{visibility:"hidden"}}>
                                2nd Place!
                            </p>
                            <p className="award-name">
                                Dean's List
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </section>
    )
}

export default Awards;