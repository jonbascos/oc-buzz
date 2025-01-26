import './Contact.css'

function Contact() {
    return (
        <form action="POST">
                Full Name (required):
                <input type="text" placeholder="Full name" required />
                Email (required):
                <input type="email" placeholder="Email" required />
                Phone (optional):
                <input type="phone" placeholder="optional" />
                Enter event or location info:
                <textarea name="event" id="event"></textarea>
                <button className="submitButton">Submit</button>
            </form>
    )
}

export default Contact