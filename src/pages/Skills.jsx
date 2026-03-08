import styles from "../css/Skills.module.css";
import { FaCode, FaGlobe, FaCoffee } from "react-icons/fa";

const interests = [
    {
        icon: <FaCode />,
        title: "FRONT END DEVELOPMENT",
        desc: "Frontend development is not just a skill for me; it's a true passion. I love the process of transforming ideas into beautiful, functional websites that users enjoy interacting with.",
    },
    {
        icon: <FaGlobe />,
        title: "WEB DESIGN",
        desc: "I have a strong interest in web design, where aesthetics and user experience seamlessly blend to craft meaningful and engaging online interactions.",
    },
    {
        icon: <FaCoffee />,
        title: "JAVA FULL STACK",
        desc: "I'm passionate about building end-to-end applications using Java, combining robust back-end logic with clean and responsive front-end interfaces.",
    },
];

const technical = [
    { name: "HTML", percent: 90 },
    { name: "CSS", percent: 90 },
    { name: "Bootstrap", percent: 90 },
    { name: "JavaScript", percent: 90 },
    { name: "React Bootstrap", percent: 90 },
    { name: "React JS", percent: 90 },
    { name: "Tailwind CSS", percent: 80 },
    { name: "Git & GitHub", percent: 80 },
    { name: "Java", percent: 80 },
    { name: "Canva", percent: 70 },
];

const interpersonal = [
    { name: "Creativity", stars: 5 },
    { name: "Patience", stars: 5 },
    { name: "Work Ethic", stars: 5 },
    { name: "Team Work", stars: 5 },
    { name: "Adaptability", stars: 5 },
    { name: "Collaboration", stars: 5 },
    // { name: "Responsibility", stars: 5 },
    { name: "Self-Motivation", stars: 5 },
    { name: "Active Listening", stars: 5 },
    // { name: "Learning Agility", stars: 5 },
    // { name: "Positive Attitude", stars: 5 },
    // { name: "Attention to Detail", stars: 5 },
    { name: "Time Management", stars: 5 },
    { name: "Problem Solving", stars: 4 },
    // { name: "Effective Communication", stars: 4 },
];

function StarRating({ count }) {
    return (
        <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className={i <= count ? styles.starFilled : styles.starEmpty}>★</span>
            ))}
        </div>
    );
}

function Skills() {
    return (
        <section id="skills" className={styles.skillsSection}>

            {/* TITLE */}
            <div className={styles.sectionTitle}>
                <h2>SKILLS</h2>
                <div className={styles.titleUnderline}></div>
            </div>

            <div className={styles.container}>

                {/* COLUMN 1 - INTERESTS */}
                <div className={styles.column} data-aos="zoom-in">
                    <h3 className={styles.columnTitle}>INTERESTS</h3>
                    <div className={styles.interestList}>
                        {interests.map((item, i) => (
                            <div key={i} className={styles.interestCard}>
                                <div className={styles.interestHeader}>
                                    <span className={styles.interestIcon}>{item.icon}</span>
                                    <h4 className={styles.interestTitle}>{item.title}</h4>
                                </div>
                                <p className={styles.interestDesc}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* COLUMN 2 - TECHNICAL */}
                <div className={styles.column} data-aos="zoom-in">
                    <h3 className={styles.columnTitle}>TECHNICAL</h3>
                    <div className={styles.techList}>
                        {technical.map((skill, i) => (
                            <div key={i} className={styles.techItem}>
                                <div className={styles.techLabelRow}>
                                    <span className={styles.techName}>{skill.name}</span>
                                    <span className={styles.techPercent}>{skill.percent}%</span>
                                </div>
                                <div className={styles.progressBar}>
                                    <div
                                        className={styles.progressFill}
                                        style={{ width: `${skill.percent}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* COLUMN 3 - INTERPERSONAL */}
                <div className={styles.column} data-aos="zoom-in">
                    <h3 className={styles.columnTitle}>INTERPERSONAL</h3>
                    <div className={styles.interPersonalList}>
                        {interpersonal.map((item, i) => (
                            <div key={i} className={styles.interPersonalItem}>
                                <span className={styles.interPersonalName}>{item.name}</span>
                                <StarRating count={item.stars} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills;