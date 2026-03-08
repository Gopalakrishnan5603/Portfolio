import styles from "../css/Home.module.css";
import profileImg from "../assets/Images/MyProfile.jpeg";
import resume from "../assets/documents/Gopalakrishnan_Resume.pdf";

function Home() {
    return (
        <section id="home" className={styles.homeSection}>
            <div className={styles.container}>

                {/* LEFT - TEXT */}
                <div data-aos="fade-up" className={styles.textSide}>
                    <p className={styles.hello}>Hello <span>♥</span></p>

                    <h1 className={styles.name}>I'm Gopala Krishnan</h1>

                    <p className={styles.role}>
                        As a <span className={styles.highlight}>React JS Frontend Developer</span>,
                        I build clean, responsive, and user-friendly web interfaces
                        with 1 year of hands-on experience.
                    </p>

                    <a href={resume} target="_blank" className={styles.cvBtn}>
                        REVIEW CV
                    </a>

                    <p className={styles.desc}>
                        I specialize in crafting modern UIs using React JS, turning
                        ideas into smooth and interactive web experiences.
                    </p>

                    <p className={styles.desc}>
                        I'm open to new opportunities and collaborations —
                        let's connect and build something great together!
                    </p>
                </div>

                {/* RIGHT - IMAGE */}
                <div data-aos="fade-down" className={styles.imageSide}>
                    <div className={styles.blobWrapper}>
                        <img
                            src={profileImg}
                            alt="Gopala Krishnan"
                            className={styles.profileImg}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Home;
