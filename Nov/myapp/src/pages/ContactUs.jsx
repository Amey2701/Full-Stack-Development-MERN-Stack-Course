// LOC: 1 — Simple contact form
import "./styles.css";

export default function ContactUs() {
  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <input placeholder="Your Name" required />
        <input placeholder="Your Email" type="email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
