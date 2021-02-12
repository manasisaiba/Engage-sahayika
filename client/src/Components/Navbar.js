import React from 'react';
import logoimg from '../img/logo1.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navabr">
            <div className="navbar_text">
                <div className="logo"><img src={logoimg}/>
                </div>
                 <ul className="navbar_ul">
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/about">About</Link></li>
                 <li><Link to="/hire">Get Hired</Link></li>
                 <li><Link to="/hirecandidate">Hire</Link></li>
                 <li><Link to="/signup">SignUp</Link></li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;