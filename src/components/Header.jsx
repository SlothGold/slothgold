import '../styles/style.css';

export default function Header() {
    return (
        <div>
            <div className="header-cover">
                <img 
                src="https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80" 
                alt="" 
                />
                <div className="cover-content">
                    <img 
                        src="https://pngimg.com/uploads/sloth/sloth_PNG2.png" 
                        alt="" 
                    />
                    <div className="cover-content-text">
                        <h2 className="color-third">Sometimes slow and steady wins the race</h2>
                        <br />
                        <p>
                            My way to retire early.
                        </p>
                        <form className="form-subscribe">
                            <input type="name" placeholder="Name..."/>
                            <input type="email" placeholder="Email..."/>
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
