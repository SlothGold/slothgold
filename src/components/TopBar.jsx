import React,{useState, useEffect} from 'react';
import '../styles/style.css';
import {Link} from 'react-router-dom';

export default function TopBar() {
    //To make the hamburger menu work.
    const [menuActive, setMenuActive] = useState(false);

    return (
        <div className="site-navigation">
            <div className="container-topbar flexTopbar">
            <div className="logo">
                <Link to="/">
                <h4>Sloth<span className="color-third">Gold</span></h4>
                </Link>
            </div>

            <div>
            <ul className={`nav ${menuActive && 'active'}`} onMouseLeave={() => setMenuActive(false)}>
                <li>
                    <Link to="/" onClick={() => setMenuActive(false)}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/blog" onClick={() => setMenuActive(false)}>
                    Blog
                    </Link>
                </li>
                <li>
                    <Link to="/about-us" onClick={() => setMenuActive(false)}>
                    About Us
                    </Link>
                </li>
            </ul>
            <button className={`hamburger ${menuActive && 'active'}`} onClick={() => setMenuActive(!menuActive)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            </div>
            </div>
            <hr className="style" />
        </div>
    )
}
