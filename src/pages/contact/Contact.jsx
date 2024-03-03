import './contact.css'

export default function Contact() {
  return (
    <div class="container">
      <section id="contact-info">
        <div id="contact-details">
          <h2>Get In Touch</h2>
          <ul>
            <li>Phone:</li>
            <li>Email:</li>
            <li>Address:</li>
          </ul>
        </div>
      </section>
      <section id="map">
        <h2>Visit Us</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.8532092287664!2d-2.96828892313459!3d51.332219723485466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871f8c7dbb4decd%3A0xcdf90b4376839da1!2sFor%20All%20Healthy%20Living%20Centre!5e0!3m2!1sen!2suk!4v1709495151720!5m2!1sen!2suk" width="70%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  )
}
