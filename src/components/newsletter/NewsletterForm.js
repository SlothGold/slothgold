import '../../styles/style.css';

export default function NewsletterForm() {
    return (
        <form className="form-subscribe">
            <input className="none" type="name" placeholder="Name..."/>
            <input type="email" placeholder="Email..."/>
            <button>Subscribe Now!</button>
        </form>
    )
}
