import styles from "../css/About.module.css";
import aboutIllustration from "../assets/Images/aboutIllustration.png";

function About() {
    return (
        <section id="about" className={styles.aboutSection}>

            {/* SECTION TITLE */}
            <div className={styles.sectionTitle} >
                <h2>About <span>Me</span></h2>
                <div className={styles.titleUnderline}></div>
            </div>

            <div className={styles.container}>

                {/* LEFT - ILLUSTRATION */}
                <div className={styles.imageSide} data-aos="fade-up">
                    <div className={styles.imgWrapper}>
                        <img
                            src={aboutIllustration}
                            alt="About Gopala Krishnan"
                            className={styles.illustration}
                        />
                    </div>
                </div>

                {/* RIGHT - CONTENT */}
                <div className={styles.contentSide} data-aos="fade-down">

                    <p className={styles.para}>
                        I'm <strong>Gopala Krishnan</strong>, a passionate <strong>React JS Frontend Developer</strong> and
                        B.E graduate from <strong>SSN College of Engineering</strong> (2024). I love building
                        clean, responsive, and user-friendly web interfaces that make a real impact.
                    </p>

                    <p className={styles.para}>
                        I started my journey as a <strong>Software Development Intern at Sulekha Pvt Ltd</strong> (May – Aug 2024),
                        where I developed login and home pages using HTML, CSS and JavaScript, and worked on
                        both front-end and back-end development using Web APIs.
                    </p>

                    <p className={styles.para}>
                        Currently, I work as a <strong>UI Developer at Maticz Technologies Pvt Ltd</strong> (May 2025 – Present),
                        where I was trusted to independently develop the company's official career and training
                        platform UI from scratch — demonstrating high ownership and front-end expertise
                        recognized by management.
                    </p>

                    <p className={styles.para}>
                        I have contributed to <strong>10+ client projects</strong> including Galfi, Carigato, Kickwin,
                        Lumina, and Make Plays — delivering high-quality, maintainable React JS code that
                        enhanced UI performance, responsiveness, and user experience, earning recognition
                        from clients.
                    </p>

                    <p className={styles.para}>
                        I'm passionate about the <strong>MERN Stack</strong> and constantly pushing myself to learn
                        new technologies. I believe great UI is not just about how it looks — it's about
                        how it works and feels for the user.
                    </p>

                    <p className={styles.para}>
                        Let's collaborate and turn ideas into impactful digital experiences —
                        I'm always ready to bring your vision to life!
                    </p>

                </div>
            </div>
        </section>
    );
}

export default About;
