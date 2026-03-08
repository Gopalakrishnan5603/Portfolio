import emailjs from "@emailjs/browser";
import { useState } from "react";
import styles from "../css/Contact.module.css";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState(""); // "sending" | "success" | "error"

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" }); // clear form
            })
            .catch(() => {
                setStatus("error");
            });
    };

    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.sectionTitle}>
                <h2>CONTACT</h2>
                <div className={styles.titleUnderline}></div>
            </div>

            <div className={styles.container}>
                {/* LEFT */}
                <div className={styles.infoSide} data-aos="fade-down">
                    <h3 className={styles.letsTalk}>LET'S WORK TOGETHER!</h3>
                    <p className={styles.introPara}>
                        Contact me at{" "}
                        <a href="mailto:gkrishnan62113@gmail.com" className={styles.emailLink}>
                            gkrishnan62113@gmail.com
                        </a>{" "}
                        for inquiries or collaborations.
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
                            <a href="https://linkedin.com/in/sgopala-krishnan" target="_blank" rel="noreferrer" className={styles.emailLink}>
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

                        {/* STATUS MESSAGES */}
                        {status === "success" && (
                            <p className={styles.successMsg}>
                                ✅ Message sent successfully!
                            </p>
                        )}
                        {status === "error" && (
                            <p className={styles.errorMsg}>
                                ❌ Something went wrong. Please try again.
                            </p>
                        )}

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={status === "sending"}
                        >
                            {status === "sending" ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;