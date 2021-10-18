import '../styles/style.css';

export default function Header() {
    return (
        <div className="background1">
            <div className="header-cover">

                <div className="cover-content">
                    <div className="cover-content-text">
                        <h2>Organized lazyness</h2>
                        <br />
                        <p className="strong">
                            Doing nothing has always been a great passion of mine and
                            I want to share my journey in becoming financial independent
                            and having to do less work.
                        </p>
                        <p className="strong">
                            Minimalism, saving, investing & self employment
                        </p>
                        </div>
                        <div className="cover-content-other">
                            <form className="form-subscribe">
                                <input className="none" type="name" placeholder="Name..."/>
                                <input type="email" placeholder="Email..."/>
                                <button>Subscribe</button>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}
