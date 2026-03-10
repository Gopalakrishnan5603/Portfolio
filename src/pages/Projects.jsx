import styles from "../css/Projects.module.css";
import ecommerce from "../assets/Images/ecommerce.png";
import taskapp from "../assets/Images/taskapp.webp";
import weatherapp from "../assets/Images/weatherapp.webp";

const projects = [
    {
        id: 1,
        title: "E-COMMERCE TECH STORE",
        description:
            "A full-featured e-commerce tech store with product listing, search & filters, product detail pages, shopping cart, and a simple checkout flow.",
        tech: ["React", "Redux", "React Router", "API"],
        features: [
            "Product listing with search & filters",
            "Product detail page",
            "Shopping cart with add/remove",
            "API integration with json-server",
            "Simple checkout page",
        ],
        github: "#",
        demo: "#",
        img: ecommerce,
        status: "done",
    },
    {
        id: 2,
        title: "TASK / PROJECT MANAGEMENT APP",
        description:
            "A user-friendly task management app to organize and track your daily tasks with real-time state updates and persistent storage.",
        tech: ["React", "Hooks", "localStorage", "CSS"],
        features: [
            "Add / Edit / Delete tasks",
            "Mark tasks complete & filter (All / Active / Completed)",
            "Drag & drop tasks between categories",
            "Save tasks in localStorage for persistence",
            "User-friendly responsive UI",
        ],
        github: "#",
        demo: "#",
        img: taskapp,
        status: "done",
    },
    {
        id: 3,
        title: "WEATHER APP",
        description:
            "A modern weather app that shows real-time weather updates and 7-day forecasts with animated UI and GPS location support.",
        tech: ["React", "API", "Hooks", "CSS Animations"],
        features: [
            "Search by city or GPS location",
            "Current weather + 7-day forecast",
            "Display icons based on weather conditions",
            "Temperature unit toggle (Celsius / Fahrenheit)",
            "Modern animated UI",
        ],
        github: "#",
        demo: "#",
        img: weatherapp,
        status: "done",
    },
];

function Projects() {
    return (
        <section id="projects" className={styles.projectsSection}>

            {/* TITLE */}
            <div className={styles.sectionTitle}>
                <h2>PROJECTS</h2>
                <div className={styles.titleUnderline}></div>
            </div>

            {/* CARDS */}
            <div className={styles.container} data-aos="zoom-up">
                {projects.map((project) => (
                    <div key={project.id} className={styles.card}>

                        {/* IMAGE / PLACEHOLDER */}
                        <div className={styles.imgWrapper}>
                            {project.status === "coming-soon" ? (
                                <div className={styles.comingSoon}>
                                    <span>🚀</span>
                                    <p>Coming Soon</p>
                                </div>
                            ) : (
                                <img src={project.img} alt={project.title} className={styles.projectImg} />
                            )}
                        </div>

                        {/* CARD BODY */}
                        <div className={styles.cardBody}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDesc}>{project.description}</p>

                            {/* FEATURES */}
                            {project.features.length > 0 && (
                                <ul className={styles.featureList}>
                                    {project.features.map((f, i) => (
                                        <li key={i} className={styles.featureItem}>✦ {f}</li>
                                    ))}
                                </ul>
                            )}

                            {/* TECH TAGS */}
                            {project.tech.length > 0 && (
                                <div className={styles.techSection}>
                                    <p className={styles.techLabel}>Technologies Used:</p>
                                    <div className={styles.techTags}>
                                        {project.tech.map((t, i) => (
                                            <span key={i} className={styles.tag}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* BUTTONS */}
                            {/* <div className={styles.btnRow}>
                                <a href={project.github} className={styles.btnDark} target="_blank" rel="noreferrer">
                                    View Project
                                </a>
                                <a href={project.demo} className={styles.btnPink} target="_blank" rel="noreferrer">
                                    Demo
                                </a>
                            </div> */}
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
}

export default Projects;