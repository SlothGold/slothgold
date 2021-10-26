import '../styles/style.css'

export default function Blog() {
    return (
<div className="container1 margin-top-small">
            <br />
            <div className="hero-category">
                <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80" 
                alt="" 
                />
                <div className="hero-content">
                    <h1>Blog</h1>
                    <p>
                        About Finance, Frugal, Business, stocks and everything else I care about.
                    </p>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <h3>All Posts</h3>
            <hr className="style2" />
            <br />

            <ul className="grid2">
                <li className="card">
                    <div className="card-img">
                        <span className="cat-business">Business</span>
                        <img 
                        src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80" 
                        alt="" 
                        />
                    </div>
                    <div className="card-content">
                        <h3>
                            Reviving My Old Youtube Channel
                        </h3>
                    </div>
                </li>
                <li className="card">
                    <div className="card-img">
                        <span className="cat-finance">Finance</span>
                        <span className="cat-frugal">Frugal</span>
                        <span className="cat-stock">Stock</span>
                        <img 
                            src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                            alt="" 
                        />
                    </div>
                    <div className="card-content">
                        <h3>
                            How I Made my First $100k by the Age of 27
                        </h3>
                    </div>
                </li>
                <li className="card">
                    <div className="card-img">
                        <span className="cat-stock">Stock</span>
                        <img 
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                            alt="" 
                        />
                    </div>
                    <div className="card-content">
                        <h3>
                        How to Value a Real Estate Investment Company
                        </h3>
                    </div>
                </li>
                <li className="card">
                    <div className="card-img">
                        <span className="cat-frugal">Frugal</span>
                        <img 
                            src="https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" 
                            alt="" 
                        />
                    </div>
                    <div className="card-content">
                        <h3>
                            Top 10 Super Frugal Food Receipts
                        </h3>
                    </div>
                </li>
                <li className="card">
                    <img 
                    src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" 
                    alt="" 
                    />
                    <div className="card-content">
                        <h3>
                            How and Why I Started a Blog
                        </h3>
                    </div>
                </li>
            </ul>
        </div>
    )
}
