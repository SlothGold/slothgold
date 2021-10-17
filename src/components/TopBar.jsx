import React from 'react';
import '../styles/style.css';
import {Link} from 'react-router-dom';

export default function TopBar() {
    return (
        <div className="background1">
            <div className="container1 flexTopbar">
            <div className="logo">
                <Link to="/">
                <h3>Sloth<span className="color-third">Gold</span></h3>
                </Link>
            </div>

            <ul className="nav">
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
                    Saving
                </li>
            </ul>
            </div>
            <hr className="style" />
        </div>
    )
}
