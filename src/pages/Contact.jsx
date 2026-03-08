import styles from "../css/Contact.module.css";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const mailtoLink = `mailto:gkrishnan62113@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className={styles.contactSection}>

            {/* TITLE */}
            <div className={styles.sectionTitle}>
                <h2>CONTACT</h2>
                <div className={styles.titleUnderline}></div>
            </div>

            <div className={styles.container}>

                {/* LEFT - INFO */}
                <div className={styles.infoSide} data-aos="fade-down">
                    <h3 className={styles.letsTalk}>LET'S WORK TOGETHER!</h3>

                    <p className={styles.introPara}>
                        Thank you for visiting my portfolio! Contact me at{" "}
                        <a href="mailto:gkrishnan62113@gmail.com" className={styles.emailLink}>
                            gkrishnan62113@gmail.com
                        </a>{" "}
                        for inquiries or collaborations. Follow me on LinkedIn for updates.
                    </p>

                    <div className={styles.contactDetails}>
                        <div className={styles.detailItem}>
                            <FaEnvelope className={styles.detailIcon} />
                            <span>gkrishnan62113@gmail.com</span>
                        </div>

                        <div className={styles.detailItem}>
                            <FaMapMarkerAlt className={styles.detailIcon} />
                            <span>Theni, Tamil Nadu</span>
                        </div>

                        <div className={styles.detailItem}>
                            <FaLinkedin className={styles.detailIcon} />
                            <a
                                href="https://www.linkedin.com/in/sgopala-krishnan/"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.emailLink}
                            >
                                LinkedIn Profile
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT - FORM */}
                <div className={styles.formSide} data-aos="fade-up">
                    <form className={styles.form} onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className={styles.input}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className={styles.input}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className={styles.textarea}
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit" className={styles.submitBtn}>
                            Submit
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
}

export default Contact;