import Header from '../components/Header';
import '../styles/style.css';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <Header />
        <div className="container1 margin-top">

            <div className="hero-home">
            <div className="hero-home-text">
                <h3>How I made my first $100k by the age of 27</h3>
                <hr />
                <br />
                <p>
                    Without having any company, collage education and will to work I
                    have still managed to become richer then most people
                </p>
                <p>
                    I got my first allowance when I was 13 years old, so money have always been scarce to me. I paid for rent home when I was about 19 till
                    I moved out about 24. The rent was about the same as if I had my own apartment. I had maybe a total of 2 year work experience.
                </p>
                <br />
                <Link to="/how_i_made_my_first_$100k_by_the_age_of_27">
                    Read my story...
                </Link>
            </div>

                <img 
                    src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="" 
                />
            </div>
                Website Uploaded.
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
        </div>
    )
}
