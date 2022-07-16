import React from 'react';


const Toggle = props => (
    <button className="toggle-button" onClick={props.click}>
        <img src={`${process.env.PUBLIC_URL}/images/menu-hamburger.svg`} alt="menu-icon" />
    </button>
)

export default Toggle;