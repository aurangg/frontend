import React from 'react';
import {Link} from 'react-router-dom';
const Sidedrawer = props => {
    let drawerClasses = ['side-drawer']
    if(props.show){
        drawerClasses = ['side-drawer open']
    }
    // console.log(props)
    return(
        <nav className={drawerClasses} onClick={props.drawerClickHandler}>
            <ul>
                    <Link to="/">
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to="/project">
                        <li>
                            Projects
                        </li>
                    </Link>
                    <Link  to="/technology">
                        <li>
                            Technology
                        </li>
                    </Link>
                    <Link  to="/about">
                        <li>
                            About
                        </li>
                    </Link>
                    <Link  to="/careers">
                        <li>
                            Careers
                        </li>
                    </Link>
                    <Link  to="/blogs">
                        <li>
                            Blogs
                        </li>
                    </Link>
                    <Link  to="/team">
                        <li>
                            Team
                        </li>
                    </Link>
                    <Link to="/category">
                        <li>
                            Category
                        </li>
                    </Link>
                    <Link to="/bills">
                        <li>
                            Bills
                        </li>
                    </Link>
                    <Link to="/clients">
                        <li>
                            Clients
                        </li>
                    </Link>
            </ul>
        </nav>
    )
}

export default Sidedrawer;