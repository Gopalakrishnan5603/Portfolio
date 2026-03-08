import styles from "../css/Journey.module.css";

const educationData = [
    {
        year: "2024",
        title: "B.E IN COMPUTER SCIENCE AND ENGINEERING",
        institution: "SSN College of Engineering (Anna University)",
        detail: "CGPA: 7.49",
        side: "left",
    },
    {
        year: "2020",
        title: "HSC EXAMINATION",
        institution: "Nadar Saraswathi Hr. Sec. School, Theni",
        detail: "Percentage: 77%",
        side: "right",
    },
    {
        year: "2018",
        title: "SSLC EXAMINATION",
        institution: "Nadar Saraswathi Hr. Sec. School, Theni",
        detail: "Percentage: 72%",
        side: "left",
    },
];

function Journey() {
    return (
        <section id="journey" className={styles.journeySection}>

            {/* TITLE */}
            <div className={styles.sectionTitle}>
                <h2>EDUCATION JOURNEY</h2>
                <div className={styles.titleUnderline}></div>
            </div>

            {/* TIMELINE */}
            <div className={styles.timeline}>

                {/* CENTER LINE */}
                <div className={styles.centerLine}></div>

                {educationData.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.timelineRow} ${item.side === "right" ? styles.rowRight : styles.rowLeft}`}
                    >
                        {/* LEFT SLOT */}
                        <div className={styles.cardSlot}>
                            {item.side === "left" && (
                                <div className={styles.card}>
                                    <h4 className={styles.cardTitle}>{item.title}</h4>
                                    <p className={styles.cardText}>
                                        <strong>Institution:</strong> {item.institution}
                                    </p>
                                    <p className={styles.cardText}>
                                        <strong>{item.detail.split(":")[0]}:</strong>{item.detail.split(":")[1]}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* YEAR CIRCLE */}
                        <div className={styles.yearCircle}>
                            <span>{item.year}</span>
                        </div>

                        {/* RIGHT SLOT */}
                        <div className={styles.cardSlot}>
                            {item.side === "right" && (
                                <div className={styles.card}>
                                    <h4 className={styles.cardTitle}>{item.title}</h4>
                                    <p className={styles.cardText}>
                                        <strong>Institution:</strong> {item.institution}
                                    </p>
                                    <p className={styles.cardText}>
                                        <strong>{item.detail.split(":")[0]}:</strong>{item.detail.split(":")[1]}
                                    </p>
                                </div>
                            )}
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}

export default Journey;
