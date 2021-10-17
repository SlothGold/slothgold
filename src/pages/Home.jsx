import Header from '../components/Header';
import '../styles/style.css';

export default function Home() {
    return (
        <div>
            <Header />
        <div className="container-medium margin-top">
            <h1>My homepage</h1>
            <p>
                I donno here
            </p>
            <br />

            <h3>Made by me</h3>
            <br />
            <p>
                This website is built by me, instead of copying I thought I would learn myself to code from scratch.
                That's why my website is shitty at the moment and possibly forever. I will try to make less
                shitty websites and that's my only goal.
            </p>
        </div>
        </div>
    )
}
