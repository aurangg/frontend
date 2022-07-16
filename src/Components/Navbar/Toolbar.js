import React from 'react';
import Toggle from './Toggle';
import {Link} from 'react-router-dom'


const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <Toggle click={props.drawerClickHandler} />
            <Link to="/">
                <div className="toolbar-logo">
                    <img className='logo-img' src={process.env.PUBLIC_URL + '/img/word.png'} alt="logo" />
                </div>
            </Link>
            <div className="spacer"></div>
            <div className="toolbar-navigation-items">
                <ul>
                    <li>
                        <Link to="/">
                            Resume
                            {/* <img src={`${process.env.PUBLIC_URL}/images/logout.svg`} alt="menu-icon" /> */}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Toolbar;