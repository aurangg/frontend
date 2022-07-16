import React from "react";
import Awards from "./Awards";
import Experience from "./Experience";
import HeroSection from "./HeroSection";
import Projects from "./Projects";


function Home(){
    return(
        <React.Fragment>
            <HeroSection />
            <Experience />
            <Awards />
            <Projects />
        </React.Fragment>
    )
}

export default Home;