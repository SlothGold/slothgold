import '../styles/style.css';

export default function Contact() {
    return (
        <div>
            <article className="container-small margin-top-small margin-bottom">
                <h2>Contact</h2>
                <p>You can also just message me at <span className="color-third">GoldSloth.com@gmail.com</span></p>
                <form className="form-contact">
                    <label htmlFor="">Name</label>
                    <input type="name" placeholder="Name..." />
                    <label htmlFor="">Email</label>
                    <input type="name" placeholder="Email..." />
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message..."></textarea>
                    <button>Submit</button>
                </form>
            </article>
        </div>
    )
}
