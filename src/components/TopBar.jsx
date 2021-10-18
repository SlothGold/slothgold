import React from 'react';
import '../styles/style.css';
import {Link} from 'react-router-dom';

export default function TopBar() {
    return (
        <div>
            <div className="container-topbar flexTopbar">
            <div className="logo">
                <Link to="/">
                <h4>Sloth<span className="color-third">Gold</span></h4>
                </Link>
            </div>

            <ul className="nav">
                <li>
                    <Link to="/">
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/singlepost">
                    Business
                    </Link>
                </li>
                <li>
                    <Link to="/stocks">
                    Stocks
                    </Link>
                </li>
                <li>
                    Finance
                </li>
                <li>
                <Link to="/saving">
                    Saving
                </Link>
                </li>
            </ul>
            </div>
            <hr className="style" />
        </div>
    )
}
