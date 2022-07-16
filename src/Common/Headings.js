import React from "react";

function Headings(props){
    return(
        <h2 className="section-heading">
            {props.heading}<span className="green-span">.</span>
        </h2>
    )
}

export default Headings;