import React from 'react';
import About from './About';
import Experience from './Experience';
import HeroSection from './HeroSection';


function Second(){
    return(
        <React.Fragment>
            <HeroSection />
            <About />
            <Experience />
        </React.Fragment>
    )
}

export default Second;