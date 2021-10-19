import '../styles/style.css';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <hr className="style" />
            <div className="container-footer">
                <ul className="nav">
                    <li>
                        <Link to="/about-us">
                        About us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                        Contact
                        </Link>
                    </li>
                </ul>
                <h4 className="copyright">Sloth<span className="color-third">Gold</span>.com &copy; 2021</h4>
            </div>
        </div>
    )
}
